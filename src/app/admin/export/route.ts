import { NextResponse, type NextRequest } from "next/server";
import { isAuthed } from "@/lib/admin-auth";
import { fetchSubmissions, type Submission } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

const COLUMNS: (keyof Submission)[] = [
  "created_at",
  "source",
  "name",
  "company",
  "email",
  "phone",
  "service",
  "budget",
  "message",
  "gdpr_consent",
];

/** Escape RFC-4180: pune intre ghilimele si dubleaza ghilimelele interne. */
function csvCell(value: unknown): string {
  const s = value === null || value === undefined ? "" : String(value);
  return `"${s.replace(/"/g, '""')}"`;
}

export async function GET(request: NextRequest): Promise<Response> {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const source = request.nextUrl.searchParams.get("source") ?? undefined;

  let rows: Submission[];
  try {
    rows = await fetchSubmissions({ source });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to load data.";
    return NextResponse.json({ error: msg }, { status: 502 });
  }

  const header = COLUMNS.join(",");
  const body = rows
    .map((r) => COLUMNS.map((c) => csvCell(r[c])).join(","))
    .join("\r\n");
  // BOM ca Excel sa recunoasca UTF-8 (diacritice).
  const csv = `﻿${header}\r\n${body}`;

  const stamp = new Date().toISOString().slice(0, 10);
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="submissions-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
