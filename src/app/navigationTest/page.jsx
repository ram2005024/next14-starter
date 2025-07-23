"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
const page = () => {
  const route = useRouter();
  const query = useSearchParams();
  console.log(query.get("query"));
  const searchParams = new URLSearchParams(query.toString());
  searchParams.set("adress", "lamahi");
  route.push(`?${searchParams.toString()}`);

  const handleClick = () => {
    route.push("/");
  };
  return (
    <div>
      <Link href="/">Go to Home</Link>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default page;
