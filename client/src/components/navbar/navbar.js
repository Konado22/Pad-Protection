
import React, { useState } from "react";
import { BrowserRouter as Route } from "react-router-dom";
//need to add state changes to change page rendering

export const Navbar = (userObj) => {
  if (req.session ==!loggedIn)
    return (
      <div>
        <div className="primary">
        <div className="fixedLogo">
          <h1>Pad Protection</h1>
          <img>logo here</img>
          {/* background css to fill space  */}
          </div>
          <div className="navbar">
            <Route path="/homepage">
              <h2>Home</h2>
            </Route>
            <Route path="/policy">
              <h2>Policy</h2>
            </Route>
            <Route path="/assets">
              <h2>Assets</h2>
            </Route>
            <Route path="/login">
              <h2>Login</h2>
            </Route>
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
          <h2 onMouseOver={(style.backgroundColor = "grey")}>Home</h2>
          <h2 onMouseOver={(style.backgroundColor = "grey")}>Policy</h2>
          <h2 onMouseOver={(style.backgroundColor = "grey")}>Assets</h2>
          <h2 onMouseOver={(style.backgroundColor = "grey")}>Logout</h2>

        </div>
      </div>
    );
  }
};
