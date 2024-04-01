import connect from "@/db";
import LinkModel from "@/models/Link";
import User from "@/models/User";
import Link from "next/link";
import PhoneCardPreview from "@/components/preview/phone-card";
import styles from "@/styles/pages/preview/index.module.css";

const getUserData = async (id: string) => {
  try {
    await connect();
    const user = await User.find({ _id: id });
    const userLinks = await LinkModel.find({ user: id });
    console.log(user);
  } catch (error) {}
};

interface PreviewProps {
  params: {
    id: string;
  };
}

export default async function Preview({ params }: PreviewProps) {
  const { id } = params;

  const data = await getUserData(id);
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
