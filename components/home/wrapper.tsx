"use client";

import { useState } from "react";
import Header from "./header";
import styles from "@/styles/pages/home/index.module.css";

export default function Wrapper({ children }: { children: JSX.Element[] }) {
  const [content, setContent] = useState("links");

  return (
    <main className={styles.container}>
      <Header toggleContent={setContent} />

      <div className={styles.main}>
        {content === "links" ? children[0] : children[1]}
      </div>
    </main>
  );
}
