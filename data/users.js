import bcrypt from "bcryptjs";

const users = [
  {
    name: "Test User",
    email: "test@test.com",
    password: bcrypt.hashSync("test", 10)
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10)
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10)
  }
];

export default users;
