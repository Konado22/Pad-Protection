    //showing each asset(property) then providing accordian to show contents of property
    //use .map to iterate over objects, return each object in list import information in const
    import React, { useState } from "react";
const AssetCard = () => {
    const [currentPage,setCurrentPage] = useState("short");
    if (currentPage==='short'){
        return(
            <div className="card border-secondary mb-3">
            <h2 className="card-header">property</h2>
            <h2 className="card-body text-secondary">cost</h2>
            <button className="accordion accordion-flush" onClick={() => {setCurrentPage("long")}}>more</button>
        </div>

        )
    }
if (currentPage==='long') {
    // array.forEach(element => {
        
    // });
    return(
        <div>
            <h2>a</h2>
            <h2>b</h2>
            <h3>c</h3>
            <h3>d</h3>
        </div>
        )
}
    
}
export default AssetCard