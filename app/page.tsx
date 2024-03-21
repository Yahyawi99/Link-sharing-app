import Header from "@/components/home/header";
import Main from "@/components/home/main";
import Links from "@/components/home/links";
import ProfileDetails from "@/components/home/profile-details";
import styles from "@/styles/pages/home/index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Main>
        <Links />
        <ProfileDetails />
      </Main>
    </main>
  );
}
