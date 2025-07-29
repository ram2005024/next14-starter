"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { registerAction } from "@/lib/action";
import styles from "./RegisterForm.module.css";
import Link from "next/link";
const RegisterForm = () => {
  const [state, formAction] = useFormState(registerAction, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  });
  return (
    <form action={formAction} className={styles.myForm}>
      <input type="text" placeholder="username" required name="username" />
      <input type="text" placeholder="email" required name="email" />
      <input type="password" placeholder="password" required name="password" />
      <input
        type="password"
        placeholder="password"
        required
        name="passwordAgain"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login" className={styles.loginbtn}>
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
