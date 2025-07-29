import React from "react";
import Links from "./Links/Links";
import Link from "next/link";
import styles from "./nav.module.css";
import { auth } from "@/lib/auth";
const Nav = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Cyrus
      </Link>
      <div className={styles.links}>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Nav;
