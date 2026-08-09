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
                href="#markets"
                className="px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 rounded-md text-white transition-opacity font-medium"
              >
                Explore the Platform
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
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Download on the App Store
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/10 hover:bg-white/20 rounded-md text-white transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            Contact us to get early access when we launch.
          </p>
        </div>
      </section>
      </ScrollAnimation>

    </div>
  );
}
