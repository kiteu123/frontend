import React from 'react';
import { X, Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <Calendar className="w-12 h-12 text-accent-600 mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-brand-900 mb-2">Reserve Your Stay</h3>
          <p className="text-brand-500 text-sm">가장 완벽한 날을 선택하세요.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("예약 시스템 데모입니다."); onClose(); }}>
          <div>
            <label className="block text-xs font-bold uppercase text-brand-600 mb-1">Check-in</label>
            <input type="date" className="w-full border border-brand-200 p-2 rounded focus:border-accent-500 outline-none" required />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-brand-600 mb-1">Check-out</label>
            <input type="date" className="w-full border border-brand-200 p-2 rounded focus:border-accent-500 outline-none" required />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-brand-600 mb-1">Guests</label>
            <select className="w-full border border-brand-200 p-2 rounded focus:border-accent-500 outline-none">
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-brand-600 mb-1">Room Type</label>
            <select className="w-full border border-brand-200 p-2 rounded focus:border-accent-500 outline-none">
              <option>Sunrise Suite</option>
              <option>Moonlight Villa</option>
            </select>
          </div>
          
          <button type="submit" className="w-full bg-brand-900 text-white py-3 mt-4 uppercase tracking-widest font-bold hover:bg-brand-800 transition-colors">
            Check Availability
          </button>
        </form>
      </div>
    </div>
  );
};
