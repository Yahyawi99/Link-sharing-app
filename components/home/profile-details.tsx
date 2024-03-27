import styles from "@/styles/components/home/profileDetails.module.css";

export default async function ProfileDetails() {
  return (
    <div className={styles.profileDetailsContainer}>
      <h1>Profile Details</h1>
      <p>Add your details to create a personal touch to your profile.</p>

      <form action="" className={styles.form}>
        <div>
          <p>Profile picture</p>

          <input type="file" accept=".png, .jpg, .jpeg" name="avatar" />

          <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
        </div>

        <div>
          <div>
            <label htmlFor="">
              First name
              <span>*</span>
            </label>
            <input type="text" name="firstName" placeholder="e.g Yassin" />
          </div>

          <div>
            <label htmlFor="">Last name</label>
            <input type="text" name="lastName" placeholder="e.g Yahyawi" />
          </div>

          <div>
            <label htmlFor="">
              Email
              <span>*</span>
            </label>
            <input
              type="text"
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
