/* ============================================================
   PACKAGE CARD
   Reusable card component for displaying packages
   ============================================================ */
import { Link } from "wouter";
import { Package } from "@/lib/packageData";

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Link href={`/packages/${pkg.category}/${pkg.id}`}>
      <a className="group block h-full">
        <div className="border border-amber-500/30 hover:border-amber-500 transition-all duration-300 h-full flex flex-col overflow-hidden">
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-black/50">
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex-1 p-4 flex flex-col">
            <h3 className="font-bold text-lg mb-1 group-hover:text-amber-500 transition">
              {pkg.name}
            </h3>

            <p className="text-sm text-foreground/60 mb-3 flex items-center gap-1">
              📍 {pkg.location}
            </p>

            {/* Key Info */}
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/70">Price</span>
                <span className="font-bold text-amber-500">${pkg.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Group Size</span>
                <span className="font-medium">{pkg.groupSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Duration</span>
                <span className="font-medium">{pkg.duration}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-1 mb-4 flex-1">
              {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-foreground/70">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 transition uppercase text-sm tracking-wide">
              View Details
            </button>
          </div>
        </div>
      </a>
    </Link>
  );
}
