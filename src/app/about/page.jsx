import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
export const metadata = {
  title: "About page",
  description: "Next.js about page",
};
const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Company</h2>
        <h1>We create a simple way to interact with the customer.</h1>
        <p className={styles.aboutText}>
          At Cyrus, under Shekhar's vision, we specialize in building flawless
          UI experiences tailored for tech companies. Our interfaces are
          intuitive, visually striking, and performance-driven—transforming
          complexity into simplicity. We redefine user engagement by designing
          smooth digital journeys that not only look great but function
          seamlessly across platforms. Let’s make tech feel effortless
        </p>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceBox}>
            <p>10 K+</p>
            <p>Year Experince</p>
          </div>
          <div className={styles.experienceBox}>
            <p>10 K+</p>
            <p>Skill oriented</p>
          </div>
          <div className={styles.experienceBox}>
            <p>20 K+</p>
            <p>Expertise</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" className={styles.aboutImage} fill />
      </div>
    </div>
  );
};

export default Page;
