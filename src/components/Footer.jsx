import React from "react";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import "../css/Footer.css";
//npm install react-icons --save
const Footer = () => {
  return (
    <div id="wrap">
      <footer style={{ color: "white" }}>
        footer여기있다
        <ul>
          <li>
            <a className="tw" href="https://twitter.com/bts_bighit?lang=ko">
              <FaTwitter color="1da1f2" size="25" />
            </a>
          </li>
          <li>
            <a href="">
              <FaFacebookSquare />
            </a>
          </li>
          <li></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
