import React, { useState, useQuery } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import App from "./stripe";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profile: "Homeowner",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <main className="login">
        <div className="">
          <div className="signup">
            <h4 className="title">Great! Create your login</h4>
            <div className="card-body">
              {data ? (
                <p>
                  Success! You may now head{" "}
                  <Link to="/dashboard">to the dashboard.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Your first name"
                    name="firstName"
                    type="text"
                    value={formState.firstName}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Your last name"
                    name="lastName"
                    type="text"
                    value={formState.lastName}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <select
                    className="form-input"
                    default="Homeowner/investor"
                    name="profile"
                    type="profile"
                    value={formState.profile}
                    onChange={handleChange}
                  >
                    <option>Homeowner</option>
                    <option>RealEstate Investor</option>
                  </select>

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

export default Signup;
