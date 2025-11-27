import React, { useState, useEffect, useRef } from "react";
import { Globe, Search, Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.getElementById(id);
      if (!target) return;
      const navHeight = navRef.current?.offsetHeight ?? 72;
      const top =
        target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
      setMobileMenuOpen(false);
    };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-2xl font-black tracking-tighter italic">
            DOOSAN
          </span>
        </div>

        {/* Desktop Links - Center */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <a
            href="#products"
            className="hover:text-doosan-light transition-colors"
            onClick={scrollToSection("products")}
          >
            제품 & 솔루션
          </a>
          <a
            href="#services"
            className="hover:text-doosan-light transition-colors"
            onClick={scrollToSection("services")}
          >
            교육 & 서비스
          </a>
          <a
            href="#investor"
            className="hover:text-doosan-light transition-colors"
            onClick={scrollToSection("investor")}
          >
            투자정보
          </a>
          <a
            href="#about"
            className="hover:text-doosan-light transition-colors"
            onClick={scrollToSection("about")}
          >
            회사소개
          </a>
        </div>

        {/* Right Utilities */}
        <div className="hidden lg:flex items-center space-x-6 text-xs font-light">
          <div className="flex items-center space-x-4 border-r border-slate-600 pr-6">
            <a
              href="#as"
              onClick={scrollToSection("as")}
              className="border border-slate-500 px-3 py-1 rounded hover:bg-white hover:text-slate-900 transition-colors"
            >
              A/S 신청
            </a>
            <a
              href="#partner"
              onClick={scrollToSection("partner")}
              className="border border-slate-500 px-3 py-1 rounded hover:bg-white hover:text-slate-900 transition-colors"
            >
              파트너 서비스 ↗
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center hover:text-gray-300">
              <Globe size={18} className="mr-1" />
              <ChevronDown size={14} />
            </button>
            <button className="hover:text-gray-300">두산로보틱스</button>
            <Search size={20} className="cursor-pointer hover:text-gray-300" />
            <Menu size={24} className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 text-white p-6 shadow-xl border-t border-slate-700">
          <div className="flex flex-col space-y-4 font-bold text-lg">
            <a
              href="#products"
              onClick={scrollToSection("products")}
              className="hover:text-blue-400"
            >
              제품 & 솔루션
            </a>
            <a
              href="#services"
              onClick={scrollToSection("services")}
              className="hover:text-blue-400"
            >
              교육 & 서비스
            </a>
            <a
              href="#investor"
              onClick={scrollToSection("investor")}
              className="hover:text-blue-400"
            >
              투자정보
            </a>
            <a
              href="#about"
              onClick={scrollToSection("about")}
              className="hover:text-blue-400"
            >
              회사소개
            </a>
            <hr className="border-slate-700" />
            <a
              href="#as"
              onClick={scrollToSection("as")}
              className="text-sm font-normal"
            >
              A/S 신청
            </a>
            <a
              href="#partner"
              onClick={scrollToSection("partner")}
              className="text-sm font-normal"
            >
              파트너 서비스
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
