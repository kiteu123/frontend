import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { APP_NAME } from '../constants';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-brand-900/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
  }`;

  const linkClass = (page: string) => `
    cursor-pointer text-sm font-medium tracking-widest transition-colors duration-200 uppercase
    ${currentPage === page ? 'text-accent-500' : 'text-brand-50 hover:text-accent-500'}
  `;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <Mountain className="h-8 w-8 text-accent-500" />
            <span className={`text-xl font-serif font-bold tracking-widest ${isScrolled ? 'text-white' : 'text-white'}`}>
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <button onClick={() => onNavigate('home')} className={linkClass('home')}>Home</button>
            <button onClick={() => onNavigate('rooms')} className={linkClass('rooms')}>Rooms</button>
            <button onClick={() => onNavigate('amenities')} className={linkClass('amenities')}>Amenities</button>
            <button onClick={() => onNavigate('reservation')} className="px-6 py-2 bg-accent-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-500 transition-colors">
              Reservation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-900 border-t border-brand-800 animate-fade-in-down">
          <div className="flex flex-col space-y-4 px-6 py-8">
            <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className={linkClass('home')}>Home</button>
            <button onClick={() => { onNavigate('rooms'); setMobileMenuOpen(false); }} className={linkClass('rooms')}>Rooms</button>
            <button onClick={() => { onNavigate('amenities'); setMobileMenuOpen(false); }} className={linkClass('amenities')}>Amenities</button>
            <button onClick={() => { onNavigate('reservation'); setMobileMenuOpen(false); }} className="text-accent-500 font-bold uppercase text-sm">Reservation</button>
          </div>
        </div>
      )}
    </nav>
  );
};
