import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div>
      <h2>Hey, you've encountered an error!</h2>
      <p>
        Go back to the <Link href="/">Home</Link>
      </p>
    </div>
  );
};

export default notFound;
