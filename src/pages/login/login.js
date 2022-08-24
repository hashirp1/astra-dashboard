import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

// Astra Components
import Logo from "../../components/logo/logo";
import Heading from "../../components/heading/heading";
import Text from "../../components/text/text";

//images
import LoginLeftImg from "../../assets/images/login-left.svg";

// Login Styles
import "./_login.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="p-0 m-0">
      <Row className="m-0 login-page-height">
        <Col xs={12} xl={6} className="align-self-start login-left-col">
          <Logo size="lg" className="test" />
          <Image src={LoginLeftImg} />
          <Heading title="Register as a Pilot" type="h2" className="spacing" />
          <Text
            title="Get access to all posibilities with drones."
            className="white text-center"
          />
        </Col>
        <Col
          xs={12}
          xl={6}
          className="login-right-col d-flex justify-content-center flex-column"
        >
          <Row className="justify-content-center">
            <Col xs={8}>
              <Heading
                title="Welcome to Astra UTM"
                type="h2"
                className="spacing"
              />
              <Text
                title="Login to account so you can manage your flights"
                className="light-color"
              />
              <Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control type="password" placeholder="password" />
                </FloatingLabel>
                <Row className="mx-0">
                  <Form.Check
                    type="checkbox"
                    label="Remember for 30 days"
                    className="w-50"
                  />
                  <Text
                    title="Forgot Password"
                    className="text-gradient w-50 text-end"
                  />
                </Row>
                <Button
                  variant="primary"
                  className="login-btn"
                  onClick={() => navigate("/drone")}
                >
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
