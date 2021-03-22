import dbConnect from "../../../utils/db";

import User from "../../../models/userModel.js";
import users from "../../../data/users.js";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        await User.deleteMany();
        await User.insertMany(users);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
