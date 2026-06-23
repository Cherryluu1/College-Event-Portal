import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  category: String,
  createdBy: String,
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);