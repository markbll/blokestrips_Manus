import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  tripType: "golf" | "fishing" | "custom" | null;
}

const tripDetails = {
  golf: {
    title: "The Ultimate Golf Weekend",
    location: "Murray River",
    groupSize: "8+ Blokes",
    price: "$499",
    description: "Championship golf course, luxury accommodation, and legendary camaraderie.",
    features: [
      "2 Nights Luxury Accommodation",
      "36 Holes of Championship Golf",
      "Golf Carts & Bar Tab Included",
      "Custom Polos & Merch Pack",
      "Organised Comp & Prizes",
      "Welcome Drinks on Arrival",
      "Gourmet Dinners Included",
      "Professional Photography",
    ],
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome drinks, casual dinner" },
      { day: "Day 2", activities: "18 holes of championship golf, lunch, comp & prizes, gourmet dinner" },
      { day: "Day 3", activities: "18 holes, farewell lunch, depart" },
    ],
  },
  fishing: {
    title: "Deep Sea Fishing Charter",
    location: "Gold Coast",
    groupSize: "6–12 Blokes",
    price: "$550",
    description: "Private boat charter, professional guides, and unforgettable catches.",
    features: [
      "2 Nights Waterfront Villa",
      "8-Hour Private Boat Charter",
      "All Bait, Tackle & Guide",
      "BBQ Seafood Dinner",
      "Biggest Catch Trophy",
      "Professional Photography",
      "Fishing Equipment Provided",
      "Complimentary Drinks on Board",
    ],
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome drinks, casual dinner" },
      { day: "Day 2", activities: "Full day deep sea fishing charter, BBQ dinner, trophy ceremony" },
      { day: "Day 3", activities: "Optional morning fishing or relax, farewell lunch, depart" },
    ],
  },
  custom: {
    title: "Custom Weekend Escape",
    location: "Nationwide",
    groupSize: "Any Size",
    price: "Enquiry",
    description: "Fully tailored itinerary designed around your group's interests and budget.",
    features: [
      "Fully Tailored Itinerary",
      "Any Destination, Any Activity",
      "Custom Merchandise Pack",
      "Full Logistics Coordination",
      "Everything Booked & Sorted",
      "Dedicated Trip Coordinator",
      "Flexible Payment Options",
      "24/7 Support During Trip",
    ],
    itinerary: [
      { day: "Planning", activities: "Discuss your vision, preferences, and budget" },
      { day: "Coordination", activities: "We build the perfect itinerary and handle all bookings" },
      { day: "Execution", activities: "Show up and enjoy — we manage everything" },
    ],
  },
};

export default function PackageModal({ isOpen, onClose, tripType }: PackageModalProps) {
  if (!tripType) return null;

  const details = tripDetails[tripType];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-amber-500/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black italic text-white">{details.title}</DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 hover:bg-muted rounded transition"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Header Info */}
          <div className="grid grid-cols-3 gap-4 pb-4 border-b border-border">
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-bold text-white">{details.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Group Size</p>
              <p className="font-bold text-white">{details.groupSize}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="font-bold text-amber-500 text-lg">{details.price}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-foreground leading-relaxed">{details.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-white mb-3">What's Included</h3>
            <ul className="grid grid-cols-2 gap-2">
              {details.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div>
            <h3 className="font-bold text-white mb-3">Itinerary</h3>
            <div className="space-y-2">
              {details.itinerary.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-3 bg-muted rounded">
                  <div className="font-bold text-amber-500 min-w-20">{item.day}</div>
                  <div className="text-foreground text-sm">{item.activities}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-border hover:bg-muted"
            >
              Back
            </Button>
            <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold">
              Lock It In
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
