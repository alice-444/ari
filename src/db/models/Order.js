import { Schema, models, model } from "mongoose";

const OrderSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
  },
  zip: {
    type: String,
    // required: true,
  },
  state: {
    type: String,
  },
  address: {
    type: Date,
    // required: true,
  },
  paid: {
    type: String,
    // required: true,
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;