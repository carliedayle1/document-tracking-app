import { useForm } from "react-hook-form";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/layout/formcontainer";

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  async function submitHandler(data) {
    const { email, password } = data;
    console.log(data);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password
    });

    if (!result.ok) {
      router.replace("/profile");
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
            ></Form.Control>
            {errors.password && (
              <p className="text-danger">Password is required</p>
            )}
          </Form.Group>
          <div className="text-center">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </FormContainer>
    </div>
  );
}
