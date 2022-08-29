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
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Astra Components
import Logo from "../../components/logo/logo";
import Heading from "../../components/heading/heading";
import Text from "../../components/text/text";
import Wrap from "../../components/wrapper/wrap";
import Sidebar from "../../components/sidebar/sidebar";
import Breadcrumb from "../../components/header-breadcrumb/breadcrumb";

//images
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
      <Row className="m-0 ">
        <Sidebar />
        <Col xs={10} xl={10} className="dashboard-head p-0">
          <Breadcrumb />

          <Row className="m-0 dashboard-body">
            <Col xs={12} xl={12} className="content-body">
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
                          <Image src={password} /> <Image src={write} />
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
                          <Image src={password} /> <Image src={write} />
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
                          <Image src={password} /> <Image src={write} />
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
                          <Image src={password} /> <Image src={write} />
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
                          <Image src={password} /> <Image src={write} />
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
        </Col>
      </Row>
    </Container>
  );
};

export default DronePage;
