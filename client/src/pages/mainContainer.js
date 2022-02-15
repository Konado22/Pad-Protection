import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "../components/navbar";
import Footer from '../components/footer'
import Homepage from "../pages/homepage/homepage";
import UserDashboard from "../pages/userDashboard/userDashboard";

export const MainContainer = () => {
  const [currentPage, setCurrentPage] = useState("homepage");
  const thisPage = () => {
    if (currentPage === "homepage") {
      return (
        <>
          <Route path="/homepage">
            <Navbar />
            <Homepage />
            <Footer />
          </Route>
        </>
      );
    }
    if (currentPage === "userDashboard") {
      return (
        <>
          <Route path="/userDashboard">
            < Navbar />
            <UserDashboard />
            <Footer />
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
