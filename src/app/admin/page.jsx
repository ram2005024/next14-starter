import React, { Suspense } from "react";
import styles from "./page.module.css";
import PostForm from "@/components/Post/PostForm/PostForm";
import User from "@/components/User/UserData/User";
import UserForm from "@/components/User/UserForm/UserForm";
import PostData from "@/components/Post/PostData/PostData";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstRow}>
        <Suspense fallback={<div>Please wait....</div>}>
          <PostData />
        </Suspense>
        <PostForm />
      </div>
      <div className={styles.secondRow}>
        <Suspense fallback={<div>Please wait....</div>}>
          <User />
        </Suspense>
        <UserForm />
      </div>
    </div>
  );
};

export default page;
