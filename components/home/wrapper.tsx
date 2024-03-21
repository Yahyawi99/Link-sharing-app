"use client";

import { useState } from "react";
import Header from "./header";
import PhoneIllustration from "./illustration";
import styles from "@/styles/pages/home/index.module.css";

export default function Wrapper({ children }: { children: JSX.Element[] }) {
  const [content, setContent] = useState("links");

  return (
    <main className={styles.container}>
      <Header toggleContent={setContent} content={content} />

      <div className={styles.main}>
        <PhoneIllustration />

        <div>{content === "links" ? children[0] : children[1]}</div>
      </div>
    </main>
  );
}
