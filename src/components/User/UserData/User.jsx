import React from "react";
import styles from "./User.module.css";
import { getUsers } from "@/lib/data";
import Image from "next/image";
import DeleteUserForm from "@/components/DeleteForm/DeleteUserForm";
const User = async () => {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h2>Users</h2>
      {users.map((items) => (
        <div key={items.id} className={styles.userContainer}>
          <div className={styles.userBody}>
            <Image
              src={items.img || "/noavatar.png"}
              height={50}
              width={50}
              alt="User image"
              className={styles.userImage}
            />
            <span>{items.userName}</span>
          </div>

          <DeleteUserForm user={items} />
        </div>
      ))}
    </div>
  );
};

export default User;
