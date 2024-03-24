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
                <div
                  key={link.id}
                  className={styles[formatIconName(link.name)]}
                >
                  <span
                    style={{
                      maskImage: `url(/icons/select-icons/icon-${formatIconName(
                        link.name
                      )}.svg)`,
                    }}
                  />
                  <p>{link.name}</p>

                  <i className={styles.arrow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#fff"
                        d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"
                      />
                    </svg>
                  </i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
