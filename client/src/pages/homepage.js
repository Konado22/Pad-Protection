export const Homepage = () => {
  const user = req.session.user;
  if (req.session===loggedIn){
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
              <button>+ Add Home</button>
              <img>pic for attention</img>
            </div>
            <div className="policies">
              <input type={checkbox}></input>
              <p>company</p>
              <input type={checkbox}></input>
              <p>company</p>
            </div>
            <div className="rooms">
              <h1>room1</h1>
              <h1>room2</h1>
              <h1>room3</h1>
              <h1>room4</h1>
            </div>
            <div className="popularProviders">
              <h1></h1>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    );
  
  }
  else {
    //non logged-in render page
  }
};
