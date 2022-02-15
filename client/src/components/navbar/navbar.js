import React, { useState } from "react";
//need to add state changes to change page rendering

export const Navbar = (userObj) => {
  if (session == !loggedIn)
    return (
      <div>
        <div className="primary">
          <h1>Pad Protection</h1>
          <img>logo here</img>
          {/* background css to fill space  */}
          <div className="navbar">
            <h2>Home</h2>
            <h2>Policy</h2>
            <h2>Assets</h2>
            <h2>Login</h2>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div className="primary">
        <div className="fixedLogo">
          <h1>Pad Protection</h1>
          <img>logo here</img>
          {/* background css to fill space  */}
        </div>
        <div className="navbar">
          <h2 onMouseOver={style.backgroundColor = "grey"}>Home</h2>
          <h2 onMouseOver={style.backgroundColor = "grey"}>Policy</h2>
          <h2 onMouseOver={style.backgroundColor = "grey"}>Assets</h2>
          <h2 onMouseOver={style.backgroundColor = "grey"}>Logout</h2>
        </div>
      </div>
    );
  }
};
