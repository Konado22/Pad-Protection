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
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Homes = () => {
  // configure query info
  const { loading, data } = useQuery(GET_ME);
  const [showModal, setShowModal] = useState(false);
  const userData = data?.user || {};
  console.log(userData);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div className="container-fluid top-level">
        <div className="d-flex text-center">
          <h3 className="mt-3">Homes</h3>
          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={() => setShowModal(true)}
          >
            Add Home
          </button>
        </div>
        <Container className="row">
          <h4>
            {userData.assets.length
              ? `Viewing ${userData.assets.length} saved ${
                  userData.assets.length === 1 ? "home" : "homes"
                }:`
              : "You have no homes!"}
          </h4>
          <div className="row">
            {userData.assets.map((asset) => {
              return (
                <>
                  <Card key={asset._id} border="dark" className="homeBody">
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
                      <Link
                        className="btn btn-primary btn-block btn-squared"
                        to={`/home/${asset._id}`}
                      >
                        View Home
                      </Link>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </Container>
      </div>
      {/* set modal data up */}
      <Modal
        size="sm"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="formPolicy">
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Form
                  className="mb-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* here adds a new property */}
                  <Form.Label>
                    {" "}
                    Property Name:
                    <Form.Control
                      className="PropName"
                      type="input"
                    ></Form.Control>
                  </Form.Label>
                  <Form.Label>
                    Estimated Value:
                    <Form.Control
                      className="EstimatedValue"
                      type="input"
                    ></Form.Control>
                  </Form.Label>
                  <Form.Label>
                    Personal Property Recomendation:
                    <Form.Control className="PPR" type="input"></Form.Control>
                  </Form.Label>
                  <Form.Label>
                    Date Purchased:
                    <Form.Control
                      className="PurchasedDate"
                      type="input"
                    ></Form.Control>
                  </Form.Label>
                  <Form.Label>
                    Location:
                    <Form.Control
                      className="Location"
                      type="input"
                    ></Form.Control>
                  </Form.Label>
                  <Form.Label>
                    Policy:{" "}
                    <Form.Control
                      className="Policy"
                      type="input"
                    ></Form.Control>
                  </Form.Label>
                  <Form.Control
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  ></Form.Control>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};
export default Homes;
