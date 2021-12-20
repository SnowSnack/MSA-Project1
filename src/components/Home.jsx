import React from "react";
import { Route, Routes } from "react-router-dom";
import "../css/Home.css";
import Layout from "./Layout";
import MainPage from "./MainPage";
import ContentList from "./ContentList";
import Introduce from "./Introduce";
import Search from "./Search";

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
              <ContentList/>
              <Introduce/>

            </>
          }/>
          
        </Routes>
      </Layout>
    </div>
  );
};

export default Home;
