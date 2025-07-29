import React from "react";
import styles from "./register.module.css";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
