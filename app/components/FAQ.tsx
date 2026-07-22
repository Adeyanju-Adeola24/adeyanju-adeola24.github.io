"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Hollap?",
    a: "Hollap is an all-in-one platform for campus commerce, communication, and productivity. Students can buy and sell with trust, chat with vendors, access campus announcements, and use AI-powered tools — all in one place.",
  },
  {
    q: "How does escrow protection work?",
    a: "When you make a purchase, funds are held securely in escrow until you confirm delivery. This protects both buyers and sellers — no more scams or disputes over payments.",
  },
  {
    q: "How do I become a verified vendor?",
    a: "Sign up as a vendor, complete your profile, and submit your verification documents. Our team reviews and approves within 48 hours. Once verified, you can list products and start selling immediately.",
  },
  {
    q: "Is Hollap available at my university?",
    a: "We're currently live at 150+ universities across Africa. If your campus isn't on the list yet, join the waitlist and we'll notify you when we launch there.",
  },
  {
    q: "What does MI (the AI assistant) do?",
    a: "MI is your AI operating assistant. It provides smart chat summaries, auto-responses for common inquiries, personalized purchase recommendations, and workflow automation for vendors.",
  },
  {
    q: "How much does it cost to use Hollap?",
    a: "Buying is free. Vendors pay a 2.5% transaction fee per sale. Premium vendor subscriptions with advanced analytics and promoted listings are available for a monthly fee.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 py-20 max-w-3xl mx-auto w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        Everything you need to know about Hollap.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:bg-white/[0.02] transition-colors"
            >
              <span>{faq.q}</span>
              <svg
                className={`w-5 h-5 shrink-0 ml-4 text-gray-400 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
