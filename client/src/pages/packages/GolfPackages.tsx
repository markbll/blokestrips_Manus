import DynamicPackageCategoryPage from "@/components/DynamicPackageCategoryPage";
import { packages } from "@/lib/packageData";

export default function GolfPackages() {
  const golfPackages = packages.filter((p) => p.category === "golf");

  return (
    <DynamicPackageCategoryPage
      category="golf"
      categoryLabel="Golf Weekends"
      categoryDescription="Explore our curated selection of golf weekends experiences across Australia."
      packages={golfPackages}
    />
  );
}
