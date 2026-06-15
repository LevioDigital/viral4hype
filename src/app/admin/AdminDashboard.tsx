"use client";

import { useMemo, useState } from "react";
import { logout } from "@/app/actions/admin";
import type { Submission } from "@/lib/supabase-admin";
import styles from "./admin.module.css";

type SortKey = "created_at" | "name";
type SortDir = "asc" | "desc";

const SOURCES = [
  { value: "", label: "All" },
  { value: "contact_form", label: "Contact form" },
  { value: "start_project", label: "Start a Project" },
] as const;

export default function AdminDashboard({ rows }: { rows: Submission[] }) {
  const [query, setQuery] = useState("");
  const [source, setSource] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("created_at");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [open, setOpen] = useState<Set<string>>(new Set());

  const counts = useMemo(() => {
    const c = { total: rows.length, contact_form: 0, start_project: 0, recent: 0 };
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    for (const r of rows) {
      if (r.source === "contact_form") c.contact_form++;
      else if (r.source === "start_project") c.start_project++;
      if (new Date(r.created_at).getTime() >= weekAgo) c.recent++;
    }
    return c;
  }, [rows]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = rows.filter((r) => {
      if (source && r.source !== source) return false;
      if (!q) return true;
      return [r.name, r.company, r.email, r.phone, r.message, r.service, r.budget]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
    out = [...out].sort((a, b) => {
      let cmp: number;
      if (sortKey === "created_at") {
        cmp = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      } else {
        cmp = a.name.localeCompare(b.name);
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
    return out;
  }, [rows, query, source, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "created_at" ? "desc" : "asc");
    }
  }

  function toggleRow(id: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const arrow = (key: SortKey) =>
    sortKey === key ? (
      <span className={styles.sortArrow}>{sortDir === "asc" ? "↑" : "↓"}</span>
    ) : null;

  const exportHref = source
    ? `/admin/export?source=${encodeURIComponent(source)}`
    : "/admin/export";

  return (
    <main className={styles.page}>
     <div className={styles.container}>
      <header className={styles.topbar}>
        <div className={styles.brand}>
          <span className={styles.brandDot} />
          <div>
            <p className={styles.eyebrow}>viral4hype · admin</p>
            <h1 className={styles.title}>Form submissions</h1>
          </div>
        </div>
        <div className={styles.actions}>
          <a href={exportHref} className={`${styles.btn} ${styles.btnPrimary}`}>
            ↓ Export CSV
          </a>
          <form action={logout}>
            <button type="submit" className={`${styles.btn} ${styles.btnGhost}`}>
              Log out
            </button>
          </form>
        </div>
      </header>

      <section className={styles.stats}>
        <Stat value={counts.total} label="Total" />
        <Stat value={counts.contact_form} label="Contact form" />
        <Stat value={counts.start_project} label="Start a Project" />
        <Stat value={counts.recent} label="Last 7 days" accent />
      </section>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <svg
            className={styles.searchIcon}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            className={styles.searchInput}
            placeholder="Search name, email, message…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          {SOURCES.map((s) => {
            const count =
              s.value === ""
                ? counts.total
                : s.value === "contact_form"
                  ? counts.contact_form
                  : counts.start_project;
            return (
              <button
                key={s.value || "all"}
                className={`${styles.pill} ${source === s.value ? styles.pillActive : ""}`}
                onClick={() => setSource(s.value)}
              >
                {s.label}
                <span className={styles.pillCount}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {rows.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>No submissions yet</p>
          <p>New contact form and “Start a Project” entries will appear here.</p>
        </div>
      ) : visible.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>No matches</p>
          <p>Try a different search term or filter.</p>
        </div>
      ) : (
        <>
          <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th
                  className={styles.sortable}
                  onClick={() => toggleSort("created_at")}
                >
                  Date {arrow("created_at")}
                </th>
                <th>Source</th>
                <th className={styles.sortable} onClick={() => toggleSort("name")}>
                  Name {arrow("name")}
                </th>
                <th>Email</th>
                <th>Phone</th>
                <th>Service</th>
                <th aria-label="Expand" style={{ width: "2.5rem" }} />
              </tr>
            </thead>
            <tbody>
              {visible.map((r) => {
                const isOpen = open.has(r.id);
                return (
                  <FragmentRow
                    key={r.id}
                    r={r}
                    isOpen={isOpen}
                    onToggle={() => toggleRow(r.id)}
                  />
                );
              })}
            </tbody>
          </table>
          </div>
          <div className={styles.cards}>
            {visible.map((r) => (
              <MobileCard
                key={r.id}
                r={r}
                isOpen={open.has(r.id)}
                onToggle={() => toggleRow(r.id)}
              />
            ))}
          </div>
        </>
      )}
     </div>
    </main>
  );
}

function Stat({
  value,
  label,
  accent,
}: {
  value: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className={styles.statCard}>
      <div
        className={`${styles.statValue} ${accent ? styles.statValueAccent : ""}`}
      >
        {value}
      </div>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

function FragmentRow({
  r,
  isOpen,
  onToggle,
}: {
  r: Submission;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <tr
        className={`${styles.row} ${isOpen ? styles.rowOpen : ""}`}
        onClick={onToggle}
      >
        <td title={r.created_at}>{relativeTime(r.created_at)}</td>
        <td>
          <SourceBadge source={r.source} />
        </td>
        <td>{r.name}</td>
        <td>
          <a
            className={styles.email}
            href={`mailto:${r.email}`}
            onClick={(e) => e.stopPropagation()}
          >
            {r.email}
          </a>
        </td>
        <td>{r.phone ?? <span className={styles.muted}>—</span>}</td>
        <td>{r.service ?? <span className={styles.muted}>—</span>}</td>
        <td>
          <span className={`${styles.chev} ${isOpen ? styles.chevOpen : ""}`}>
            ›
          </span>
        </td>
      </tr>
      {isOpen && (
        <tr>
          <td className={styles.detailCell} colSpan={7}>
            <SubmissionDetail r={r} />
          </td>
        </tr>
      )}
    </>
  );
}

/** Detaliile complete ale unei submisii — folosite si in tabel, si in cardul mobil. */
function SubmissionDetail({ r }: { r: Submission }) {
  return (
    <div className={styles.detail}>
      <Detail label="Company" value={r.company} />
      <Detail label="Phone" value={r.phone} />
      <Detail label="Service" value={r.service} />
      <Detail label="Budget" value={r.budget} />
      <Detail label="GDPR consent" value={r.gdpr_consent ? "Yes" : "No"} />
      <Detail label="Received" value={formatFull(r.created_at)} />
      <div className={styles.detailFull}>
        <div className={styles.detailLabel}>Message</div>
        <div className={styles.message}>{r.message}</div>
      </div>
    </div>
  );
}

/** Vizualizare card pentru ecrane mici (sub 720px) — inlocuieste tabelul. */
function MobileCard({
  r,
  isOpen,
  onToggle,
}: {
  r: Submission;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}
      onClick={onToggle}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardName}>{r.name}</span>
        <SourceBadge source={r.source} />
      </div>
      <a
        className={styles.cardEmail}
        href={`mailto:${r.email}`}
        onClick={(e) => e.stopPropagation()}
      >
        {r.email}
      </a>
      <div className={styles.cardMeta}>
        <span>{relativeTime(r.created_at)}</span>
        <span className={`${styles.chev} ${isOpen ? styles.chevOpen : ""}`}>›</span>
      </div>
      {isOpen && <SubmissionDetail r={r} />}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string | null }) {
  return (
    <div>
      <div className={styles.detailLabel}>{label}</div>
      <div className={styles.detailValue}>
        {value ? value : <span className={styles.muted}>—</span>}
      </div>
    </div>
  );
}

function SourceBadge({ source }: { source: string }) {
  if (source === "contact_form")
    return <span className={`${styles.badge} ${styles.badgeContact}`}>Contact</span>;
  if (source === "start_project")
    return (
      <span className={`${styles.badge} ${styles.badgeStart}`}>Start a Project</span>
    );
  return <span className={`${styles.badge} ${styles.badgeOther}`}>{source}</span>;
}

function relativeTime(iso: string): string {
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return iso;
  const diff = Date.now() - t;
  const min = Math.round(diff / 60000);
  if (min < 1) return "just now";
  if (min < 60) return `${min}m ago`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.round(hr / 24);
  if (day < 7) return `${day}d ago`;
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatFull(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
