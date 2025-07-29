"use client";
import React from "react";
import styles from "./PostForm.module.css";
import { serverAction } from "@/lib/action";
import { useRef } from "react";
const PostForm = () => {
  const ref = useRef(null);
  return (
    <div className={styles.container}>
      <h2>Add New Post</h2>
      <form
        action={async (formData) => {
          await serverAction(formData);
          ref.current?.reset();
        }}
        className={styles.myForm}
        ref={ref}
      >
        <input type="text" name="title" placeholder="title" required />
        <input type="text" name="slug" placeholder="Slug" required />
        <input type="text" name="img" placeholder="Image Link" />
        <input type="text" name="userId" placeholder="Author Id" />
        <textarea
          name="description"
          rows={50}
          required
          placeholder="Description"
        ></textarea>
        <button>Add Post</button>
      </form>
    </div>
  );
};

export default PostForm;
