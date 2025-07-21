"use client";
import React from "react";
import Links from "./Links/Links";
import Link from "next/link";
import styles from "./nav.module.css";
const Nav = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Cyrus
      </Link>
      <div className={styles.links}>
        <Links />
      </div>
    </div>
  );
};

export default Nav;
