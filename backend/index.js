import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI; // Changed from MongoDBURI to match .env

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB Connection Error: ", error);
    process.exit(1); // Exit process with failure
  }
};

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server only after DB connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});