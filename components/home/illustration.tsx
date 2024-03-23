import Image from "next/image";
import styles from "@/styles/pages/home/illustration.module.css";

export default function PhoneIllustration() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          src="/images/illustration-phone-mockup.svg"
          alt="phone-illustration"
          fill={true}
          priority={true}
        />
      </div>
    </div>
  );
}
