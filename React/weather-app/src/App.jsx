import React, { useState, useMemo, useEffect } from "react";
import { Share2, Menu, Info, MapPin, ChevronLeft } from "lucide-react";

/**
 * 👕 옷차림 데이터베이스
 * 온도 범위(min, max)에 따라 적절한 상의, 아우터, 하의 이미지를 매핑합니다.
 * 실제 앱에서는 이미지 URL을 사용하겠지만, 여기서는 아이콘과 색상으로 시각화합니다.
 */
const CLOTHING_RULES = [
  {
    id: "scorching",
    minTemp: 28,
    maxTemp: 50,
    top: { name: "민소매", color: "bg-yellow-100", icon: "🎽" },
    outer: { name: "없음", color: "bg-transparent", icon: "❌" },
    desc: "무더운 날씨예요! 최대한 시원하게 입으세요.",
  },
  {
    id: "hot",
    minTemp: 23,
    maxTemp: 27,
    top: { name: "반팔티", color: "bg-white", icon: "👕" },
    outer: { name: "없음", color: "bg-transparent", icon: "❌" },
    desc: "여름 날씨입니다. 얇은 옷차림이 좋아요.",
  },
  {
    id: "warm",
    minTemp: 20,
    maxTemp: 22,
    top: { name: "반팔티", color: "bg-purple-100", icon: "👕" },
    outer: { name: "얇은 셔츠", color: "bg-blue-100", icon: "👔" },
    desc: "활동하기 좋은 날씨! 얇은 걸치기 좋은 옷을 챙기세요.",
  },
  {
    id: "cool",
    minTemp: 17,
    maxTemp: 19,
    top: { name: "긴팔티", color: "bg-gray-100", icon: "👕" },
    outer: { name: "바람막이", color: "bg-blue-400", icon: "🧥" },
    desc: "일교차가 클 수 있어요. 겉옷이 필수입니다.",
  },
  {
    id: "chilly",
    minTemp: 12,
    maxTemp: 16,
    top: { name: "맨투맨", color: "bg-indigo-100", icon: "👕" },
    outer: { name: "가디건", color: "bg-orange-100", icon: "🥼" },
    desc: "쌀쌀해요. 니트나 가디건을 추천해요.",
  },
  {
    id: "cold",
    minTemp: 9,
    maxTemp: 11,
    top: { name: "니트", color: "bg-green-100", icon: "🧶" },
    outer: { name: "트렌치코트", color: "bg-amber-700", icon: "🧥" },
    desc: "본격적인 추위가 시작됩니다. 코트를 입으세요.",
  },
  {
    id: "freezing",
    minTemp: 5,
    maxTemp: 8,
    top: { name: "히트텍", color: "bg-gray-800", icon: "🔥" },
    outer: { name: "패딩", color: "bg-gray-300", icon: "🧥" },
    desc: "매우 추워요! 패딩과 내복으로 무장하세요.",
  },
  {
    id: "freezing_cold",
    minTemp: -50,
    maxTemp: 4,
    top: { name: "장갑", color: "bg-gray-800", icon: "🧤" },
    outer: { name: "목도리", color: "bg-gray-300", icon: "🧣" },
    desc: "매우 추워요! 장갑과 목도리로 무장하세요.",
  },
];

const API_KEY = "c913076005907aa5d79cd0fdc643b55d"; // 여기에 실제 API 키를 넣으세요.

