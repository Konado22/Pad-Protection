import React from "react";
import "./style.css";

function Providers(props) {
  return (
    <div class="col-xl-6 col-md-6 body mb-5">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Providers in your Area</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive ps">
            <table class="tablesorter table">
              <thead class="text-primary">
                <tr>
                  <th></th>
                  <th>Provider</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="./images/sfLogo.png"
                      alt="sflogo"
                      width="70px"
                    ></img>
                  </td>
                  <td>StateFarm</td>
                  <td>AL</td>
                  <td class="text-center">
                    <button type="button" className="btn btn-primary">
                      <a href="https://www.statefarm.com/insurance/quotes">
                        {" "}
                        Get Quote
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="./images/geico.png"
                      alt="geicoImg"
                      width="70px"
                    ></img>
                  </td>
                  <td>Geico</td>
                  <td>CO</td>
                  <td class="text-center">
                    <button type="button" className="btn btn-primary">
                      <a href="https://www.geico.com/homeowners-insurance/">
                        {" "}
                        Get Quote
                      </a>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Providers;
