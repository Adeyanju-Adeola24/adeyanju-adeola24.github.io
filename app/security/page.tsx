import ScrollAnimation from "../components/ScrollAnimation";

export const metadata = {
  title: "Security & Trust — Hollap",
  description: "How Hollap keeps your data, transactions, and community safe.",
}

const safeguards = [
  {
    icon: "🔒",
    title: "End-to-End Encryption",
    desc: "All data transmitted through Hollap is encrypted using TLS 1.3 protocols. Your messages, transactions, and personal information are protected in transit and at rest.",
  },
  {
    icon: "✅",
    title: "Vendor Verification",
    desc: "Every vendor on Hollap undergoes a verification process. We confirm identity, university affiliation, and business details to ensure buyers can trust who they're buying from.",
  },
  {
    icon: "🛡️",
    title: "Escrow Protection",
    desc: "Funds are held securely until buyers confirm receipt of goods. This protects both parties — vendors get paid, buyers get what they ordered. Coming in Phase 2.",
  },
  {
    icon: "🔐",
    title: "Secure Payments",
    desc: "Payment processing is handled by PCI-compliant partners. Your financial information is never stored on our servers.",
  },
  {
    icon: "👮",
    title: "Fraud Detection",
    desc: "Our MI-powered fraud detection system monitors transactions for suspicious activity. Unusual patterns trigger automatic review and account holds.",
  },
  {
    icon: "📋",
    title: "Data Privacy",
    desc: "We never sell your personal data. You control what information is visible on your profile and can delete your account and data at any time.",
  },
  {
    icon: "⭐",
    title: "Review System",
    desc: "Transparent, verified reviews help build trust. Buyers can only review purchases they've made, and vendors can respond to feedback.",
  },
  {
    icon: "📞",
    title: "Trust & Safety Team",
    desc: "A dedicated team monitors the platform, investigates reports, and takes action against bad actors. Report concerning activity directly through the app.",
  },
]

const compliance = [
  { label: "Data Encryption", value: "TLS 1.3", status: "Active" },
  { label: "PCI Compliance", value: "Via Payment Partners", status: "Active" },
  { label: "Vendor Verification", value: "Identity + University", status: "Active" },
  { label: "Escrow Protection", value: "Phase 2", status: "In Development" },
  { label: "Fraud Monitoring", value: "MI-Powered", status: "Active" },
  { label: "Data Privacy", value: "GDPR-Ready", status: "Active" },
  { label: "Bug Bounty Program", value: "Coming Soon", status: "Planned" },
  { label: "Security Audits", value: "Quarterly", status: "Active" },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans">
      <section className="px-4 pt-32 pb-20 max-w-4xl mx-auto">
        <ScrollAnimation>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Security & <span className="bg-gradient-to-r from-[#0088cc] to-[#00BFFF] bg-clip-text text-transparent">Trust</span>
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Trust is the foundation of campus commerce. Here&apos;s how we protect every user, every transaction, every day.
          </p>
        </ScrollAnimation>

        {/* Safeguards Grid */}
        <ScrollAnimation>
          <div className="grid sm:grid-cols-2 gap-4 mb-20">
            {safeguards.map((item) => (
              <div key={item.title} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Compliance Status */}
        <ScrollAnimation>
          <h2 className="text-2xl font-bold mb-2">Security Status</h2>
          <p className="text-gray-400 text-sm mb-6">Current security measures and compliance posture.</p>
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden mb-16">
            <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-white/5 text-xs text-gray-500 uppercase tracking-wider font-medium">
              <span>Measure</span>
              <span>Details</span>
              <span>Status</span>
            </div>
            {compliance.map((item) => (
              <div key={item.label} className="grid grid-cols-3 gap-4 px-6 py-4 text-sm border-b border-white/5 last:border-0">
                <span className="text-gray-300">{item.label}</span>
                <span className="text-gray-400">{item.value}</span>
                <span className={`text-xs font-medium ${
                  item.status === "Active" ? "text-green-400" :
                  item.status === "Planned" ? "text-gray-500" :
                  "text-[#F77737]"
                }`}>
                  {item.status === "Active" && "✓ "}{item.status}
                </span>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Report Section */}
        <ScrollAnimation>
          <div className="bg-gradient-to-r from-[#FD1D1D]/10 via-[#F77737]/10 to-[#FDC830]/10 rounded-xl p-8 border border-white/10 text-center">
            <span className="text-5xl block mb-4">📢</span>
            <h2 className="text-2xl font-bold mb-2">Report a Concern</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">If you encounter suspicious activity, harassment, or a security vulnerability, report it immediately.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:security@hollap.com" className="px-6 py-3 bg-[#0088cc] hover:bg-[#0077b3] rounded-md text-white font-medium transition-colors">
                Report Vulnerability
              </a>
              <a href="mailto:support@hollap.com" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-md text-white font-medium transition-colors">
                Report User
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  )
}
