/* ============================================================
   PACKAGE DATA STRUCTURE
   All package categories and state-based packages
   ============================================================ */

export type PackageCategory = "golf" | "fishing" | "sailing" | "diving" | "beer-whiskey" | "custom-escapes";
export type State = "VIC" | "NSW" | "QLD" | "SA" | "TAS" | "WA" | "NT" | "ACT";

export interface Package {
  id: string;
  name: string;
  location: string;
  state: State;
  category: PackageCategory;
  price: number;
  groupSize: string;
  duration: string;
  description: string;
  highlights: string[];
  included: string[];
  image: string;
  itinerary: { day: string; activities: string }[];
}

export const packages: Package[] = [
  // GOLF PACKAGES
  {
    id: "golf-vic-murray",
    name: "Murray River Ultimate",
    location: "Murray River",
    state: "VIC",
    category: "golf",
    price: 499,
    groupSize: "8+ Blokes",
    duration: "2 Nights",
    description: "Championship golf course, luxury accommodation, and legendary camaraderie.",
    highlights: ["36 Holes Championship Golf", "Custom Polos & Merch", "Bar Tab Included", "Organised Comp & Prizes"],
    included: [
      "2 Nights Luxury Accommodation",
      "36 Holes of Championship Golf",
      "Golf Carts & Bar Tab Included",
      "Custom Polos & Merch Pack",
      "Organised Comp & Prizes",
      "Welcome Drinks on Arrival",
      "Gourmet Dinners Included",
      "Professional Photography",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/golf-aerial-jmuYbVWEt5GJoXTr6mbhe3.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome drinks, casual dinner" },
      { day: "Day 2", activities: "18 holes of championship golf, lunch, comp & prizes, gourmet dinner" },
      { day: "Day 3", activities: "18 holes, farewell lunch, depart" },
    ],
  },
  {
    id: "golf-nsw-hunter",
    name: "Hunter Valley Golf Escape",
    location: "Hunter Valley",
    state: "NSW",
    category: "golf",
    price: 549,
    groupSize: "6–12 Blokes",
    duration: "2 Nights",
    description: "Premium golf courses with wine country views and luxury resort accommodation.",
    highlights: ["2 Championship Courses", "Wine Tasting Included", "5-Star Resort", "Pro Shop Credit"],
    included: [
      "2 Nights 5-Star Resort",
      "2 Championship Golf Courses",
      "Wine Tasting Experience",
      "Golf Carts & Buggy Hire",
      "Custom Polos & Merch",
      "Welcome Champagne",
      "Gourmet Dinners",
      "Professional Photography",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/golf-aerial-jmuYbVWEt5GJoXTr6mbhe3.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, wine tasting, welcome dinner" },
      { day: "Day 2", activities: "18 holes, lunch, 18 holes, gourmet dinner" },
      { day: "Day 3", activities: "9 holes, farewell brunch, depart" },
    ],
  },
  {
    id: "golf-qld-gold-coast",
    name: "Gold Coast Golf Championship",
    location: "Gold Coast",
    state: "QLD",
    category: "golf",
    price: 599,
    groupSize: "8+ Blokes",
    duration: "3 Nights",
    description: "World-class golf courses on the Gold Coast with beachfront luxury.",
    highlights: ["3 Championship Courses", "Beachfront Resort", "Tournament Format", "Pro Coaching"],
    included: [
      "3 Nights Beachfront Resort",
      "3 Championship Golf Courses",
      "Tournament Format Competition",
      "Pro Coaching Session",
      "Golf Carts & Equipment",
      "Custom Polos & Merch",
      "Welcome Cocktails",
      "Gourmet Dinners",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/golf-aerial-jmuYbVWEt5GJoXTr6mbhe3.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, practice round, welcome dinner" },
      { day: "Day 2", activities: "Championship course 1, lunch, course 2, gourmet dinner" },
      { day: "Day 3", activities: "Championship course 3, tournament finals, celebration dinner" },
      { day: "Day 4", activities: "Farewell brunch, depart" },
    ],
  },

  // FISHING PACKAGES
  {
    id: "fishing-qld-gold-coast",
    name: "Deep Sea Fishing Charter",
    location: "Gold Coast",
    state: "QLD",
    category: "fishing",
    price: 550,
    groupSize: "6–12 Blokes",
    duration: "2 Nights",
    description: "Private boat charter, professional guides, and unforgettable catches.",
    highlights: ["8-Hour Private Charter", "Professional Guide", "All Equipment Included", "Biggest Catch Trophy"],
    included: [
      "2 Nights Waterfront Villa",
      "8-Hour Private Boat Charter",
      "All Bait, Tackle & Guide",
      "BBQ Seafood Dinner",
      "Biggest Catch Trophy",
      "Professional Photography",
      "Fishing Equipment Provided",
      "Complimentary Drinks on Board",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/fishing-trip-Jg7b9uovwJQqTCcDZyHxBz.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome drinks, casual dinner" },
      { day: "Day 2", activities: "Full day deep sea fishing charter, BBQ dinner, trophy ceremony" },
      { day: "Day 3", activities: "Optional morning fishing or relax, farewell lunch, depart" },
    ],
  },
  {
    id: "fishing-nsw-south-coast",
    name: "South Coast Fishing Adventure",
    location: "Batemans Bay",
    state: "NSW",
    category: "fishing",
    price: 475,
    groupSize: "6–10 Blokes",
    duration: "2 Nights",
    description: "Pristine South Coast waters with experienced fishing guides.",
    highlights: ["Full-Day Charter", "Expert Guides", "Scenic Coastline", "Fresh Catch Dinner"],
    included: [
      "2 Nights Beachfront Lodge",
      "Full-Day Fishing Charter",
      "Professional Fishing Guide",
      "All Equipment & Bait",
      "Fresh Catch BBQ Dinner",
      "Fishing Trophy",
      "Welcome Drinks",
      "Photography Service",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/fishing-trip-Jg7b9uovwJQqTCcDZyHxBz.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome drinks" },
      { day: "Day 2", activities: "Full-day fishing charter, fresh catch BBQ dinner" },
      { day: "Day 3", activities: "Optional morning fish, farewell lunch, depart" },
    ],
  },
  {
    id: "fishing-wa-exmouth",
    name: "Exmouth Game Fishing",
    location: "Exmouth",
    state: "WA",
    category: "fishing",
    price: 650,
    groupSize: "6–8 Blokes",
    duration: "3 Nights",
    description: "World-class game fishing in pristine Western Australian waters.",
    highlights: ["Game Fishing", "Luxury Resort", "Professional Crew", "Trophy Fishing"],
    included: [
      "3 Nights Luxury Resort",
      "2 Full-Day Game Fishing Charters",
      "Professional Fishing Crew",
      "All Equipment & Tackle",
      "Gourmet Dinners",
      "Welcome Drinks",
      "Photography",
      "Fishing Trophies",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/fishing-trip-Jg7b9uovwJQqTCcDZyHxBz.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome dinner" },
      { day: "Day 2", activities: "Full-day game fishing charter, gourmet dinner" },
      { day: "Day 3", activities: "Full-day game fishing charter, celebration dinner" },
      { day: "Day 4", activities: "Farewell brunch, depart" },
    ],
  },

  // SAILING PACKAGES
  {
    id: "sailing-nsw-sydney",
    name: "Sydney Harbour Sailing Adventure",
    location: "Sydney",
    state: "NSW",
    category: "sailing",
    price: 425,
    groupSize: "8–16 Blokes",
    duration: "2 Nights",
    description: "Iconic Sydney Harbour sailing with luxury waterfront accommodation.",
    highlights: ["Iconic Harbour", "Luxury Yacht", "Scenic Routes", "Waterfront Dining"],
    included: [
      "2 Nights Waterfront Accommodation",
      "Full-Day Sailing Charter",
      "Professional Skipper & Crew",
      "Lunch on Board",
      "Welcome Drinks",
      "Gourmet Dinners",
      "Custom Polos & Merch",
      "Photography",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome drinks, waterfront dinner" },
      { day: "Day 2", activities: "Full-day sailing charter, lunch on board, gourmet dinner" },
      { day: "Day 3", activities: "Optional morning sail or relax, farewell lunch, depart" },
    ],
  },
  {
    id: "sailing-qld-whitsundays",
    name: "Whitsundays Sailing Paradise",
    location: "Whitsunday Islands",
    state: "QLD",
    category: "sailing",
    price: 575,
    groupSize: "6–12 Blokes",
    duration: "3 Nights",
    description: "Tropical sailing adventure through the stunning Whitsunday Islands.",
    highlights: ["Tropical Paradise", "Multi-Day Sailing", "Island Hopping", "Snorkelling"],
    included: [
      "3 Nights Luxury Island Resort",
      "2 Full-Day Sailing Charters",
      "Professional Skipper & Crew",
      "Snorkelling Equipment",
      "Island Hopping",
      "Gourmet Meals",
      "Welcome Cocktails",
      "Photography",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome drinks, island dinner" },
      { day: "Day 2", activities: "Full-day sailing charter, island hopping, snorkelling" },
      { day: "Day 3", activities: "Full-day sailing charter, scenic anchorage, gourmet dinner" },
      { day: "Day 4", activities: "Farewell brunch, depart" },
    ],
  },

  // DIVING PACKAGES
  {
    id: "diving-qld-cairns",
    name: "Great Barrier Reef Diving",
    location: "Cairns",
    state: "QLD",
    category: "diving",
    price: 625,
    groupSize: "6–12 Blokes",
    duration: "3 Nights",
    description: "World-class diving on the Great Barrier Reef with expert instruction.",
    highlights: ["Great Barrier Reef", "Expert Instructors", "Multiple Dives", "Luxury Resort"],
    included: [
      "3 Nights Luxury Resort",
      "3 Full-Day Diving Expeditions",
      "PADI Certification Available",
      "All Diving Equipment",
      "Professional Dive Masters",
      "Gourmet Meals",
      "Welcome Drinks",
      "Photography",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, orientation, welcome dinner" },
      { day: "Day 2", activities: "Full-day reef diving expedition, gourmet dinner" },
      { day: "Day 3", activities: "Full-day reef diving expedition, celebration dinner" },
      { day: "Day 4", activities: "Optional morning dive or relax, farewell brunch, depart" },
    ],
  },
  {
    id: "diving-wa-ningaloo",
    name: "Ningaloo Reef Diving",
    location: "Exmouth",
    state: "WA",
    category: "diving",
    price: 599,
    groupSize: "6–10 Blokes",
    duration: "3 Nights",
    description: "Pristine diving at Ningaloo Reef with whale shark encounters.",
    highlights: ["Whale Shark Encounters", "Pristine Reef", "Expert Guides", "Luxury Resort"],
    included: [
      "3 Nights Luxury Resort",
      "2 Full-Day Diving Charters",
      "Whale Shark Encounter Tour",
      "All Diving Equipment",
      "Professional Dive Masters",
      "Gourmet Meals",
      "Welcome Drinks",
      "Photography",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome dinner" },
      { day: "Day 2", activities: "Whale shark encounter tour, gourmet dinner" },
      { day: "Day 3", activities: "Full-day reef diving charter, celebration dinner" },
      { day: "Day 4", activities: "Farewell brunch, depart" },
    ],
  },

  // BEER & WHISKEY PACKAGES
  {
    id: "beer-whiskey-vic-melbourne",
    name: "Melbourne Craft Beer & Whiskey Tour",
    location: "Melbourne",
    state: "VIC",
    category: "beer-whiskey",
    price: 375,
    groupSize: "8–16 Blokes",
    duration: "2 Nights",
    description: "Craft brewery and distillery tours through Melbourne's best venues.",
    highlights: ["Craft Breweries", "Distillery Tours", "Whiskey Tastings", "Local Cuisine"],
    included: [
      "2 Nights Boutique Hotel",
      "3 Craft Brewery Tours",
      "2 Distillery Tastings",
      "Whiskey Masterclass",
      "Gourmet Meals",
      "Welcome Drinks",
      "Custom Polos & Merch",
      "Photography",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome drinks, brewery tour" },
      { day: "Day 2", activities: "Craft brewery tour, distillery tasting, whiskey masterclass, gourmet dinner" },
      { day: "Day 3", activities: "Farewell brewery tour, lunch, depart" },
    ],
  },
  {
    id: "beer-whiskey-nsw-hunter",
    name: "Hunter Valley Brewery & Distillery",
    location: "Hunter Valley",
    state: "NSW",
    category: "beer-whiskey",
    price: 425,
    groupSize: "6–12 Blokes",
    duration: "2 Nights",
    description: "Brewery and distillery experiences in the Hunter Valley wine region.",
    highlights: ["Local Breweries", "Craft Distilleries", "Tastings", "Gourmet Meals"],
    included: [
      "2 Nights Luxury Resort",
      "2 Craft Brewery Tours",
      "2 Distillery Tastings",
      "Whiskey Tasting Session",
      "Gourmet Meals",
      "Welcome Drinks",
      "Custom Merch",
      "Photography",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp",
    itinerary: [
      { day: "Day 1", activities: "Arrive, settle in, welcome drinks, brewery tour" },
      { day: "Day 2", activities: "Distillery tastings, whiskey masterclass, gourmet dinner" },
      { day: "Day 3", activities: "Farewell brewery tour, lunch, depart" },
    ],
  },

  // CUSTOM ESCAPES
  {
    id: "custom-escape-nationwide-bucks",
    name: "Bucks Party Blowout",
    location: "Nationwide",
    state: "NSW",
    category: "custom-escapes",
    price: 0,
    groupSize: "Any Size",
    duration: "Custom",
    description: "Fully customised bucks party experience tailored to your crew.",
    highlights: ["Fully Customised", "Any Destination", "Any Activities", "Complete Organisation"],
    included: [
      "Custom Itinerary Design",
      "Accommodation Coordination",
      "Activity Booking & Management",
      "Custom Merchandise Pack",
      "Transport Coordination",
      "Catering & Bar Arrangements",
      "Entertainment Booking",
      "24/7 Support",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp",
    itinerary: [
      { day: "Custom", activities: "Your itinerary, your way. We handle everything." },
    ],
  },
  {
    id: "custom-escape-nationwide-corporate",
    name: "Corporate Team Building",
    location: "Nationwide",
    state: "VIC",
    category: "custom-escapes",
    price: 0,
    groupSize: "Any Size",
    duration: "Custom",
    description: "Bespoke corporate team building and incentive experiences.",
    highlights: ["Team Building Focus", "Custom Activities", "Fully Managed", "Nationwide"],
    included: [
      "Custom Program Design",
      "Team Building Activities",
      "Accommodation & Meals",
      "Transport & Logistics",
      "Professional Facilitators",
      "Custom Merchandise",
      "Photography & Videography",
      "Post-Event Reporting",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp",
    itinerary: [
      { day: "Custom", activities: "Designed specifically for your team's goals." },
    ],
  },
  {
    id: "custom-escape-nationwide-adventure",
    name: "Adventure Expedition",
    location: "Nationwide",
    state: "QLD",
    category: "custom-escapes",
    price: 0,
    groupSize: "Any Size",
    duration: "Custom",
    description: "Custom adventure expeditions with activities tailored to your group.",
    highlights: ["Adventure Activities", "Custom Routes", "Expert Guides", "All-Inclusive"],
    included: [
      "Itinerary Planning",
      "Activity Booking",
      "Expert Guides & Instructors",
      "All Equipment Provided",
      "Accommodation & Meals",
      "Transport & Logistics",
      "Safety & Insurance",
      "Custom Merchandise",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp",
    itinerary: [
      { day: "Custom", activities: "Your adventure, your rules. We make it happen." },
    ],
  },
];

export const getPackagesByCategory = (category: PackageCategory): Package[] => {
  return packages.filter((p) => p.category === category);
};

export const getPackagesByState = (state: State): Package[] => {
  return packages.filter((p) => p.state === state);
};

export const getPackagesByCategoryAndState = (category: PackageCategory, state: State): Package[] => {
  return packages.filter((p) => p.category === category && p.state === state);
};

export const getStatesForCategory = (category: PackageCategory): State[] => {
  const states = new Set(packages.filter((p) => p.category === category).map((p) => p.state));
  return Array.from(states).sort();
};

export const getAllStatesWithPackages = (): State[] => {
  const states = new Set(packages.map((p) => p.state));
  return Array.from(states).sort();
};

export const getCategoryLabel = (category: PackageCategory): string => {
  const labels: Record<PackageCategory, string> = {
    golf: "Golf Weekends",
    fishing: "Fishing Trips",
    sailing: "Sailing Adventures",
    diving: "Diving Expeditions",
    "beer-whiskey": "Beer & Whiskey Tours",
    "custom-escapes": "Custom Escapes",
  };
  return labels[category];
};
