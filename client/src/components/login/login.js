import Loading from ''
export const Login = (name, email, password) =>  {
    if(loading){
        return (
            <div>
                <loading />
            </div>
        )
    }
        <div>
            <form className="login">
                <input type={email} placeholder="email"></input>
                <input type={password} placeholder= "password"></input>
                <input classname="btn btn-secondary" onMouseOver={} type={submit}>Submit</input>
            </form>
        </div>
    }

