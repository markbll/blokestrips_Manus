import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCategory from "@/components/PackageCategory";
import { getPackagesByCategory } from "@/lib/packageData";

export default function FishingPackages() {
  const packages = getPackagesByCategory("fishing");
  return (
    <div>
      <Navbar />
      <PackageCategory packages={packages} categoryLabel="Fishing Trips" />
      <Footer />
    </div>
  );
}
