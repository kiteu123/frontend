import React from 'react';
import { ChevronDown } from 'lucide-react';

interface CaseCardProps {
  image: string;
  category: string;
  color: string;
  title: string;
  subtitle: string;
  isWide?: boolean;
}

const CaseCard: React.FC<CaseCardProps> = ({ image, category, color, title, subtitle, isWide }) => (
  <div className={`group relative overflow-hidden bg-white shadow-md cursor-pointer h-64 ${isWide ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url('${image}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
    
    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className={`px-2 py-0.5 text-xs font-bold uppercase tracking-wider border ${color}`}>
            {category}
        </span>
        <span className="text-xs text-gray-300">{subtitle}</span>
      </div>
      <h3 className="text-xl font-bold leading-tight">{title}</h3>
    </div>
  </div>
);

const UseCases: React.FC = () => {
  const cases = [
    {
      title: "레이저 로봇 용접",
      subtitle: "Cobot Solution",
      category: "제조",
      color: "border-blue-400 text-blue-400",
      image: "https://images.unsplash.com/photo-1631549118585-70334814d45d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sanding (샌딩)",
      subtitle: "Cobot Solution",
      category: "제조",
      color: "border-blue-400 text-blue-400",
      image: "https://images.unsplash.com/photo-1565153907400-7e01a9ab25f3?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "공작기계 보조 작업",
      subtitle: "두산 M0617",
      category: "제조",
      color: "border-blue-400 text-blue-400",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "DR.PRESSO",
      subtitle: "Food Tech",
      category: "서비스",
      color: "border-green-400 text-green-400",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "학교 단체급식 튀김로봇",
      subtitle: "Food Tech",
      category: "서비스",
      color: "border-green-400 text-green-400",
      image: "https://images.unsplash.com/photo-1586546377312-70b19688c226?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Test met bagagerobot",
        subtitle: "Airport Handling",
        category: "서비스",
        color: "border-green-400 text-green-400",
        image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Yves Saint Laurent",
      subtitle: "입생로랑 팝업 스토어",
      category: "이벤트 & 전시",
      color: "border-purple-400 text-purple-400",
      image: "https://images.unsplash.com/photo-1550929559-00632a487961?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "DIOR SEONGSU X VINA",
      subtitle: "디올 사진촬영 이벤트",
      category: "이벤트 & 전시",
      color: "border-purple-400 text-purple-400",
      image: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Use cases</p>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                로봇 도입으로 일하는 방식이 새로워집니다.
              </h2>
              <p className="text-gray-600">
                <a href="#" className="text-blue-600 font-semibold hover:underline">다양한 성공사례</a>를 통해 일터를 혁신할 새로운 아이디어를 얻어보세요.
              </p>
            </div>
            <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded hover:bg-white transition-colors text-sm font-medium">
              더 많은 도입사례 <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <CaseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;