import React from "react";
import { Route, Routes } from "react-router-dom";
import "../css/Home.css";
import Layout from "./Layout";
import MainPage from "./MainPage";
import Athens from "./Templates/Athene2004/A2004MainText"
import A2004TopArticle from "./Templates/Athene2004/A2004TopArticle"
const Home = () => {
  
  return (

    <div className="HomeBg">
      <Layout >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="content" element=
          {
            <>
              <A2004TopArticle></A2004TopArticle>
              <Athens/>
            </>
          }/>
          
        </Routes>
      </Layout>
    </div>
  );
};

export default Home;
