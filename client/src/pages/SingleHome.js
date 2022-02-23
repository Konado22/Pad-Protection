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
import { Link } from "react-router-dom";

import { GET_ASSET } from "../utils/queries";
import { ADD_ROOM } from "../utils/queries";
import AddRoom from "../components/addRoom";

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
      <div className="my-3 top-level">
        <div>
          <h3 className="card-header bg-dark text-light p-2 m-0">
            {asset.name} <br />
            <span style={{ fontSize: "1rem" }}>
              Estimated Value {asset.estimatedValue}
            </span>
          </h3>
        </div>
        <Link
          className="btn btn-primary btn-block btn-squared text-right"
          to={`/homes`}
        >
          Back to Homes
        </Link>
        <Container className="row">
          <div className="row top-level2">
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
                    <Link
                      className="btn btn-primary btn-block btn-squared"
                      to={`/room/${room._id}`}
                    >
                      View Room
                    </Link>
                  </Card>
                </>
              );
            })}
          </div>
        </Container>
        <AddRoom />
      </div>
    </>
  );
};

export default SingleThought;
