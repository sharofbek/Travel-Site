import React from "react";
import { Route, Routes } from "react-router";

import "./App.scss";
import './AppMedia.scss'
import Nav from "./Components/Nav";
import Block from "./Components/Block";
import Offers from "./Components/Offers";
import Browse from "./Components/Browse";
import Plan from "./Components/Plan";
import Community from "./Components/Community";
import Footer from "./Components/Footer";
import Support from "./Components/Support";
import Vacation from "./Components/Vacation";
import Root from "./Root";
import FooterMedia from "./Components/FooterMedia"

const App = () => {
  return (
    <div className="container">

      <Nav />
      <Block />
      <Vacation />
      <Offers />
      <Browse />
      <Plan />
      <Community />
      <Footer />
      <Support />
      <FooterMedia/>  
      <Routes>
        <Route path="/page_2" element={<Root />} />
        <Route index path="/" />
      </Routes>
    </div>
  );
};

export default App;
