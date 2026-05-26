import DynamicPackageCategoryPage from "@/components/DynamicPackageCategoryPage";
import { packages } from "@/lib/packageData";

export default function DivingPackages() {
  const divingPackages = packages.filter((p) => p.category === "diving");

  return (
    <DynamicPackageCategoryPage
      category="diving"
      categoryLabel="Diving Expeditions"
      categoryDescription="Explore our curated selection of diving expeditions across Australia's best dive sites."
      packages={divingPackages}
    />
  );
}
