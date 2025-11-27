import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    "DIOR", "dyson", "Continental", "MAHLE", "HYUNDAI", "TOYOTA", "SAMSUNG C&T", "LG Electronics", "LANCOME"
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden flex flex-col justify-center min-h-[500px]">
      {/* Abstract Earth Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-900/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-screen" />
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 w-full">
        <div className="mb-16">
          <p className="text-gray-400 text-sm font-bold mb-4 uppercase">Our Clients</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            전 세계 50개국 리딩 기업들이 <br />
            두산 로봇 도입으로 생산성을 높이고, <br />
            비용을 절감했습니다.
          </h2>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, idx) => (
            <div key={idx} className="text-xl md:text-2xl font-serif text-white/70 hover:text-white transition-colors cursor-default">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;