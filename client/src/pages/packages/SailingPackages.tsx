import DynamicPackageCategoryPage from "@/components/DynamicPackageCategoryPage";
import { packages } from "@/lib/packageData";

export default function SailingPackages() {
  const sailingPackages = packages.filter((p) => p.category === "sailing");

  return (
    <DynamicPackageCategoryPage
      category="sailing"
      categoryLabel="Sailing Adventures"
      categoryDescription="Explore our curated selection of sailing adventures across Australia's coastlines."
      packages={sailingPackages}
    />
  );
}
