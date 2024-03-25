"use client";

import { useState } from "react";
import Header from "./header";
import Modal from "../shared/modal";
import styles from "@/styles/pages/home/index.module.css";

export default function Wrapper({ children }: { children: JSX.Element[] }) {
  const [content, setContent] = useState("links");

  return (
    <main className={styles.container}>
      <Header toggleContent={setContent} content={content} />

      <div className={styles.main}>
        {children[0]}

        <div>
          {content === "links" ? children[1] : children[2]}
          <Modal />
        </div>
      </div>
    </main>
  );
}
