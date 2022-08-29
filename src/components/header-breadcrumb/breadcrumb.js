import "./breadcrumb.scss";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import React from "react";
import Col from "react-bootstrap/Col";
import Text from "../../components/text/text";
import Logo from "../../components/logo/logo";
import Wrap from "../../components/wrapper/wrap";
const Breadcrumb = (props) => {
  return (
    <Wrap className="bread-crumb">
      <Text title="Dashboard" className="" />/
      <Text title="Drone" className="" />
      {/* <Wrap className="btn-status d-flex align-items-center">
        <Text title="Drone Flight Permission" className="" />
        <button className="success">APPROVED</button>
      </Wrap> */}
    </Wrap>
  );
};

export default Breadcrumb;
