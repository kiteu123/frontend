import React from 'react';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <img 
              src="https://picsum.photos/800/600" 
              alt="Team working together" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-indigo-600 font-bold uppercase tracking-wider mb-2">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              We help businesses grow through digital innovation
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded in 2023, ModernWeb has helped over 100 companies transform their digital presence. We focus on clean code, user-centric design, and scalable architecture to ensure your business stays ahead of the curve.
            </p>
            <div className="space-y-4">
              {[
                "Award-winning development team",
                "24/7 Support and maintenance",
                "Agile methodology implementation"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-indigo-500 h-6 w-6 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};