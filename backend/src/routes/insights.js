import express from "express";
import { authMiddleware } from "../services/auth.js";
import Transaction from "../models/Transaction.js";

const router = express.Router();

const buildForecast = (transactions) => {
  const lastWeek = transactions.filter((item) => item.type === "expense");
  const dailyAvg = lastWeek.reduce((sum, item) => sum + item.amount, 0) / Math.max(lastWeek.length, 1);
  const predictedSpend = Math.round(dailyAvg * 7 * 100) / 100;
  return {
    predictedSpend,
    alerts: predictedSpend > 500 ? ["High spend forecast detected"] : [],
    suggestions: [
      "Review subscriptions and cancel unused services.",
      "Set a weekly dining-out cap and track progress.",
      "Move 10% of inflow into savings automatically."
    ]
  };
};

router.get("/forecast", authMiddleware, async (req, res, next) => {
  try {
    const since = new Date();
    since.setDate(since.getDate() - 7);
    const transactions = await Transaction.find({
      userId: req.userId,
      date: { $gte: since }
    });
    const forecast = buildForecast(transactions);
    return res.json({ forecast });
  } catch (error) {
    return next(error);
  }
});

router.get("/alerts", authMiddleware, async (req, res) => {
  res.json({
    alerts: [
      { type: "overspending", message: "Dining budget exceeded by 12%." },
      { type: "cashflow", message: "Upcoming rent due in 5 days." }
    ]
  });
});

export default router;
