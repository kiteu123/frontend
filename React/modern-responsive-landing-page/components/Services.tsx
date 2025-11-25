import React from 'react';
import { Code, Smartphone, BarChart3, Cloud, Shield, Zap } from 'lucide-react';

const SERVICES = [
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: "Web Development",
    description: "Custom websites built with the latest technologies like React and TypeScript."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-white" />,
    title: "Mobile Apps",
    description: "Responsive and native mobile applications for iOS and Android platforms."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Digital Marketing",
    description: "Data-driven strategies to increase your visibility and drive conversion."
  },
  {
    icon: <Cloud className="h-8 w-8 text-white" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure setup and management for growing businesses."
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Cyber Security",
    description: "Protecting your digital assets with advanced security protocols and audits."
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Optimization",
    description: "Speed optimization and SEO services to rank higher in search results."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="service" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 text-lg">
            We offer a comprehensive suite of digital services designed to take your business to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-slate-100"
            >
              <div className="h-14 w-14 rounded-xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};