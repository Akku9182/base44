import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ["bank", "card", "wallet"], required: true },
    institution: String,
    last4: String,
    balance: { type: Number, default: 0 },
    currency: { type: String, default: "USD" },
    syncedAt: Date
  },
  { timestamps: true }
);

export default mongoose.model("Account", accountSchema);
