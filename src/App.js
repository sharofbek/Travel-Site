import React from "react";
import { Route, Routes } from "react-router";

import "./App.scss";
import './AppMedia.scss'

import Root from "./Root";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="container">

    
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/page_2" element={<Root />} />
      </Routes>
    </div>
  );
};

export default App;
