//this page is follow up render for Add home button from homepage, state will dictate the questions being asked to the user
//  can use user params to provide responses to database for update,create
import './addAsset.css'
import React, { useState } from "react";
import { useMutation } from '@apollo/client';
// import {add_asset} from "?"


const AddAsset = () => {
  const [currentPage, setCurrentPage] = useState("default");

  if (currentPage === "default") {
    return (
      <div className="addAssetContainer">
        <h1>
          Would you like to add a Property or update contents in Property?
        </h1>
        <button
          onClick={() => {
            setCurrentPage("addProperty");
          }}
        >
          Add a Property
        </button>
        <button className="" onClick={() => {setCurrentPage("updateExisting")}}>
          update contents in existing Property
        </button>
      </div>
    );
  }
  if (currentPage === "addProperty") {
  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setUserFormData({ ...userFormData, [name]: value });
  //   };

  // const handleFormSubmit = async (event) => {
  //     event.preventDefault();
  // }
      
  // const form = event.currentTarget;
  // if (form.checkValidity() === false) {
  //   event.preventDefault();
  //   event.stopPropagation();
  // }
  // console.log(userFormData)
  // setItemFormData({
  //     username: "",
  //     email: "",
  //     password: "",
  // })

    return (
      <div>
      <form className="mb-3" style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
        {/* here adds a new property */}
        <label> Property Name:<input className="addPropName" type="input"></input></label>
        <label>Estimated Value:<input className="addEstimatedValue" type="input"></input></label>
        <label>Personal Property Recomendation:<input className="addPPR" type="input"></input></label>
        <label>Date Purchased:<input className="addPurchasedDate" type="input"></input></label>
        <label>Location:<input className="addLocation" type="input"></input></label>
        <label>Policy: <input className="addPolicy" type="input"></input></label>
        <input type="submit" onClick={(e) => {e.preventDefault()}}></input>
      </form>
      </div>
    );
  }
  if (currentPage === "updateExisting") {
    const array = [{ name:"practice",value:200}];
    array.forEach((element) => {
      return (
        <div>
          <div className="card">
          <h2>{element.name}</h2>
          <h2>{element.value}</h2>
          <button>Edit</button>
          </div>
            
        </div>
      );
  
    });
  }
};
export default AddAsset;
