"use client";

import { useState } from "react";
import { SingleLink } from "@/interfaces/links";
import { formatIconName } from "@/utils/format-icon-name";
import Image from "next/image";
import platforms from "@/data/platforrms.json";
import styles from "@/styles/pages/home/dropdown.module.css";

export default function Dropdown({
  link,
  num,
}: {
  link: SingleLink;
  num: number;
}) {
  const [platformChoice, setPlatformChoice] = useState(platforms[0]);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.container}>
      <label htmlFor={`platformName-${num}`}>Platform</label>

      <div onClick={() => setIsOpened(!isOpened)}>
        <Image
          src={`/icons/select-icons/icon-${formatIconName(platformChoice)}.svg`}
          alt={`platform-${num}`}
          width={20}
          height={20}
        />

        <input
          id={`platformName-${num}`}
          type="text"
          name={`platform-${num}`}
          value={platformChoice}
          readOnly
        />

        <Image
          className={isOpened ? styles.rotate : ""}
          src="/icons/icon-chevron-down.svg"
          alt="chevron-down"
          width={15}
          height={15}
        />
      </div>

      <div className={`${styles.platforms} ${isOpened ? styles.opened : ""}`}>
        {platforms.map((platform, i) => {
          return (
            <div
              key={i}
              className={styles.platform}
              onClick={() => {
                setPlatformChoice(platform);
                setIsOpened(false);
              }}
            >
              <span
                style={{
                  maskImage: `url(/icons/select-icons/icon-${formatIconName(
                    platform
                  )}.svg)`,
                }}
              />
              <p>{platform}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
