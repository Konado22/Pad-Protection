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
                <input type={email} placeholder="email"></input>
                <input type={password} placeholder= "password"></input>
                <input type={submit}>Submit</input>
            </form>
        </div>
    }

}