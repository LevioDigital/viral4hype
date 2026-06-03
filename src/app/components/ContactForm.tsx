"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "3rem",
            height: "3rem",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            background: "rgba(242, 102, 34, 0.15)",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="#F26622"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#fff",
          }}
        >
          Message sent
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "420px",
          }}
        >
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="cform flex flex-col">
      {" "}
      <input type="hidden" name="source" value="contact_form" />{" "}
      <div className="cf-row grid grid-cols-2 max-md:grid-cols-1 gap-x-8">
        {" "}
        <div className="cf-field relative mb-6">
          {" "}
          <input
            type="text"
            name="Name"
            required
            placeholder=" "
            id="v4-name"
            autoComplete="name"
            className="w-full pt-[1.3rem] pb-[0.6rem] text-[0.95rem] text-white/85 bg-transparent border-0 border-b-[1.5px] border-white/10 outline-none transition-colors duration-300 focus:border-[#F26622]/70"
          />{" "}
          <label
            htmlFor="v4-name"
            className="absolute left-0 top-[1.3rem] text-[0.88rem] text-white/50 pointer-events-none transition-all duration-300 ease-out-expo"
          >
            Your Name *
          </label>{" "}
        </div>{" "}
        <div className="cf-field relative mb-6">
          {" "}
          <input
            type="text"
            name="Company-Name"
            placeholder=" "
            id="v4-company"
            autoComplete="organization"
            className="w-full pt-[1.3rem] pb-[0.6rem] text-[0.95rem] text-white/85 bg-transparent border-0 border-b-[1.5px] border-white/10 outline-none transition-colors duration-300 focus:border-[#F26622]/70"
          />{" "}
          <label
            htmlFor="v4-company"
            className="absolute left-0 top-[1.3rem] text-[0.88rem] text-white/50 pointer-events-none transition-all duration-300 ease-out-expo"
          >
            Company
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <div className="cf-row grid grid-cols-2 max-md:grid-cols-1 gap-x-8">
        {" "}
        <div className="cf-field relative mb-6">
          {" "}
          <input
            type="email"
            name="email"
            required
            placeholder=" "
            id="v4-email"
            autoComplete="email"
            className="w-full pt-[1.3rem] pb-[0.6rem] text-[0.95rem] text-white/85 bg-transparent border-0 border-b-[1.5px] border-white/10 outline-none transition-colors duration-300 focus:border-[#F26622]/70"
          />{" "}
          <label
            htmlFor="v4-email"
            className="absolute left-0 top-[1.3rem] text-[0.88rem] text-white/50 pointer-events-none transition-all duration-300 ease-out-expo"
          >
            Email Address *
          </label>{" "}
        </div>{" "}
        <div className="cf-field relative mb-6">
          {" "}
          <input
            type="tel"
            name="Phone-Number"
            placeholder=" "
            id="v4-phone"
            autoComplete="tel"
            className="w-full pt-[1.3rem] pb-[0.6rem] text-[0.95rem] text-white/85 bg-transparent border-0 border-b-[1.5px] border-white/10 outline-none transition-colors duration-300 focus:border-[#F26622]/70"
          />{" "}
          <label
            htmlFor="v4-phone"
            className="absolute left-0 top-[1.3rem] text-[0.88rem] text-white/50 pointer-events-none transition-all duration-300 ease-out-expo"
          >
            Phone Number
          </label>{" "}
        </div>{" "}
      </div>{" "}
      <div className="cf-field relative mb-6">
        {" "}
        <textarea
          name="How-can-we-help"
          required
          placeholder=" "
          id="v4-msg"
          rows={4}
          className="w-full pt-[1.3rem] pb-[0.6rem] text-[0.95rem] text-white/85 bg-transparent border-0 border-b-[1.5px] border-white/10 outline-none transition-colors duration-300 resize-y min-h-[100px] focus:border-[#F26622]/70"
        ></textarea>{" "}
        <label
          htmlFor="v4-msg"
          className="absolute left-0 top-[1.3rem] text-[0.88rem] text-white/50 pointer-events-none transition-all duration-300 ease-out-expo"
        >
          How can we help? *
        </label>{" "}
      </div>{" "}
      <label className="cf-gdpr flex items-start gap-[0.7rem] text-[0.8rem] text-white/50 leading-[1.5] mb-6 cursor-pointer">
        {" "}
        <input
          type="checkbox"
          name="gdpr"
          required
          className="sr-only peer"
          id="gdpr-consent"
        />{" "}
        <span className="cf-chk w-4 h-4 rounded-input shrink-0 mt-0.5 border-[1.5px] border-white/15 transition-all duration-300 relative peer-focus-visible:ring-2 peer-focus-visible:ring-[#F26622] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-dark"></span>{" "}
        <span>
          I&apos;m happy for this website to store my info so they can respond to
          my enquiry.
        </span>{" "}
      </label>{" "}
      <input
        type="checkbox"
        name="_honeypot"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />{" "}
      {state.status === "error" && (
        <p
          role="alert"
          style={{
            marginBottom: "1rem",
            fontSize: "0.85rem",
            color: "#ff6b6b",
          }}
        >
          {state.message}
        </p>
      )}{" "}
      <button
        type="submit"
        disabled={pending}
        className="btn-submit inline-flex items-center gap-2 text-[0.95rem] font-semibold py-4 px-[2.2rem] rounded-full bg-white text-dark transition-all duration-400 ease-out-expo relative overflow-hidden whitespace-nowrap mt-2 w-fit"
        style={pending ? { opacity: 0.6, cursor: "not-allowed" } : undefined}
        data-cursor="link"
      >
        <span className="btn-text relative z-[1]">
          {pending ? "Sending…" : "Send Message"}
        </span>
        <span className="btn-icon relative z-[1] flex transition-transform duration-300 ease-out-expo">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </button>{" "}
    </form>
  );
}
