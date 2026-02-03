import express from "express";
import { authMiddleware } from "../services/auth.js";
import Transaction from "../models/Transaction.js";
import Account from "../models/Account.js";

const router = express.Router();

router.get("/summary", authMiddleware, async (req, res, next) => {
  try {
    const accounts = await Account.find({ userId: req.userId });
    const transactions = await Transaction.find({ userId: req.userId }).sort({ date: -1 }).limit(10);

    const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
    const income = transactions.filter((item) => item.type === "income").reduce((sum, item) => sum + item.amount, 0);
    const expenses = transactions.filter((item) => item.type === "expense").reduce((sum, item) => sum + item.amount, 0);
    const savings = totalBalance - expenses + income;

    const categoryTotals = transactions.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    }, {});

    const topCategories = Object.entries(categoryTotals)
      .map(([category, amount]) => ({ category, amount }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 5);

    return res.json({
      totalBalance,
      income,
      expenses,
      savings,
      transactions,
      topCategories
    });
  } catch (error) {
    return next(error);
  }
});

export default router;
