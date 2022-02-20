import React from "react";
import "./style.css";

function AddCard(props) {
  return (
    <div class="col-xl-3 col-md-6 body mb-5">
      <div class="card border-left-primary shadow h-100 py-2 protect2">
        <div class="card-body mt-5 ">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="">
                <h4 class="mr-2">Protect your Pad</h4>
              </div>
              <div className="buttons">
                <button type="button" class="btn btn-primary">
                  <a href="./addAsset">+Add Home</a>
                </button>
                <button type="button" class="btn btn-primary ms-3 mt-3">
                  Modify Homes
                </button>
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
            </div>
            <div class="col-auto">
              <i class="fa-solid fa-house-chimney fa-4x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
