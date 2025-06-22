// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Chart100 from "./pages/chart100";
import NewReleases from "./pages/NewReleases";
import MyPage from "./pages/mypage";
import "./App.css";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart100" element={<Chart100 />} />
          <Route path="/new" element={<NewReleases />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
