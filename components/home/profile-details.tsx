"use client";
import { useEffect, useState } from "react";
import { useMain } from "@/context";
import { useFormState } from "react-dom";

import * as actions from "@/actions";
import Image from "next/image";
import styles from "@/styles/components/home/profileDetails.module.css";

export default function ProfileDetails() {
  const { setUser, user, setLoading, animateShowModal, getData } = useMain();
  const [inputFileValue, setInputFileValue] = useState("");
  const [avatarPath, setAvatarPath] = useState("");
  const [formState, action] = useFormState(actions.saveProfileDetails, {
    errors: {},
    success: false,
  });

  useEffect(() => {
    if (inputFileValue) {
      const name = inputFileValue.split("\\")[2].split(" ").join("-");
      setAvatarPath(name);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputFileValue]);

  useEffect(() => {
    if (formState.success) {
      animateShowModal();
      getData();
    }
    setLoading(false);
  }, [formState]);

  return (
    <div className={styles.profileDetailsContainer}>
      <h1>Profile Details</h1>
      <p>Add your details to create a personal touch to your profile.</p>

      <form
        action={action}
        onSubmit={() => setLoading(true)}
        className={styles.form}
      >
        <div>
          <label htmlFor="avatar">Profile picture</label>

          <div className={styles.fileInput}>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept=".png, .jpg, .jpeg"
              value={inputFileValue}
              onChange={(e) => setInputFileValue(e.currentTarget.value)}
            />

            {avatarPath ? (
              <p className={styles.uploadName}>{avatarPath}</p>
            ) : (
              <>
                <Image
                  src="/icons/icon-upload-image.svg"
                  alt="upload"
                  width={30}
                  height={30}
                />
                <p>+ Upload Image</p>
              </>
            )}
          </div>

          <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
        </div>

        <div>
          <div>
            <label htmlFor="firstName">
              First name
              <span>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="e.g Yassin"
              value={user?.firstName}
              onChange={(e) =>
                setUser((prev) => {
                  if (prev) prev.firstName = e.currentTarget.value;
                  return prev;
                })
              }
            />
            <p className={styles.error}>
              {formState.errors.firstName?.join(", ")}
            </p>
          </div>

          <div>
            <label htmlFor="lastName">
              Last name
              <span>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="e.g Yahyawi"
              value={user?.lastName}
              onChange={(e) =>
                setUser((prev) => {
                  if (prev) prev.lastName = e.currentTarget.value;
                  return prev;
                })
              }
            />
            <p className={styles.error}>
              {formState.errors.lastName?.join(", ")}
            </p>
          </div>

          <div>
            <label htmlFor="email">
              Email
              <span>*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="e.g yassin@gmail.com"
              value={user?.email}
              onChange={(e) =>
                setUser((prev) => {
                  if (prev) prev.email = e.currentTarget.value;
                  return prev;
                })
              }
            />
            <p className={styles.error}>{formState.errors.email?.join(", ")}</p>
          </div>
        </div>

        <div className={styles.submitBtn}>
          <button type="submit">Save</button>
          <p className={styles.error}>{formState.errors._auth?.join(", ")}</p>
        </div>
      </form>
    </div>
  );
}
