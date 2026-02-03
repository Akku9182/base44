import express from "express";
import { z } from "zod";
import User from "../models/User.js";
import { authMiddleware } from "../services/auth.js";

const router = express.Router();

const profileSchema = z.object({
  fullName: z.string().optional(),
  avatarUrl: z.string().url().optional(),
  phone: z.string().optional(),
  location: z.string().optional(),
  preferredCurrency: z.string().optional(),
  bio: z.string().optional()
});

router.get("/me", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select("email profile");
    return res.json({ user });
  } catch (error) {
    return next(error);
  }
});

router.put("/me", authMiddleware, async (req, res, next) => {
  try {
    const payload = profileSchema.parse(req.body);
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $set: { profile: payload } },
      { new: true }
    ).select("email profile");
    return res.json({ user });
  } catch (error) {
    return next(error);
  }
});

export default router;
