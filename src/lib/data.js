import { connectionToDB } from "./connectionToDB";
import { Post, User } from "./models";
import { unstable_cache as noStore } from "next/cache";
export const getPost = async ({ slug }) => {
  await connectionToDB();
  const post = await Post.findOne({ slug });
  return post;
};
export const getPosts = async () => {
  try {
    await connectionToDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error("❌ Error while fetching posts:", error);
    throw new Error("Error fetching the posts");
  }
};
export const getUsers = async () => {
  try {
    noStore();
    await connectionToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching the users");
  }
};
export const getUser = async (id) => {
  let user = {
    userName: "Anonymous",
    img: "/noavatar.png",
  };

  try {
    await connectionToDB();

    const foundUser = await User.findById(id);
    if (foundUser) {
      user = foundUser;
    }
  } catch (error) {
    console.log("Error fetching user:", error);
    // Optional: log more specific error messages
  }

  return user;
};
