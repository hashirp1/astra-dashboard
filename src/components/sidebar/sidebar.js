import "./sidebar.scss";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import React from "react";
import Col from "react-bootstrap/Col";
import Text from "../../components/text/text";
import Logo from "../../components/logo/logo";
import Wrap from "../../components/wrapper/wrap";
import profilepic from "../../assets/images/profile-pic.png";

const Sidebar = () => {
  return (
    <Col xs={2} xl={2} className="sidebar-head p-0">
      <Wrap className="sticky h-100">
        <Wrap className="logo-part">
          <Logo size="lg" className="test" />
        </Wrap>
        <Wrap className="sidebar-left d-flex flex-column justify-content-between p-0">
          <Wrap className="main-top">
            <Wrap className="side-menu not-selected">
              <Wrap className="d-flex justify-centent-between">
                <Wrap className="width-min dashboard-img"></Wrap>
                <Nav.Link href="#" className="width-2">
                  Dashboard
                </Nav.Link>
              </Wrap>
            </Wrap>
            <Wrap className="side-menu">
              <Wrap className="d-flex justify-centent-between">
                <Wrap className="width-min drone-img"></Wrap>
                <Nav.Link href="#" className="width-2">
                  Drone
                </Nav.Link>
              </Wrap>
              <Badge className="primary-badge">5</Badge>
            </Wrap>
            <Wrap className="side-menu not-selected">
              <Wrap className="d-flex justify-centent-between">
                <Wrap className="width-min drone-img"></Wrap>
                <Nav.Link href="#" className="width-2">
                  Drone Flight Permission
                </Nav.Link>
              </Wrap>
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
              <Wrap className="settings-img"></Wrap>
              <Nav.Link href="#" className="">
                Settings
              </Nav.Link>
            </Wrap>
            <Wrap className="menu-icon">
              <Wrap className="logout-img"></Wrap>
              <Nav.Link href="#" className="">
                Logout
              </Nav.Link>
            </Wrap>
          </Wrap>
        </Wrap>
      </Wrap>
    </Col>
  );
};

export default Sidebar;
