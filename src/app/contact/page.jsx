import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
export const metadata = {
  title: "Contact page",
  description: "Next.js contact page",
};
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/contact.png"
          fill
          alt="Contact_image"
          className={styles.contactImage}
        />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.myForm}>
          <label htmlFor="nameAndSurname"></label>
          <input
            required
            type="text"
            id="nameAndSurname"
            name="userName"
            placeholder="Full Name"
          />
          <label htmlFor="email"></label>
          <input type="text" id="emailId" name="email" placeholder="Email" />
          <label htmlFor="phnNo"></label>
          <input
            required
            type="text"
            id="phnNo"
            name="contact"
            placeholder="Phone Number"
          />
          <label htmlFor="messageArea"></label>
          <textarea
            id="messageArea"
            required
            name="message"
            rows={5}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default page;
