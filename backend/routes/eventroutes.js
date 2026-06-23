import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// Create Event
router.post("/", async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Events
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Get My Events
router.get("/my/:user", async (req, res) => {
  const events = await Event.find({ createdBy: req.params.user });
  res.json(events);
});

export default router;