"use client";

import Image from "next/image";
import { useMain } from "@/context";
import styles from "@/styles/components/shared/modal.module.css";

export default function Modal() {
  const { showModal } = useMain();

  return (
    <div className={`${styles.container} ${showModal ? styles.showModal : ""}`}>
      <div>
        <Image
          src="/icons/icon-changes-saved.svg"
          alt="save-icon"
          width={15}
          height={15}
        />

        <p>Your changes have been successfully saved!</p>
      </div>
    </div>
  );
}
