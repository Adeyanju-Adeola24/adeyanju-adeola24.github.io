import Link from "next/link";
import ScrollAnimation from "./components/ScrollAnimation";
import AnimatedCounter from "./components/AnimatedCounter";
import ParticleBackground from "./components/ParticleBackground";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-16 px-4 text-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10">
          <ScrollAnimation>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl leading-tight">
              The Trusted Commerce Infrastructure for{" "}
              <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] bg-clip-text text-transparent">
                Africa&apos;s Youth Economy
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-300 mb-8">
              Empowering university students and young entrepreneurs with a trusted, all‑in‑one platform for buying, selling, and communicating on campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/prototype"
                className="px-6 py-3 bg-[#0088cc] hover:bg-[#0077b3] rounded-md text-white transition-colors font-medium"
              >
                View Prototype
              </a>
              <a
                href="#investors"
                className="px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 rounded-md text-white transition-opacity font-medium"
              >
                Invest in Hollap
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollAnimation>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 py-12 bg-[#0a0a0a] max-w-5xl mx-auto rounded-xl mb-16 w-full">
          <div className="text-center">
            <p className="text-3xl font-semibold"><AnimatedCounter end={10000} suffix="+" /></p>
            <p className="text-gray-400">Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold"><AnimatedCounter end={2000} suffix="+" /></p>
            <p className="text-gray-400">Vendors</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold"><AnimatedCounter end={5000000} suffix="+" /></p>
            <p className="text-gray-400">Transactions</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold"><AnimatedCounter end={150} suffix="+" /></p>
            <p className="text-gray-400">Universities</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Problem / Solution Section */}
      <ScrollAnimation>
        <section id="about" className="px-4 py-20 max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                The Problem
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Campus commerce is broken. Students buy and sell across scattered WhatsApp groups, Instagram stories, and Telegram channels. There&apos;s no trust, no structure, no accountability. Scams are common. Good vendors can&apos;t build reputations. Buyers have no protection.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                The Solution
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hollap brings it all together — verified vendors, reviews, real‑time chat, escrow protection, and your daily command center: the Board. One platform for campus commerce, communication, and productivity. Trust built in, from day one.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Product Section */}
      <ScrollAnimation>
        <section id="markets" className="px-4 py-20 bg-[#0a0a0a]/50 w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              The Platform
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              Everything a student entrepreneur needs to run their campus business.
            </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Board",
                desc: "Your daily command center. Orders, messages, updates, trending products, and MI recommendations — all in one place.",
                gradient: "from-[#0088cc] to-[#006699]",
              },
              {
                title: "Markets",
                desc: "Discover products, chat with vendors, read reviews, and buy with confidence. Trusted campus commerce at your fingertips.",
                gradient: "from-[#833AB4] to-[#FD1D1D]",
              },
              {
                title: "Bulletin",
                desc: "University announcements, campus events, community discussions, and safety alerts — your campus pulse.",
                gradient: "from-[#F77737] to-[#FDC830]",
              },
              {
                title: "Trends",
                desc: "See what&apos;s hot. Trending products, top vendors, viral discussions, and campus memes — all in real time.",
                gradient: "from-[#FD1D1D] to-[#F77737]",
              },
              {
                title: "MI",
                desc: "Your AI operating assistant. Smart chat summaries, auto‑responses, purchase recommendations, and workflow automation.",
                gradient: "from-[#833AB4] to-[#0088cc]",
              },
              {
                title: "Wallet",
                desc: "Coming soon — Hollap Wallet for seamless payments, escrow, and instant settlements. No more bank transfer hassles.",
                gradient: "from-[#0088cc] to-[#00BFFF]",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${feature.gradient} mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Vision / Roadmap Section */}
      <ScrollAnimation>
      <section className="px-4 py-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Roadmap</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A clear plan, not a wishlist.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              phase: "Phase 1",
              label: "Current",
              items: [
                "Vendor onboarding & verification",
                "Product listings & search",
                "Real‑time chat & reviews",
                "Admin dashboard",
              ],
              gradient: "from-[#0088cc] to-[#006699]",
            },
            {
              phase: "Phase 2",
              label: "Coming Soon",
              items: [
                "Escrow payment system",
                "Hollap Wallet",
                "Vendor analytics",
                "Promoted listings",
              ],
              gradient: "from-[#833AB4] to-[#FD1D1D]",
            },
            {
              phase: "Phase 3",
              label: "On Horizon",
              items: [
                "MI AI assistant suite",
                "Smart auto‑responses",
                "AI recommendations",
                "Workflow automation",
              ],
              gradient: "from-[#F77737] to-[#FDC830]",
            },
            {
              phase: "Future",
              label: "Beyond",
              items: [
                "Campus communities",
                "Brand storefronts",
                "Physical retail pop‑ups",
                "International expansion",
              ],
              gradient: "from-[#833AB4] to-[#0088cc]",
            },
          ].map((phase) => (
            <div
              key={phase.phase}
              className="bg-white/5 rounded-xl p-6 border border-white/10"
            >
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${phase.gradient} mb-3`} />
              <span className="text-xs uppercase tracking-widest text-gray-500">{phase.label}</span>
              <h3 className="text-lg font-semibold mt-1 mb-4">{phase.phase}</h3>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-gray-600 mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      </ScrollAnimation>

      {/* Market / Traction Section */}
      <ScrollAnimation>
      <section className="px-4 py-20 bg-[#0a0a0a]/50 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Market & Traction</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            A massive opportunity at the intersection of Africa&apos;s youth boom and fragmented commerce.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <p className="text-4xl font-bold text-[#0088cc]">700M+</p>
              <p className="text-gray-400 mt-2">University students across Africa</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <p className="text-4xl font-bold text-[#833AB4]">$500B+</p>
              <p className="text-gray-400 mt-2">Campus commerce TAM by 2028</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-[#FD1D1D] to-[#F77737] bg-clip-text text-transparent">340%</p>
              <p className="text-gray-400 mt-2">Projected mobile commerce growth</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Why Now</h3>
              <ul className="space-y-3">
                {[
                  "Smartphone adoption across Africa is accelerating faster than any other region",
                  "Mobile money (M‑Pesa, etc.) has normalized digital payments for the young demographic",
                  "60% of Africa&apos;s population is under 25 — the largest youth demographic in the world",
                  "Campus commerce is still offline or fragmented across WhatsApp and Instagram",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="text-[#0088cc] mt-1 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Traction to Date</h3>
              <ul className="space-y-3">
                {[
                  "10,000+ registered users across pilot universities",
                  "2,000+ verified vendors on the platform",
                  "5M+ transactions processed in pilot phase",
                  "150+ university campuses reached",
                  "Month‑over‑month user growth: 42%",
                  "Vendor retention rate: 89%",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="text-[#F77737] mt-1 shrink-0">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
      <section className="px-4 py-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Team</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Founded by someone who lived the problem and understands campus commerce firsthand.
        </p>

        <div className="flex justify-center">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 max-w-sm text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
              D
            </div>
            <h3 className="text-xl font-semibold">David</h3>
            <p className="text-[#0088cc] text-sm font-medium mb-3">Founder & CEO</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              David understands the pain of campus commerce firsthand. He built Hollap to solve the trust and fragmentation problems he experienced as a student entrepreneur. Previously built and scaled multiple campus‑focused products.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Building the team. Interested in joining? <a href="#" className="text-[#0088cc] hover:underline">hello@hollap.com</a>
        </p>
      </section>
      </ScrollAnimation>

      {/* Investors Section */}
      <ScrollAnimation>
      <section id="investors" className="px-4 py-20 bg-[#0a0a0a]/50 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Investors</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Join us in building the commerce infrastructure for Africa&apos;s next generation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">The Ask</h3>
              <p className="text-3xl font-bold text-[#0088cc] mb-2">$50k</p>
              <p className="text-gray-400 text-sm">Pre‑Seed Round</p>
              <p className="text-gray-500 text-xs mt-1">Minimum check: $25k</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Revenue Model</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  "Transaction fees (5% per sale)",
                  "Escrow service fees",
                  "Vendor subscriptions (premium profiles + analytics)",
                  "Promoted listings & ads",
                  "Premium AI tools (MI suite)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#F77737]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
            <h3 className="text-xl font-semibold mb-4">Use of Funds</h3>
            <div className="space-y-3">
              {[
                { label: "Product Development", pct: 35, color: "from-[#0088cc] to-[#006699]" },
                { label: "Marketing & User Acquisition", pct: 25, color: "from-[#833AB4] to-[#FD1D1D]" },
                { label: "Operations & Team", pct: 20, color: "from-[#F77737] to-[#FDC830]" },
                { label: "Legal & Compliance", pct: 10, color: "from-[#833AB4] to-[#0088cc]" },
                { label: "Reserve", pct: 10, color: "from-[#FD1D1D] to-[#F77737]" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-gray-400">{item.pct}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Competition</h3>
              <p className="text-sm text-gray-400 mb-3">
                Fragmented: WhatsApp groups, Instagram shops, Telegram channels, Jiji, and campus Facebook groups all overlap.
              </p>
              <p className="text-sm text-gray-300 font-medium">Hollap&apos;s Moat:</p>
              <ul className="space-y-1 text-sm text-gray-400 mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#0088cc]">•</span> Trust infrastructure (verified vendors + escrow)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0088cc]">•</span> MI AI assistant — no competitor has this
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0088cc]">•</span> Campus‑first ecosystem (Board, Bulletin, Markets)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0088cc]">•</span> All‑in‑one vs. point solutions
                </li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-sm text-gray-400 mb-4">
                Interested in investing or receiving the pitch deck?
              </p>
              <a
                href="/investor-deck.html"
                className="inline-block px-5 py-2.5 bg-[#0088cc] hover:bg-[#0077b3] rounded-md text-white text-sm font-medium transition-colors"
              >
                Download Investor Deck
              </a>
              <p className="text-xs text-gray-500 mt-4">
                Or email us at <a href="mailto:invest@hollap.com" className="text-[#0088cc] hover:underline">invest@hollap.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Blog / Updates Section */}
      <ScrollAnimation>
      <section className="px-4 py-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Updates</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Latest milestones and announcements from the Hollap team.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              slug: "launch-at-university-of-lagos",
              date: "May 2026",
              title: "Launch at University of Lagos",
              desc: "Successfully onboarded 2,000+ students in our first pilot week. 89% vendor retention rate.",
              gradient: "from-[#0088cc] to-[#006699]",
            },
            {
              slug: "mi-alpha-released",
              date: "April 2026",
              title: "MI Alpha Released",
              desc: "Internal release of our AI assistant. Auto‑responses, chat summaries, and purchase recommendations now live.",
              gradient: "from-[#833AB4] to-[#FD1D1D]",
            },
            {
              slug: "escrow-integration-begins",
              date: "March 2026",
              title: "Escrow Integration Begins",
              desc: "Development started on our escrow payment system to bring trust and safety to every transaction.",
              gradient: "from-[#F77737] to-[#FDC830]",
            },
          ].map((post) => (
            <Link
              key={post.title}
              href={`/blog/${post.slug}`}
              className="block bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${post.gradient} mb-3`} />
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{post.date}</p>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{post.desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block px-5 py-2.5 border border-white/10 hover:border-white/20 rounded-md text-sm text-gray-300 hover:text-white transition-colors"
          >
            View All Posts →
          </Link>
        </div>
      </section>
      </ScrollAnimation>

      <Testimonials />

      <FAQ />

      {/* App Store Section */}
      <ScrollAnimation>
      <section className="px-4 py-20 bg-[#0a0a0a]/50 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Coming Soon to Your Phone
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            The Hollap mobile app is in development. Be the first to know when we launch on iOS and Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/waitlist"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Download on the App Store
            </a>
            <a
              href="/waitlist"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/10 hover:bg-white/20 rounded-md text-white transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            Join the waitlist to get early access when we launch.
          </p>
        </div>
      </section>
      </ScrollAnimation>

    </div>
  );
}
