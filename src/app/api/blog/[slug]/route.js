import { connectionToDB } from "@/lib/connectionToDB";
import { NextResponse } from "next/server";
import { Post } from "@/lib/models";
export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    await connectionToDB();
    const post = await Post.findOne({ slug: slug });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching the data" },
      { status: 500 }
    );
  }
};
// export const DELETE = async (request, { params }) => {
//   const { id } = params;
//   try {
//     await connectionToDB();
//     const deleted = await Post.findByIdAndDelete(id);
//     if (!deleted) {
//       return NextResponse.json({ message: "No post found" }, { status: 404 });
//     }
//     return NextResponse.json({ message: "Deleted post successfully!" });
//   } catch (error) {
//     return NextResponse.json({ error: "Error deleting the data", status: 500 });
//   }
// };
