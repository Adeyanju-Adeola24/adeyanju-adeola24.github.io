import { moments } from "@/lib/data";
import dynamic from "next/dynamic";

const MomentDetailClient = dynamic(() => import("./page.client"), { ssr: false });

export function generateStaticParams() {
  return moments.map((m) => ({ id: m.id }));
}

export default function Page() {
  return <MomentDetailClient />;
}
