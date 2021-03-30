import Link from "next/link";
import { Nav, Navbar, Button } from "react-bootstrap";
import { useState } from "react";
import { useSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";

export default function Header({ parentToggle }) {
  const [toggle, setToggle] = useState(false);
  const [session, loading] = useSession();
  const router = useRouter();

  const toggleHandler = () => {
    parentToggle(toggle);
    setToggle(!toggle);
  };

  async function logoutHandler() {
    await signOut({ redirect: false });
    router.push("/");
  }

  return (
    <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      {session && (
        <Button variant="info" size="sm" onClick={toggleHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-filter-left"
            viewBox="0 0 16 16"
          >
            <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </Button>
      )}
      <Link href="/">
        <Navbar.Brand style={{ cursor: "pointer" }} className="adjustLeft">
          Document Tracking Application
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse>
        <Nav className="ml-auto adjustRight">
          {!session && !loading && (
            <Link href="/login">
              <Nav.Item>
                <Button className="btn btn-outline-success">Login</Button>
              </Nav.Item>
            </Link>
          )}
          {session && (
            <Nav.Item>
              <Button onClick={logoutHandler} className="btn btn-danger">
                Logout
              </Button>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
