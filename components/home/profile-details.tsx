import Image from "next/image";
import styles from "@/styles/components/home/profileDetails.module.css";

export default async function ProfileDetails() {
  return (
    <div className={styles.profileDetailsContainer}>
      <h1>Profile Details</h1>
      <p>Add your details to create a personal touch to your profile.</p>

      <form action="" className={styles.form}>
        <div>
          <label htmlFor="avatar">Profile picture</label>

          <div className={styles.fileInput}>
            <input
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              name="avatar"
            />

            <Image
              src="/icons/icon-upload-image.svg"
              alt="upload"
              width={30}
              height={30}
            />
            <p>+ Upload Image</p>
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
