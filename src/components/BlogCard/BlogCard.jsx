import React from "react";
import styles from "./BlogCard.module.css";
import Image from "next/image";
import Link from "next/link";
const BlogCard = ({ image, blogDataObject }) => {
  return (
    <div className={styles.blogCard} id={blogDataObject.id}>
      <div className={styles.imagePart}>
        <div className={styles.imageContainer}>
          <Image src={image} fill className={styles.myImage} />
        </div>
        <span>{blogDataObject.publishedDate}</span>
      </div>
      <div className={styles.textPart}>
        <span>{blogDataObject.title}</span>
        <span>{blogDataObject.des}</span>
        <Link className={styles.button} href={`blog/${blogDataObject.id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
