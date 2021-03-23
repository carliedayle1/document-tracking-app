import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

import { Form, Button, Alert } from "react-bootstrap";
import FormContainer from "../components/layout/formcontainer";

export default function Login() {
  const [error, setError] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  async function submitHandler(data) {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password
    });

    if (result.error) {
      setError(result.error);
    }
    if (!result?.null) {
      router.replace("/home");
    }
  }

  return (
    <div style={{ marginTop: 150 }}>
      <FormContainer>
        <h3 className="text-center mb-4">Login</h3>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Form.Group controlId="email">
            <Form.Label> Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              ref={register({
                required: true,
                pattern: /^\S+@\S+$/i
              })}
              onFocus={(e) => setError("")}
            ></Form.Control>
            {errors.email && <p className="text-danger">Email is required</p>}
            {errors.pattern && (
              <p className="text-danger">
                Email must have an '@' symbol/pattern
              </p>
            )}
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              ref={register({
                required: true
              })}
              onFocus={(e) => setError("")}
            ></Form.Control>
            {errors.password && (
              <p className="text-danger">Password is required</p>
            )}
          </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="text-center">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </FormContainer>
    </div>
  );
}
