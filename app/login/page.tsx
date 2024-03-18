import Link from "next/link";
import Logo from "@/components/logo";
import styles from "@/styles/pages/login/index.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <Logo width={75} height={75} />

      <div>
        <h1>Login</h1>
        <p>Add your details below to get back into the app</p>

        <form action="" className={styles.form}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <button className={styles.submit}>Login</button>
        </form>

        <p>
          Don't have an account? <Link href="/signup">Create account</Link>
        </p>
      </div>
    </div>
  );
}
