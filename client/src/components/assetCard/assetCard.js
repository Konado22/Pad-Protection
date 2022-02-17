    //showing each asset(property) then providing accordian to show contents of property
    //use .map to iterate over objects, return each object in list import information in const
    import React, { useState } from "react";
    const [currentPage,setCurrentPage] = useState("short");
export const assetCard = () => {
    if (currentPage==='short'){
        <div className="card border-secondary mb-3">
            <h2 className="card-header">{property}</h2>
            <h2 className="card-body text-secondary">{cost}</h2>
            <p className="accordion accordion-flush" onClick={setCurrentPage("long")}>more</p>
        </div>
    }
if (currentPage==='long') {
    return(
        <div>
            <h2></h2>
            <h2></h2>
            <h3></h3>
            <h3></h3>
        </div>
        )
}
    
}