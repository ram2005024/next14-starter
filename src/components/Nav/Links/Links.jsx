"use Client";
import React from "react";
import styles from "./Links.module.css";
import NavLink from "../NavLink/NavLink";
import { useState } from "react";
const Links = () => {
  const [isAdmin, setAdmin] = useState(false);
  const [session, setSession] = useState(true);
  const link = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About us",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className={styles.container}>
      {link.map((link) => (
        <NavLink items={link} />
      ))}

      {session ? (
        <>
          {isAdmin && <NavLink items={{ title: "Admin", path: "/admin" }} />}
          <button className={styles.logoutBtn}>LogOut</button>
        </>
      ) : (
        <NavLink items={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
