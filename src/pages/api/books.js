import Book from "@/db/models/Book.js";
import rateLimit from "express-rate-limit";
import MongooseConnect from "@/db/mongoose.js";
import { body, validationResult } from "express-validator";
import { csrfProtection, cookieParser } from "@/middleware/csrf";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               translator:
 *                 type: string
 *               description:
 *                 type: string
 *               publicationDate:
 *                 type: string
 *                 format: date
 *               editor:
 *                 type: string
 *               ISBN:
 *                 type: string
 *               EAN:
 *                type: string
 *               numberPage:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Error creating book
 *   get:
 *     summary: Get books
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: The book ID
 *     responses:
 *       200:
 *         description: A list of books or a single book
 *       404:
 *         description: Book not found
 *       500:
 *         description: Error fetching books
 */

export default async function handle(req, res) {
  const { method } = req;

  try {
    await csrfProtection(req, res, async () => {
      await limiter(req, res, async () => {
        await MongooseConnect();

        if (method === "POST") {
          await handlePost(req, res);
        } else if (method === "GET") {
          await handleGet(req, res);
        } else {
          res.status(405).json({ error: `Method ${method} Not Allowed` });
        }
      });
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error" });
  }
}

async function handlePost(req, res) {
  try {
    await body("title").isString().notEmpty().run(req);
    await body("author").isString().notEmpty().run(req);
    await body("translator").optional().isString().run(req);
    await body("description").isString().notEmpty().run(req);
    await body("publicationDate").isISO8601().toDate().run(req);
    await body("editor").isString().notEmpty().run(req);
    await body("ISBN").isString().notEmpty().run(req);
    await body("EAN").isString().notEmpty().run(req);
    await body("numberPage").isInt({ min: 1 }).run(req);
    await body("price").isFloat({ min: 0 }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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

      res.status(200).json(book);
    } else {
      const books = await Book.find();
      res.status(200).json(books);
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Error fetching books" });
  }
}
