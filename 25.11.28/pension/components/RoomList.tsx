import React from 'react';
import { ROOMS } from '../constants';
import { Check } from 'lucide-react';

export const RoomList: React.FC = () => {
  return (
    <div className="py-24 bg-brand-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-3">Accommodations</h2>
          <h3 className="text-4xl font-serif text-brand-900">Rooms & Suites</h3>
          <p className="mt-4 text-brand-600 max-w-2xl mx-auto">
            자연과 가장 가까운 곳에서 누리는 완벽한 프라이빗 휴식. 당신의 취향에 맞는 공간을 선택하세요.
          </p>
        </div>

        <div className="space-y-24">
          {ROOMS.map((room, index) => (
            <div key={room.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="w-full lg:w-1/2 overflow-hidden shadow-2xl">
                <img 
                  src={room.imageUrl} 
                  alt={room.name} 
                  className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 lg:px-6">
                <h4 className="text-accent-600 font-medium tracking-wider mb-2">{room.tagline}</h4>
                <h3 className="text-3xl font-serif text-brand-900 mb-6">{room.name}</h3>
                <p className="text-brand-600 leading-relaxed mb-8 text-justify">
                  {room.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-brand-700">
                      <Check className="w-4 h-4 text-accent-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-brand-200 pt-6">
                  <span className="text-xl font-serif text-brand-900">{room.price}</span>
                  <button className="px-6 py-3 bg-brand-900 text-white text-xs uppercase tracking-widest hover:bg-brand-800 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
