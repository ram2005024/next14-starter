import { connectionToDB } from "@/lib/connectionToDB";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const GET = async () => {
  try {
    await connectionToDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching the data", status: 500 });
  }
};
