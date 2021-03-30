import { Accordion, Card } from "react-bootstrap";
import { useSession } from "next-auth/client";

export default function Sidebar() {
  const [session] = useSession();

  return (
    <>
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Hello {session?.user?.name} ! </div>
        <div className="list-group list-group-flush">
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Sample header
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Another sample
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </>
  );
}
