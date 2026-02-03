import express from "express";
import { z } from "zod";
import Budget from "../models/Budget.js";
import Goal from "../models/Goal.js";
import { authMiddleware } from "../services/auth.js";

const router = express.Router();

const budgetSchema = z.object({
  category: z.string().min(1),
  monthlyLimit: z.number(),
  spent: z.number().optional()
});

const goalSchema = z.object({
  name: z.string().min(1),
  targetAmount: z.number(),
  currentAmount: z.number().optional(),
  deadline: z.string().optional()
});

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const budgets = await Budget.find({ userId: req.userId });
    const goals = await Goal.find({ userId: req.userId });
    return res.json({ budgets, goals });
  } catch (error) {
    return next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const payload = budgetSchema.parse(req.body);
    const budget = await Budget.create({ ...payload, userId: req.userId });
    return res.status(201).json({ budget });
  } catch (error) {
    return next(error);
  }
});

router.put("/:id", authMiddleware, async (req, res, next) => {
  try {
    const payload = budgetSchema.partial().parse(req.body);
    const budget = await Budget.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { $set: payload },
      { new: true }
    );
    return res.json({ budget });
  } catch (error) {
    return next(error);
  }
});

router.post("/goals", authMiddleware, async (req, res, next) => {
  try {
    const payload = goalSchema.parse(req.body);
    const goal = await Goal.create({
      ...payload,
      userId: req.userId,
      deadline: payload.deadline ? new Date(payload.deadline) : undefined
    });
    return res.status(201).json({ goal });
  } catch (error) {
    return next(error);
  }
});

router.put("/goals/:id", authMiddleware, async (req, res, next) => {
  try {
    const payload = goalSchema.partial().parse(req.body);
    const goal = await Goal.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { $set: payload },
      { new: true }
    );
    return res.json({ goal });
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    await Budget.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
});

router.delete("/goals/:id", authMiddleware, async (req, res, next) => {
  try {
    await Goal.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
});

export default router;
