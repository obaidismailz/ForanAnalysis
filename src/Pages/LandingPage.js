// import logo from '';
import React from "react";
import ReactDOM from "react-dom";

import "../Style/LandingPage.css";

import Navbar from "../Components/Navbar";
import Header from "../Components/LP_Header";
import Body from "../Components/LP_Body";
import Footer from "../Components/LP_Footer";

const divStyle = {
  color: "black",
  backgroundColor: "white",
};

function LandingPage() {
  return (
    <div className="LandingPage">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default LandingPage;
