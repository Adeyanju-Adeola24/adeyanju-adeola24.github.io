"use client";
import { useState } from "react";
import ScrollAnimation from "../components/ScrollAnimation";

const perks = [
  { icon: "💰", title: "Commission", desc: "Earn on every transaction from students you refer" },
  { icon: "🏆", title: "Exclusive Swag", desc: "Limited edition Hollap ambassador merch" },
  { icon: "📈", title: "Leadership", desc: "Build your portfolio as a campus brand lead" },
  { icon: "🎓", title: "Certificate", desc: "Official Hollap ambassador certificate" },
  { icon: "🔗", title: "Network", desc: "Connect with ambassadors across 10+ universities" },
  { icon: "🚀", title: "Early Access", desc: "Beta test new features before anyone else" },
]

const universities = [
  "University of Lagos",
  "University of Ghana",
  "University of Nigeria, Nsukka",
  "Ahmadu Bello University",
  "University of Cape Town",
  "University of Ibadan",
  "Obafemi Awolowo University",
  "Covenant University",
  "University of Nairobi",
  "University of Dar es Salaam",
]

export default function AmbassadorsPage() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans">
      <section className="px-4 pt-32 pb-20 max-w-4xl mx-auto">
        <ScrollAnimation>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Campus Ambassador <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] bg-clip-text text-transparent">Program</span>
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6 text-lg">
            Lead the movement on your campus. Earn, grow, and build the future of student commerce.
          </p>
          <p className="text-center text-sm text-gray-500 mb-16">
            Phase 1: 10&ndash;15 handpicked universities &middot; Limited spots per campus
          </p>
        </ScrollAnimation>

        {/* Perks */}
        <ScrollAnimation>
          <h2 className="text-2xl font-bold text-center mb-2">What You Get</h2>
          <p className="text-gray-400 text-center text-sm mb-10">Perks designed to reward your impact.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-20">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-white/5 rounded-xl p-5 border border-white/10 text-center hover:border-white/20 transition-all">
                <span className="text-3xl block mb-3">{perk.icon}</span>
                <h3 className="font-semibold mb-1">{perk.title}</h3>
                <p className="text-xs text-gray-400">{perk.desc}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Target Universities */}
        <ScrollAnimation>
          <h2 className="text-2xl font-bold text-center mb-2">Phase 1 Universities</h2>
          <p className="text-gray-400 text-center text-sm mb-10">Handpicked by the Hollap team for maximum impact.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {universities.map((uni) => (
              <div key={uni} className="bg-white/5 rounded-xl px-4 py-3 border border-white/10 text-sm text-gray-300 hover:border-[#0088cc]/30 transition-all">
                {uni}
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Application Form */}
        <ScrollAnimation>
          <h2 className="text-2xl font-bold text-center mb-2">Apply Now</h2>
          <p className="text-gray-400 text-center text-sm mb-10">Selected candidates will be contacted within 48 hours.</p>

          {submitted ? (
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center max-w-lg mx-auto">
              <span className="text-5xl block mb-4">🎉</span>
              <h3 className="text-xl font-semibold mb-2">Application Received!</h3>
              <p className="text-gray-400 text-sm">We&apos;ll review your application and get back to you within 48 hours. Welcome to the team.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 rounded-xl p-6 sm:p-8 border border-white/10 max-w-lg mx-auto space-y-4">
              <div>
                <label className="text-sm text-gray-400 block mb-1">Full Name *</label>
                <input type="text" required placeholder="Your full name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Email *</label>
                <input type="email" required placeholder="you@university.edu"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors" />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">University *</label>
                <select required
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#0088cc] transition-colors">
                  <option value="" className="bg-[#12121a]">Select your university</option>
                  {universities.map((u) => <option key={u} value={u} className="bg-[#12121a]">{u}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Why do you want to be a Hollap ambassador? *</label>
                <textarea required rows={4} placeholder="Tell us about yourself, your campus involvement, and why you'd be a great ambassador..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#0088cc] transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 rounded-xl text-white font-medium transition-all">
                Submit Application
              </button>
            </form>
          )}
        </ScrollAnimation>
      </section>
    </div>
  )
}
