/**
 * Inserare server-side in Supabase prin REST API (PostgREST), folosind fetch.
 *
 * Nu folosim @supabase/supabase-js fiindca cere WebSocket nativ (lipsa pe
 * Node < 22). Apelul REST simplu nu are nevoie de el si e suficient pentru
 * inserarea submisiilor. Cheia publishable + politica RLS (doar INSERT)
 * permit scrierea, dar nu si citirea.
 */

export type ContactSubmissionRow = {
  source: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  message: string;
  gdpr_consent: boolean;
  service?: string | null;
  budget?: string | null;
};

export async function insertContactSubmission(
  row: ContactSubmissionRow,
): Promise<{ error: string | null }> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    return {
      error:
        "Lipsesc variabilele SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY din .env.local",
    };
  }

  try {
    const res = await fetch(`${url}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });

    if (!res.ok) {
      const detail = await res.text();
      return { error: `Supabase ${res.status}: ${detail}` };
    }

    return { error: null };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Network error" };
  }
}
