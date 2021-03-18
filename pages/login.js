import { useState } from "react";

import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/layout/formcontainer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    alert(`Email: ${email} Password: ${password}`);
  };

  return (
    <div style={{ marginTop: 150 }}>
      <FormContainer>
        <h3 className="text-center mb-4">Login</h3>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label> Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <div className="text-center">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </FormContainer>
    </div>
  );
}
