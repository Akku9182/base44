import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  fullName: String,
  avatarUrl: String,
  phone: String,
  location: String,
  preferredCurrency: { type: String, default: "USD" },
  bio: String
});

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String },
    oauthProvider: { type: String },
    oauthId: { type: String },
    profile: profileSchema
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
