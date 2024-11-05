import { Schema, models, model } from "mongoose";

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  paid: {
    type: Boolean,
    required: true,
    default: false,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "USD",
  },
  status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  books: [
    {
      bookId: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true,
      },
      title: { type: String, required: true },
      quantity: { type: Number, required: true, default: 1 },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;