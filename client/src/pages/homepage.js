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
// import React from "react";
// import { Link } from "react-router-dom";

// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../utils/queries";

// function Assets() {
//   const { data } = useQuery(QUERY_USER);
//   let user;

//   if (data) {
//     user = data.user;
//   }

//   return (
//     <>
//       <div className="container my-1">
//         <Link to="/">← Back to Products</Link>

//         {user ? (
//           <>
//             <h2>
//               Order History for {user.firstName} {user.lastName}
//             </h2>
//             {user.assets.map((asset) => (
//               <div key={asset._id} className="my-2">
//                 <h3>{asset.name}</h3>
//                 {/* <div className="flex-row">
//                   {assets.products.map(({ _id, image, name, price }, index) => (
//                     <div key={index} className="card px-1 py-1">
//                       <Link to={`/products/${_id}`}>
//                         <img alt={name} src={`/images/${image}`} />
//                         <p>{name}</p>
//                       </Link>
//                       <div>
//                         <span>${price}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div> */}
//               </div>
//             ))}
//           </>
//         ) : null}
//       </div>
//     </>
//   );
// }

// export default Assets;
