import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("Database connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "ariBooks",
    });

    isConnected = true;

    console.log("Database is connected successfully");
  } catch (error) {
    console.log(error, "Database is not connected");
  }
};