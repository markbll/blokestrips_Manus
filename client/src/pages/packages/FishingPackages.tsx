import DynamicPackageCategoryPage from "@/components/DynamicPackageCategoryPage";
import { packages } from "@/lib/packageData";

export default function FishingPackages() {
  const fishingPackages = packages.filter((p) => p.category === "fishing");

  return (
    <DynamicPackageCategoryPage
      category="fishing"
      categoryLabel="Fishing Trips"
      categoryDescription="Explore our curated selection of fishing trips and charters across Australia."
      packages={fishingPackages}
    />
  );
}
