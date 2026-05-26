/* ============================================================
   CUSTOM ESCAPES PACKAGES PAGE
   Bespoke, fully customised trip experiences
   ============================================================ */
import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { packages, type State } from "@/lib/packageData";

const STATES: State[] = ["NSW", "VIC", "QLD", "SA", "TAS", "WA", "NT", "ACT"];

export default function CustomEscapesPackages() {
  const [location, setLocation] = useLocation();
  const [selectedState, setSelectedState] = useState<State | "all">("all");

  const customPackages = packages.filter((p) => p.category === "custom-escapes");
  const filteredPackages =
    selectedState === "all" ? customPackages : customPackages.filter((p) => p.state === selectedState);

  const availableStates = Array.from(new Set(customPackages.map((p) => p.state))).sort();

  return (
    <div className="min-h-screen bg-black text-foreground pt-24 pb-16">
      <div className="container">
        {/* Back Button */}
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-black text-5xl italic tracking-tight mb-2">
            <span className="text-white">Custom</span>
            <span className="text-amber-500"> Escapes</span>
          </h1>
          <p className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-4">ADVENTURES</p>
          <p className="text-foreground/70 max-w-2xl">
            Your vision, our execution. Fully customised experiences tailored to your crew's unique interests and preferences.
          </p>
        </div>

        {/* State Filter */}
        <div className="mb-12">
          <p className="text-amber-500 font-bold text-xs uppercase tracking-wider mb-4">FILTER BY STATE</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedState("all")}
              className={`px-4 py-2 font-bold text-sm transition ${
                selectedState === "all"
                  ? "bg-amber-500 text-black"
                  : "border border-amber-500/50 text-foreground hover:bg-amber-500/10"
              }`}
            >
              All States
            </button>
            {availableStates.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`px-4 py-2 font-bold text-sm transition ${
                  selectedState === state
                    ? "bg-amber-500 text-black"
                    : "border border-amber-500/50 text-foreground hover:bg-amber-500/10"
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <a
              key={pkg.id}
              href={`/packages/${pkg.category}/${pkg.id}`}
              className="group border border-foreground/20 hover:border-amber-500 transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-foreground/5">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
              </div>

              {/* Content */}
              <div className="p-6 bg-black/50 border-t border-foreground/10">
                <h3 className="font-black text-lg italic mb-2">{pkg.name}</h3>
                <p className="text-amber-500 text-sm font-bold mb-4">📍 {pkg.location}</p>

                {/* Info Grid */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Price</span>
                    <span className="font-bold text-amber-500">
                      {pkg.price === 0 ? "Enquiry" : `$${pkg.price}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Group Size</span>
                    <span className="font-bold">{pkg.groupSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Duration</span>
                    <span className="font-bold">{pkg.duration}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-1 mb-6">
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-amber-500 font-bold mt-0.5">✓</span>
                      <span className="text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 transition uppercase text-sm tracking-wider">
                  View Details
                </button>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-foreground/60">No custom escapes available for this state.</p>
          </div>
        )}
      </div>
    </div>
  );
}
