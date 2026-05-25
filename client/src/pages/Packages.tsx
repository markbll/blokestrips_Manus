/* ============================================================
   BLOKESTRIPS PACKAGES PAGE
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, MapPin } from "lucide-react";

const AERIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/golf-aerial-jmuYbVWEt5GJoXTr6mbhe3.webp";
const FISHING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/fishing-trip-Jg7b9uovwJQqTCcDZyHxBz.webp";
const MATES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/hero-golf-AjZ9k7vhxpXhB35fxpGGXJ.webp";

const packages = [
  {
    img: AERIAL_IMG,
    tag: "Most Popular",
    category: "Golf Trips",
    location: "Murray River, NSW",
    group: "8+ Blokes",
    price: "$499",
    title: "The Ultimate Golf Weekend",
    desc: "Championship golf, luxury accommodation, custom gear, and a full competition with prizes. The benchmark for a blokes golf trip.",
    features: ["2 Nights Luxury Accommodation", "36 Holes of Championship Golf", "Golf Carts & Bar Tab Included", "Custom Polos & Merch Pack", "Organised Comp & Prizes"],
    href: "/golf-trips",
  },
  {
    img: AERIAL_IMG,
    tag: "",
    category: "Golf Trips",
    location: "Albury-Wodonga, VIC/NSW",
    group: "6–10 Blokes",
    price: "$379",
    title: "Border Golf Classic",
    desc: "Two rounds across two courses on the border, with accommodation and a comp night dinner. Perfect for a quick escape.",
    features: ["2 Nights Quality Accommodation", "2 Rounds on 2 Courses", "Golf Cart Hire Included", "Custom Scorecard & Comp", "Dinner & Bar Tab"],
    href: "/golf-trips",
  },
  {
    img: FISHING_IMG,
    tag: "Adventure Pick",
    category: "Fishing Trips",
    location: "Gold Coast, QLD",
    group: "6–12 Blokes",
    price: "$550",
    title: "Deep Sea Fishing Charter",
    desc: "Full-day private charter with a professional guide, all gear supplied, and a BBQ seafood dinner back at the villa.",
    features: ["2 Nights Waterfront Villa", "8-Hour Private Boat Charter", "All Bait, Tackle & Guide", "BBQ Seafood Dinner", "Biggest Catch Trophy"],
    href: "/fishing-trips",
  },
  {
    img: FISHING_IMG,
    tag: "",
    category: "Fishing Trips",
    location: "Murray River, SA/VIC",
    group: "4–8 Blokes",
    price: "$420",
    title: "Murray River Fishing Weekend",
    desc: "Two days on the Murray targeting yellowbelly and cod with a local guide. Houseboat accommodation included.",
    features: ["2 Nights Houseboat Accommodation", "Guided Fishing Sessions", "All Tackle & Bait Supplied", "BBQ Dinner on the Deck", "Fish of the Day Trophy"],
    href: "/fishing-trips",
  },
  {
    img: MATES_IMG,
    tag: "Fully Custom",
    category: "Custom Trips",
    location: "Nationwide",
    group: "Any Size",
    price: "Enquiry",
    title: "Custom Weekend Escape",
    desc: "You tell us what you want and where. We build the full itinerary, handle every booking, and make it happen.",
    features: ["Fully Tailored Itinerary", "Any Destination, Any Activity", "Custom Merchandise Pack", "Full Logistics Coordination", "Everything Booked & Sorted"],
    href: "/custom-trips",
  },
  {
    img: MATES_IMG,
    tag: "",
    category: "Custom Trips",
    location: "Melbourne / Sydney",
    group: "12+ Blokes",
    price: "Enquiry",
    title: "Sports Event Weekend",
    desc: "Premium seats to AFL, NRL, or cricket, combined with accommodation, transport, and a full social itinerary.",
    features: ["Premium Event Tickets", "2 Nights City Accommodation", "Private Group Transport", "Pre-Game Function", "Custom Itinerary & Guide"],
    href: "/custom-trips",
  },
];

const categories = ["All", "Golf Trips", "Fishing Trips", "Custom Trips"];

export default function Packages() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/50 to-[#111111]" />
        </div>
        <div className="container relative z-10">
          <span className="bt-label text-[#E8920A] block mb-4">Our Experiences</span>
          <h1 className="bt-display text-[clamp(3rem,8vw,6rem)] text-white mb-4">
            CHOOSE YOUR<br /><span className="text-[#E8920A]">LEGEND</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Every package includes full organisation, custom polos, prizes and cold beer waiting in your room. Don't see exactly what you want? We'll build it for you.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="bg-[#0d0d0d] border-b border-white/10 sticky top-16 lg:top-20 z-40">
        <div className="container">
          <div className="flex gap-1 overflow-x-auto py-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className="bt-label text-[11px] px-5 py-2.5 whitespace-nowrap transition-colors bg-[#1a1a1a] text-white/60 hover:text-white hover:bg-[#242424] first:bg-[#E8920A] first:text-[#111111]"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.title} className="bg-[#1a1a1a] overflow-hidden card-lift group flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  {pkg.tag && (
                    <div className="absolute top-4 left-4 bg-[#E8920A] px-3 py-1">
                      <span className="bt-label text-[#111111] text-[9px]">{pkg.tag}</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-white/50" />
                      <span className="text-white/60 text-xs">{pkg.location}</span>
                    </div>
                    <div className="text-right">
                      <div className="bt-display-normal text-[#E8920A] text-2xl">{pkg.price}</div>
                      <div className="text-white/40 text-[10px]">Per person</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="bt-label text-[#E8920A] text-[9px] mb-2">{pkg.category} · {pkg.group}</div>
                  <h3 className="bt-display text-xl text-white mb-3">{pkg.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{pkg.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-white/60 text-sm">
                        <Check size={13} className="text-[#E8920A] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={pkg.href}>
                    <button className="btn-amber w-full justify-center text-sm py-3">
                      Lock It In <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#E8920A] py-14">
        <div className="container text-center">
          <h2 className="bt-display text-[clamp(2rem,5vw,3.5rem)] text-[#111111] mb-4">
            CAN'T FIND WHAT YOU'RE AFTER?
          </h2>
          <p className="text-[#111111]/70 mb-8 max-w-lg mx-auto">
            We build fully custom trips for any group, any destination, any activity. Just tell us what you want.
          </p>
          <Link href="/contact">
            <button className="bg-[#111111] text-white font-[Barlow] font-700 uppercase tracking-widest text-sm py-3 px-8 hover:bg-[#1a1a1a] transition-colors inline-flex items-center gap-2">
              Build a Custom Trip <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
