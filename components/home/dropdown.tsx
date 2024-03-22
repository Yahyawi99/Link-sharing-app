"use client";

import { useState } from "react";
import Image from "next/image";
import platforms from "@/data/platforrms.json";
import styles from "@/styles/pages/home/dropdown.module.css";

export default function Dropdown() {
  const [platformChoice, setPlatformChoice] = useState(platforms[0]);

  const formatIconName = (initialName: string) => {
    return initialName.toLocaleLowerCase().split(/\.| /).join("");
  };

  return (
    <div className={styles.container}>
      <label htmlFor="platformName">Platform</label>
      <div>
        <Image
          src={`/icons/select-icons/icon-${formatIconName(platformChoice)}.svg`}
          alt="platform"
          width={20}
          height={20}
        />

        <input
          id="platformName"
          type="text"
          name="platform"
          value={platformChoice}
          readOnly
        />
        <Image
          src="/icons/icon-chevron-down.svg"
          alt="chevron-down"
          width={15}
          height={15}
        />
      </div>

      <div className={styles.platforms}>
        {platforms.map((platform, i) => {
          return (
            <div
              key={i}
              className={styles.platform}
              onClick={() => setPlatformChoice(platform)}
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

/* {
     "name":"Github",
    "icon" :"/icons/select-icons/icon-github"
   },*/
