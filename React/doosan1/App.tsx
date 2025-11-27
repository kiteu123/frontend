import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UseCases from "./components/UseCases";
import Clients from "./components/Clients";
import Solutions from "./components/Solutions";
import ProductLineup from "./components/ProductLineup";
import SocialMedia from "./components/SocialMedia";
import SupportLinks from "./components/SupportLinks";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Hero (top) */}
      <Hero />

      {/* Products: UseCases + ProductLineup */}
      <section id="products" className="scroll-mt-24">
        <UseCases />
        <ProductLineup />
      </section>

      {/* Investor */}
      <section id="investor" className="scroll-mt-24">
        <Clients />
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24">
        <Solutions />
      </section>

      {/* Partner */}
      <section id="partner" className="scroll-mt-24">
        <SocialMedia />
      </section>

      {/* A/S (Support Links) */}
      <section id="as" className="scroll-mt-24">
        <SupportLinks />
      </section>

      {/* About (회사소개) */}
      <section id="about" className="scroll-mt-24">
        <Footer />
      </section>
    </div>
  );
};

export default App;
