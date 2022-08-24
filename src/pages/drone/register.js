import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

// Astra Components
import Logo from "../../components/logo/logo";
import Heading from "../../components/heading/heading";
import Text from "../../components/text/text";
import Wrap from "../../components/wrapper/wrap";

//images
import Dashboardimg from "../../assets/images/Dashboard.svg";
import Droneimg from "../../assets/images/Drone.svg";
import Droneactive from "../../assets/images/Drone-active.svg";
import profilepic from "../../assets/images/profile-pic.png";
import settings from "../../assets/images/setting.svg";
import logout from "../../assets/images/Logout.svg";
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
      <Row className="m-0 dashboard-head">
        <Col xs={2} xl={2} className="text-center">
          <Logo size="lg" className="test" />
        </Col>
        <Col xs={10} xl={10} className="bread-crumb">
          <Text title="Dashboard" className="" />/
          <Text title="Drones" className="" />/
          <Text title="Register New Drone" className="" />
        </Col>
      </Row>
      <Row className="m-0 dashboard-body">
        <Col
          xs={2}
          xl={2}
          className="text-center sidebar-left d-flex flex-column justify-content-between p-0"
        >
          <Wrap className="main-top">
            <Wrap className="side-menu not-selected">
              <Wrap className="width-min">
                <Image src={Dashboardimg} />
              </Wrap>
              <Text title="Dashboard" className="width-2" />
            </Wrap>
            <Wrap className="side-menu">
              <Wrap className="width-min">
                <Image src={Droneactive} />
              </Wrap>
              <Text title="Drone" className="width-2" />
              <Badge className="primary-badge">5</Badge>
            </Wrap>
            <Wrap className="side-menu not-selected">
              <Wrap className="width-min">
                <Image src={Droneimg} />
              </Wrap>
              <Text title="Drone Flight Permission" className="width-2" />
              <Badge className="primary-badge">150</Badge>
            </Wrap>
          </Wrap>
          <Wrap className="main-bottom">
            <Wrap className="profile-part">
              <Image src={profilepic} />
              <Wrap className="right-part">
                <Text title="Fred Wallen" />
                <Text title="email@email.com" />
              </Wrap>
            </Wrap>
            <Wrap className="menu-icon">
              <Image src={settings} />
              <Text title="Settings" />
            </Wrap>
            <Wrap className="menu-icon">
              <Image src={logout} />
              <Text title="Logout" />
            </Wrap>
          </Wrap>
        </Col>
        <Col xs={10} xl={10} className="content-body">
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
                <Form.Control type="text" placeholder="RPAS Serial Number" />
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
    </Container>
  );
};

export default Register;
