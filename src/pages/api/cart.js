import Book from "@/db/models/Book.js";
import { connectDB } from "@/db/connectDB.js";

export default async function handle(req, res) {
  await connectDB();
  const ids = req.body.ids;

  try {
    const books = await Book.find({ _id: { $in: ids } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
