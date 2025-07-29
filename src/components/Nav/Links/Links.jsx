"use client";
import { FaBars } from "react-icons/fa";
import React from "react";
import styles from "./Links.module.css";
import NavLink from "../NavLink/NavLink";
import { useState } from "react";
import { handleLogout } from "@/lib/action";
const Links = ({ session }) => {
  const [isOpen, setOpen] = useState(false);
  const link = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About us",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.Linkcontainer}>
        {link.map((link) => (
          <NavLink items={link} key={link.title} />
        ))}

        {session?.user ? (
          <>
            {session?.user.isAdmin && (
              <NavLink items={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logoutBtn}>LogOut</button>
            </form>
          </>
        ) : (
          <NavLink items={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuBtn}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <FaBars size={30} />
      </button>
      {isOpen && (
        <div className={styles.menuBar}>
          {link.map((items) => (
            <NavLink items={items} key={items.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
