import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  var year = new Date().getFullYear();
  const weblink = "https://github.com/akhilpundir156";
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container style={{ marginBottom: "20px" }}>
        <Row>
          <Col className="text-center">
            {" "}
            Bloject  &copy; {year} | By{" "}
            <a
              style={{ textDecoration: "none" }}
              href={weblink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Akhil Pundir</strong>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
