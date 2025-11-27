import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-2">궁금하신 점을 남겨주시면</h2>
            <h2 className="text-2xl md:text-3xl font-bold">담당자가 빠른 시간 내에 연락 드리겠습니다.</h2>
          </div>
          
          <InquiryForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;