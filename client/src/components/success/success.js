export const Success = () => {
  return (
    <div>
      <h1>The request was successful</h1>
      <button className="btn btn-secondary" onClick={ () => {
        res.render('landingPage')
      }}>
        <h2>To dashboard</h2>
      </button>
      <button className="btn btn-secondary" >
        <h2 onClick={() =>{
        req.session.destroy();
        res.render("landingPage")
      }}>logout</h2>
      </button>
    </div>
  );
};
