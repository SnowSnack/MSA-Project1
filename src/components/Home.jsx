import React from "react";
import { Route, Routes } from "react-router-dom";
import "../css/Main.css";
import Article from "./Article";
import Layout from "./Layout";
import Test from "./Test";
import TestHome from "./TestHome";

const Home = () => {
  return (
    <div className="MainBg">
      <Layout>
        <Article />
        <Routes>
          <Route path="/" element={<TestHome />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Home;
