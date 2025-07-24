import React from "react";
import styles from "./postUser.module.css";
import Image from "next/image";
import { getUser } from "@/lib/data";
// ***Fetching data using an api database
// const get = async (userId) => {
//   const userData = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );
//   if (!userData.ok) throw new Error("Error while fetching the userData");
//   return await userData.json();
// };
const PostUser = async ({ postData }) => {
  const Data = await getUser(postData?.userId);
  return (
    <div className={styles.authorField}>
      <Image
        src={Data?.img ? Data?.img : "/noavatar.png"}
        height={50}
        width={50}
        className={styles.authorImage}
      />
      <div className={styles.author}>
        <span>Author</span>
        <span>{Data?.userName}</span>
      </div>
      <div className={styles.publishedDate}>
        <span>{postData?.publishedDate}</span>
      </div>
    </div>
  );
};

export default PostUser;
