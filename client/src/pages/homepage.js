import React from "react";
import "../index.css";

const Homepage = () => {
  return (
    <div className="api-section api-coverage">
      <div className="overlay">
        <div className="clouds">
          <div className="clouds-bg"></div>
        </div>
        <div className="inner">
          <h2>Protect your Pad</h2>
          <p>
            Pad Protection documents your personal property and allows you to
            track all of your policies in one spot!
          </p>
        </div>
        <img
          className="bicycle-coverage"
          alt="bicycle"
          src="./images/couch.png"
        ></img>
        <img
          className="electronics-coverage"
          alt="elctronic"
          src="./images/tv.png"
        ></img>
        <img className="jewelry-coverage" src="./images/ring.png" alt=""></img>
        <img
          className="musical-coverage"
          src="./images/cabinet.png"
          alt=""
        ></img>
        <img className="img-skyline" src="./images/home.png" alt=""></img>
      </div>
    </div>
  );
};

export default Homepage;
