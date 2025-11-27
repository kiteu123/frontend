import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin, ChevronDown, MapPin, Download, Headset, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-gray-400 text-xs py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">제품 & 솔루션</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">헤리티지</a></li>
              <li><a href="#" className="hover:text-white">제품</a></li>
              <li><a href="#" className="hover:text-white">솔루션</a></li>
              <li><a href="#" className="hover:text-white">소프트웨어 <span className="text-[10px]">↗</span></a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">교육 & 서비스</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">교육</a></li>
              <li><a href="#" className="hover:text-white">다운로드 센터</a></li>
              <li><a href="#" className="hover:text-white">서비스 센터</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">투자정보</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">IR 자료실</a></li>
              <li><a href="#" className="hover:text-white">거버넌스</a></li>
              <li><a href="#" className="hover:text-white">보고서</a></li>
              <li><a href="#" className="hover:text-white">공고/공시</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">회사소개</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">기업정보</a></li>
              <li><a href="#" className="hover:text-white">지속가능경영</a></li>
              <li><a href="#" className="hover:text-white">뉴스 & 이벤트</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 5 - Dropdown */}
          <div className="md:col-span-4 lg:col-span-1">
            <div className="relative inline-block text-left w-full">
               <button className="flex items-center justify-between w-full bg-[#222] text-white px-4 py-2 text-xs border border-[#333]">
                 Related Sites
                 <ChevronDown size={14} />
               </button>
            </div>
            
            <div className="mt-8 text-right space-y-2">
                <a href="#" className="block hover:text-white">커리어 두산 <span className="text-[10px]">↗</span></a>
                <a href="#" className="block hover:text-white">법적고지</a>
                <a href="#" className="block hover:text-white">이용약관</a>
                <a href="#" className="block font-bold text-white">개인정보처리방침</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
             <span className="text-xl font-bold italic text-white mr-4">DOOSAN</span>
             <span>© 2025 두산로보틱스(주).</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
      
      {/* Floating Side Menu (Simulated) */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-1 pr-2 hidden xl:flex">
          <button className="w-12 h-12 bg-[#005EB8] text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
             <Download size={20} />
          </button>
           <button className="w-12 h-12 bg-white text-gray-700 flex items-center justify-center shadow-lg hover:text-blue-600 transition">
             <MapPin size={20} />
          </button>
           <button className="w-12 h-12 bg-white text-gray-700 flex items-center justify-center shadow-lg hover:text-blue-600 transition">
             <Headset size={20} />
          </button>
           <button className="w-12 h-12 bg-white text-gray-700 flex items-center justify-center shadow-lg hover:text-blue-600 transition">
             <MessageCircle size={20} />
          </button>
      </div>
    </footer>
  );
};

export default Footer;