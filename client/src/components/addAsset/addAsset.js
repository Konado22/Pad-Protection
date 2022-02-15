//this page is follow up render for Add home button from homepage, state will dictate the questions being asked to the user
//  can use user params to provide responses to database for update,create

import React, { useState } from "react";
const [currentPage, setCurrentPage] = useState("default");

export const addAsset = () => {
  if (currentPage === "default") {
    return (
      <div className="addAssetContainer">
        <h1>
          Would you like to add a Property or update contents in Property?
        </h1>
        <button classname="" onClick={setCurrentPage("addProperty")}>
          Add a Property
        </button>
        <button classname="" onClick={setCurrentPage("updateExisting")}>
          update contents in existing Property
        </button>
      </div>
    );
  }
  if (currentPage === "addProperty") {
    <form className="mb-3">
{/* here adds a new property */}
    </form>;
  }
  if (currentPage === "updateExisting") {
    <form className="mb-3">
    {/* view current listing and update */}
    </form>;
  }
};
