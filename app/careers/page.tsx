import ScrollAnimation from "../components/ScrollAnimation";

export const metadata = {
  title: "Careers — Hollap",
  description: "Join us in building the commerce infrastructure for Africa's next generation.",
};

const roles = [
  {
    title: "Full-Stack Engineer",
    type: "Full-time · Remote",
    dept: "Engineering",
    desc: "Build and scale the Hollap platform. You'll work across our Next.js frontend, Node.js backend, and mobile apps.",
    gradient: "from-[#0088cc] to-[#006699]",
  },
  {
    title: "Product Designer",
    type: "Full-time · Remote",
    dept: "Design",
    desc: "Design intuitive, beautiful experiences for students and vendors across Africa. Own the end-to-end design process.",
    gradient: "from-[#833AB4] to-[#FD1D1D]",
  },
  {
    title: "Community Manager",
    type: "Full-time · Lagos",
    dept: "Marketing",
    desc: "Grow and engage our campus communities. You'll be the voice of Hollap across universities and social platforms.",
    gradient: "from-[#F77737] to-[#FDC830]",
  },
  {
    title: "Mobile Engineer (React Native)",
    type: "Full-time · Remote",
    dept: "Engineering",
    desc: "Build our mobile experience from the ground up. React Native experience and a passion for polished UIs required.",
    gradient: "from-[#833AB4] to-[#0088cc]",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans">
      <section className="px-4 pt-32 pb-20 max-w-4xl mx-auto">
        <ScrollAnimation>
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Join the Team
          </h1>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            We&apos;re building the commerce infrastructure for Africa&apos;s next generation. Come build with us.
          </p>
        </ScrollAnimation>

        <div className="space-y-4">
          {roles.map((role, i) => (
            <ScrollAnimation key={role.title} delay={i * 0.1}>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${role.gradient} mb-3`} />
                    <h2 className="text-xl font-semibold">{role.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {role.dept} · {role.type}
                    </p>
                    <p className="text-sm text-gray-400 mt-3 leading-relaxed max-w-2xl">
                      {role.desc}
                    </p>
                  </div>
                  <a
                    href="mailto:careers@hollap.com"
                    className="shrink-0 px-5 py-2.5 bg-[#0088cc] hover:bg-[#0077b3] rounded-md text-white text-sm font-medium transition-colors text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <p className="text-center text-gray-500 text-sm mt-12">
            Don&apos;t see a role that fits? Send your resume to{" "}
            <a href="mailto:careers@hollap.com" className="text-[#0088cc] hover:underline">
              careers@hollap.com
            </a>
          </p>
        </ScrollAnimation>
      </section>
    </div>
  );
}
