import { chatThreads } from "@/lib/data";
import dynamic from "next/dynamic";

const ChatDetailClient = dynamic(() => import("./page.client"));

export function generateStaticParams() {
  return chatThreads.map((t) => ({ id: t.id }));
}

export default function Page() {
  return <ChatDetailClient />;
}
