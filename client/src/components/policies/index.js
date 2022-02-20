import React from "react";
import "./style.css";

function Policies(props) {
  return (
    <div class="col-md-12 col-lg-5">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Your Policies</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive ps">
            <table class="tablesorter table">
              <thead class="text-primary">
                <tr>
                  <th>Provider</th>
                  <th>Location</th>
                  <th>Policy Number</th>
                  <th class="text-center">Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Geico</td>
                  <td>CO</td>
                  <td>23232</td>
                  <td class="text-center">$36,738</td>
                </tr>
                <tr>
                  <td>StateFarm</td>
                  <td>AL</td>
                  <td>45703</td>
                  <td class="text-center">$23,789</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary">
              +Add Policy
            </button>
            <button type="button" className="btn btn-primary ms-2">
              View Policies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policies;
