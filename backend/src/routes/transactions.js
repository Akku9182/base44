import express from "express";
import { z } from "zod";
import Transaction from "../models/Transaction.js";
import { authMiddleware } from "../services/auth.js";

const router = express.Router();

const transactionSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  amount: z.number(),
  type: z.enum(["income", "expense", "transfer"]),
  accountId: z.string().optional(),
  date: z.string().optional(),
  notes: z.string().optional()
});

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const { category, start, end } = req.query;
    const query = { userId: req.userId };
    if (category) query.category = category;
    if (start || end) {
      query.date = {};
      if (start) query.date.$gte = new Date(start);
      if (end) query.date.$lte = new Date(end);
    }
    const transactions = await Transaction.find(query).sort({ date: -1 });
    return res.json({ transactions });
  } catch (error) {
    return next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const payload = transactionSchema.parse(req.body);
    const transaction = await Transaction.create({
      ...payload,
      userId: req.userId,
      date: payload.date ? new Date(payload.date) : new Date()
    });
    return res.status(201).json({ transaction });
  } catch (error) {
    return next(error);
  }
});

router.put("/:id", authMiddleware, async (req, res, next) => {
  try {
    const payload = transactionSchema.partial().parse(req.body);
    const transaction = await Transaction.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { $set: payload },
      { new: true }
    );
    return res.json({ transaction });
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    await Transaction.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
});

export default router;
