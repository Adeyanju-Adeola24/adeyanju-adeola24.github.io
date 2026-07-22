import ScrollAnimation from "../components/ScrollAnimation";

export const metadata = {
  title: "Privacy Policy — Hollap",
  description: "How Hollap collects, uses, and protects your personal data.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans">
      <section className="px-4 pt-32 pb-20 max-w-3xl mx-auto">
        <ScrollAnimation>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-center text-sm mb-4">Last updated: June 2026</p>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            At Hollap, we take your privacy seriously. This policy describes how we collect, use, and protect your information.
          </p>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="space-y-10">
            {[
              {
                title: "1. Information We Collect",
                content: [
                  "Account information: name, email address, university, and profile details when you create an account.",
                  "Transaction data: purchase history, listing details, payment information, and communication records.",
                  "Usage data: how you interact with the platform, pages visited, features used, and engagement metrics.",
                  "Device information: IP address, browser type, operating system, and device identifiers.",
                  "Communication data: messages sent through our chat system, reviews, and support inquiries.",
                ],
              },
              {
                title: "2. How We Use Your Information",
                content: [
                  "To provide, maintain, and improve the Hollap platform and all its features.",
                  "To process transactions, verify vendors, and facilitate secure payments.",
                  "To communicate with you about updates, promotions, and platform changes.",
                  "To detect and prevent fraud, abuse, and violations of our Terms of Service.",
                  "To analyze usage patterns and improve the user experience.",
                  "To comply with legal obligations and enforce our policies.",
                ],
              },
              {
                title: "3. Data Sharing & Disclosure",
                content: [
                  "We do not sell your personal information to third parties.",
                  "We may share data with payment processors to facilitate transactions.",
                  "We may disclose information if required by law or to protect our rights.",
                  "Aggregated, anonymized data may be shared for analytical or reporting purposes.",
                  "Vendors receive only the information necessary to complete your transactions.",
                ],
              },
              {
                title: "4. Data Security",
                content: [
                  "All data transmitted through Hollap is encrypted using industry-standard TLS protocols.",
                  "We implement access controls and authentication measures to protect your account.",
                  "Payment information is processed by PCI-compliant payment processors.",
                  "We conduct regular security audits and vulnerability assessments.",
                  "Despite our efforts, no method of electronic storage is 100% secure.",
                ],
              },
              {
                title: "5. Your Rights",
                content: [
                  "Access, update, or delete your personal information at any time through your account settings.",
                  "Opt out of marketing communications at any time.",
                  "Request a copy of the data we hold about you.",
                  "Request that we delete your account and associated data.",
                  "Withdraw consent for data processing where applicable.",
                ],
              },
              {
                title: "6. Data Retention",
                content: [
                  "We retain your information for as long as your account is active.",
                  "Deleted accounts have data removed within 30 days of deletion request.",
                  "Transaction records may be retained longer for legal and accounting purposes.",
                  "Anonymized data may be retained indefinitely for analytical purposes.",
                ],
              },
              {
                title: "7. Third-Party Services",
                content: [
                  "Hollap may integrate with third-party services for payments, analytics, and communications.",
                  "These services have their own privacy policies governing data handling.",
                  "We encourage you to review the privacy policies of any third-party services we use.",
                ],
              },
              {
                title: "8. Children's Privacy",
                content: [
                  "Hollap is intended for university students and young adults. We do not knowingly collect data from children under 13.",
                  "If we become aware that a child under 13 has provided us with personal data, we will delete it immediately.",
                ],
              },
              {
                title: "9. Changes to This Policy",
                content: [
                  "We may update this Privacy Policy from time to time. Material changes will be communicated via email or platform notice.",
                  "Continued use of Hollap after changes constitutes acceptance of the updated policy.",
                ],
              },
              {
                title: "10. Contact Us",
                content: [
                  'For questions about this Privacy Policy or your data, contact us at <a href="mailto:privacy@hollap.com" class="text-[#0088cc] hover:underline">privacy@hollap.com</a>.',
                  'You may also write to us at: Hollap, Lagos, Nigeria.',
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 leading-relaxed flex items-start gap-2">
                      <span className="text-gray-600 mt-1.5 shrink-0">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </section>
    </div>
  )
}
