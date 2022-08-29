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
import arrowright from "../../assets/images/arrow-right.svg";
import arrowleft from "../../assets/images/arrow-left.svg";

// Drone Styles
import "../drone/_drone.scss";
import "./_dashboard.scss";

const Dashboard = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="m-0 ">
        <Sidebar />
        <Col xs={10} xl={10} className="dashboard-head p-0">
          <Wrap className="bread-crumb dash-header">
            <Image src={arrowleft} className="" />
          </Wrap>
          <Row className="m-0 dashboard-body">
            <Col xs={12} xl={12} className="content-body"></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
