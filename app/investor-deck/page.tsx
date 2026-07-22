"use client";
import ScrollAnimation from "../components/ScrollAnimation";
import Link from "next/link";

export default function InvestorDeckPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans">
      <section className="px-4 pt-32 pb-20 max-w-4xl mx-auto">
        <ScrollAnimation>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Investor <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] bg-clip-text text-transparent">Deck</span>
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Hollap is building the commerce infrastructure for Africa&apos;s youth economy. Here&apos;s everything you need to know.
          </p>
        </ScrollAnimation>

        {/* Deck Preview */}
        <ScrollAnimation>
          <div className="grid gap-4 mb-16">
            {[
              { title: "Problem", desc: "Campus commerce is broken across WhatsApp, Instagram, and Telegram. No trust, no structure, no accountability.", color: "from-[#FD1D1D] to-[#F77737]" },
              { title: "Solution", desc: "All-in-one platform: verified vendors, reviews, escrow, real-time chat, AI assistant, and campus community.", color: "from-[#0088cc] to-[#006699]" },
              { title: "Market Opportunity", desc: "700M+ university students across Africa. $500B+ campus commerce TAM by 2028. 60% of Africa's population is under 25.", color: "from-[#833AB4] to-[#FD1D1D]" },
              { title: "Traction", desc: "10,000+ users, 2,000+ vendors, 150+ universities reached. 42% MoM user growth. 89% vendor retention.", color: "from-[#F77737] to-[#FDC830]" },
              { title: "Revenue Model", desc: "Transaction fees (5%), escrow fees, vendor subscriptions, promoted listings, premium AI tools.", color: "from-[#833AB4] to-[#0088cc]" },
              { title: "The Ask", desc: "$50k pre-seed round. Minimum check: $25k. Use of funds: 35% product, 25% marketing, 20% ops, 10% legal, 10% reserve.", color: "from-[#0088cc] to-[#00BFFF]" },
            ].map((slide) => (
              <div key={slide.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${slide.color} mb-3`} />
                <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{slide.desc}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Download CTA */}
        <ScrollAnimation>
          <div className="bg-gradient-to-r from-[#0088cc]/10 via-[#833AB4]/10 to-[#FD1D1D]/10 rounded-xl p-8 border border-white/10 text-center">
            <span className="text-5xl block mb-4">📄</span>
            <h2 className="text-2xl font-bold mb-2">Get the Full Deck</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">Download the complete investor deck with detailed financial projections, market analysis, competitive landscape, and growth strategy.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="px-6 py-3 bg-[#0088cc] hover:bg-[#0077b3] rounded-md text-white font-medium transition-colors"
              >
                Download PDF
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-md text-white font-medium transition-colors"
              >
                Request Access
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">Or email us at <a href="mailto:invest@hollap.com" className="text-[#0088cc] hover:underline">invest@hollap.com</a></p>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  )
}
