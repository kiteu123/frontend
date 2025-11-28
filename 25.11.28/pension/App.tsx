import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomList } from './components/RoomList';
import { AmenityList } from './components/AmenityList';
import { ChatConcierge } from './components/ChatConcierge';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page === 'reservation') {
      setIsBookingOpen(true);
      return;
    }
    
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-brand-900 bg-brand-50 min-h-screen selection:bg-accent-200 selection:text-brand-900">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        <div id="home">
          <Hero onCtaClick={() => setIsBookingOpen(true)} />
        </div>
        
        <div id="rooms">
          <RoomList />
        </div>
        
        <div id="amenities">
          <AmenityList />
        </div>
      </main>

      <Footer />
      
      <ChatConcierge />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
};

export default App;
