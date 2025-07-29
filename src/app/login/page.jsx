"use server";
import React from "react";
import { handleSignIn } from "@/lib/action";
import styles from "./login.module.css";
import Signin from "@/components/SiginForm/Signin";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={handleSignIn} className={styles.gitForm}>
          <button>Sigin with Github</button>
        </form>
        <Signin />
      </div>
    </div>
  );
};

export default page;
