"use client";
import { useEffect, useState } from "react";
import path from "path";
import fs from "fs-extra";
import * as actions from "@/actions";
import Image from "next/image";
import styles from "@/styles/components/home/profileDetails.module.css";

export default function ProfileDetails() {
  const [inputFileValue, setInputFileValue] = useState("");
  const [avatarPath, setAvatarPath] = useState("");

  useEffect(() => {
    if (inputFileValue) {
      const name = inputFileValue.split("\\")[2].split(" ").join("-");
      setAvatarPath(name);
    }
  }, [inputFileValue]);

  return (
    <div className={styles.profileDetailsContainer}>
      <h1>Profile Details</h1>
      <p>Add your details to create a personal touch to your profile.</p>

      <form action={actions.saveProfileDetails} className={styles.form}>
        <div>
          <label htmlFor="avatar">Profile picture</label>

          <div className={styles.fileInput}>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept=".png, .jpg, .jpeg"
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
            />
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
            />
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
            />
          </div>
        </div>

        <div className={styles.submitBtn}>
          <button type="submit">Save</button>
          {/* <p className={styles.error}>{formState.errors?.join("")}</p> */}
        </div>
      </form>
    </div>
  );
}
