import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import HowToOrder from "./pages/HowToOrder";
import News from "./pages/News";
import Franchise from "./pages/Franchise";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";

export default function App() {
  return (
    <div className="app-shell">
      <SiteNav />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          <Route path="/news" element={<News />} />
          <Route path="/franchise" element={<Franchise />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
