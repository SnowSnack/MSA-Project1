import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../css/Header.css";
import Home from "./Home";
const Header = () => {
  return (
    <div>
      <header>
        <h3 style={{ color: "white" }}>헤더임</h3>
        <ul>
          <li>
            <Link to="home">홈으로로</Link>
          </li>
        </ul>
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
};

export default Header;
