import { useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
import { Link, NavLink } from "react-router-dom";

type NavItem = {
  label: string;
  path: string;
  exact?: boolean;
  subItems: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  {
    label: "홈",
    path: "/",
    exact: true,
    subItems: [
      { label: "브랜드 소개", to: "/#brand" },
      { label: "오늘의 수프", to: "/#soup" },
      { label: "온라인 주문", to: "/#order" },
      { label: "지점 찾기", to: "/#stores" },
    ],
  },
  {
    label: "메뉴소개",
    path: "/menu",
    subItems: [
      { label: "샌드위치", to: "/menu#sandwich" },
      { label: "랩ㆍ기타", to: "/menu#wrap" },
      { label: "샐러드", to: "/menu#salad" },
      { label: "아침메뉴", to: "/menu#breakfast" },
      { label: "스마일 썹", to: "/menu#smile-sub" },
    ],
  },
  {
    label: "이용방법",
    path: "/how-to-order",
    subItems: [
      { label: "써브웨이 이용방법", to: "/how-to-order#guide" },
      { label: "빵 & 재료 소개", to: "/how-to-order#ingredients" },
      { label: "앱 주문 안내", to: "/how-to-order#app" },
      { label: "단체 주문", to: "/how-to-order#group" },
    ],
  },
  {
    label: "새소식",
    path: "/news",
    subItems: [
      { label: "이벤트 · 프로모션", to: "/news#event" },
      { label: "뉴스 · 공지사항", to: "/news#notice" },
      { label: "광고 영상", to: "/news#media" },
      { label: "브랜드 캠페인", to: "/news#campaign" },
    ],
  },
  {
    label: "가맹점",
    path: "/franchise",
    subItems: [
      { label: "가맹 절차", to: "/franchise#process" },
      { label: "투자 비용", to: "/franchise#investment" },
      { label: "지사 안내", to: "/franchise#branch" },
      { label: "사업 설명회", to: "/franchise#seminar" },
      { label: "FAQ", to: "/franchise#faq" },
    ],
  },
];

export default function SiteNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null
  );
  //  isMobileNavOpen(모바일메뉴 열림/닫힘)
  //  expandedMobileItem(서브 메뉴 전환에 필요한 상태) - 모바일 메뉴 중 어떤 항목 펼쳐졌는지 추적(아코디언제어)
  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
    setExpandedMobileItem(null);
  };
  //isMobileNavOpen 은 모바일 메뉴가 열렸는지(true), 닫혔는지(false) 상태를 저장
  //true - 메뉴열기  false = 메뉴닫기
  //expandedMobileItem 모바일 메뉴안의 펼쳐진 서브 메뉴 항복을 관리하는 state
  //null로 초기화하면 -> 모든 서브메뉴가 접힙니다.

  const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget; //클릭된 <a>요소를 가져옴
    if (target.closest(".mobile-nav")) {
      //해당 <a>요소가 .mobile-nav 내부에 있는지확인
      setIsMobileNavOpen(false); //모바일 내비 메뉴 닫기
      setExpandedMobileItem(null); //확장된 메뉴 상태 초기화
    }
  };

  const handleMobileItemToggle = (label: string) => {
    setExpandedMobileItem((prev) => (prev === label ? null : label));
  };

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container brand-container">
          <div className="brand">
            <span className="brand-primary">Subway</span>
            <span className="brand-secondary">Fresh Choice</span>
          </div>
        </div>
      </div>
      <div
        className="header-nav"
        onMouseLeave={() => setHoveredItem(null)}
        onBlur={(event: FocusEvent<HTMLDivElement>) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setHoveredItem(null);
          }
        }}
        //onMouseLeave -> 마우스가 메뉴 영역밖으로 나가면 닫힘
        //onBlur : 키보드 탐색중 포커스가 다른 요소로 이동해도 닫힘
        // null 어떤값도 선택되지 않은상태
        // 메뉴에서 마우스가 벗어나면 상태를 초기화
      >
        <div className="container desktop-nav-container">
          <nav className="site-nav desktop-nav">
            <ul className="top-nav">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="nav-item"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onFocus={() => setHoveredItem(item.label)}
                  // hoveredItem상태가 업데이트됨 -> 서브(메가메뉴 열림)
                >
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    {item.label}
                  </NavLink>
                  {/* navItem 배열을 기반으로 홈, 메뉴소개, 회사소개 이용방버 새소식 등 링크를 생성 */}
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={isMobileNavOpen}
            onClick={toggleMobileNav}
          >
            <span className="sr-only">메뉴 열기</span>
            {/* sr-only 엡접근성 */}
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <nav
          className="mobile-nav"
          data-open={isMobileNavOpen ? "true" : "false"}
        >
          <ul>
            {navItems.map((item, index) => {
              const isExpanded = expandedMobileItem === item.label;
              const panelId = `mobile-sub-nav-${index}`;
              return (
                <li
                  key={item.label}
                  className="mobile-nav-item"
                  data-expanded={isExpanded ? "true" : "false"}
                >
                  <div className="mobile-nav-top">
                    <NavLink
                      to={item.path}
                      end={item.exact}
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      onClick={handleMobileLinkClick}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className="mobile-accordion-trigger"
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() => handleMobileItemToggle(item.label)}
                    >
                      <span className="sr-only">
                        {isExpanded
                          ? `${item.label} 메뉴 닫기`
                          : `${item.label} 메뉴 열기`}
                      </span>
                      <span aria-hidden="true" />
                    </button>
                  </div>
                  <ul
                    id={panelId}
                    className="mobile-sub-nav"
                    data-open={isExpanded ? "true" : "false"}
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.to}
                          className="dropdown-link"
                          onClick={handleMobileLinkClick}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* [data-open="true"] 상태시 mega-menu가 표시 */}
        <div className="mega-menu" data-open={hoveredItem ? "true" : "false"}>
          <div className="mega-menu-inner">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`mega-column${
                  hoveredItem === item.label ? " mega-column-active" : ""
                }`}
                onMouseEnter={() => setHoveredItem(item.label)}
                onFocus={() => setHoveredItem(item.label)}
              >
                <span className="mega-heading">{item.label}</span>
                <ul>
                  {item.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <Link to={subItem.to} className="dropdown-link">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
