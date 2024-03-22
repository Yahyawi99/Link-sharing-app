"use client";

import { useState } from "react";
import Image from "next/image";
import Dropdown from "./dropdown";
import styles from "@/styles/pages/home/links.module.css";

export default function Links() {
  const [numOfLinks, setNumOfLinks] = useState<number[]>([]);

  return (
    <div className={styles.linksContainer}>
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world
      </p>

      <button
        className={numOfLinks.length == 5 ? styles.disableBtn : ""}
        type="button"
        onClick={() => setNumOfLinks([...numOfLinks, numOfLinks.length + 1])}
      >
        + Add new link
      </button>

      <form className={styles.links}>
        {numOfLinks.length ? (
          numOfLinks.map((num) => {
            return (
              <div key={num} className={styles.link}>
                <div>
                  <p>Link #1</p>
                  <button type="button">Remove</button>
                </div>

                <Dropdown />

                <div>
                  <label htmlFor="url">Link</label>
                  <input
                    type="text"
                    id="url"
                    name="url"
                    placeholder="e.g., https://www.example.com/username"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.noLinks}>
            <Image
              src="/images/illustration-empty.svg"
              alt="illustration-empty"
              fill={true}
            />

            <h1>Let's get you started</h1>
            <p>
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        )}

        <div className={styles.submitBtn}>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
