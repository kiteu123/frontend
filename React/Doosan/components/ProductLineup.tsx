import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProductCard: React.FC<{ title: string; subtitle: string; models: string[]; image: string }> = ({ title, subtitle, models, image }) => (
  <div className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors group cursor-pointer border border-slate-700">
    <div className="h-48 mb-6 flex items-center justify-center">
        {/* Placeholder for Robot Arm transparent PNG */}
        <div className="relative w-full h-full">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
            />
        </div>
    </div>
    <div className="mb-2">
        <span className="text-gray-400 text-xs font-semibold uppercase">{subtitle}</span>
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
        최고사양을 고집한 프리미엄 협동로봇, {title} 시리즈
    </p>
    <div className="flex flex-wrap gap-2">
      {models.map(m => (
        <span key={m} className="px-2 py-1 bg-slate-900 text-blue-400 text-xs rounded border border-slate-600">
          {m}
        </span>
      ))}
    </div>
  </div>
);

const ProductLineup: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 text-[20rem] font-bold text-white/5 pointer-events-none leading-none select-none">
            DOOSA
        </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-gray-400 font-bold mb-2 uppercase">Products</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            전 세계 최대 규모의 <br />
            Cobot 라인업
          </h2>
          
          {/* Category Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {['Prime', 'High-Power', 'Masterpiece', 'Agile'].map((tab, idx) => (
                 <div key={idx} className="bg-white rounded-lg p-4 h-32 flex items-center justify-center cursor-pointer hover:shadow-lg transition-all relative overflow-hidden group">
                     <img 
                        src={`https://picsum.photos/seed/robot${idx}/200/200`} 
                        className="absolute w-24 h-24 object-contain opacity-80 group-hover:scale-110 transition-transform" 
                        alt={tab}
                    />
                     <span className="relative z-10 mt-auto text-sm font-semibold text-slate-900 w-full text-left">{tab}</span>
                 </div>
             ))}
          </div>
        </div>

        {/* Detailed List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
                title="M-SERIES" 
                subtitle="Masterpiece" 
                models={['M1509', 'M1013', 'M0617', 'M0609']}
                image="https://images.unsplash.com/photo-1563725627707-160b73b22e4c?q=80&w=500&auto=format&fit=crop" // Abstract tech image representing arm
            />
            <ProductCard 
                title="A-SERIES" 
                subtitle="Agile" 
                models={['A0912S', 'A0912', 'A0509S', 'A0509']}
                image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=500&auto=format&fit=crop"
            />
            <ProductCard 
                title="E-SERIES" 
                subtitle="Edge" 
                models={['E0509']}
                image="https://images.unsplash.com/photo-1555662059-3b6805186b43?q=80&w=500&auto=format&fit=crop"
            />
        </div>
        
        <div className="mt-12 text-right">
             <a href="#" className="inline-flex items-center text-white border border-gray-600 rounded-full px-6 py-3 hover:bg-white hover:text-slate-900 transition-colors">
                 전체 라인업 보기 <ChevronRight size={16} className="ml-2"/>
             </a>
        </div>
      </div>
    </section>
  );
};

export default ProductLineup;