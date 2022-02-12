import React, { useState } from "react";
import { userDashboard } from "./userDashboard/userDashboard";
import navbar from "./navbar"
import homepage from "";
import userDashboard from "./userDashboard";
import addItems from "";

export const MainContainer = () => {
  const [currentPage, setCurrentPage] = useState("homepage");
  const thisPage = () => {
    if (currentPage === "homepage") {
      return <homepage />;
    }
    if (currentPage === "userDashboard") {
      return <userDashboard />;
    }
    if (currentPage === "addItems") {
      return <addItems />;
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
