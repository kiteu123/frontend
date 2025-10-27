import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/portfolio";
import Priceing from "./components/Priceing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  // 컴포넌트가 처음 화면에 나타날때 한 번 실행되는 코드
  useEffect(() => {
    //mount = 처음랜더링된대
    const handleScroll = () => {
      document.querySelectorAll(".slideanim").forEach((el) => {
        //.slideanim 클래스요소선택
        const pos = el.getBoundingClientRect().top; //offset().top과 비슷
        //요소의 현재화면 상단으로 부터의 거리(px)를 구합니다. - 요소가 현재 뷰포트의 어디쯤있는지를 알수잇음
        const winHeight = window.innerHeight; //브라우저 높이
        if (pos < winHeight - 100) {
          //요소위치가 화면 아래쪽에 100px 위에 도달하면 실행
          //스크롤내려서 그요소가 거의 화면안에 들어오면
          el.classList.add("slide"); //애니메이션시작
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    //클리업 컴포넌트가 사라질때 -> 컴포넌트가 사라질때 스크롤 이벤트 제거(메모리 누수방지)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Priceing />
      <Contact />
      <Footer />
    </>
  );
}
