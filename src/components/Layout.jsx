import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLeaf,
} from "react-icons/fa";
import "../css/Header.css";
import "../css/Footer.css";
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h3 style={{ color: "white" }}>헤더임</h3>
      </header>
      {children}
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
          <p>Copyright &copy; SeSAc Namu.Wiki </p>
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
