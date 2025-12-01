import React, { useEffect, useState } from "react";

function App() {
  const [map, setMap] = useState(null);
  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");
  const [routeInfo, setRouteInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // -------------------------
  // 지도 초기화
  // -------------------------
  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) return;

    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978),
      level: 5,
    };

    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);
  }, []);

  // -------------------------
  // 장소 검색
  // -------------------------
  const searchPlace = (keyword) => {
    return fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        keyword
      )}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.VITE_KAKAO_REST_KEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.documents.length > 0) {
          const place = data.documents[0];
          return {
            lat: parseFloat(place.y),
            lng: parseFloat(place.x),
            name: place.address_name,
          };
        } else {
          throw new Error("검색 결과 없음");
        }
      });
  };

  // -------------------------
  // 경로 검색
  // -------------------------
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!startInput || !endInput) return alert("출발지/도착지 입력 필요");
    if (!map) return alert("지도 로딩 대기 중...");
    setIsLoading(true);

    try {
      const [start, end] = await Promise.all([
        searchPlace(startInput),
        searchPlace(endInput),
      ]);

      // -------------------------
      // 실제 도로 경로 REST API 호출
      // -------------------------
      const directions = await fetch(
        `https://apis-navi.kakaomobility.com/v1/directions?origin=${start.lng},${start.lat}&destination=${end.lng},${end.lat}&priority=RECOMMEND`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.VITE_KAKAO_REST_KEY}`,
          },
        }
      ).then((res) => res.json());

      // 경로 좌표 변환
      const coords = directions.routes[0].sections.flatMap((section) =>
        section.points.map((p) => new window.kakao.maps.LatLng(p[1], p[0]))
      );

      // Polyline 그리기
      const polyline = new window.kakao.maps.Polyline({
        map: map,
        path: coords,
        strokeWeight: 5,
        strokeColor: "#FF5733",
        strokeOpacity: 0.8,
        strokeStyle: "solid",
      });

      // 지도 중심 설정
      map.setCenter(coords[0]);

      // 마커
      const startMarker = new window.kakao.maps.Marker({
        map: map,
        position: coords[0],
        title: "출발지",
      });
      const endMarker = new window.kakao.maps.Marker({
        map: map,
        position: coords[coords.length - 1],
        title: "도착지",
      });

      setRouteInfo({
        distance: (directions.routes[0].summary.distance / 1000).toFixed(2),
        duration: Math.ceil(directions.routes[0].summary.duration / 60), // 분
      });

      // Cleanup 함수
      return () => {
        polyline.setMap(null);
        startMarker.setMap(null);
        endMarker.setMap(null);
      };
    } catch (err) {
      alert("경로 검색 오류: " + err.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🚗 실제 도로 경로 찾기</h1>

      <form onSubmit={handleSearch} className="space-y-3 mb-4">
        <input
          type="text"
          placeholder="출발지"
          className="w-full p-2 border rounded"
          value={startInput}
          onChange={(e) => setStartInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="도착지"
          className="w-full p-2 border rounded"
          value={endInput}
          onChange={(e) => setEndInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          {isLoading ? "검색 중..." : "경로 찾기"}
        </button>
      </form>

      <div id="map" className="w-full h-80 border rounded"></div>

      {routeInfo && (
        <div className="mt-4 p-3 border rounded bg-gray-100">
          <p className="font-semibold">📌 거리: {routeInfo.distance} km</p>
          <p className="font-semibold">
            ⏱ 예상 소요 시간: {routeInfo.duration} 분
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
