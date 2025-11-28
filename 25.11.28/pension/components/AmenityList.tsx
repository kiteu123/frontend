import React from 'react';
import { AMENITIES } from '../constants';
import { Waves, UtensilsCrossed, Coffee, Moon, Sparkles, Camera } from 'lucide-react';

const iconMap = {
  'Pool': Waves,
  'Utensils': UtensilsCrossed,
  'Coffee': Coffee,
  'Moon': Moon,
  'Sparkles': Sparkles,
  'Camera': Camera
};

export const AmenityList: React.FC = () => {
  return (
    <div className="py-24 bg-brand-900 text-brand-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-accent-500 font-bold tracking-widest uppercase text-sm mb-3">Exclusive Services</h2>
          <h3 className="text-4xl font-serif text-white">Amenities & Experiences</h3>
          <p className="mt-4 text-brand-200 max-w-2xl mx-auto">
            단순한 투숙을 넘어 감동이 되는 순간들. 셀레스티아만의 특별한 서비스를 경험해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((amenity) => {
            const Icon = iconMap[amenity.iconName];
            return (
              <div key={amenity.id} className="group bg-brand-800 p-8 hover:bg-brand-700 transition-all duration-300">
                <div className="mb-6 overflow-hidden h-48 w-full">
                   <img src={amenity.imageUrl} alt={amenity.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-accent-500 mr-3" />
                  <h4 className="text-xl font-serif font-medium">{amenity.title}</h4>
                </div>
                <p className="text-brand-300 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
