//this page is follow up render for Add home button from homepage, state will dictate the questions being asked to the user
//  can use user params to provide responses to database for update,create
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import {add_asset, update_asset} from "?"
import { ADD_ROOM } from "../../utils/mutations";

const AddRoom = () => {
  const [formState, setFormState] = useState({
    name: "",
    value: 0,
  });
  const [addRoom, { error, data }] = useMutation(ADD_ROOM);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addRoom({
        variables: { name: formState.name, value: formState.value },
      });
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <main className="login">
        <div className="">
          <div className="signup">
            <h4 className="title">Create Room</h4>
            <div className="card-body">
              {data ? (
                <p>Success!</p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Room Name"
                    name="name"
                    type="text"
                    value={formState.name}
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
export default AddRoom;
