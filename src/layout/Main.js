import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import PageContent from "./PageContent";

export default function Main({productList}) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col lg="3" md="3" sm="12">
          <SideBar />
        </Col>
        <Col lg="9" md="9" sm="12">
          <PageContent productList={productList} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
