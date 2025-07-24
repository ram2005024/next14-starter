import React, { Suspense } from "react";
import styles from "./slug.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";
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
  const postData = await getPost({ slug });
  return (
    <div className={styles.container}>
      <div className={styles.imageCont}>
        <Image
          src={postData.img}
          alt="slug_image"
          fill
          className={styles.myImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h1>{postData.title}</h1>
        <Suspense fallback={<div>Loading, please wait</div>}>
          <PostUser postData={postData} />
        </Suspense>
        <p>{postData?.description}</p>
      </div>
    </div>
  );
};

export default page;
