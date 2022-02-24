import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import "./style.css";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

let labels = [];
let dataSet = [];
const state = {
  labels: labels,
  datasets: [
    {
      label: "Room Spend",
      fill: false,
      lineTension: 4.5,
      backgroundColor: "rgb(22,25,48)",
      borderColor: "rgba(119,52,169)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(119,52,169,.4)",
      hoverBorderColor: "rgba(119,52,169,.4)",
      data: dataSet,
    },
  ],
};

const BarChart = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.user || {};
  console.log(userData);

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  if (userData.assets.length) {
    userData.assets[0].rooms.map((room) => {
      labels.push(room.name);
      dataSet.push(room.value);
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
          <div>
            <h4 className="text-center">Rooms</h4>
          </div>
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div className="bgrd">
                <Bar data={state} width="400px" className="mt-5" />
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
