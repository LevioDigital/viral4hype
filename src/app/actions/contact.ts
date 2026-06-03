"use server";

import { insertContactSubmission } from "@/lib/supabase";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Server Action: valideaza si salveaza o submisie de formular in Supabase.
 * Folosit atat de formularul de contact, cat si (ulterior) de popup-ul
 * "Start a Project". Campul ascuns `source` distinge originea.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: daca e completat, e bot. Raspundem "success" fals, fara a salva.
  const honeypot = formData.get("_honeypot");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success" };
  }

  const name = String(formData.get("Name") ?? "").trim();
  const company = String(formData.get("Company-Name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("Phone-Number") ?? "").trim();
  const message = String(formData.get("How-can-we-help") ?? "").trim();
  const gdpr = formData.get("gdpr");
  const source = String(formData.get("source") ?? "contact_form").trim();
  const service = String(formData.get("service") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, and message.",
    };
  }

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "That email address doesn't look valid." };
  }

  if (!gdpr) {
    return {
      status: "error",
      message: "Please accept the consent checkbox so we can reply.",
    };
  }

  const { error } = await insertContactSubmission({
    source: source || "contact_form",
    name,
    company: company || null,
    email,
    phone: phone || null,
    message,
    gdpr_consent: true,
    service: service || null,
    budget: budget || null,
  });

  if (error) {
    console.error("[contact] insert failed:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again in a moment.",
    };
  }

  return {
    status: "success",
    message: "Thanks! Your message has been sent — we'll be in touch shortly.",
  };
}
