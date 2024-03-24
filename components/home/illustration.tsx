"use client";

import { useMain } from "@/context";
import { formatIconName } from "@/utils/format-icon-name";
import Image from "next/image";
import styles from "@/styles/pages/home/illustration.module.css";

export default function PhoneIllustration() {
  const { links } = useMain();

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          src="/images/illustration-phone-mockup.svg"
          alt="phone-illustration"
          fill={true}
          priority={true}
        />

        <div>
          <div className={styles.user}>
            <Image
              src="/images/placeholder-image.png"
              alt="user"
              width={75}
              height={75}
            />

            <p>Yassin</p>
            <p>yassin@gmail.com</p>
          </div>

          <div className={styles.links}>
            {links.map((link) => {
              return (
                <div className={styles[formatIconName(link.name)]}>
                  <span
                    style={{
                      maskImage: `url(/icons/select-icons/icon-${formatIconName(
                        link.name
                      )}.svg)`,
                    }}
                  />
                  <p>{link.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
