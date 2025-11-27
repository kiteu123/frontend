import React from 'react';
import { Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';

const SocialCard: React.FC<{ type: 'insta' | 'youtube' | 'fb' | 'linkedin', img: string }> = ({ type, img }) => {
    const iconMap = {
        insta: <Instagram size={16} />,
        youtube: <Youtube size={16} />,
        fb: <Facebook size={16} />,
        linkedin: <Linkedin size={16} />
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-200 relative">
                <img src={img} alt="Social" className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-white p-1.5 rounded-full text-slate-900">
                    {iconMap[type]}
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-900" />
                    <span className="text-xs font-bold text-slate-800">Doosan Robotics</span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">
                    Discover how our collaborative robots are changing the landscape of automation...
                </p>
            </div>
        </div>
    )
}

const SocialMedia: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="mb-10">
          <p className="text-sm font-bold text-gray-500 mb-2 uppercase">Social Media</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            두산로보틱스의 혁신적인 기술과 <br />
            소식을 만나보세요.
          </h2>
          <div className="flex space-x-4 text-gray-400">
             <Linkedin className="hover:text-blue-700 cursor-pointer" />
             <Youtube className="hover:text-red-600 cursor-pointer" />
             <Instagram className="hover:text-pink-600 cursor-pointer" />
             <Facebook className="hover:text-blue-600 cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[1,2,3,4,5].map((i) => (
                <SocialCard 
                    key={i} 
                    type={i % 2 === 0 ? 'youtube' : 'insta'} 
                    img={`https://picsum.photos/seed/social${i}/300/200`} 
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;