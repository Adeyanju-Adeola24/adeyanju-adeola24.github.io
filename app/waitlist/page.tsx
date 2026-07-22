import WaitlistForm from "../components/WaitlistForm";
import ScrollAnimation from "../components/ScrollAnimation";

export const metadata = {
  title: "Join the Waitlist — Hollap",
  description: "Be the first to know when Hollap launches at your university.",
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#12121a] text-white font-sans flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
        <ScrollAnimation>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl leading-tight">
            Get Early Access to{" "}
            <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] bg-clip-text text-transparent">
              Hollap
            </span>
          </h1>
          <p className="max-w-xl text-lg text-gray-300 mb-10 mx-auto">
            Join thousands of students and vendors already on the waitlist. We&apos;ll notify you the moment we launch at your campus.
          </p>
          <WaitlistForm />
          <p className="text-xs text-gray-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </ScrollAnimation>
      </section>
    </div>
  );
}
