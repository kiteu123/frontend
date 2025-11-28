import React, { useState, useEffect } from 'react';
import { SLOGANS, CTA_TEXT } from '../constants';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSloganIndex((prev) => (prev + 1) % SLOGANS.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-brand-900">
        <img 
          src="https://picsum.photos/id/1015/1920/1080" 
          alt="Cliffside view" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-accent-500 tracking-[0.3em] text-sm md:text-base font-bold mb-6 uppercase animate-fade-in">
          Luxury Private Villa
        </h2>
        
        <h1 
          className={`text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-4xl transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          {SLOGANS[currentSloganIndex]}
        </h1>

        <div className="mt-12 group">
          <button 
            onClick={onCtaClick}
            className="flex items-center gap-2 px-8 py-4 border border-white text-white hover:bg-white hover:text-brand-900 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
          >
            {CTA_TEXT}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-white/30 mx-auto"></div>
      </div>
    </div>
  );
};
