import React from "react";
import { Route, Routes } from "react-router-dom";
import "../css/Main.css";
import Layout from "./Layout";
import Test from "./Test";
import TestHome from "./TestHome";
import ContentList from "./ContentList";
import Introduce from "./Introduce";

const Home = () => {
  const aStr = "<Content></Content><Introduce></Introduce>";
  return (

    <div className="MainBg">
      <Layout children = {aStr}>
        <Routes>
          <Route path="/" element={<TestHome />} />
          <Route path="test" element={<Test />} />
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
