"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import styles from "@/styles/pages/signup/index.module.css";

export default function Signup() {
  const [formState, action] = useFormState(actions.signup, {
    errors: {},
  });

  return (
    <div className={styles.container}>
      <Logo width={75} height={75} />

      <div>
        <h1>Sign up</h1>
        <p>Let’s get you started sharing your links!</p>

        <form
          action={action}
          className={styles.form}
          autoComplete="true"
          noValidate
        >
          <p className={styles.errorMsg}>
            {formState.errors._auth?.join(", ")}
          </p>

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
            <p className={styles.errorMsg}>
              {formState.errors.username?.join(", ")}
            </p>
          </div>

          <div className={styles.email}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. yassin@gmail.com"
            />
            <p className={styles.errorMsg}>
              {formState.errors.email?.join(", ")}
            </p>
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
            <p className={styles.errorMsg}>
              {formState.errors.password?.join(", ")}
            </p>
          </div>

          <button type="submit" className={styles.submit}>
            Create new account
          </button>
        </form>

        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
