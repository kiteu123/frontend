import React from 'react';
import { ShoppingBag, MapPin, BookOpen, Headset } from 'lucide-react';

const SupportCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-gray-50 p-8 rounded-lg flex items-start justify-between hover:bg-white hover:shadow-lg transition-all cursor-pointer group h-full">
    <div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
    <div className="text-blue-500 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
        {React.cloneElement(icon as React.ReactElement<any>, { size: 40 })}
    </div>
  </div>
);

const SupportLinks: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SupportCard 
            icon={<ShoppingBag />}
            title="구매 문의"
            desc="로봇 도입을 고민하고 계신가요? 전문가에게 1:1 상담을 받아보세요."
          />
          <SupportCard 
            icon={<MapPin />}
            title="가까운 대리점 찾기"
            desc="고객님에게 가장 가까운 대리점을 안내해 드립니다."
          />
          <SupportCard 
            icon={<BookOpen />}
            title="두산 로봇 교육"
            desc="단계별 온/오프라인 교육으로 로봇 운용 능력을 향상시켜보세요."
          />
          <SupportCard 
            icon={<Headset />}
            title="A/S 신청"
            desc="로봇 전문가가 365일 고객님의 A/S를 지원합니다."
          />
        </div>
      </div>
    </section>
  );
};

export default SupportLinks;