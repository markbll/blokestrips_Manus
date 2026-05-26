import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCategory from "@/components/PackageCategory";
import { getPackagesByCategory } from "@/lib/packageData";

export default function SailingPackages() {
  const packages = getPackagesByCategory("sailing");
  return (
    <div>
      <Navbar />
      <PackageCategory packages={packages} categoryLabel="Sailing Adventures" />
      <Footer />
    </div>
  );
}
