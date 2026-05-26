import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCategory from "@/components/PackageCategory";
import { getPackagesByCategory } from "@/lib/packageData";

export default function DivingPackages() {
  const packages = getPackagesByCategory("diving");
  return (
    <div>
      <Navbar />
      <PackageCategory packages={packages} categoryLabel="Diving Expeditions" />
      <Footer />
    </div>
  );
}
