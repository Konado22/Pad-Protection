import React, { useState } from "react";
import Navbar from "./navbar";
import Homepage from "../pages/homepage/homepage";
import UserDashboard from "../pages/userDashboard/userDashboard";
import AddItems from "../pages/addItems/addItems";

export const MainContainer = () => {
  const [currentPage, setCurrentPage] = useState("homepage");
  const thisPage = () => {
    if (currentPage === "homepage") {
      return (
        <>
          <Route path="/homepage">
            <Homepage />
          </Route>
        </>
      );
    }
    if (currentPage === "userDashboard") {
      return (
        <>
          <Route path="/userDashboard">
            <UserDashboard />
          </Route>
        </>
      );
    }
    if (currentPage === "addItems") {
      return (
        <>
          <Route path="/addItems">
            <AddItems />
          </Route>
        </>
      );
    }
  };
  return (
    <div>
      <navbar />
      <MainContainer />
      <footer />
    </div>
  );
};
