import React from "react";
import "../css/Header.css";
import "../css/Footer.css";
import "../css/Templates/Athene2004/A2004Article.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <article className="clearfix">{children}</article>
      <Footer />
    </div>
  );
};

export default Layout;
