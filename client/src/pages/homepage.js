import React, { useState } from "react";
const [currentPage, setCurrentPage] = useState("short");

export const Homepage = () => {
  const user = req.session.user;
  if (req.session === loggedIn) {
    return (
      <div>
        <div classname="homepageContainer">
          <h1>Hi {user}</h1>

          <div className="graph card">
            <h1>Coverage graph here</h1>
          </div>
          <div>
            <div className="pyp">
              <h1> Protect your Pad</h1>
              <button className="btn btn-secondary">+ Add Home</button>
              <img>pic for attention</img>
            </div>
            <div className="policies">
              <input type={checkbox}></input>
              <p>company</p>
              <input type={checkbox}></input>
              <p>company</p>
              <button>View All</button>
            </div>
            <div className="rooms">
              {setCurrentPage('short')}
              <Assets />
            </div>
            <div className="popularProviders">
              <h1></h1>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    //non logged-in render page
    return(
      <div>
        <h1>Pad Protection.this is page for non-logged-in user</h1>
      </div>
    )
  }
};
