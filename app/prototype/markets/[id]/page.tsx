import { products } from "@/lib/data";
import dynamic from "next/dynamic";

const ProductDetailClient = dynamic(() => import("./page.client"));

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function Page() {
  return <ProductDetailClient />;
}
