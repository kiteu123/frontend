// Steam Store API (이미지/설명)
export async function fetchGameDetail(appid) {
  const res = await fetch(
    `http://localhost:3001/api/steamstore?appid=${appid}`
  );
  const data = await res.json();
  return data[appid].data;
}

// SteamSpy proxy (CORS 문제 해결)
export async function fetchSpy(appid) {
  const res = await fetch(
    `http://localhost:3001/api/steamspy?request=appdetails&appid=${appid}`
  );
  const data = await res.json();
  return data;
}
