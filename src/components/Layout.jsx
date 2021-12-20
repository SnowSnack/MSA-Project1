import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLeaf,
  FaCloud
} from "react-icons/fa";
import "../css/Header.css";
import "../css/Footer.css";
import { Link, Outlet } from "react-router-dom";
import "../css/Article.css";
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <ul>
          <li className="menu">
              <Link to="/"><FaLeaf className="leaf"/>Home</Link>
              <Link to= "./content">ContentList</Link>
              <Link to="./test"><FaCloud/>Search</Link>
          </li>
        </ul>
        <Outlet />
      </header>
      <article className = "clearfix">
          {children}
      </article>
      <footer>
        <ul className="logo">
          <li>
            <a
              href="https://twitter.com/bts_bighit?lang=ko"
              // 새창열림  target="_blank"   rel="noopener noreferrer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="tw" />
            </a>
          </li>
          <li>
            <a
              href="https://ko-kr.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="fb" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/?hl=ko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="star" />
            </a>
          </li>
          <li>
            <a
              href="https://sesac.seoul.kr/common/greeting.do"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLeaf className="leaf" />
            </a>
          </li>
        </ul>
        <div className="copy">
          <p className="">Copyright &copy; SeSAc Namu.Wiki </p>
          <p style={{ fontSize: "12px" }}>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;