import DynamicPackageCategoryPage from "@/components/DynamicPackageCategoryPage";
import { packages } from "@/lib/packageData";

export default function BeerWhiskeyPackages() {
  const beerWhiskeyPackages = packages.filter((p) => p.category === "beer-whiskey");

  return (
    <DynamicPackageCategoryPage
      category="beer-whiskey"
      categoryLabel="Beer & Whiskey Tours"
      categoryDescription="Explore our curated selection of brewery and distillery tours across Australia."
      packages={beerWhiskeyPackages}
    />
  );
}
