import express from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import User from "../models/User.js";
import { signToken } from "../services/auth.js";

const router = express.Router();

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string().min(1)
});

router.post("/signup", async (req, res, next) => {
  try {
    const payload = signupSchema.parse(req.body);
    const existing = await User.findOne({ email: payload.email });
    if (existing) {
      return res.status(409).json({ error: "Email already in use" });
    }

    const passwordHash = await bcrypt.hash(payload.password, 12);
    const user = await User.create({
      email: payload.email,
      passwordHash,
      profile: { fullName: payload.fullName }
    });

    const token = signToken(user.id);
    return res.status(201).json({ token, user });
  } catch (error) {
    return next(error);
  }
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

router.post("/login", async (req, res, next) => {
  try {
    const payload = loginSchema.parse(req.body);
    const user = await User.findOne({ email: payload.email });
    if (!user || !user.passwordHash) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const matches = await bcrypt.compare(payload.password, user.passwordHash);
    if (!matches) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = signToken(user.id);
    return res.json({ token, user });
  } catch (error) {
    return next(error);
  }
});

router.get("/oauth/providers", (req, res) => {
  res.json({ providers: ["google", "github", "apple"] });
});

export default router;
