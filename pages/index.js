import { Jumbotron, Button, Container } from "react-bootstrap";

export default function IndexPage() {
  return (
    <Container style={{ marginTop: "10%" }}>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </Container>
  );
}
