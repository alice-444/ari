import { Schema, models, model } from "mongoose";

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  translator: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  publicationDate: {
    type: Date,
    required: true,
  },
  editor: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
  },
  EAN: {
    type: String,
    required: true,
  },
  numberPage: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Book = models.Book || model("Book", BookSchema);

export default Book;