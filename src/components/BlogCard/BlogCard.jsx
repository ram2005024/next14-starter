import React from "react";
import styles from "./BlogCard.module.css";
import Image from "next/image";
import Link from "next/link";
const BlogCard = ({ image, blogDataObject }) => {
  return (
    <div className={styles.blogCard} id={blogDataObject.userId}>
      <div className={styles.imagePart}>
        <div className={styles.imageContainer}>
          <Image src={image} fill className={styles.myImage} />
        </div>
        <span>19.02.2025</span>
      </div>
      <div className={styles.textPart}>
        <span>{blogDataObject?.title}</span>
        <span>{blogDataObject?.description}</span>
        <Link className={styles.button} href={`blog/${blogDataObject?.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
