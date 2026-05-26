/* ============================================================
   DYNAMIC PACKAGE CATEGORY PAGE
   Auto-generates from package metadata
   ============================================================ */
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Package } from "@/lib/packageData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PackageCard from "./PackageCard";

interface DynamicPackageCategoryPageProps {
  category: string;
  categoryLabel: string;
  categoryDescription: string;
  packages: Package[];
}

export default function DynamicPackageCategoryPage({
  category,
  categoryLabel,
  categoryDescription,
  packages,
}: DynamicPackageCategoryPageProps) {
  const [selectedState, setSelectedState] = useState<string>("all");
  const [location] = useLocation();

  // Get unique states from packages
  const states = useMemo(() => {
    const uniqueStates = Array.from(new Set(packages.map((p) => p.state)));
    return uniqueStates.sort();
  }, [packages]);

  // Filter packages by state
  const filteredPackages = useMemo(() => {
    if (selectedState === "all") return packages;
    return packages.filter((p) => p.state === selectedState);
  }, [packages, selectedState]);

  const categoryEmoji: Record<string, string> = {
    golf: "⛳",
    fishing: "🎣",
    sailing: "⛵",
    diving: "🤿",
    "beer-whiskey": "🥃",
    custom: "🎉",
  };

  return (
    <div className="min-h-screen bg-black text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-black/50 to-black py-12 md:py-16">
          <div className="container">
            <button
              onClick={() => window.history.back()}
              className="mb-6 text-amber-500 hover:text-amber-400 text-sm font-medium transition"
            >
              ← Back
            </button>

            <div className="max-w-3xl">
              <h1 className="font-black text-4xl md:text-5xl italic mb-2">
                {categoryLabel}
              </h1>
              <p className="text-amber-500 font-black text-xl md:text-2xl italic mb-4">
                ADVENTURES
              </p>
              <p className="text-foreground/80 text-lg">{categoryDescription}</p>
            </div>
          </div>
        </section>

        {/* State Filter */}
        {states.length > 0 && (
          <section className="border-b border-foreground/10 py-8">
            <div className="container">
              <div className="flex flex-wrap gap-3">
                <span className="text-sm font-bold text-amber-500 uppercase tracking-wide self-center">
                  Filter by State
                </span>
                <button
                  onClick={() => setSelectedState("all")}
                  className={`px-4 py-2 text-sm font-bold transition ${
                    selectedState === "all"
                      ? "bg-amber-500 text-black"
                      : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                  }`}
                >
                  All States
                </button>
                {states.map((state) => (
                  <button
                    key={state}
                    onClick={() => setSelectedState(state)}
                    className={`px-4 py-2 text-sm font-bold transition ${
                      selectedState === state
                        ? "bg-amber-500 text-black"
                        : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                    }`}
                  >
                    {state}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Packages Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            {filteredPackages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-foreground/60 text-lg">
                  No packages available for the selected state.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <PackageCard key={pkg.id} package={pkg} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
