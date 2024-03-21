"use client";

import { useState } from "react";
import Header from "./header";
import styles from "@/styles/pages/home/index.module.css";

export default function Wrapper({ children }: { children: JSX.Element[] }) {
  const [content, setContent] = useState("links");

  return (
    <main className={styles.main}>
      <Header toggleContent={setContent} />

      <div>{content === "links" ? children[0] : children[1]}</div>
    </main>
  );
}
