"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as actions from "@/actions";
import Logo from "@/components/logo";
import styles from "@/styles/pages/login/index.module.css";

export default function Login() {
  const [formState, action] = useFormState(actions.login, {
    errors: {},
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [formState]);

  return (
    <div className={styles.container}>
      <Logo width={75} height={75} />

      <div className={loading ? styles.animate : ""}>
        <h1>Login</h1>
        <p>Add your details below to get back into the app.</p>

        <form
          action={action}
          className={styles.form}
          autoComplete="true"
          noValidate
          onSubmit={() => setLoading(true)}
        >
          <p className={styles.errorMsg}>
            {formState.errors._auth?.join(", ")}
          </p>

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
              placeholder="Enter your password"
            />
            <p className={styles.errorMsg}>
              {formState.errors.password?.join(", ")}
            </p>
          </div>

          <button type="submit" className={styles.submit}>
            Login
          </button>
        </form>

        <p>
          Don't have an account? <Link href="/signup">Create account</Link>
        </p>
      </div>
    </div>
  );
}
