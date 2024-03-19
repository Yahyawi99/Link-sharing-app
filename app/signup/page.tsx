import Link from "next/link";
import Logo from "@/components/logo";
import styles from "@/styles/pages/signup/index.module.css";

export default function Signup() {
  return (
    <div className={styles.container}>
      <Logo width={75} height={75} />

      <div>
        <h1>Sign up</h1>
        <p>Let’s get you started sharing your links!</p>

        <form action="" className={styles.form}>
          <div>
            <label htmlFor="username">
              username <span>*</span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="e.g. yassin"
            />
          </div>

          <div>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. yassin@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="At least 8 characters"
            />
          </div>

          <button className={styles.submit}>Create new account</button>
        </form>

        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
