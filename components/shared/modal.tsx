import Image from "next/image";
import styles from "@/styles/components/shared/modal.module.css";

export default function Modal() {
  return (
    <div className={styles.container}>
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
