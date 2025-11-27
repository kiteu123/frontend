import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionSectionProps {
  category: string;
  title: string;
  description: string;
  image: string;
  imageOnRight?: boolean;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ category, title, description, image, imageOnRight }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Mobile: Image always first, Desktop: alternates */}
      <div className={`relative h-96 lg:h-auto ${imageOnRight ? 'lg:order-2' : 'lg:order-1'}`}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className={`flex flex-col justify-center p-12 lg:p-24 bg-white ${imageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
        <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded-full w-fit mb-6">
          {category}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">{title}</h2>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
          {description}
        </p>
        <a href="#" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
          VIEW MORE <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  return (
    <section className="border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 py-10 flex justify-between items-center">
        <h3 className="font-bold text-slate-900">Solutions</h3>
        <a href="#" className="flex items-center text-sm text-gray-500 hover:text-slate-900">
          전체 솔루션 보기 <ArrowRight size={14} className="ml-1" />
        </a>
      </div>
      
      <div className="max-w-[1600px] mx-auto">
        <SolutionSection
          category="서비스"
          title="Dr. Presso"
          description="탁월한 안전성과 편의성을 자랑하는 두산로보틱스의 국내 1위 협동로봇이 최고급 커피머신과 만나 전문 커피숍에 버금가는 양질의 서비스를 제공하며, 객관적인 인터페이스로 손쉬운 유지보수가 가능합니다."
          image="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=1000&auto=format&fit=crop"
          imageOnRight={true}
        />
        <SolutionSection
          category="산업용"
          title="Palletizing"
          description="팔레타이징 솔루션은 다양한 작업 환경에서 무거운 물건을 적재하는 작업을 자동화하여 생산 효율성을 극대화합니다. 직관적인 설정과 강력한 퍼포먼스를 경험하세요."
          image="https://images.unsplash.com/photo-1589792923962-537704632910?q=80&w=1000&auto=format&fit=crop"
          imageOnRight={false}
        />
        <SolutionSection
          category="교육"
          title="Training Kit"
          description="두산로보틱스 교육 키트는 여러분이 인증된 협동로봇 엔지니어가 될 수 있는 기회를 제공합니다. 협동로봇을 직접 티칭하고 어떻게 작업자와 협업 할 수 있는지 이해할 수 있는 첫번째 단계입니다."
          image="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop"
          imageOnRight={true}
        />
      </div>
    </section>
  );
};

export default Solutions;