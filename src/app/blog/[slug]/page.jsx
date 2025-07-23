import React, { Suspense } from "react";
import styles from "./slug.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPosts, getPost } from "@/lib/post";
// ***Fetching Api with the database***
// const get = async (params) => {
//   const myData = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params}`
//   );
//   if (!myData.ok) throw new Error("Errored while fetching the slug data.");
//   return await myData.json();
// };
const page = async ({ params }) => {
  const { slug } = params;
  console.log("Slug received:", slug); //
  const posts = await getPosts();
  const postData = await getPost(slug, posts);
  return (
    <div className={styles.container}>
      <div className={styles.imageCont}>
        <Image
          src="https://cdn.pixabay.com/photo/2017/03/12/16/18/madrid-2137365_1280.jpg"
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
        <p>{postData?.des}</p>
      </div>
    </div>
  );
};

export default page;
