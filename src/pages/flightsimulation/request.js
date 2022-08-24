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
import map from "../../assets/images/map.png";
import fullscreen from "../../assets/images/fullscreen.png";
import date from "../../assets/images/Date.svg";
import Time from "../../assets/images/Time.svg";
import flights from "../../assets/images/Flights.svg";
import area from "../../assets/images/Area.svg";
import distance from "../../assets/images/Distance.svg";
import altitude from "../../assets/images/Altitude.svg";
import airspace from "../../assets/images/Airspace.svg";
import drone2 from "../../assets/images/Drone-2.svg";

// Drone Styles
import "../drone/_drone.scss";
import "./flight.scss";

const Request = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="m-0 dashboard-head">
        <Col xs={2} xl={2} className="text-center">
          <Logo size="lg" className="test" />
        </Col>
        <Col xs={10} xl={10} className="bread-crumb">
          <Text title="Dashboard" className="" />/
          <Text title="Drones" className="" />/
          <Text title="New Request" className="" />
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
        <Col xs={5} xl={5} className="map-wrap">
          <Wrap className="map-section">
            <Image src={map} />
            <Image src={fullscreen} className="full-scrn" />
          </Wrap>
        </Col>
        <Col xs={5} xl={5} className="content-body ps-2">
          <Form>
            <Text title="Primary Information" className="form-title" />
            <Row className="">
              <Form.Group className="mb-4 input-icon col-lg-6">
                <Form.Control type="text" placeholder="Start Date" />
                <Image src={date} className="input-img" />
              </Form.Group>
              <Form.Group className="mb-4 input-icon col-lg-6">
                <Form.Control type="text" placeholder="Start Time" />
                <Image src={Time} className="input-img" />
              </Form.Group>
              <Form.Group className="mb-4 input-icon col-lg-6 range-part">
                <Wrap className="d-flex justify-content-between">
                  <Form.Label>Duration</Form.Label>
                  <Form.Label>180</Form.Label>
                </Wrap>
                <Form.Range />
              </Form.Group>
              <Form.Group className="mb-4 input-icon col-lg-6">
                <Form.Control type="text" placeholder="Coordinates" />
                <Image src={area} className="input-img" />
              </Form.Group>
              <Form.Group className="mb-4 input-icon col-lg-6">
                <Form.Control type="text" placeholder="Max Altitude" />
                <Image src={altitude} className="input-img" />
              </Form.Group>
              <Form.Group className="mb-4 input-icon select-arrow col-lg-6">
                <Form.Select aria-label="Default select">
                  <option>Corridor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Image src={distance} className="input-img" />
              </Form.Group>
              <Text title="Other Information" className="form-title" />
              <Form.Group className="mb-4 input-icon select-arrow col-lg-6">
                <Form.Select aria-label="Default select">
                  <option>Flight Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Image src={flights} className="input-img" />
              </Form.Group>
              <Form.Group className="mb-4 input-icon select-arrow col-lg-6">
                <Form.Select aria-label="Default select">
                  <option>LOS</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Image src={airspace} className="input-img" />
              </Form.Group>
              <Form.Group className="mb-4 input-icon select-arrow col-lg-6">
                <Form.Select aria-label="Default select">
                  <option>Drone Name</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Image src={drone2} className="input-img" />
              </Form.Group>
            </Row>
            <Col className="mt-4 btn-part">
              <Button variant="primary" type="submit" className="me-4">
                Submit Application
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

export default Request;
