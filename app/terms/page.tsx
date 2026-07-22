import ScrollAnimation from "../components/ScrollAnimation";

export const metadata = {
  title: "Terms of Service — Hollap",
  description: "Terms and conditions governing the use of the Hollap platform.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans">
      <section className="px-4 pt-32 pb-20 max-w-3xl mx-auto">
        <ScrollAnimation>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">Terms of Service</h1>
          <p className="text-gray-500 text-center text-sm mb-4">Last updated: June 2026</p>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            By using Hollap, you agree to these terms. Please read them carefully.
          </p>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="space-y-10">
            {[
              {
                title: "1. Acceptance of Terms",
                content: [
                  "By accessing or using Hollap, you agree to be bound by these Terms of Service and our Privacy Policy.",
                  "If you do not agree to these terms, do not use the platform.",
                  "We reserve the right to update these terms at any time. Continued use constitutes acceptance of changes.",
                ],
              },
              {
                title: "2. Eligibility",
                content: [
                  "You must be at least 18 years old or a registered university student to use Hollap.",
                  "You must provide accurate, current, and complete information during registration.",
                  "You are responsible for maintaining the confidentiality of your account credentials.",
                  "Each user may maintain only one account unless explicitly authorized.",
                ],
              },
              {
                title: "3. Vendor Terms",
                content: [
                  "Vendors must complete verification before listing products on Hollap.",
                  "All listed products must be accurately described with truthful representations.",
                  "Prohibited items include: counterfeit goods, illegal items, weapons, drugs, and any items violating applicable laws.",
                  "Vendors agree to fulfill orders in a timely manner as described in their listings.",
                  "Hollap reserves the right to remove listings or suspend vendors who violate these terms.",
                ],
              },
              {
                title: "4. Buyer Terms",
                content: [
                  "Buyers agree to provide accurate delivery information and complete payment for purchases.",
                  "Buyers are encouraged to communicate with vendors and read reviews before making purchases.",
                  "Disputes should first be raised with the vendor. If unresolved, Hollap may facilitate resolution.",
                  "Buyers agree not to abuse the review system or make fraudulent claims.",
                ],
              },
              {
                title: "5. Transactions & Fees",
                content: [
                  "Hollap charges a transaction fee of 2.5% on each completed sale.",
                  "Additional fees may apply for escrow services, promoted listings, and premium features.",
                  "All fees are disclosed before transaction completion.",
                  "Prices listed by vendors are in the local currency and may include applicable taxes.",
                  "Hollap is not responsible for disputes between buyers and vendors beyond facilitating communication.",
                ],
              },
              {
                title: "6. Prohibited Conduct",
                content: [
                  "You may not use Hollap for any illegal purpose or in violation of any applicable laws.",
                  "Harassment, fraud, impersonation, and abuse of the platform are strictly prohibited.",
                  "You may not attempt to manipulate ratings, reviews, or transaction data.",
                  "Scraping, data mining, or unauthorized collection of user data is prohibited.",
                  "You may not interfere with the platform's security features or attempt to bypass them.",
                ],
              },
              {
                title: "7. Intellectual Property",
                content: [
                  "The Hollap name, logo, and platform design are protected intellectual property.",
                  "Content posted by users (listings, reviews, messages) remains the property of the user.",
                  "By posting content, you grant Hollap a license to display and distribute it on the platform.",
                  "You may not use Hollap's trademarks without prior written permission.",
                ],
              },
              {
                title: "8. Limitation of Liability",
                content: [
                  "Hollap is provided 'as is' without warranties of any kind, express or implied.",
                  "Hollap is not liable for damages arising from the use or inability to use the platform.",
                  "Hollap is not responsible for the actions, conduct, or content of third-party vendors or users.",
                  "Our total liability is limited to the fees paid by you in the 12 months preceding a claim.",
                ],
              },
              {
                title: "9. Termination",
                content: [
                  "Either party may terminate this agreement at any time by deleting your account.",
                  "Hollap may suspend or terminate accounts for violation of these terms.",
                  "Upon termination, your right to use the platform ceases immediately.",
                  "Sections 5, 7, 8, and 10 survive termination of this agreement.",
                ],
              },
              {
                title: "10. Governing Law",
                content: [
                  "These terms are governed by the laws of the Federal Republic of Nigeria.",
                  "Disputes arising from these terms shall be resolved through arbitration in Lagos, Nigeria.",
                  "If any provision of these terms is found to be unenforceable, the remaining provisions remain in effect.",
                ],
              },
              {
                title: "11. Contact",
                content: [
                  'For questions about these terms, contact us at <a href="mailto:legal@hollap.com" class="text-[#0088cc] hover:underline">legal@hollap.com</a>.',
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
