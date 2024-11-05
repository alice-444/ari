/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created successfully
 *       409:
 *         description: User already exists
 *       500:
 *         description: Creating a new user failed
 */
import { hash } from "bcryptjs";
import User from "@/db/models/User.js";
import rateLimit from "express-rate-limit";
import {connectDB} from "@/db/connectDB.js";
import { csrfProtection, cookieParser } from "@/middleware/csrf";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

export default async function handler(req, res) {
  await cookieParser()(req, res, () => {});
  await csrfProtection(req, res, async () => {
    await limiter(req, res, async () => {
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
    });
  });
}
