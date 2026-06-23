import express from "express";
import User from "../models/User.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User Registered Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (user) {
    res.json({ message: "Login Success", user });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
});

export default router;