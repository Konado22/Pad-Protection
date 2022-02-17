//this page is follow up render for Add home button from homepage, state will dictate the questions being asked to the user
//  can use user params to provide responses to database for update,create

import React, { useState } from "react";

const AddAsset = () => {
  const [currentPage, setCurrentPage] = useState("default");

  if (currentPage === "default") {
    return (
      <div className="addAssetContainer">
        <h1>
          Would you like to add a Property or update contents in Property?
        </h1>
        <button
          classname=""
          onClick={() => {
            setCurrentPage("addProperty");
          }}
        >
          Add a Property
        </button>
        <button classname="" onClick={() => {setCurrentPage("updateExisting")}}>
          update contents in existing Property
        </button>
      </div>
    );
  }
  if (currentPage === "addProperty") {

    return (
      <form className="mb-3">
        {/* here adds a new property */}
        <input className="addPropName" type="input"></input>
        <input className="addEstimatedValue" type="input"></input>
        <input className="addPPR" type="input"></input>
        <input className="addPurchasedDate" type="input"></input>
        <input className="addLocation" type="input"></input>
        <input className="addPolicy" type="input"></input>
        <input type="submit" onClick={(e) => {e.preventDefault()}}></input>
      </form>
    );
  }
  if (currentPage === "updateExisting") {
    const array = ["practice","example"];
    array.forEach((element) => {
      return (
        <form className="mb-3">{/* view current listing and update */}
        <div>
          {element}
        </div>
        </form>
      );
  
    });
  }
};
export default AddAsset;
