import NextAuth from "next-auth";
import { compare } from "bcryptjs";
import User from "@/db/models/User.js";
import { connectDB } from "@/db/connectDB.js";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Invalid email or password");
        }

        await connectDB();

        const user = await User.findOne({ email: credentials.email });

        if (!user || !user?.password) {
          throw new Error("Invalid email or password");
        }

        const isMatch = await compare(credentials.password, user.password);

        if (!isMatch) {
          throw new Error("Invalid password");
        }

        return Promise.resolve(user);
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.id = dbUser._id.toString();

      session.user = { ...session.user, ...dbUser._doc };

      return session;
    },
  },
});
