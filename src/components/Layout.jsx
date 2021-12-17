import React from "react";
import { FaTwitter, FaFacebookSquare, FaBsInstagram } from "react-icons/fa";
import "../css/Header.css";
import "../css/Footer.css";
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h3 style={{ color: "white" }}>헤더임</h3>
      </header>
      {children}
      <footer style={{ color: "white" }}>
        footer여기있다
        <ul>
          <li>
            <a className="tw" href="https://twitter.com/bts_bighit?lang=ko">
              <FaTwitter color="1da1f2" size="25" />
            </a>
          </li>
          <li>
            <a href="https://ko-kr.facebook.com/">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/?hl=ko">
              {/* <FaBsInstagram /> */}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
