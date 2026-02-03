import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import dashboardRoutes from "./routes/dashboard.js";
import transactionsRoutes from "./routes/transactions.js";
import accountsRoutes from "./routes/accounts.js";
import budgetsRoutes from "./routes/budgets.js";
import insightsRoutes from "./routes/insights.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/transactions", transactionsRoutes);
app.use("/api/accounts", accountsRoutes);
app.use("/api/budgets", budgetsRoutes);
app.use("/api/insights", insightsRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Unexpected server error" });
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`API running on :${PORT}`));
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connect();
