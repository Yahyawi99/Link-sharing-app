import connect from "@/db";
import LinkModel from "@/models/Link";
import User from "@/models/User";
import PhoneCardPreview from "@/components/preview/phone-card";
import styles from "@/styles/pages/user/index.module.css";

const getUserData = async (id: string) => {
  await connect();

  const user = await User.findOne({ _id: id });
  const userLinks = await LinkModel.find({ user: id });

  return { user, links: userLinks };
};

interface Props {
  params: {
    id: string;
  };
}

export default async function SharedUserLinks({ params }: Props) {
  const { id } = params;
  const data = await getUserData(id);

  return (
    <div className={styles.container}>
      <div></div>

      <PhoneCardPreview user={data.user} links={data.links} />
    </div>
  );
}
