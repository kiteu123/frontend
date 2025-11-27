import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')`,
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          AI-Powered Robot Solutions <br /> for a Better Life
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide">
          Innovation in every motion, revolutionizing the way we work <br className="hidden md:block"/>
          두산 로봇과 함께 상상을 실현해 보세요
        </p>
        
        <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 font-medium">
          두산 로봇과 함께 상상을 실현해 보세요
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Scroll indicator (optional aesthetic touch) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;