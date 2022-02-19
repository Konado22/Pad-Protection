import React from "react";
import "../index.css";

const Homepage = () => {
  return (
    <>
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
          <img
            className="jewelry-coverage"
            src="./images/ring.png"
            alt=""
          ></img>
          <img
            className="musical-coverage"
            src="./images/cabinet.png"
            alt=""
          ></img>
          <img className="img-skyline" src="./images/home.png" alt=""></img>
        </div>
      </div>
      <div className="api-section api-usage">
        <div className="overlay"></div>
        <div className="inner">
          <div className="usage-examples">
            <div className="usage-example e-commerce">
              <i className="fa-solid fa-comments-dollar fa-3x"></i>
              <h4>Recommendations</h4>
              <p>Get personal property coverage recommendations</p>
            </div>
            <div className="usage-example real-estate">
              <i className="fa-solid fa-folder fa-3x"></i>
              <h4>Asset Records</h4>
              <p>Catalog all of your assets in case of disaster</p>
            </div>
            <div className="usage-example financial-services">
              <i className="fa-solid fa-folder-tree fa-3x"></i>
              <h4>Policy Tracking</h4>
              <p>Aggregate all insurance policies in one location</p>
            </div>
            <div className="usage-example smart-home">
              <i className="fa-solid fa-file-invoice-dollar fa-3x"></i>
              <h4>Insurance Quotes</h4>
              <p>
                Get connected to local insurance providers who can insure your
                home
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
