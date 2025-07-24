import mongoose from "mongoose";
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
      unique: true,
      required: true,
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
      unique: true,
      required: true,
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
