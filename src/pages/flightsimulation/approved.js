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
import lines from "../../assets/images/Lines-1.svg";

// Drone Styles
import "../drone/_drone.scss";
import "./flight.scss";

const Approved = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="m-0 dashboard-head">
        <Col xs={2} xl={2} className="text-center">
          <Logo size="lg" className="test" />
        </Col>
        <Col xs={10} xl={10} className="bread-crumb">
          <Text title="Dashboard" className="" />/
          <Text title="Drones" className="" />/
          <Wrap className="btn-status d-flex align-items-center">
            <Text title="Drone Flight Permission" className="" />
            <button className="success">APPROVED</button>
          </Wrap>
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
        <Col xs={7} xl={7} className="map-wrap">
          <Wrap className="map-section">
            <Image src={map} />
            <Image src={fullscreen} className="full-scrn" />
          </Wrap>
        </Col>
        <Col xs={3} xl={3} className="content-body ps-2">
          <Wrap className="primary-details">
            <Text title="primary information" className="form-title" />
            <Wrap className="details-part">
              <Image src={date} />
              <Wrap className="right-part">
                <Text title="Start Date" />
                <Text title="2022-07-21" />
              </Wrap>
            </Wrap>
            <Wrap className="details-part">
              <Image src={distance} />
              <Wrap className="right-part">
                <Text title="Corridor" />
                <Text title="Test Corridor Oulu" />
              </Wrap>
            </Wrap>
            <Wrap className="details-part">
              <Image src={Time} />
              <Wrap className="right-part">
                <Text title="Start Time" />
                <Text title="9:30 AM" />
              </Wrap>
            </Wrap>
            <Wrap className="details-part">
              <Image src={lines} />
              <Wrap className="right-part">
                <Text title="Duration" />
                <Text title="0500" />
              </Wrap>
            </Wrap>
            <Wrap className="details-part">
              <Image src={area} />
              <Wrap className="right-part">
                <Text title="Coordinates" />
                <Text title="24° 54' 32.12316'' N  55° 7' 4.37196'' E" />
              </Wrap>
            </Wrap>
            <Wrap className="details-part">
              <Image src={area} />
              <Wrap className="right-part">
                <Text title="Max Altitude" />
                <Text title="110" />
              </Wrap>
            </Wrap>
          </Wrap>
          <Wrap className="primary-details">
            <Text title="Other Information" className="form-title" />
            <Wrap className="details-part">
              <Image src={flights} />
              <Wrap className="right-part">
                <Text title="Flight Type" />
                <Text title="Infrastructure Inspection" />
              </Wrap>
            </Wrap>
            <Wrap className="details-part">
              <Image src={airspace} />
              <Wrap className="right-part">
                <Text title="LOS" />
                <Text title="VLOS" />
              </Wrap>
            </Wrap>
            <Wrap className="details-part">
              <Image src={drone2} />
              <Wrap className="right-part">
                <Text title="Drone Name" />
                <Text title="ALPHA DJI" />
              </Wrap>
            </Wrap>
          </Wrap>
          <Wrap className="mt-4 d-flex btn-part">
            <Button variant="primary" type="submit" className="me-4">
              Request for Activation
            </Button>
            <Button variant="secondary" type="submit">
              CANCEL
            </Button>
          </Wrap>
        </Col>
      </Row>
    </Container>
  );
};

export default Approved;
