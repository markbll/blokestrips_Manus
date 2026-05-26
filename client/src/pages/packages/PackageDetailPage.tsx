import { useRoute } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageDetail from "@/components/PackageDetail";
import NotFound from "@/pages/NotFound";
import { packages } from "@/lib/packageData";

export default function PackageDetailPage() {
  const [match, params] = useRoute("/packages/:category/:id");

  if (!match) return <NotFound />;

  const packageId = params?.id;
  const pkg = packages.find((p) => p.id === packageId);

  if (!pkg) return <NotFound />;

  return (
    <div>
      <Navbar />
      <PackageDetail package={pkg} />
      <Footer />
    </div>
  );
}
