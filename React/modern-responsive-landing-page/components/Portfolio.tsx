import React from 'react';

const PROJECTS = [
  { id: 1, category: "Web Design", image: "https://picsum.photos/id/1/600/400" },
  { id: 2, category: "Mobile App", image: "https://picsum.photos/id/119/600/400" },
  { id: 3, category: "Branding", image: "https://picsum.photos/id/20/600/400" },
  { id: 4, category: "Development", image: "https://picsum.photos/id/180/600/400" },
  { id: 5, category: "Product", image: "https://picsum.photos/id/133/600/400" },
  { id: 6, category: "Marketing", image: "https://picsum.photos/id/106/600/400" },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Work</h2>
          <p className="text-slate-600 text-lg">Explore our most recent projects and creative outputs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl cursor-pointer">
              <img 
                src={project.image} 
                alt={`Project ${project.id}`} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-indigo-300 font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</span>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Project Title {project.id}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};