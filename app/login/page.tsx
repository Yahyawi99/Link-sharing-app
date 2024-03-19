"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import Logo from "@/components/logo";
import styles from "@/styles/pages/login/index.module.css";

export default function Login() {
  const [formState, action] = useFormState(actions.login, { errors: {} });
  return (
    <div className={styles.container}>
      <Logo width={75} height={75} />

      <div>
        <h1>Login</h1>
        <p>Add your details below to get back into the app.</p>

        <form action={action} className={styles.form}>
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
              placeholder="Enter your password"
            />
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
