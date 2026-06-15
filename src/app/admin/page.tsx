import type { Metadata } from "next";
import { isAuthed } from "@/lib/admin-auth";
import { fetchSubmissions, type Submission } from "@/lib/supabase-admin";
import LoginForm from "./LoginForm";
import AdminDashboard from "./AdminDashboard";
import styles from "./admin.module.css";

export const metadata: Metadata = {
  title: "Admin — Submissions",
  robots: { index: false, follow: false },
};

// Citeste cookie-uri + date proaspete la fiecare request.
export const dynamic = "force-dynamic";

type SearchParams = Promise<{ error?: string }>;

export default async function AdminPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { error } = await searchParams;

  if (!(await isAuthed())) {
    return <LoginForm error={error} />;
  }

  let rows: Submission[] = [];
  let loadError: string | null = null;
  try {
    rows = await fetchSubmissions();
  } catch (err) {
    loadError = err instanceof Error ? err.message : "Failed to load data.";
  }

  if (loadError) {
    return (
      <main className={styles.page}>
        <div className={styles.errorBox}>
          Couldn’t load submissions: {loadError}
        </div>
      </main>
    );
  }

  return <AdminDashboard rows={rows} />;
}