const WeatherApp = () => {
  // --- State ---
  // 현재 실제 기온 (API에서 받아왔다고 가정)
  const [currentTemp, setCurrentTemp] = useState(null);
  const [locationName, setLocationName] = useState("불러오는 중…");
  const [preferenceIndex, setPreferenceIndex] = useState(0);
  // 사용자 체감 조절값 (-2: 더워요/얇게, 0: 적당, +2: 추워요/두껍게)

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("이 브라우저에서는 위치 정보를 사용할 수 없습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        // ---------------------------
        // ① OpenWeather API 호출
        // ---------------------------
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=kr`;

        const weatherRes = await fetch(weatherURL);
        const weatherData = await weatherRes.json();

        setCurrentTemp(Math.round(weatherData.main.temp)); // 현재 기온

        const kakaoURL = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}`;

        const kakaoRes = await fetch(kakaoURL, {
          headers: {
            Authorization: `KakaoAK fa404c9f620f1b5af3192f1def32356a`, // 여기에 본인 API키
          },
        });

        const kakaoData = await kakaoRes.json();

        let address = "위치 불러오기 실패";

        if (kakaoData.documents?.length > 0) {
          address = kakaoData.documents[0].address.address_name;
        }

        setLocationName(address); // 예: 서울 강남구 역삼동
      },
      (err) => {
        console.error(err);
        alert("위치 정보를 불러오지 못했습니다.");
      }
    );
  }, []);
  // 날짜 정보
  const today = new Date();
  const dateStr = `${today.getMonth() + 1}/${today.getDate()} 일`;

  // --- Logic ---

  // 슬라이더 변경 핸들러
  // -2 (왼쪽, 더워요) ~ +2 (오른쪽, 추워요)
  const handleSliderChange = (e) => {
    setPreferenceIndex(parseInt(e.target.value));
  };

  // 보정된 온도 계산 (알고리즘)
  // preferenceIndex가 양수(추워요 쪽)면 -> 옷이 얇다고 느낌 -> 더 따뜻하게 입고 싶음 -> 온도 낮게 인식 시킴
  // preferenceIndex가 음수(더워요 쪽)면 -> 옷이 두껍다고 느낌 -> 더 시원하게 입고 싶음 -> 온도 높게 인식 시킴
  const effectiveTemp = useMemo(() => {
    if (currentTemp === null) return null;
    return currentTemp - preferenceIndex * 4; // 인덱스당 3도씩 보정
  }, [currentTemp, preferenceIndex]);

  const recommendedOutfit = useMemo(() => {
    return (
      CLOTHING_RULES.find(
        (rule) => effectiveTemp >= rule.minTemp && effectiveTemp <= rule.maxTemp
      ) || CLOTHING_RULES[2]
    ); // Fallback
  }, [effectiveTemp]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-emerald-100 font-sans p-4">
      {/* --- Main Mobile Container --- */}
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden relative border-4 border-emerald-50">
        {/* Header */}
        <div className="bg-emerald-200/30 p-4 pb-2">
          <div className="flex justify-between items-center mb-4">
            <ChevronLeft className="w-6 h-6 text-gray-700 cursor-pointer" />
            <h1 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              오늘 뭐 입지?
              <span className="text-[10px] bg-gray-200 px-1 rounded text-gray-500 border border-gray-300">
                BETA
              </span>
            </h1>
            <div className="relative">
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              <Menu className="w-6 h-6 text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="px-6 py-2 pb-32">
          {" "}
          {/* pb-32 for bottom fixed controller */}
          {/* Status Badge */}
          <div className="flex justify-between items-start mb-2">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
              <span>🍃 {dateStr}</span>
            </div>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          {/* Location */}
          <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
            <MapPin className="w-4 h-4" />
            <span>
              {locationName} {currentTemp !== null && ` · ${currentTemp}°C`}
            </span>
          </div>
          {/* Main Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8 mt-2">
            이렇게 입으면 딱 적당해요!
          </h2>
          {/* Clothing Visuals */}
          <div className="flex justify-center items-end gap-6 mb-10 relative">
            <button className="absolute top-0 right-0 text-gray-400 hover:text-gray-600">
              <Info className="w-5 h-5" />
            </button>

            {/* Top (상의) */}
            <div className="flex flex-col items-center gap-3 transition-all duration-500 transform">
              <div
                className={`w-32 h-32 ${recommendedOutfit.top.color} rounded-3xl shadow-sm flex items-center justify-center text-6xl relative overflow-hidden group`}
              >
                <span className="group-hover:scale-110 transition-transform">
                  {recommendedOutfit.top.icon}
                </span>
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none"></div>
              </div>
              <span className="font-bold text-gray-700">
                {recommendedOutfit.top.name}
              </span>
            </div>

            {/* Outer (아우터) - 없으면 렌더링 안하거나 투명하게 처리 */}
            {recommendedOutfit.outer.name !== "없음" && (
              <div className="flex flex-col items-center gap-3 transition-all duration-500 transform animate-fade-in-up">
                <div
                  className={`w-32 h-32 ${recommendedOutfit.outer.color} rounded-3xl shadow-sm flex items-center justify-center text-6xl relative overflow-hidden group`}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {recommendedOutfit.outer.icon}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none"></div>
                </div>
                <span className="font-bold text-gray-700">
                  {recommendedOutfit.outer.name}
                </span>
              </div>
            )}
          </div>
          {/* Temp Graph Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              추위/더위 예측
            </h3>
            <div className="bg-gray-50 rounded-2xl p-4 relative h-48 border border-gray-100 shadow-inner overflow-hidden">
              {/* Background Grid Lines */}
              <div className="absolute top-10 left-0 right-0 border-t border-dashed border-green-300 z-0"></div>
              <div className="absolute bottom-10 left-0 right-0 border-t border-dashed border-green-300 z-0"></div>
              <span className="absolute top-10 left-2 text-xs text-gray-400">
                25°
              </span>
              <span className="absolute bottom-10 left-2 text-xs text-gray-400">
                15°
              </span>

              {/* Mock SVG Graph Line */}
              <svg
                className="w-full h-full absolute inset-0 z-10"
                viewBox="0 0 300 150"
                preserveAspectRatio="none"
              >
                {/* Smooth Curve */}
                <path
                  d="M0,120 C50,100 100,40 150,30 C200,20 250,80 300,100"
                  fill="none"
                  stroke="#555"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Fill Area */}
                <path
                  d="M0,120 C50,100 100,40 150,30 C200,20 250,80 300,100 L300,150 L0,150 Z"
                  fill="rgba(0,0,0,0.03)"
                />
              </svg>

              {/* Indicator Badge on Graph */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-[#87D674] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-sm animate-bounce-slow">
                  {effectiveTemp >= 23
                    ? "더워요"
                    : effectiveTemp <= 15
                    ? "추워요"
                    : "딱 적당해요"}
                </div>
              </div>

              {/* Time Labels */}
              <div className="absolute bottom-2 w-full flex justify-between px-4 text-xs text-gray-400 z-20">
                <span>오전 7시</span>
                <span>오후 12시</span>
                <span>오후 8시</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Floating Control --- */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-[40px] shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50">
          <div className="flex items-center justify-between px-2 mb-2 relative">
            {/* Range Input Slider (Invisible but clickable) */}
            <input
              type="range"
              min="-2"
              max="2"
              step="1"
              value={preferenceIndex}
              onChange={handleSliderChange}
              className="absolute w-full h-full opacity-0 z-30 cursor-pointer"
            />

            {/* Visual Custom Slider */}
            {/* z-index를 높여서 버튼이 다른 요소 위에 오도록 설정 */}
            <div className="w-full flex justify-between items-center text-lg font-bold text-gray-800 select-none relative z-20">
              {/* Option: 더워요 (Too Hot) */}
              <div
                className={`transition-all duration-300 flex items-center gap-1 ${
                  preferenceIndex === -2
                    ? "text-gray-900 scale-110"
                    : "text-gray-400"
                }`}
              >
                <span>더워요</span>
                {preferenceIndex === -2 && (
                  <ChevronLeft className="w-4 h-4 animate-pulse" />
                )}
              </div>

              {/* Center Button (Visual) */}
              {/* The slider thumb visualization */}
              {/* 버튼 자체에도 z-index를 주어 확실하게 위로 올림 */}
              <div className="absolute left-0 right-0 flex justify-center pointer-events-none z-10">
                <div
                  className={`
                      px-6 py-3 rounded-full text-white font-bold shadow-lg transition-all duration-300
                      ${
                        preferenceIndex === 0
                          ? "bg-[#6ED676] scale-100"
                          : "bg-gray-300 scale-90 text-gray-500"
                      }
                    `}
                  style={{
                    transform: `translateX(${preferenceIndex * 60}px)`, // Simple movement logic
                  }}
                >
                  {preferenceIndex === 0
                    ? "쾌적해요!"
                    : preferenceIndex > 0
                    ? "추워요"
                    : "더워요"}
                </div>
              </div>

              {/* Option: 추워요 (Too Cold) */}
              <div
                className={`transition-all duration-300 flex items-center gap-1 ${
                  preferenceIndex === 2
                    ? "text-gray-900 scale-110"
                    : "text-gray-400"
                }`}
              >
                {preferenceIndex === 2 && (
                  <ChevronLeft className="w-4 h-4 rotate-180 animate-pulse" />
                )}
                <span>추워요</span>
              </div>
            </div>

            {/* Slider Track Indicators (Arrows) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 flex justify-between text-gray-300 pointer-events-none z-0">
              <span className="text-xl">‹</span>
              <span className="text-xl">›</span>
            </div>
          </div>

          {/* Helper Text */}
          <p className="text-center text-xs text-gray-400 mt-3">
            {preferenceIndex === 0
              ? "현재 날씨에 딱 맞는 옷차림입니다."
              : preferenceIndex > 0
              ? "옷이 얇게 느껴지시나요? 더 따뜻한 옷을 보여드릴게요."
              : "옷이 두껍게 느껴지시나요? 더 시원한 옷을 보여드릴게요."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
