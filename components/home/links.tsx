"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { v4 as uuidv4 } from "uuid";
import { useMain } from "@/context";
import Image from "next/image";
import Dropdown from "./dropdown";
import styles from "@/styles/pages/home/links.module.css";

export default function Links() {
  const { links, setLinks } = useMain();
  const [userEmail, setUserEmail] = useState("");
  const [formState, action] = useFormState(
    actions.saveLinks.bind(null, userEmail),
    { errors: [] }
  );

  const revomeLink = (id: string) => {
    setLinks((prev) => {
      const filteredPrev = prev.filter((link) => link.id != id);
      return filteredPrev;
    });
  };

  const addLink = () => {
    setLinks((prev) => {
      return [...prev, { id: uuidv4(), name: "Github", url: "" }];
    });
  };

  useEffect(() => {
    setUserEmail(localStorage.getItem("email") || "");
  }, []);

  return (
    <div className={styles.linksContainer}>
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world
      </p>

      <button
        className={links.length === 5 ? styles.disableBtn : ""}
        type="button"
        onClick={addLink}
      >
        + Add new link
      </button>

      <form action={action} className={styles.links}>
        {links.length ? (
          links.map((link, i) => {
            return (
              <div key={`link-${i}`} className={styles.link}>
                <div>
                  <p>Link #{i + 1}</p>
                  <button type="button" onClick={() => revomeLink(link.id)}>
                    Remove
                  </button>
                </div>

                <Dropdown link={link} num={i + 1} />

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
            className={links.length === 0 ? styles.disableBtn : ""}
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
