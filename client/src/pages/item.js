import React, {useState} from "react";
// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import {
  Card,
  Modal,
  Tab,
  Form,
  Jumbotron,
  Container,
  CardColumns,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { UPDATE_ITEM, DEL_ITEM } from "../utils/mutations";
import { GET_ITEM } from "../utils/queries";

const Item = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { itemId } = useParams();

  const { loading, data } = useQuery(GET_ITEM, {
    // pass URL parameter
    variables: { _id: itemId },
  });

  const Item = data?.item || {};
  console.log(Item);
 
  const [formState, setFormState] = useState({
    itemName: "",
    itemCategory: "",
    itemValue: 0,
    itemPurchasedDate: "",
  });
  const [updateItem, { error }] = useMutation(UPDATE_ITEM);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(formState)
    if (name === "itemValue") {
      setFormState({
        ...formState,
        [name]: parseInt(value),
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await updateItem({
        variables: { ...formState },
      });
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="login">
        <div className="">
          <div className="signup">
            <h4 className="title">Update Item</h4>
            <div className="card-body">
              {data ? (
                <p>Success!</p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Item Name"
                    name="itemName"
                    type="text"
                    value={formState.itemName}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Item Category"
                    name="itemCategory"
                    type="text"
                    value={formState.itemCategory}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Value"
                    name="itemValue"
                    type="number"
                    value={formState.itemValue}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Purchased Date"
                    name="itemPurchasedDate"
                    type="text"
                    value={formState.itemPurchasedDate}
                    onChange={handleChange}
                  />

                  <button
                    className="btn btn-block btn-primary"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Item;
