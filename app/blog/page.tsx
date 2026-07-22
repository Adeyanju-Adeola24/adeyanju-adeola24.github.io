import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";

export const metadata = {
  title: "Blog — Hollap",
  description: "Latest updates, milestones, and announcements from the Hollap team.",
};

const posts = [
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
    desc: "Internal release of our AI assistant. Auto-responses, chat summaries, and purchase recommendations now live.",
    gradient: "from-[#833AB4] to-[#FD1D1D]",
  },
  {
    slug: "escrow-integration-begins",
    date: "March 2026",
    title: "Escrow Integration Begins",
    desc: "Development started on our escrow payment system to bring trust and safety to every transaction.",
    gradient: "from-[#F77737] to-[#FDC830]",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans">
      <section className="px-4 pt-32 pb-20 max-w-6xl mx-auto">
        <ScrollAnimation>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Blog & Updates
          </h1>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            Latest milestones and announcements from the Hollap team.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <ScrollAnimation key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all h-full"
              >
                <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${post.gradient} mb-3`} />
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                  {post.date}
                </p>
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-400 leading-relaxed">{post.desc}</p>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </div>
  );
}
