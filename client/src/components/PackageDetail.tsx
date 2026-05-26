/* ============================================================
   PACKAGE DETAIL COMPONENT
   Displays full package information with booking
   ============================================================ */
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Users, Calendar, DollarSign } from "lucide-react";
import { Package } from "@/lib/packageData";

interface PackageDetailProps {
  package: Package;
}

export default function PackageDetail({ package: pkg }: PackageDetailProps) {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-black text-foreground">
      {/* Header with Back Button */}
      <div className="pt-32 pb-8">
        <div className="container">
          <Button
            onClick={() => setLocation(-1 as any)}
            variant="outline"
            className="mb-8 border-foreground/20 hover:bg-muted"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container max-w-4xl">
          {/* Title Section */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-black italic mb-4">
              {pkg.name}
              <br />
              <span className="text-amber-500">{pkg.location}</span>
            </h1>
            <p className="text-lg text-foreground/70 mt-6">{pkg.description}</p>
          </div>

          {/* Key Info Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-foreground/10">
            <div>
              <p className="text-sm text-foreground/60 mb-2">Price Per Person</p>
              <p className="text-3xl font-black text-amber-500">${pkg.price}</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-2">Group Size</p>
              <p className="text-lg font-bold text-white">{pkg.groupSize}</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-2">Duration</p>
              <p className="text-lg font-bold text-white">{pkg.duration}</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-2">Location</p>
              <p className="text-lg font-bold text-white">{pkg.state}</p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Left Column - Itinerary & Included */}
            <div className="md:col-span-2 space-y-12">
              {/* Itinerary */}
              <div>
                <h2 className="text-3xl font-black italic mb-8">
                  <span className="text-amber-500">ITINERARY</span>
                </h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-amber-500 pl-6 py-2">
                      <h3 className="font-bold text-white mb-2">{item.day}</h3>
                      <p className="text-foreground/70">{item.activities}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-3xl font-black italic mb-8">
                  <span className="text-amber-500">WHAT'S INCLUDED</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {pkg.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-muted rounded">
                      <span className="text-amber-500 font-bold text-lg">✓</span>
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="md:col-span-1">
              <div className="border border-foreground/20 p-8 space-y-6 sticky top-32">
                <div>
                  <p className="text-sm text-foreground/60 mb-2">Total Package</p>
                  <p className="text-4xl font-black text-amber-500">${pkg.price}</p>
                  <p className="text-xs text-foreground/60 mt-2">Per person</p>
                </div>

                <div className="space-y-3 py-6 border-y border-foreground/10">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-amber-500" />
                    <span>{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>{pkg.location}, {pkg.state}</span>
                  </div>
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3">
                  LOCK IT IN
                </Button>

                <p className="text-xs text-foreground/60 text-center">
                  Non-refundable $200 deposit required to secure booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
