import { deleteUser } from "@/lib/action";
import React from "react";

const DeleteUserForm = ({ user }) => {
  const deleteById = deleteUser.bind(null, user?._id);
  return (
    <form
      action={deleteById}
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: "80px",
          height: "40px",
          backgroundColor: "red",
          borderRadius: "10px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </form>
  );
};

export default DeleteUserForm;
