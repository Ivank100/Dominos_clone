import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import HomePage from "./components/Homepage";
import Footer from "./components/footer";
import Tracking from "./components/Tracking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import FindStore from "./components/FindStore";

export default function App() {
  const [hamburger, sethamburger] = useState(false);
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {hamburger === true ? <Sidebar sethamburger={sethamburger} /> : null}
        <Navbar sethamburger={sethamburger} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/search-store" element={<FindStore />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
