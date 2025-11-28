import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, User, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '안녕하세요, 고객님. Celestia Cliffside의 AI 컨시어지입니다. 무엇을 도와드릴까요?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const botMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (e) {
      console.error(e);
      // Error handling is inside service, but we can add a fallback here
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col border border-brand-200 animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 text-accent-500 mr-2" />
              <div>
                <h3 className="font-serif font-bold text-sm">Celestia Concierge</h3>
                <p className="text-xs text-brand-300">Always here to help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-brand-300 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-brand-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-800 text-white rounded-br-none' 
                      : 'bg-white border border-brand-200 text-brand-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-brand-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-accent-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-brand-100">
            <div className="flex items-center bg-brand-50 rounded-full px-4 py-2 border border-brand-200 focus-within:border-brand-400 focus-within:ring-1 focus-within:ring-brand-400 transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="질문을 입력하세요..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-brand-900 placeholder-brand-400"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="ml-2 text-brand-600 hover:text-accent-600 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-900 hover:bg-brand-800 text-accent-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};
