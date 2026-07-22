"use client";

import { useState } from "react";
import ScrollAnimation from "../components/ScrollAnimation";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans">
      <section className="px-4 pt-32 pb-20 max-w-2xl mx-auto">
        <ScrollAnimation>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            Have a question, partnership idea, or just want to say hi? We&apos;d love to hear from you.
          </p>
        </ScrollAnimation>

        {submitted ? (
          <ScrollAnimation>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
              <p className="text-2xl font-semibold mb-2">Message Sent! 🎉</p>
              <p className="text-gray-400">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white/5 rounded-xl p-8 border border-white/10"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 text-white focus:outline-none focus:border-[#0088cc] transition-colors"
                >
                  <option value="" className="bg-[#12121a]">Select a subject</option>
                  <option value="general" className="bg-[#12121a]">General Inquiry</option>
                  <option value="partnership" className="bg-[#12121a]">Partnership</option>
                  <option value="press" className="bg-[#12121a]">Press</option>
                  <option value="support" className="bg-[#12121a]">Support</option>
                  <option value="other" className="bg-[#12121a]">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors resize-y"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              {error && <p className="text-xs text-[#FD1D1D]">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 disabled:opacity-50 rounded-md text-white font-medium transition-opacity"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </ScrollAnimation>
        )}

        <ScrollAnimation>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center text-sm">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-400">Email</p>
              <a href="mailto:hello@hollap.com" className="text-[#0088cc] hover:underline">
                hello@hollap.com
              </a>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-400">Investors</p>
              <a href="mailto:invest@hollap.com" className="text-[#0088cc] hover:underline">
                invest@hollap.com
              </a>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-400">Support</p>
              <a href="mailto:support@hollap.com" className="text-[#0088cc] hover:underline">
                support@hollap.com
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
