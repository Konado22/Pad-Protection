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

import { GET_ROOM } from "../utils/queries";
import { DEL_ITEM } from "../utils/mutations";
import AddItem from "../components/addItems/addItems";

const Room = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { roomId } = useParams();

  const { loading, data } = useQuery(GET_ROOM, {
    // pass URL parameter
    variables: { _id: roomId },
  });
  const room = data?.room || {};

  const [removeItem, {error}] = useMutation(DEL_ITEM);
  console.log(room);
  if (loading) {
    return <div>Loading...</div>;
  }
   
  const handleDeleteItem = async (_id) => {
      
      try {
        const { data } = await removeItem({
          variables: { _id },
        });
      } catch (err) {
        console.error(err);
      }
  };
  if (loading) {
    return <h2>LOADING...</h2>;
  };

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
                      <Button className='btn-block btn-danger' onClick={() => handleDeleteItem(item._id)}>
                      Delete
                      </Button>
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
