import Image from "next/image";
import styles from "./page.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>
          Logical View and <span> Logic</span>
        </h1>
        <p>
          Logical reasoning through every premise, we built a solid model with
          structure, function, and consistency using clear mapping and schema.
          Deduction and inference shaped our truth, tested for validity,
          avoiding dependency while preserving sequence, hierarchy, and
          conceptual abstraction—a thoughtful representation and precise
          interpretation of the system.
        </p>
        <div className={styles.buttonContainer}>
          <button>Learn More</button>
          <button>Contact us</button>
        </div>
        <div className={styles.banner}>
          <Image src="/brands.png" fill className={styles.bannerImage} alt="" />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" className={styles.heroImage} fill alt="" />
      </div>
    </div>
  );
};

export default Home;
