import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
          alt="about-image"
          fill
        />
      </div>
    </div>
  );
};

export default Page;
