import React, { Suspense } from "react";
import styles from "./slug.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost({ slug });
  if (!post) {
    return {
      title: "Page doesnot exist",
      description: "No such page exist",
    };
  }
  return {
    title: `${post.slug}`,
    description: `${post.description}`,
  };
};
// ***Fetching Api with the database***
const getData = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog/${slug}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  console.log(res);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
const page = async ({ params }) => {
  const { slug } = params;
  const postData = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imageCont}>
        <Image
          src={postData?.img}
          alt="slug_image"
          fill
          className={styles.myImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h1>{postData?.title}</h1>
        <Suspense fallback={<div>Loading, please wait</div>}>
          <PostUser postData={postData} />
        </Suspense>
        <p>{postData?.description}</p>
      </div>
    </div>
  );
};

export default page;
