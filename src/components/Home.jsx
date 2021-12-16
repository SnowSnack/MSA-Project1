import React from "react";
import Header from "./Header";
import "../css/Main.css";
import Footer from "./Footer";
import Article from "./Article";

const Home = () => {
  return (
    <div className="MainBg">
      <Header />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;
