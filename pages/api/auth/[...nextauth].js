import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import User from "../../../models/userModel";
import dbConnect from "../../../utils/db";

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("Invalid email");
        }

        if (!(await user.matchPassword(credentials.password))) {
          throw new Error("Invalid password");
        }

        return { email: user.email };
      }
    })
  ]
});
