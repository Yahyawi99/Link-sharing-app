"use client";

import { useEffect, useState } from "react";
import { useMain } from "@/context";
import Header from "./header";
import Modal from "../shared/modal";
import styles from "@/styles/pages/home/index.module.css";

export default function Wrapper({ children }: { children: JSX.Element[] }) {
  const { loading } = useMain();
  const [content, setContent] = useState("links");

  useEffect(() => {
    setContent(localStorage.getItem("content") || "links");
  }, []);

  return (
    <main className={styles.container}>
      <Header toggleContent={setContent} content={content} />

      <div className={`${styles.main} ${loading ? styles.isLoading : ""}`}>
        {children[0]}

        <div>
          {content === "links" ? children[1] : children[2]}
          <Modal />
        </div>
      </div>
    </main>
  );
}
