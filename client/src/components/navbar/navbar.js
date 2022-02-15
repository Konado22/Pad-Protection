import React, { useState } from "react";
//need to add state changes to change page rendering

export const Navbar = (userObj) =>{
    if (session==!loggedIn)
    return(
        <div>
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

        
    )
    else {
        return(
            <div>
            <h1>Pad Protection</h1>
        <img>logo here</img>
        {/* background css to fill space  */}
        <div className="navbar">
        <h2>Home</h2>
            <h2>Policy</h2>
            <h2>Assets</h2>
            <h2>Logout</h2> 
        </div>
        </div>

        )
    }
}