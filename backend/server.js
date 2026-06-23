import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// ✅ FIXED MongoDB Connection (NO OPTIONS)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});