import Wrapper from "@/components/home/wrapper";
import Links from "@/components/home/links";
import ProfileDetails from "@/components/home/profile-details";

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
