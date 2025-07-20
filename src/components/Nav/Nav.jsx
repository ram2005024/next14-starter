"use client";
import React from "react";
import Links from "./Links/Links";
import styles from "./nav.module.css";
const Nav = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>Cyrus</p>
      <div className={styles.links}>
        <Links />
      </div>
    </div>
  );
};

export default Nav;
