import React, { useState } from "react";
import { FaCode, FaPaintBrush, FaLightbulb } from "react-icons/fa";
import "./about.css";

export default function About() {
  // 각 카드 클릭 상태 관리 (배열로)
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    {
      icon: <FaCode className="service-icon service-icon-purple" />,
      title: "ABOUT ME",
      description:
        "Writing maintainable, scalable, and efficient code that follows best practices.",
    },
    {
      icon: <FaPaintBrush className="service-icon service-icon-blue" />,
      title: "EXPERIENCE",
      description:
        "Creating intuitive and visually appealing user interfaces that enhance user experience.",
    },
    {
      icon: <FaLightbulb className="service-icon service-icon-pink" />,
      title: "VALUE",
      description:
        "Staying updated with the latest technologies and implementing modern solutions.",
    },
    {
      icon: <FaLightbulb className="service-icon service-icon-pink" />,
      title: "VISION",
      description:
        "Bringing fresh perspectives and unique ideas to every project I work on..",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-services">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`service-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {card.icon}
              <h3>{card.title}</h3>

              {/* 클릭 시 내용 표시 */}
              <p
                className={`service-description ${
                  activeIndex === index ? "visible" : ""
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
