import Link from "next/link";
import PhoneIllustration from "@/components/home/illustration";
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

      {/* <PhoneIllustration /> */}
    </div>
  );
}
