"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Chidi",
    role: "Vendor, University of Lagos",
    avatar: "C",
    quote:
      "Hollap changed everything. I used to post on WhatsApp groups and hope someone saw it. Now I have a storefront, real-time chat with buyers, and I've tripled my sales in two months.",
  },
  {
    name: "Amina",
    role: "Student, Ahmadu Bello University",
    avatar: "A",
    quote:
      "I was skeptical about buying from strangers online. The escrow system gives me peace of mind — I only pay when I receive what I ordered. Hollap is a game changer for campus commerce.",
  },
  {
    name: "Kofi",
    role: "Vendor, University of Ghana",
    avatar: "K",
    quote:
      "The MI assistant alone is worth it. Auto-responses handle the repetitive questions while I focus on growing my business. My response time went from hours to seconds.",
  },
  {
    name: "Zara",
    role: "Student, University of Cape Town",
    avatar: "Z",
    quote:
      "The Bulletin feature keeps me connected to everything happening on campus. Events, announcements, safety alerts — it's become my daily go-to alongside Markets.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-4 py-20 bg-[#0a0a0a]/50 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          What People Are Saying
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Real stories from real users on campus.
        </p>

        <div className="relative min-h-[220px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`transition-all duration-500 absolute inset-0 flex flex-col items-center ${
                i === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-lg font-bold mb-4">
                {t.avatar}
              </div>
              <blockquote className="text-lg text-gray-300 italic max-w-2xl mb-6 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="text-white font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === active
                  ? "bg-[#0088cc] w-6"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
