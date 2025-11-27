import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import Clients from './components/Clients';
import Solutions from './components/Solutions';
import ProductLineup from './components/ProductLineup';
import SocialMedia from './components/SocialMedia';
import SupportLinks from './components/SupportLinks';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <UseCases />
      <Clients />
      <Solutions />
      <ProductLineup />
      <SocialMedia />
      <SupportLinks />
      <Footer />
    </div>
  );
};

export default App;