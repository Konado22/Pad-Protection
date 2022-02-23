//this page is follow up render for Add home button from homepage, state will dictate the questions being asked to the user
//  can use user params to provide responses to database for update,create
import "./addAsset.css";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import {add_asset, update_asset} from "?"
import { ADD_ASSET } from "../../utils/mutations";

const AddAsset = () => {
  const [formState, setFormState] = useState({
    name: "",
    estimatedValue: 0,
    ppr: 0,
    purchasedDate: " ",
    location: "",
  });
  const [addAsset, { error, data }] = useMutation(ADD_ASSET);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    if (name === "estimatedValue") {
      setFormState({
        ...formState,
        [name]: parseInt(value),
      });
    } else if (name === "ppr") {
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
      const { data } = await addAsset({
        variables: { ...formState },
      });
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <main className="login top-level4">
        <div className="">
          <div className="signup ">
            <h4 className="title">Create Asset</h4>
            <div className="card-body">
              {data ? (
                <p>Success!</p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Property Name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Estimated Value"
                    name="estimatedValue"
                    type="number"
                    value={formState.estimatedValue}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="recommended value"
                    name="ppr"
                    type="number"
                    value={formState.ppr}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="purchasedDate"
                    name="purchasedDate"
                    type="text"
                    value={formState.purchasedDate}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    default="location"
                    name="location"
                    type="profile"
                    value={formState.location}
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
export default AddAsset;
