"use client";

import { useState } from "react";
import Image from "next/image";
import platforms from "@/data/platforrms.json";
import styles from "@/styles/pages/home/dropdown.module.css";

export default function Dropdown() {
  const [choice, setChoice] = useState(platforms[0]);

  return (
    <div className={styles.container}>
      <label htmlFor="platformName">Platform</label>
      {/* <div> */}
      <input
        id="platformName"
        type="text"
        name="platform"
        value={choice}
        readOnly
      />
      <Image
        src="/icons/icon-chevron-down.svg"
        alt="chevron-down"
        width={15}
        height={15}
      />
      {/* </div> */}

      <div className={styles.platforms}>
        {platforms.map((platform, i) => {
          const iconName = platform.toLocaleLowerCase().split(/\.| /).join("");

          return (
            <div key={i} className={styles.platform}>
              {/* <Image
                src={`/icons/select-icons/icon-${iconName}.svg`}
                alt={platform}
                width={20}
                height={20}
              /> */}

              <span
                style={{
                  maskImage: `url(/icons/select-icons/icon-${iconName}.svg)`,
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
