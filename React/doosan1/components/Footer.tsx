import React from 'react';
import { Youtube, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 text-sm">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-16">
          
          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full md:w-2/3">
            <div>
              <h4 className="font-bold mb-4">제품 & 솔루션</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">헤리티지</a></li>
                <li><a href="#" className="hover:text-white">제품</a></li>
                <li><a href="#" className="hover:text-white">솔루션</a></li>
                <li><a href="#" className="hover:text-white">소프트웨어</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">교육 & 서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">교육</a></li>
                <li><a href="#" className="hover:text-white">다운로드 센터</a></li>
                <li><a href="#" className="hover:text-white">서비스 센터</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">투자정보</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">IR 자료실</a></li>
                <li><a href="#" className="hover:text-white">거버넌스</a></li>
                <li><a href="#" className="hover:text-white">보고서</a></li>
                <li><a href="#" className="hover:text-white">공고/공시</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">회사소개</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">기업정보</a></li>
                <li><a href="#" className="hover:text-white">지속가능경영</a></li>
                <li><a href="#" className="hover:text-white">뉴스 & 이벤트</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Related Sites Dropdown & Utility */}
          <div className="mt-10 md:mt-0 w-full md:w-1/3 flex flex-col items-start md:items-end">
            <div className="relative mb-6 w-full max-w-xs">
                <button className="w-full flex justify-between items-center border border-gray-600 px-4 py-2 rounded text-gray-300 hover:border-white transition-colors">
                    <span>Related Sites</span>
                    <span className="text-xs">▼</span>
                </button>
            </div>
            <div className="text-right space-y-1 text-gray-400 text-xs">
                <p><a href="#" className="hover:text-white font-bold text-white">커리어 두산 ↗</a></p>
                <p><a href="#" className="hover:text-white">법적고지</a></p>
                <p><a href="#" className="hover:text-white">이용약관</a></p>
                <p><a href="#" className="hover:text-white font-bold text-white">개인정보처리방침</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <span className="text-2xl font-black tracking-tighter italic mr-4">DOOSAN</span>
                <span className="text-gray-500 text-xs">© 2025 두산로보틱스(주).</span>
            </div>
            
            <div className="flex items-center space-x-6">
                <div className="flex space-x-4">
                    <Linkedin size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                    <Youtube size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                    <Instagram size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                    <Facebook size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gray-800 p-3 rounded shadow-lg hover:bg-gray-700 transition-colors z-50 text-white"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;