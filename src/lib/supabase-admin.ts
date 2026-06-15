/**
 * Citire server-side a submisiilor din Supabase pentru pagina /admin.
 *
 * Foloseste cheia SECRETA (sb_secret_..., trece peste RLS) prin REST/PostgREST
 * cu fetch — acelasi stil ca src/lib/supabase.ts, fara @supabase/supabase-js.
 * Cheia NU are prefix NEXT_PUBLIC, deci nu ajunge niciodata in browser; toate
 * apelurile de aici ruleaza doar pe server.
 */

export type Submission = {
  id: string;
  created_at: string;
  source: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  message: string;
  gdpr_consent: boolean;
  service: string | null;
  budget: string | null;
};

export type FetchOptions = {
  /** Filtreaza dupa coloana `source` (ex. "contact_form", "start_project"). */
  source?: string;
};

/**
 * Returneaza submisiile, cele mai recente primele. Arunca daca lipsesc
 * variabilele de mediu sau daca Supabase raspunde cu eroare — apelantul
 * (Server Component / route handler) trateaza eroarea.
 */
export async function fetchSubmissions(
  opts: FetchOptions = {},
): Promise<Submission[]> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) {
    throw new Error(
      "Lipsesc SUPABASE_URL / SUPABASE_SECRET_KEY din .env.local",
    );
  }

  const params = new URLSearchParams({
    select: "*",
    order: "created_at.desc",
  });
  if (opts.source) params.set("source", `eq.${opts.source}`);

  const res = await fetch(
    `${url}/rest/v1/contact_submissions?${params.toString()}`,
    {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      // Datele se schimba des si sunt sensibile — nu le punem in cache.
      cache: "no-store",
    },
  );

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Supabase ${res.status}: ${detail}`);
  }

  return (await res.json()) as Submission[];
}
