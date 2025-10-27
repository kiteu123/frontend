import React from "react";
import { Link, useLocation } from "react-router-dom";
//  useLocation : react-router제공하는 훅, 현재 url 경로(pathname)와 같은 위치 정보를 가져옴
import "./Navigation.css";
export default function Navigation() {
  const location = useLocation();
  return (
    <nav className="Navigation">
      <div className="container">
        <Link to="/" className="nav-brand">
          React Router 예제
        </Link>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              홈
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              소개
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              연락처
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
