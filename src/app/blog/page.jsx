import React from "react";
import styles from "./page.module.css";
import BlogCard from "@/components/BlogCard/BlogCard";
import { getPosts } from "@/lib/data";
//Use api for fetching data
const page = async () => {
  //   const blogObject = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //     next: {
  //       revalidate: 3600,
  //     },
  //   });
  //   if (!blogObject.ok)
  //     throw new Error("Sorry data couldn't be fetched due to an error occured!");
  // const blogDataObject = await blogObject.json();
  // ** Using data without an endpoint api**
  const postsData = await getPosts();
  console.log(postsData);

  return (
    <div className={styles.container}>
      {postsData.map((items) => (
        <BlogCard
          image={
            items.img
              ? items.img
              : "https://cdn.pixabay.com/photo/2017/03/12/16/18/madrid-2137365_1280.jpg"
          }
          blogDataObject={items}
        />
      ))}
    </div>
  );
};

export default page;
