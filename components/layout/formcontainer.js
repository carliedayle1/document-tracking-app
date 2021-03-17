import { Container, Row, Col } from "react-bootstrap";

export default function FormContainer({ children }) {
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}
