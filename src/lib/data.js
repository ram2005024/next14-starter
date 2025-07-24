import { connectionToDB } from "./connectionToDB";
import { Post, User } from "./models";
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
    await connectionToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching the users");
  }
};
export const getUser = async (id) => {
  try {
    await connectionToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching the user details");
  }
};
