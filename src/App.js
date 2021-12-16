import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
      </Routes>
    </div>
  );
};

export default App;
