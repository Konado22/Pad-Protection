import React from "react";
// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
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
import { REMOVE_ITEM } from "../utils/mutations";
import { GET_ROOM } from "../utils/queries";

import AddItem from "../components/addItems/addItems";

const Room = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { roomId } = useParams();

  const { loading, data } = useQuery(GET_ROOM, {
    // pass URL parameter
    variables: { _id: roomId },
  });

  const room = data?.room || {};
  console.log(room);
  const [removeItem, { data2 }] = useMutation(REMOVE_ITEM);

  const handleDelete = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(value);
    try {
      const { data2 } = await removeItem({
        variables: { _id: value },
      });
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="top-level">
        <div className="my-3 top">
          <h3 className="card-header bg-dark text-light p-2 m-0">
            {room.name} <br />
            <span style={{ fontSize: "1rem" }}>
              Estimated Value {room.value}
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
            {room.items.map((item) => {
              return (
                <>
                  <Card key={item._id} border="dark" className="homeBody">
                    <i class="fa-solid fa-door-open fa-3x mt-4"></i>
                    <Card.Body>
                      <Card.Title>{item.itemName}</Card.Title>
                      <Card.Text>Category: {item.itemCategory}</Card.Text>
                      <Card.Text>Value: {item.itemValue}</Card.Text>
                      <Link
                        className="btn btn-primary btn-block btn-squared"
                        to={`/item/${item._id}`}
                      >
                        Update Item
                      </Link>
                      <button
                        className="btn btn-primary btn-block btn-squared"
                        value={`${item._id}`}
                        onClick={handleDelete}
                      >
                        Delete Item
                      </button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </Container>
        <AddItem />
      </div>
    </>
  );
};

export default Room;
