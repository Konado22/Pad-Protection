import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import React, { useState } from "react";
import App from "../variables/chart";
import BarChart from "../variables/barChart";
import AddCard from "../components/addHomeCard";
import Policies from "../components/policies";
import Providers from "../components/providers";
import "../index.css";

const Dashboard = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.user || {};
  console.log(userData);

  return (
    <>
      <div className="row firstLine">
        <div>
          <h4 className="howdy ms-4">Howdy, {userData.firstName}</h4>
        </div>
      </div>
      <div className="row firstLine1">
        <App />
        <BarChart />
        <AddCard />
      </div>
      <div className="row firstLine1">
        <Policies />
        <Providers />
      </div>
    </>
  );
};

export default Dashboard;
