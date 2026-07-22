import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollAnimation from "../../components/ScrollAnimation";

const posts = {
  "launch-at-university-of-lagos": {
    title: "Launch at University of Lagos",
    date: "May 2026",
    author: "David, Founder & CEO",
    content: `
      We're thrilled to announce the successful launch of Hollap at the University of Lagos (UNILAG), one of Africa's largest and most prestigious universities.

      ## Pilot Results

      In our first week, we onboarded over 2,000 students and 200 vendors. The response has been overwhelming, with 89% of vendors already making repeat sales through the platform.

      ## What Worked

      The all-in-one approach resonated immediately. Students loved having Markets, Bulletin, and chat in a single app instead of switching between WhatsApp, Instagram, and Telegram.

      ## What's Next

      We're expanding to five more Nigerian universities this quarter. If you're a student at one of these campuses and want early access, join the waitlist.
    `,
  },
  "mi-alpha-released": {
    title: "MI Alpha Released",
    date: "April 2026",
    author: "David, Founder & CEO",
    content: `
      Today marks a major milestone — the internal release of MI, our AI operating assistant for campus commerce.

      ## What MI Can Do

      MI is designed to be the intelligent layer on top of everything you do on Hollap. In this alpha release, MI supports:

      - **Smart Chat Summaries**: Get a quick recap of any conversation without scrolling through dozens of messages.
      - **Auto-Responses**: Set up automated replies for common buyer questions like "Is this available?" and "What's your location?"
      - **Purchase Recommendations**: MI learns your preferences and suggests products you'll actually want.

      ## Coming Next

      Future versions will add workflow automation for vendors, AI-powered pricing suggestions, and campus-wide trend analysis.
    `,
  },
  "escrow-integration-begins": {
    title: "Escrow Integration Begins",
    date: "March 2026",
    author: "David, Founder & CEO",
    content: `
      Trust is the foundation of campus commerce, and today we're taking a huge step forward. Development has officially started on our escrow payment system.

      ## How It Works

      When a buyer makes a purchase, the payment is held securely in escrow. The seller ships the item, and once the buyer confirms delivery, the funds are released. If something goes wrong, our dispute resolution team steps in.

      ## Why This Matters

      Scams are the #1 reason students hesitate to buy from each other online. Escrow eliminates that risk entirely. We're building the trust infrastructure that campus commerce deserves.

      ## Timeline

      We expect the escrow system to enter beta testing in Q3 2026. Hollap Wallet integration will follow shortly after.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans">
      <article className="px-4 pt-32 pb-20 max-w-3xl mx-auto">
        <ScrollAnimation>
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-white transition-colors mb-8 inline-block"
          >
            &larr; Back to Blog
          </Link>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
            {post.date}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-10">By {post.author}</p>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
            {post.content}
          </div>
        </ScrollAnimation>
      </article>
    </div>
  );
}
