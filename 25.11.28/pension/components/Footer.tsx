import React from 'react';
import { APP_NAME } from '../constants';
import { Mountain, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-brand-400 py-12 px-4 border-t border-brand-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Mountain className="h-6 w-6 text-accent-600" />
            <span className="text-xl font-serif font-bold text-brand-100 tracking-widest">
              {APP_NAME}
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            산과 바다가 만나는 곳,<br/>
            당신의 가장 완벽한 휴식이 기다리고 있습니다.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent-500 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li>강원도 산속 어딘가, 오션뷰 1번지</li>
            <li>+82 10-1234-5678</li>
            <li>concierge@celestiacliffside.com</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#rooms" className="hover:text-white transition-colors">Rooms & Suites</a></li>
            <li><a href="#amenities" className="hover:text-white transition-colors">Dining & Amenities</a></li>
            <li><a href="#offers" className="hover:text-white transition-colors">Special Offers</a></li>
            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-brand-900 text-center text-xs text-brand-600">
        &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};
