"use server";
import { revalidatePath } from "next/cache";
import { connectionToDB } from "./connectionToDB";
import { Post } from "./models";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "./auth";
export const serverAction = async (myForm) => {
  const { title, description, slug, img, userId } = Object.fromEntries(myForm);
  await connectionToDB();
  const post = new Post({
    title,
    description,
    slug,
    img,
    userId,
  });
  await post.save();
  revalidatePath("/blog");
  revalidatePath("/admin");
};
export const newUser = async (myForm) => {
  const { userName, email, password, img, id, isAdmin } =
    Object.fromEntries(myForm);
  await connectionToDB();
  const newuser = new User({
    userName: userName,
    email: email,
    img: img,
    password: password,
    id: id,
    isAdmin: isAdmin,
  });
  await newuser.save();
  revalidatePath("/blog");
  revalidatePath("/admin");
};
export const deleteAction = async (id) => {
  try {
    // const { id } = Object.fromEntries(formData);
    await connectionToDB();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log("Error deleting the post");
  }
};
export const deleteUser = async (id) => {
  try {
    // const { id } = Object.fromEntries(formData);
    await connectionToDB();
    await User.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log("Error deleting the user");
  }
};
export const handleSignIn = async () => {
  "use server";
  await signIn("github");
};
export const handleLogout = async () => {
  await signOut();
};
export const registerAction = async (previousState, formData) => {
  "use server";
  const { username, email, password, passwordAgain } =
    Object.fromEntries(formData);
  if (password !== passwordAgain) {
    // throw new Error("Password didnot match");
    return { error: "Password do not match" };
  }
  try {
    await connectionToDB();
    const user = await User.findOne({ userName: username });
    if (user) {
      return { error: "Username already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      userName: username,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: `${error} happened` };
  }
};
export const login = async (previousState, formData) => {
  "use server";
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error?.message?.includes("credentialssignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};
