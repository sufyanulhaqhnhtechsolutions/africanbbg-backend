import { Schema, model } from "mongoose";
const adminSchema = Schema({
  name: {
    type: String,
    required: true,
    default: "admin",
  },
  password: { type: String, required: true, default: "12345678" },
  email: {
    type: String,
    required: true,
    unique: true,
    default: "admin@gmail.com",
  },
  token: { type: String, default: null },
});
const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  token: { type: String, default: null },
});

export const adminAuth = model("admins", adminSchema);
export const userAuth = model("users", userSchema);
