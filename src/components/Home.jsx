import React from "react";
import { Route, Routes } from "react-router-dom";
import "../css/Home.css";
import Layout from "./Layout";
import MainPage from "./MainPage";
import A2004MainText from "./Templates/Athene2004/A2004MainText"
import B2008MainText from "./Templates/Beijing2008/B2008MainText";
import A2004TopArticle from "./Templates/Athene2004/A2004TopArticle"
import B2008TopArticle from "./Templates/Beijing2008/B2008TopArticle"
const Home = () => {
  
  return (

    <div className="HomeBg">
      <Layout >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="content/Athene2004" element=
          {
            <>
              <A2004TopArticle></A2004TopArticle>
              <A2004MainText/>
            </>
          }/>
          <Route path="content/Beijing2008" element=
          {
            <>
              <B2008TopArticle></B2008TopArticle>
              <B2008MainText/>
            </>
          }/>
          
        </Routes>
      </Layout>
    </div>
  );
};

export default Home;
