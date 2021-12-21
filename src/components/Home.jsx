import React from "react";
import { Route, Routes } from "react-router-dom";
import "../css/Home.css";
import Layout from "./Layout";
import MainPage from "./MainPage";
import Search from "./Search";
import Athens from "./Athens"
import TopArticle from "./TopArticle"
const Home = () => {
  const aStr = "<Content></Content><Introduce></Introduce>";
  return (

    <div className="HomeBg">
      <Layout children = {aStr}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="Search" element={<Search />} />
          <Route path="content" element=
          {
            <>
              <TopArticle></TopArticle>
              <Athens/>
            </>
          }/>
          
        </Routes>
      </Layout>
    </div>
  );
};

export default Home;
