"use client";

import { useMain } from "@/context";
import { UserDocument, SingleLink } from "@/interfaces";
import { formatIconName } from "@/utils/format-icon-name";
import Image from "next/image";
import styles from "@/styles/components/preview/phone-card.module.css";

interface Props {
  user?: UserDocument;
  links: SingleLink[];
}

export default function PhoneCardPreview({ user, links }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src={
            user?.avatar
              ? `/uploads/${user.avatar}`
              : "/images/placeholder-image.png"
          }
          alt="user"
          width={125}
          height={125}
          priority={true}
        />

        {user?.firstName && user?.lastName ? (
          <p>{user.firstName + " " + user.lastName}</p>
        ) : (
          <p className={styles.placeholder}></p>
        )}

        {user?.email ? (
          <p>{user.email}</p>
        ) : (
          <p className={styles.placeholder}></p>
        )}
      </div>

      <div className={styles.links}>
        {links.length > 0 ? (
          links.map((link) => {
            return (
              <div
                key={link.id}
                className={styles[formatIconName(link.name)]}
                style={{
                  color: `var(--${formatIconName(link.name)}-clr)`,
                  background: `var(--${formatIconName(link.name)}-bg)`,
                }}
              >
                <span
                  style={{
                    maskImage: `url(/icons/select-icons/icon-${formatIconName(
                      link.name
                    )}.svg)`,
                    background: `var(--${formatIconName(link.name)}-icon)`,
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
          })
        ) : (
          <div className={styles.placeholders}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
}
