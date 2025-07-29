import { connectionToDB } from "./connectionToDB";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
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
    revalidatePath("/admin");
    revalidatePath("/blog");
    await connectionToDB();
    const users = await User.find();
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching the users");
  }
};
export const getUser = async (userId) => {
  try {
    await connectionToDB();

    const foundUser = await User.findOne({ id: userId });
    console.log(foundUser);
    if (!foundUser) {
      const user = {
        userName: "Anonymous",
        img: "/noavatar.png",
      };
      return user;
    }

    return foundUser;
  } catch (error) {
    console.log("Error fetching user:", error);
  }
};
