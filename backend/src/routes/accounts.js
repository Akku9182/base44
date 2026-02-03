import express from "express";
import { z } from "zod";
import Account from "../models/Account.js";
import { authMiddleware } from "../services/auth.js";

const router = express.Router();

const accountSchema = z.object({
  name: z.string().min(1),
  type: z.enum(["bank", "card", "wallet"]),
  institution: z.string().optional(),
  last4: z.string().optional(),
  balance: z.number().optional(),
  currency: z.string().optional()
});

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const accounts = await Account.find({ userId: req.userId });
    return res.json({ accounts });
  } catch (error) {
    return next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const payload = accountSchema.parse(req.body);
    const account = await Account.create({ ...payload, userId: req.userId });
    return res.status(201).json({ account });
  } catch (error) {
    return next(error);
  }
});

router.put("/:id", authMiddleware, async (req, res, next) => {
  try {
    const payload = accountSchema.partial().parse(req.body);
    const account = await Account.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { $set: payload },
      { new: true }
    );
    return res.json({ account });
  } catch (error) {
    return next(error);
  }
});

router.post("/:id/sync", authMiddleware, async (req, res, next) => {
  try {
    const account = await Account.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { $set: { syncedAt: new Date() } },
      { new: true }
    );
    return res.json({ account, status: "sync_started" });
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    await Account.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
});

export default router;
