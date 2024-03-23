"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Dropdown from "./dropdown";
import styles from "@/styles/pages/home/links.module.css";

export default function Links() {
  const [formState, action] = useFormState(actions.saveLinks, { errors: [] });
  const [numOfLinks, setNumOfLinks] = useState<string[]>([]);

  const revomeLink = (num: string) => {
    const newLinks = numOfLinks.filter((number) => number !== num);
    setNumOfLinks(newLinks);
  };

  const addLink = () => {
    setNumOfLinks([...numOfLinks, uuidv4()]);
  };

  return (
    <div className={styles.linksContainer}>
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world
      </p>

      <button
        className={numOfLinks.length === 5 ? styles.disableBtn : ""}
        type="button"
        onClick={addLink}
      >
        + Add new link
      </button>

      <form action={action} className={styles.links}>
        {numOfLinks.length ? (
          numOfLinks.map((num, i) => {
            return (
              <div key={`link-${num}`} className={styles.link}>
                <div>
                  <p>Link #{i + 1}</p>
                  <button
                    type="button"
                    onClick={() => {
                      revomeLink(num);
                    }}
                  >
                    Remove
                  </button>
                </div>

                <Dropdown num={i + 1} />

                <div>
                  <label htmlFor={`url${i + 1}`}>Link</label>
                  <input
                    type="text"
                    id={`url${i + 1}`}
                    name={`url${i + 1}`}
                    placeholder="e.g., https://www.example.com/username"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <Empty />
        )}

        <div className={styles.submitBtn}>
          <button
            className={numOfLinks.length === 0 ? styles.disableBtn : ""}
            type="submit"
          >
            Save
          </button>
          <p className={styles.error}>{formState.errors.join("")}</p>
        </div>
      </form>
    </div>
  );
}

function Empty() {
  return (
    <div className={styles.noLinks}>
      <Image
        src="/images/illustration-empty.svg"
        alt="illustration-empty"
        fill={true}
        priority={true}
      />

      <h1>Let's get you started</h1>
      <p>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
}
