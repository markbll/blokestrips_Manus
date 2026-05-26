import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCategory from "@/components/PackageCategory";
import { getPackagesByCategory } from "@/lib/packageData";

export default function BeerWhiskeyPackages() {
  const packages = getPackagesByCategory("beer-whiskey");
  return (
    <div>
      <Navbar />
      <PackageCategory packages={packages} categoryLabel="Beer & Whiskey Tours" />
      <Footer />
    </div>
  );
}
