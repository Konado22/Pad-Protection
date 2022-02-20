//this page is follow up render for Add home button from homepage, state will dictate the questions being asked to the user
//  can use user params to provide responses to database for update,create
import "./addAsset.css";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Card, Form } from "react-bootstrap";
// import {add_asset, update_asset} from "?"

const AddAsset = () => {
  const [currentPage, setCurrentPage] = useState("default");

  if (currentPage === "default") {
    return (
      <>
        <div className="container-fluid top-level text-center">
          <h3>
            Would you like to add a Property or update contents in Property?
          </h3>
          <Card className="addAssetContainer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setCurrentPage("addProperty");
              }}
            >
              Add a Property
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setCurrentPage("updateExisting");
              }}
            >
              Update contents in existing Property
            </button>
          </Card>
        </div>
      </>
    );
  }
  if (currentPage === "addProperty") {
    return (
      <Card className="top-level2">
        <Form
          className="mb-3"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* here adds a new property */}
          <Form.Label>
            {" "}
            Property Name:
            <Form.Control className="PropName" type="input"></Form.Control>
          </Form.Label>
          <Form.Label>
            Estimated Value:
            <Form.Control
              className="EstimatedValue"
              type="input"
            ></Form.Control>
          </Form.Label>
          <Form.Label>
            Personal Property Recomendation:
            <Form.Control className="PPR" type="input"></Form.Control>
          </Form.Label>
          <Form.Label>
            Date Purchased:
            <Form.Control className="PurchasedDate" type="input"></Form.Control>
          </Form.Label>
          <Form.Label>
            Location:
            <Form.Control className="Location" type="input"></Form.Control>
          </Form.Label>
          <Form.Label>
            Policy:{" "}
            <Form.Control className="Policy" type="input"></Form.Control>
          </Form.Label>
          <Form.Control
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          ></Form.Control>
        </Form>
      </Card>
    );
  }
  if (currentPage === "updateExisting") {
    const array = [{ name: "practice", value: 200 }];
    array.forEach((element) => {
      return (
        <div>
          <Card>
            <h2>{element.name}</h2>
            <h2>{element.value}</h2>
            <button>Edit</button>
          </Card>
        </div>
      );
    });
  }
};
export default AddAsset;
