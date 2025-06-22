// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2><Link to="/" style={{ color: "white", textDecoration: "none" }}>Melon Clone</Link></h2>
      <ul>
        <li><Link to="/chart100">멜론차트</Link></li>
        <li><Link to="/new">최신음악</Link></li>
        <li><Link to="/mypage">마이뮤직</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
