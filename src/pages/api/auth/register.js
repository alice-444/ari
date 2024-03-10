import { hash } from "bcryptjs";
import User from "@/db/models/User.js";
import { connectDB } from "@/db/connectDB.js";

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashPassword = await hash(password, 10);

    console.log("Mot de passe hashé :", hashPassword);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });

    await newUser.save();

    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Creating a new user failed" });
  }
}
