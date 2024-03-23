"use client";

import { useState } from "react";
import Image from "next/image";
import platforms from "@/data/platforrms.json";
import styles from "@/styles/pages/home/dropdown.module.css";

export default function Dropdown({ num }: { num: number }) {
  const [platformChoice, setPlatformChoice] = useState(platforms[0]);
  const [isOpened, setIsOpened] = useState(false);

  const formatIconName = (initialName: string) => {
    return initialName.toLocaleLowerCase().split(/\.| /).join("");
  };

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
              ></span>
              <p>{platform}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
