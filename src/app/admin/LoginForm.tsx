"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "@/app/actions/admin";
import styles from "./admin.module.css";

const ERRORS: Record<string, string> = {
  bad: "Wrong password. Try again.",
  rate: "Too many attempts. Please wait a few minutes.",
  config: "ADMIN_PASSWORD is not set on the server.",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.submit} disabled={pending}>
      {pending ? "Signing in…" : "Sign in"}
    </button>
  );
}

export default function LoginForm({ error }: { error?: string }) {
  const [show, setShow] = useState(false);

  return (
    <main className={styles.loginPage}>
      <form action={login} className={styles.loginCard}>
        <div className={styles.loginBrand}>
          <span className={styles.brandDot} />
          <span>viral4hype</span>
        </div>
        <h1 className={styles.loginTitle}>Admin access</h1>
        <p className={styles.loginHint}>
          Enter the password to view form submissions.
        </p>

        <div className={styles.field}>
          <input
            className={styles.input}
            type={show ? "text" : "password"}
            name="password"
            required
            autoFocus
            placeholder="Password"
            autoComplete="current-password"
          />
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        {error && ERRORS[error] && (
          <p role="alert" className={styles.loginError}>
            {ERRORS[error]}
          </p>
        )}

        <SubmitButton />
      </form>
    </main>
  );
}
