//showing each asset(property) then providing accordian to show contents of property
//use .map to iterate over objects, return each object in list import information in const

import { Card } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';import React, { useState } from "react";
const AssetCard = () => {
  const [currentPage, setCurrentPage] = useState("short");
  if (currentPage === "short") {
    return (
      <Card>
        <h2 className="card-header">property</h2>
        <h2 className="card-body text-secondary">cost</h2>
        <button
          className="accordion accordion-flush"
          onClick={() => {
            setCurrentPage("long");
          }}
        >
          more
        </button>
      </Card>
    );
  }
  if (currentPage === "long") {
    // array.forEach(element => {
        // Property
        // Cost 
        // Location
        // ?
    // });
    return (

      <Card className="card border-secondary mb-3">
        <h2 className="card-header">property</h2>
        <h2 className="card-body text-secondary">cost</h2>
        {/* rooms and costs returned values from forEach loop */}
        <button
          className="accordion accordion-flush"
          onClick={() => {
            setCurrentPage("short");
          }}
        >
          less
        </button>
      </Card>
    );
  }
};
export default AssetCard;
