import Link from "next/link";
import PhoneCardPreview from "@/components/preview/phone-card";
import styles from "@/styles/pages/preview/index.module.css";

export default function Preview() {
  return (
    <div className={styles.container}>
      <div>
        <header>
          <Link href="/">
            <button>Back to Editor</button>
          </Link>

          <button>Share Link</button>
        </header>
      </div>

      <PhoneCardPreview />
    </div>
  );
}
