import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      min: 3,
      max: 30,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
    },
    id: {
      type: String,
      default: uuidv4,
    },
  },
  { timestamps: true }
);
const postSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      unique: true,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
