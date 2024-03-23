import Wrapper from "@/components/home/wrapper";
import PhoneIllustration from "@/components/home/illustration";
import Links from "@/components/home/links";
import ProfileDetails from "@/components/home/profile-details";

export default function Home() {
  return (
    <>
      <Wrapper>
        <PhoneIllustration />
        <Links />
        <ProfileDetails />
      </Wrapper>
    </>
  );
}
