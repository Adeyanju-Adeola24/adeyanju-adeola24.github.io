import { vendors } from "@/lib/data";
import dynamic from "next/dynamic";

const VendorProfileClient = dynamic(() => import("./page.client"), { ssr: false });

export function generateStaticParams() {
  return vendors.map((v) => ({ id: v.id }));
}

export default function Page() {
  return <VendorProfileClient />;
}
