import Header from "@/components/home/header";
import Main from "@/components/home/main";
import Wrapper from "@/components/home/wrapper";
import Links from "@/components/home/links";
import ProfileDetails from "@/components/home/profile-details";
import styles from "@/styles/pages/home/index.module.css";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Links />
        <ProfileDetails />
      </Wrapper>
    </>
  );
}
