import React from "react";
import styles from "./page.module.css";
import BlogCard from "@/components/BlogCard/BlogCard";
// import { getPosts } from "@/lib/data";
export const metadata = {
  title: "Blog page",
  description: "Next.js blog   page",
};
//Use api for fetching data
const page = async () => {
  const blogObject = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog`,
    {
      cache: "no-store",
      
    }
  );
  if (!blogObject.ok)
    throw new Error("Sorry data couldn't be fetched due to an error occured!");
  const blogDataObject = await blogObject.json();
  // ** Using data without an endpoint api**
  // const blogDataObject = await getPosts();
  // console.log(blogDataObject);

  return (
    <div className={styles.container}>
      {blogDataObject.map((items) => (
        <BlogCard
          key={items?._id}
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
