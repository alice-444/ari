import MongooseConnect from "@/db/mongoose.js"
import Book from "@/db/models/Book.js";

export default async function handle(req, res) {
  const { method } = req;

  try {
    await MongooseConnect();

    if (method === "POST") {
      return handlePost(req, res);
    }

    if (method === "GET") {
      return handleGet(req, res);
    }

    res.status(405).json({ error: `Method ${method} Not Allowed` });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error" });
  }
}

async function handlePost(req, res) {
  try {
    const {
      title,
      author,
      translator,
      description,
      publicationDate,
      editor,
      ISBN,
      EAN,
      numberPage,
      price,
    } = req.body;

    const bookDoc = await Book.create({
      title,
      author,
      translator,
      description,
      publicationDate,
      editor,
      ISBN,
      EAN,
      numberPage,
      price,
    });

    res.status(201).json(bookDoc);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ error: "Error creating book" });
  }
}

async function handleGet(req, res) {
  try {
    if (req.query?.id) {
      const book = await Book.findById(req.query.id);

      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }

      res.json(book);
    } else {
      const books = await Book.find();
      res.json(books);
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Error fetching books" });
  }
}
