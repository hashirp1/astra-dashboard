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
import trash from "../../assets/images/trash.svg";
import password from "../../assets/images/password.svg";
import write from "../../assets/images/write.svg";
import Search from "../../assets/images/Search.svg";
import downarrow from "../../assets/images/sort.svg";
// Drone Styles
import "./_drone.scss";

const DronePage = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="m-0 dashboard-head">
        <Col xs={2} xl={2} className="text-center">
          <Logo size="lg" className="test" />
        </Col>
        <Col xs={10} xl={10} className="bread-crumb">
          <Text title="Dashboard" className="" />/
          <Text title="Drones" className="" />
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
          <Row className="align-items-center justify-content-between top-filter">
            <Col xl={4} className="search-part input-icon">
              <Form.Control type="search" placeholder="Search..." />
              <Image src={Search} className="input-img" />
            </Col>
            <Col xl={8} className="right-part">
              <Text title="2 record(s) selected" />
              <Button className="primary-outline">
                <Image src={trash} />
              </Button>
              <Button variant="primary">REGISTER NEW DRONE</Button>
            </Col>
          </Row>
          <Row className="details-table">
            <Col xs={12} xl={12}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>
                      <Form.Check type="checkbox" className="table-check" />
                    </th>
                    <th>
                      Drone Name &nbsp; <Image src={downarrow} />
                    </th>
                    <th>
                      Model Name &nbsp; <Image src={downarrow} />
                    </th>
                    <th>
                      Manufacturer Name &nbsp; <Image src={downarrow} />
                    </th>
                    <th>
                      UAV Type Name &nbsp; <Image src={downarrow} />
                    </th>
                    <th>
                      RPAS Serial No. &nbsp; <Image src={downarrow} />
                    </th>
                    <th>
                      Commission Date &nbsp; <Image src={downarrow} />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Form.Check type="checkbox" className="table-check" />
                    </td>
                    <td className="name">Drones 99</td>
                    <td>MAVIC pro</td>
                    <td>DJI</td>
                    <td>Hexacopter - Y6</td>
                    <td>RP08055</td>
                    <td>2022-07-21 T 00:00:00</td>
                    <td className="text-nowrap">
                      <Image src={password} /> <Image src={write} />{" "}
                      <Image src={trash} />
                    </td>
                  </tr>
                  <tr className="active">
                    <td>
                      <Form.Check type="checkbox" className="table-check" />
                    </td>
                    <td className="name">Drones 99</td>
                    <td>MAVIC pro</td>
                    <td>DJI</td>
                    <td>Hexacopter - Y6</td>
                    <td>RP08055</td>
                    <td>2022-07-21 T 00:00:00</td>
                    <td className="text-nowrap">
                      <Image src={password} /> <Image src={write} />{" "}
                      <Image src={trash} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Check type="checkbox" className="table-check" />
                    </td>
                    <td className="name">Drones 99</td>
                    <td>MAVIC pro</td>
                    <td>DJI</td>
                    <td>Hexacopter - Y6</td>
                    <td>RP08055</td>
                    <td>2022-07-21 T 00:00:00</td>
                    <td className="text-nowrap">
                      <Image src={password} /> <Image src={write} />{" "}
                      <Image src={trash} />
                    </td>
                  </tr>
                  <tr className="active">
                    <td>
                      <Form.Check type="checkbox" className="table-check" />
                    </td>
                    <td className="name">Drones 99</td>
                    <td>MAVIC pro</td>
                    <td>DJI</td>
                    <td>Hexacopter - Y6</td>
                    <td>RP08055</td>
                    <td>2022-07-21 T 00:00:00</td>
                    <td className="text-nowrap">
                      <Image src={password} /> <Image src={write} />{" "}
                      <Image src={trash} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Check type="checkbox" className="table-check" />
                    </td>
                    <td className="name">Drones 99</td>
                    <td>MAVIC pro</td>
                    <td>DJI</td>
                    <td>Hexacopter - Y6</td>
                    <td>RP08055</td>
                    <td>2022-07-21 T 00:00:00</td>
                    <td className="text-nowrap">
                      <Image src={password} /> <Image src={write} />{" "}
                      <Image src={trash} />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Wrap className="d-flex justify-content-between align-items-center pagination-section">
                <Wrap className="left">
                  <Text title="1 - 10" /> <Text title="of 100" />
                </Wrap>
                <Wrap className="right">
                  <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Wrap>
              </Wrap>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DronePage;
