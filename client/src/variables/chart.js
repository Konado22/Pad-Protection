import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { GET_ME } from "../utils/queries";
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import "./style.css";

let labels = [];
let dataSet = [];

const state = {
  labels: labels,
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 4.5,
      backgroundColor: "rgb(22,25,48)",
      borderColor: "rgba(119,52,169)",
      borderWidth: 2,
      data: dataSet,
    },
  ],
};

const App = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.user || {};
  console.log(userData);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  let coverage = 0;
  if (userData.assets.length) {
    userData.assets.map((asset) => {
      coverage = coverage + asset.ppr;
      labels.push(asset.name);
      dataSet.push(asset.ppr);
    });
    labels = [];
    dataSet = [];
  } else {
    labels = [];
    dataSet = [];
  }

  return (
    <div class="col-xl-4 col-md-5 mb-5 ">
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div className="bgrd">
                <Doughnut data={state} width="220px" />
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
            </div>
            <div class="col-auto mt-5">
              <h4>Coverage: {coverage}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
