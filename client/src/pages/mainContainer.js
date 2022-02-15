import React, { useState } from "react";
import { BrowserRouter as Route } from 'react-router-dom';
import Navbar from "../components/navbar";
import Footer from '../components/footer'
import Homepage from "./homepage";
import UserDashboard from "../pages/userDashboard/userDashboard";
import Assets from '../pages/assets'

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
            <Navbar />
            <UserDashboard />
            <Footer />
          </Route>
        </>
      );
    }
    if (currentPage === "Assets") {
      return (
        <>
          <Route path="/assets">
            < Navbar />
            <Assets />
            <Footer />
          </Route>
        </>
      );
    }

    
  };
  return (
    <div>
      <MainContainer />
    </div>
  );
};
