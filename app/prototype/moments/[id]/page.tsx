import ClientMomentDetail from "./client-page";

export function generateStaticParams() {
  return [{ id: "mom-1" }, { id: "mom-2" }, { id: "mom-3" }, { id: "mom-4" }, { id: "mom-5" }, { id: "mom-6" }, { id: "mom-7" }];
}

export default function MomentDetailPage() {
  return <ClientMomentDetail />;
}
