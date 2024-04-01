import connect from "@/db";
import LinkModel from "@/models/Link";
import User from "@/models/User";
import PhoneCardPreview from "@/components/preview/phone-card";
import styles from "@/styles/pages/user/index.module.css";
import { SingleLink, UserDocument } from "@/interfaces";

const getUserData = async (
  id: string
): Promise<{ user: UserDocument; links: SingleLink[] }> => {
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
  const { id: userId } = params;
  const data = await getUserData(userId);

  const { id, firstName, lastName, email, avatar } = data.user;
  const userLinks = data.links.map((link) => {
    return { id: link.id, name: link.name, url: link.url };
  });

  return (
    <div className={styles.container}>
      <div></div>

      <PhoneCardPreview
        user={{ id, firstName, lastName, email, avatar }}
        links={userLinks}
      />
    </div>
  );
}
