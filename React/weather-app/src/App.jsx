import React, { useState, useMemo, useEffect } from "react";
import { Share2, MapPin, Info } from "lucide-react";

/**
 * 👕 옷차림 데이터베이스
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
  const [currentTemp, setCurrentTemp] = useState(null);
  const [locationName, setLocationName] = useState("불러오는 중…");
  const [preferenceIndex, setPreferenceIndex] = useState(0);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("이 브라우저에서는 위치 정보를 사용할 수 없습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=kr`;
        const weatherRes = await fetch(weatherURL);
        const weatherData = await weatherRes.json();

        setCurrentTemp(Math.round(weatherData.main.temp));

        const kakaoURL = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}`;
        const kakaoRes = await fetch(kakaoURL, {
          headers: {
            Authorization: `KakaoAK fa404c9f620f1b5af3192f1def32356a`,
          },
        });

        const kakaoData = await kakaoRes.json();
        let address = "위치 불러오기 실패";
        if (kakaoData.documents?.length > 0) {
          address = kakaoData.documents[0].address.address_name;
        }
        setLocationName(address);
      },
      (err) => {
        console.error(err);
        alert("위치 정보를 불러오지 못했습니다.");
      }
    );
  }, []);

  const today = new Date();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = weekDays[today.getDay()];
  const dateStr = `${today.getMonth() + 1}/${today.getDate()} (${dayOfWeek})`;

  const handleSliderChange = (e) => {
    setPreferenceIndex(parseInt(e.target.value));
  };

  const effectiveTemp = useMemo(() => {
    if (currentTemp === null) return null;
    return currentTemp - preferenceIndex * 4;
  }, [currentTemp, preferenceIndex]);

  const recommendedOutfit = useMemo(() => {
    return (
      CLOTHING_RULES.find(
        (rule) => effectiveTemp >= rule.minTemp && effectiveTemp <= rule.maxTemp
      ) || CLOTHING_RULES[2]
    );
  }, [effectiveTemp]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-emerald-100 font-sans p-4">
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden relative border-4 border-emerald-50">
        {/* Header */}
        <div className="bg-emerald-200/30 p-4 pb-2">
          <h1 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            오늘 뭐 입지?
          </h1>
        </div>

        {/* Scrollable Content Area */}
        <div className="px-6 py-2 pb-32">
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
            <button className="absolute top-0 right-0 text-gray-400 hover:text-gray-600"></button>

            {/* Top */}
            <div className="flex flex-col items-center gap-3 transition-all duration-500 transform">
              <div
                className={`w-32 h-32 ${recommendedOutfit.top.color} rounded-3xl shadow-sm flex items-center justify-center text-6xl relative overflow-hidden group`}
              >
                <span className="group-hover:scale-110 transition-transform">
                  {recommendedOutfit.top.icon}
                </span>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none"></div>
              </div>
              <span className="font-bold text-gray-700">
                {recommendedOutfit.top.name}
              </span>
            </div>

            {/* Outer */}
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
        </div>

        {/* Bottom Floating Control */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-[40px] shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50">
          <div className="flex items-center justify-between px-2 mb-2 relative">
            <input
              type="range"
              min="-2"
              max="2"
              step="1"
              value={preferenceIndex}
              onChange={handleSliderChange}
              className="absolute w-full h-full opacity-0 z-30 cursor-pointer"
            />
            <div className="w-full flex justify-between items-center text-lg font-bold text-gray-800 select-none relative z-20">
              <div
                className={`transition-all duration-300 flex items-center gap-1 ${
                  preferenceIndex === -2
                    ? "text-gray-900 scale-110"
                    : "text-gray-400"
                }`}
              >
                <span>더워요</span>
              </div>
              <div className="absolute left-0 right-0 flex justify-center pointer-events-none z-10">
                <div
                  className={`px-6 py-3 rounded-full text-white font-bold shadow-lg transition-all duration-300 ${
                    preferenceIndex === 0
                      ? "bg-[#6ED676] scale-100"
                      : "bg-gray-300 scale-90 text-gray-500"
                  }`}
                  style={{ transform: `translateX(${preferenceIndex * 60}px)` }}
                >
                  {preferenceIndex === 0
                    ? "쾌적해요!"
                    : preferenceIndex > 0
                    ? "추워요"
                    : "더워요"}
                </div>
              </div>
              <div
                className={`transition-all duration-300 flex items-center gap-1 ${
                  preferenceIndex === 2
                    ? "text-gray-900 scale-110"
                    : "text-gray-400"
                }`}
              >
                <span>추워요</span>
              </div>
            </div>
          </div>
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
