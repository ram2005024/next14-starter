"use client";
import React from "react";
import { login } from "@/lib/action";
import styles from "./Signin.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
const Signin = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form action={formAction} className={styles.myForm}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Submit</button>
      {state?.error}

      <Link
        href="/register"
        style={{
          fontSize: 14,
        }}
      >
        Do not have an account? <b>Register now</b>
      </Link>
    </form>
  );
};

export default Signin;
