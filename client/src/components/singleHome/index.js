import React from "react";
import { Link } from "react-router-dom";

import { Card, Container } from "react-bootstrap";

const Assets = ({ homes, title, showTitle = true, showUsername = true }) => {
  console.log(homes);
  if (!homes.length) {
    return <h3>No Homes Yet</h3>;
  }

  return (
    <>
      <div className="container-fluid top-level">
        <div className="d-flex text-center">
          <h3 className="mt-3">Homes</h3>
          <button type="button" className="btn btn-primary mt-2">
            Add Home
          </button>
        </div>
        <Container className="row">
          <h4>
            {homes.length
              ? `Viewing ${homes.length} saved ${
                  homes.length === 1 ? "home" : "homes"
                }:`
              : "You have no homes!"}
          </h4>
          <div className="row">
            {homes.map((asset) => {
              return (
                <>
                  <Card key={asset._id} border="dark" className="homeBody">
                    <Link
                      className="btn btn-primary btn-block btn-squared"
                      to={`/home/${asset._id}`}
                    >
                      Join the discussion on this thought.
                    </Link>
                    <i class="fa-solid fa-house-chimney fa-4x mt-4"></i>
                    <Card.Body>
                      <Card.Title>{asset.name}</Card.Title>
                      <p className="small">
                        Estimated Value: {asset.estimatedValue}
                      </p>
                      <Card.Text>Location: {asset.location}</Card.Text>
                      <Card.Text>
                        Personal Property Recommendation: {asset.ppr}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Assets;
