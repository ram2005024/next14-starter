"use client";
import React from "react";
import styles from "./NavLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ items, key }) => {
  const path = usePathname();
  return (
    <div
      className={`${path === items.path ? styles.active : styles.btnContainer}`}
      id={key}
    >
      <Link href={items.path} id={items.title} className={styles.linkButton}>
        {items.title}
      </Link>
    </div>
  );
};

export default NavLink;
