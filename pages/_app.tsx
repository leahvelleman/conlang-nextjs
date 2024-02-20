import type { AppProps } from "next/app";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import NavItem from "react-bootstrap/NavItem";

import { BrowserRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import Stack from "react-bootstrap/Stack";

import Form from "react-bootstrap/Form";
import SSRProvider from "react-bootstrap/SSRProvider";

import { useContext } from "react";
import { useState } from "react";
import { DetailLevelContext } from "../components/DetailLevelContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { navLinks } from "../data";
import { isIndexSignatureDeclaration } from "typescript";

export default function App({ Component, pageProps }: AppProps) {
  const [detail, setDetail] = useState<boolean>(false);
  return (
    <SSRProvider>
      <DetailLevelContext.Provider value={[detail, setDetail]}>
        <Container fluid="true">
          <Navbar bg="light" variant="light" sticky="top" expand="md">
            <Container fluid>
              <Nav>
                <Navbar.Brand href="#home">Tequi, a conlang</Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav.Item className="nav-bright">
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-bright">
                    <Nav.Link href="/sounds">Sounds</Nav.Link>
                  </Nav.Item>

                  <Nav.Item className="vr mx-3" />
                  <Nav.Item>
                    <Nav.Link href="/docs">Docs</Nav.Link>
                  </Nav.Item>
                </Navbar.Collapse>
              </Nav>

              <Button
                className="btn-success"
                onClick={() => setDetail(!detail)}
              >
                {detail ? "Less detailed examples" : "More detailed examples"}
              </Button>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
          </Navbar>

          <Container fluid="true" id="content">
            <Row>
              <Col className="content">
                <Component {...pageProps} />
              </Col>
            </Row>
          </Container>
        </Container>
      </DetailLevelContext.Provider>
    </SSRProvider>
  );
}
