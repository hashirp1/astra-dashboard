import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// Astra Components
import Text from "../../components/text/text";
import Wrap from "../../components/wrapper/wrap";
import Sidebar from "../../components/sidebar/sidebar";

//images
import manufacturer from "../../assets/images/Manufacturer.svg";
import lines from "../../assets/images/Lines.svg";
import hash from "../../assets/images/Hash.svg";
import date from "../../assets/images/Date.svg";
import typeimg from "../../assets/images/Type.svg";
import drone2 from "../../assets/images/Drone-2.svg";

// Drone Styles
import "./_drone.scss";

const Register = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="m-0 ">
        <Sidebar />
        <Col xs={10} xl={10} className="dashboard-head p-0">
          <Wrap className="bread-crumb">
            <Text title="Dashboard" className="" />/
            <Text title="Drones" className="" />/
            <Text title="Register New Drone" className="" />
          </Wrap>
          <Row className="m-0 dashboard-body">
            <Col xs={12} xl={12} className="content-body">
              <Form>
                <Row className="justify-content-center">
                  <Form.Group className="mb-4 input-icon select-arrow col-lg-5">
                    <Form.Select aria-label="Default select">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Image src={manufacturer} className="input-img" />
                  </Form.Group>
                  <Form.Group className="mb-4 input-icon select-arrow col-lg-5">
                    <Form.Select aria-label="Default select">
                      <option>RPAS Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Image src={typeimg} className="input-img" />
                  </Form.Group>
                  <Form.Group className="mb-4 input-icon col-lg-5">
                    <Form.Control type="text" placeholder="Model Name" />
                    <Form.Text className="text-muted">
                      Model Name is required field
                    </Form.Text>
                    <Image src={lines} className="input-img" />
                  </Form.Group>
                  <Form.Group className="mb-4 input-icon col-lg-5">
                    <Form.Control type="text" placeholder="Commission Date" />
                    <Image src={date} className="input-img" />
                  </Form.Group>
                  <Form.Group className="mb-4 input-icon  col-lg-5">
                    <Form.Control
                      type="text"
                      placeholder="RPAS Serial Number"
                    />
                    <Image src={hash} className="input-img" />
                  </Form.Group>

                  <Form.Group className="mb-4 input-icon  col-lg-5">
                    <Form.Control type="text" placeholder="Drone Name" />
                    <Image src={drone2} className="input-img" />
                  </Form.Group>
                </Row>
                <Col xl={{ offset: 1 }} className="mt-4 btn-part">
                  <Button variant="primary" type="submit" className="me-4">
                    SAVE
                  </Button>
                  <Button variant="secondary" type="submit">
                    CANCEL
                  </Button>
                </Col>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
