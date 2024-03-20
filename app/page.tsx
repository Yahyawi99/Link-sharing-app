import Header from "@/components/header";
import styles from "@/styles/pages/home/index.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
