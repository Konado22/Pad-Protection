import React, { useState } from "react";
const [currentPage, setCurrentPage] = useState("default");

export const addAsset = () => {
  if (currentPage === "default") {
    return (
      <div className="addAssetContainer">
          <h1>
            Would you like to add a Property or update contents in Property?
          </h1>
          <button classname='' onClick={setCurrentPage("addProperty")}>
            add a Property
          </button>
          <button classname='' onClick={setCurrentPage("updateExisting")}>
            update contents in existing Property
          </button>
      </div>
    );
  }
  if (currentPage === "addProperty") {
    <form></form>;
  }
  if (currentPage === "updateExisting") {
    <form></form>;
  }
};
