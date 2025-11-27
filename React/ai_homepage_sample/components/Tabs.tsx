import React from 'react';

const Tabs: React.FC = () => {
  const tabs = [
    { name: '문의 안내', active: false },
    { name: '제품 및 솔루션 문의', active: true },
    { name: '파트너십 문의', active: false },
    { name: '일반 문의', active: false },
  ];

  return (
    <div className="w-full border-b border-gray-200 mb-12">
      <div className="flex flex-wrap w-full">
        {tabs.map((tab, index) => (
          <div 
            key={index}
            className={`
              flex-1 text-center py-4 cursor-pointer text-sm md:text-base font-medium transition-all min-w-[140px]
              ${tab.active 
                ? 'text-black border-b-2 border-black' 
                : 'text-gray-400 border-b border-gray-200 hover:text-gray-600'}
            `}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;