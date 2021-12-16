import React from "react";
import "../css/Main.css";
import Article from "./Article";
import Layout from "./Layout";

const Home = () => {
  return (
    <div className="MainBg">
      <Layout />
      <Article />
    </div>
  );
};

export default Home;
