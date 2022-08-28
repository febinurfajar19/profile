import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col
            size={12}
            sm={6}
            style={{ fontWeight: "700", fontSize: "25px", color: "#ffffff" }}
          >
            FEBI NURFAJAR
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
