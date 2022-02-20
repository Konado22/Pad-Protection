import React from "react";
// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Card,
  Modal,
  Tab,
  Form,
  Jumbotron,
  Container,
  CardColumns,
  Button,
} from "react-bootstrap";

import { GET_ASSET } from "../utils/queries";

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { homeId } = useParams();

  const { loading, data } = useQuery(GET_ASSET, {
    // pass URL parameter
    variables: { _id: homeId },
  });

  const asset = data?.asset || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="my-3">
        <h3 className="card-header bg-dark text-light p-2 m-0">
          {asset.name} <br />
          <span style={{ fontSize: "1rem" }}>
            had this asset on {asset.estimatedValue}
          </span>
        </h3>
        <div className="bg-light py-4"></div>
      </div>
      <Container className="row">
        <h4>
          {asset.length
            ? `Viewing ${asset.length} saved ${
                asset.length === 1 ? "room" : "rooms"
              }:`
            : "You have no rooms!"}
        </h4>
        <div className="row">
          {asset.rooms.map((room) => {
            return (
              <>
                <Card key={room._id} border="dark" className="homeBody">
                  <i class="fa-solid fa-door-open fa-3x mt-4"></i>
                  <Card.Body>
                    <Card.Title>{room.name}</Card.Title>
                    <p className="small">Estimated Value: {room.value}</p>
                    {room.items.map((item) => {
                      return (
                        <Card.Body>
                          <Card.Text>Item Name: {item.itemName}</Card.Text>
                          {/* <Card.Text>{item.itemCategory}</Card.Text>
                          <Card.Text>{itemValue}</Card.Text> */}
                        </Card.Body>
                      );
                    })}
                    {/* <Card.Text>Location: {room.location}</Card.Text>
                    <Card.Text>
                      Personal Property Recommendation: {room.ppr}
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default SingleThought;
