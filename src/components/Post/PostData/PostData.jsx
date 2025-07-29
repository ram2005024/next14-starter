"use server";
import React from "react";
import styles from "./PostData.module.css";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import DeleteForm from "@/components/DeleteForm/DeleteForm";
const PostData = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h2>Posts</h2>
      {posts.map((items) => (
        <div key={items.id} id={items.id} className={styles.postContainer}>
          <div className={styles.postBody}>
            <Image
              src={items.img || "./noavatar.png"}
              height={50}
              width={50}
              alt="postImage"
              className={styles.postImage}
            />
            <span>{items.title}</span>
          </div>
          <DeleteForm id={items.id} />
        </div>
      ))}
    </div>
  );
};

export default PostData;
