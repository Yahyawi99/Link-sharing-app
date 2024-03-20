import Link from "next/link";
import Logo from "./logo";
import styles from "@/styles/components/header/index.module.css";

export default async function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Logo width={75} height={75} />
        <h2>devlinks</h2>
      </div>

      <div>
        <button>Links</button>
        <button>Profile Details</button>
      </div>

      <div>
        <button>Preview</button>
      </div>
    </header>
  );
}
