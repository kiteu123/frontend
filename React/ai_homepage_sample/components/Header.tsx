import React, { useState, useEffect } from 'react';
import { Globe, Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-3' : 'bg-transparent py-5'} text-white`}>
      <div className="container mx-auto px-6 max-w-[1400px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter italic mr-2">DOOSAN</a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-gray-300 transition-colors">제품 & 솔루션</a>
          <a href="#" className="hover:text-gray-300 transition-colors">교육 & 서비스</a>
          <a href="#" className="hover:text-gray-300 transition-colors">투자정보</a>
          <a href="#" className="hover:text-gray-300 transition-colors">회사소개</a>
        </nav>

        {/* Utilities */}
        <div className="flex items-center space-x-4 text-xs font-medium">
          <a href="#" className="hidden lg:block border border-gray-500 px-3 py-1.5 rounded hover:bg-white hover:text-black transition-colors">A/S 신청</a>
          <a href="#" className="hidden lg:block border border-gray-500 px-3 py-1.5 rounded hover:bg-white hover:text-black transition-colors">파트너 서비스 <span className="text-[10px]">↗</span></a>
          
          <button className="flex items-center space-x-1 hover:text-gray-300">
            <Globe size={18} />
            <span className="hidden sm:inline">▼</span>
          </button>
          
          <div className="hidden sm:block">두산로보틱스</div>
          
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;