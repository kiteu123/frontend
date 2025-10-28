import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (index) => {
    const sections = [heroRef, aboutRef, servicesRef, portfolioRef, contactRef];
    sections[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.pageYOffset + window.innerHeight / 3;
      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(index);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      title: "Who I Am",
      brief: "사용자 중심의 프론트엔드 개발자",
      detail:
        "안녕하세요! 저는 React와 TypeScript를 주로 사용하는 프론트엔드 개발자입니다. 직관적이고 감각적인 UI를 만드는 걸 좋아합니다.",
    },
    {
      title: "What I Do",
      brief: "React, Node.js 기반 웹 개발",
      detail:
        "다양한 프로젝트에서 반응형 UI와 애니메이션 구현 경험이 있으며, REST API 연동도 가능합니다.",
    },
    {
      title: "My Values",
      brief: "꾸준함과 협업",
      detail:
        "문제 해결보다 ‘함께 해결하는 과정’을 중요하게 생각합니다. 지속 가능한 개발 문화를 지향합니다.",
    },
    {
      title: "My Vision",
      brief: "UI/UX에 특화된 개발자",
      detail:
        "사용자가 ‘편하다’ 느끼는 인터페이스를 만들고, 기술로 일상을 더 즐겁게 바꾸는 것이 제 목표입니다.",
    },
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="app">
      {/* 네비게이션 */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">Scroll Navigation</h1>
          <ul className="nav-menu">
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (label, index) => (
                <li
                  key={index}
                  className={activeSection === index ? "active" : ""}
                  onClick={() => scrollToSection(index)}
                >
                  {label}
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="section section-hero">
        <div className="section-content">
          <h2 className="fade-in">Welcome to One-page Scroll</h2>
          <p className="fade-in-delay">스크롤 효과를 경험해보세요</p>
        </div>
      </section>

      {/* About */}
      <section ref={aboutRef} className="section section-about">
        <div className="section-content">
          <h2 className="slide-in-left">About Me</h2>
          <p className="slide-in-left">카드를 클릭해 저를 알아보세요 👇</p>

          <div className="cards">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`card card-fade ${
                  expandedCard === index ? "expanded" : ""
                }`}
                onClick={() => toggleCard(index)}
              >
                <div className="card-front">
                  <h3>{card.title}</h3>
                  <p>{card.brief}</p>
                </div>
                <div className="card-back">
                  <p>{card.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="section section-services">
        <div className="section-content">
          <h2 className="slide-in-right">Our Services</h2>
          <p className="slide-in-right">
            다양한 서비스를 제공합니다. 아래로 스크롤 해보세요.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section ref={portfolioRef} className="section section-portfolio">
        <div className="section-content">
          <h2 className="fade-in">Portfolio</h2>
          <p className="fade-in-delay">저희 작업물들을 소개합니다.</p>
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              spaceBetween={30}
              className="portfolio-swiper"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <SwiperSlide key={n}>
                  <div className="portfolio-item">
                    <div className="portfolio-image">Project {n}</div>
                    <h3>프로젝트 {n}</h3>
                    <p>다양한 기술로 구현된 웹 애플리케이션</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} className="section section-contact">
        <div className="section-content">
          <h2 className="zoom-in">Contact Me</h2>
          <p className="zoom-in">
            언제든 연락주세요! 함께 성장할 기회를 기다립니다.
          </p>
        </div>
      </section>
    </div>
  );
}
