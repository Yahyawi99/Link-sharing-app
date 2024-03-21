"use client";

import { useEffect, useState } from "react";

export default function Main({ children }: { children: JSX.Element[] }) {
  const [content, setContent] = useState("links");

  useEffect(() => {
    setContent(localStorage.getItem("content") || "links");
  });

  const handleStorageChange = (event: StorageEvent) => {
    console.log(event.key);
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  });

  return <>{content === "links" ? children[0] : children[1]}</>;
}
