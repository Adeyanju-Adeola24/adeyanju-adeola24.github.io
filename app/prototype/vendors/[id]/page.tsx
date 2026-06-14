import ClientVendorProfile from "./client-page";

export function generateStaticParams() {
  return [{ id: "vendor-1" }, { id: "vendor-2" }, { id: "vendor-3" }, { id: "vendor-4" }, { id: "vendor-5" }];
}

export default function VendorProfilePage() {
  return <ClientVendorProfile />;
}
