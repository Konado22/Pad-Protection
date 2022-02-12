import { userDashboard } from "../userDashboard/userDashboard"

export const Login = (name, email, password) => {
    if(session===loggedIn) {
        return(
       <userDashboard />
        )
    }
    else {
        <div>
            <form className="login">
                <input type={email} placeholder=""></input>
            </form>
        </div>
    }

}