"use client";
import React from "react";
import { deleteAction } from "@/lib/action";

const DeleteForm = ({ id }) => {
  const deleteById = deleteAction.bind(null, id);
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
        type="submit"
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

export default DeleteForm;
