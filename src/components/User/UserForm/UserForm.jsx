import React from "react";
import styles from "./UserForm.module.css";
import { newUser } from "@/lib/action";
const UserForm = () => {
  return (
    <div className={styles.container}>
      <h2>Add new user</h2>
      <form action={newUser} className={styles.myForm}>
        <input
          type="text"
          required
          name="userName"
          placeholder="Enter username"
        />
        <input type="text" required name="email" placeholder="Enter email" />
        <input type="text" required name="id" placeholder="Enter userID" />
        <input
          type="password"
          required
          name="password"
          placeholder="Enter password"
        />
        <input type="img" name="img" placeholder="Enter image url" />
        <select name="isAdmin">
          <option value="">Add admin ?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
