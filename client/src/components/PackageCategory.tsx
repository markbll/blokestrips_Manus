/* ============================================================
   PACKAGE CATEGORY COMPONENT
   Displays all packages for a category with state filtering
   ============================================================ */
import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Users, DollarSign } from "lucide-react";
import { Package, getPackagesByCategory, getCategoryLabel } from "@/lib/packageData";

interface PackageCategoryProps {
  packages: Package[];
  categoryLabel: string;
}

export default function PackageCategory({ packages, categoryLabel }: PackageCategoryProps) {
  const [, setLocation] = useLocation();
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // Get unique states for this category
  const states = Array.from(new Set(packages.map((p) => p.state))).sort();

  // Filter packages by selected state
  const filteredPackages = selectedState
    ? packages.filter((p) => p.state === selectedState)
    : packages;

  return (
    <div className="min-h-screen bg-black text-foreground">
      {/* Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-black to-black/50">
        <div className="container">
          <h1 className="text-6xl md:text-7xl font-black italic mb-4">
            {categoryLabel}
            <br />
            <span className="text-amber-500">ADVENTURES</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mt-6">
            Explore our curated selection of {categoryLabel.toLowerCase()} experiences across Australia.
          </p>
        </div>
      </div>

      {/* State Filter */}
      {states.length > 1 && (
        <div className="py-8 border-b border-foreground/10">
          <div className="container">
            <p className="text-sm font-bold text-amber-500 tracking-widest mb-4">FILTER BY STATE</p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setSelectedState(null)}
                variant={selectedState === null ? "default" : "outline"}
                className={selectedState === null ? "bg-amber-500 text-black" : ""}
              >
                All States
              </Button>
              {states.map((state) => (
                <Button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  variant={selectedState === state ? "default" : "outline"}
                  className={selectedState === state ? "bg-amber-500 text-black" : ""}
                >
                  {state}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Packages Grid */}
      <div className="py-16">
        <div className="container">
          {filteredPackages.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="border border-foreground/20 overflow-hidden hover:border-amber-500/50 transition cursor-pointer"
                  onClick={() => setLocation(`/packages/${pkg.category}/${pkg.id}`)}
                >
                  {/* Image */}
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover hover:opacity-90 transition"
                  />

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-white text-lg">{pkg.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-foreground/60 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{pkg.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-amber-500">${pkg.price}</div>
                        <p className="text-xs text-foreground/60">Per person</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex gap-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{pkg.groupSize}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 text-sm">{pkg.description}</p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-amber-500 font-bold">✓</span>
                          <span className="text-foreground/70">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      onClick={() => setLocation(`/packages/${pkg.category}/${pkg.id}`)}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold mt-4"
                    >
                      VIEW DETAILS
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-foreground/60">No packages found for the selected state.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
