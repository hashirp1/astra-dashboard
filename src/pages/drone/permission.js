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
import Sidebar from "../../components/sidebar/sidebar";

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
import line2 from "../../assets/images/Lines-1.svg";
// Drone Styles
import "./_drone.scss";

const Permission = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="m-0">
        <Sidebar />
        <Col xs={10} xl={10} className="dashboard-head p-0">
          <Wrap className="bread-crumb">
            <Text title="Dashboard" className="" />/
            <Text title="Drones" className="" />
          </Wrap>
          <Row className="m-0 dashboard-body">
            <Col xs={12} xl={12} className="content-body">
              <Row className="align-items-center justify-content-between top-filter">
                <Col xl={3} className="search-part input-icon">
                  <Form.Control type="search" placeholder="Search..." />
                  <Image src={Search} className="input-img" />
                </Col>
                <Col xl={3} className="search-part">
                  <Form.Group className="input-icon select-arrow col-lg-6">
                    <Form.Select aria-label="Default select">
                      <option>Sort by</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Image src={line2} className="input-img" />
                  </Form.Group>
                </Col>
                <Col xl={5} className="right-part">
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
                          FID &nbsp; <Image src={downarrow} />
                        </th>
                        <th>
                          Name &nbsp; <Image src={downarrow} />
                        </th>
                        <th>
                          Start Date Time &nbsp; <Image src={downarrow} />
                        </th>
                        <th>
                          End Date Time &nbsp; <Image src={downarrow} />
                        </th>
                        <th>
                          Created On &nbsp; <Image src={downarrow} />
                        </th>
                        <th>
                          Created by &nbsp; <Image src={downarrow} />
                        </th>
                        <th>
                          Status &nbsp; <Image src={downarrow} />
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check type="checkbox" className="table-check" />
                        </td>
                        <td>518</td>
                        <td className="name">Drone Flight Permission</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>Danish Sayed</td>
                        <td>
                          <Wrap className="btn-status">
                            <button className="success">Approved</button>
                          </Wrap>
                        </td>
                        <td className="text-nowrap">
                          <Image src={password} /> <Image src={write} />{" "}
                          <Image src={trash} />
                        </td>
                      </tr>
                      <tr className="active">
                        <td>
                          <Form.Check type="checkbox" className="table-check" />
                        </td>
                        <td>518</td>
                        <td className="name">Drone Flight Permission</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>Danish Sayed</td>
                        <td>
                          <Wrap className="btn-status">
                            <button className="req">
                              Activation Requested
                            </button>
                          </Wrap>
                        </td>

                        <td className="text-nowrap">
                          <Image src={password} /> <Image src={write} />{" "}
                          <Image src={trash} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check type="checkbox" className="table-check" />
                        </td>
                        <td>518</td>
                        <td className="name">Drone Flight Permission</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>Danish Sayed</td>
                        <td>
                          <Wrap className="btn-status">
                            <button className="amend">Amended</button>
                          </Wrap>
                        </td>

                        <td className="text-nowrap">
                          <Image src={password} /> <Image src={write} />{" "}
                          <Image src={trash} />
                        </td>
                      </tr>
                      <tr className="active">
                        <td>
                          <Form.Check type="checkbox" className="table-check" />
                        </td>
                        <td>518</td>
                        <td className="name">Drone Flight Permission</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>Danish Sayed</td>
                        <td>
                          <Wrap className="btn-status">
                            <button className="success">Approved</button>
                          </Wrap>
                        </td>
                        <td className="text-nowrap">
                          <Image src={password} /> <Image src={write} />{" "}
                          <Image src={trash} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check type="checkbox" className="table-check" />
                        </td>
                        <td>518</td>
                        <td className="name">Drone Flight Permission</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>2022-07-21 13:40:00</td>
                        <td>Danish Sayed</td>
                        <td>
                          <Wrap className="btn-status">
                            <button className="req">
                              Activation Requested
                            </button>
                          </Wrap>
                        </td>
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
        </Col>
      </Row>
    </Container>
  );
};

export default Permission;
