import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCategory from "@/components/PackageCategory";
import { getPackagesByCategory } from "@/lib/packageData";

export default function GolfPackages() {
  const packages = getPackagesByCategory("golf");
  return (
    <div>
      <Navbar />
      <PackageCategory packages={packages} categoryLabel="Golf Weekends" />
      <Footer />
    </div>
  );
}
