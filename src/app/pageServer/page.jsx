import { serverAction } from "@/lib/action";
import React from "react";
import { deleteAction } from "@/lib/action";
// const serverAction = async () => {
//   "use server";
//   console.log("Hey it works!");
// };
const page = () => {
  return (
    <div>
      <form action={serverAction}>
        <input type="text" placeholder="ENTER TITLE" name="title" />
        <input type="text" placeholder="ENTER DESCRIPTION" name="description" />
        <input type="text" placeholder="ENTER SLUG NAME" name="slug" />
        <input type="text" placeholder="ENTER THE USERID" name="userId" />
        <button>Submit</button>
      </form>
      <form action={deleteAction}>
        <input type="text" name="id" placeholder="ENTER POST ID TO DELETE" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default page;
