import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("Database connected");
    return mongoose.connection;
  }

  if (mongoose.connection.readyState === 1) {
    console.log("Using existing database connection");
    isConnected = true;
    return mongoose.connection;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "ariBooks",
    });

    isConnected = true;
    console.log("Database is connected successfully");
    return db;
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Database connection failed");
  }
};
