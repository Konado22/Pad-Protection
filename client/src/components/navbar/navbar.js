export const Navbar = (userObj) =>{
    if (session===!loggedIn)
    return(
        <div>
            <h1>Pad Protection</h1>
        <img>logo here</img>
        {/* background css to fill space  */}
        <div className="navbar">
            <h2>Signup</h2>
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
            <h2>My Profile</h2>
            <h2>My Assets</h2>
            <h2>Schedule with us</h2>
        </div>
        </div>

        )
    }
}