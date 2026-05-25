/* ============================================================
   BLOKESTRIPS GOLF TRIPS PAGE
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, MapPin, Users, Calendar } from "lucide-react";

const AERIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/golf-aerial-jmuYbVWEt5GJoXTr6mbhe3.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/hero-golf-AjZ9k7vhxpXhB35fxpGGXJ.webp";
const MATES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp";

const golfPackages = [
  {
    img: AERIAL_IMG,
    tag: "Most Popular",
    location: "Murray River, NSW",
    group: "8–20 Blokes",
    duration: "2 Nights / 3 Days",
    price: "$499",
    title: "The Ultimate Golf Weekend",
    features: ["2 Nights Luxury Accommodation", "36 Holes of Championship Golf", "Golf Carts & Bar Tab Included", "Custom Polos & Merch Pack", "Organised Comp & Prizes", "Welcome Beers on Arrival"],
  },
  {
    img: HERO_IMG,
    tag: "",
    location: "Albury-Wodonga, VIC/NSW",
    group: "6–16 Blokes",
    duration: "2 Nights / 3 Days",
    price: "$379",
    title: "Border Golf Classic",
    features: ["2 Nights Quality Accommodation", "2 Rounds on 2 Courses", "Golf Cart Hire Included", "Custom Scorecard & Comp", "Dinner & Bar Tab Night 1", "Stubby Holder Pack"],
  },
  {
    img: MATES_IMG,
    tag: "Premium",
    location: "Mornington Peninsula, VIC",
    group: "8–24 Blokes",
    duration: "3 Nights / 4 Days",
    price: "$699",
    title: "Peninsula Golf Classic",
    features: ["3 Nights Premium Resort", "54 Holes Across 3 Courses", "Golf Carts & Caddie Option", "Full Custom Merch Pack", "Gala Dinner & Awards Night", "Spa & Recovery Session"],
  },
];

const whyGolf = [
  "Full competition format with handicap scoring",
  "Custom trophies and prizes organised",
  "Tee time bookings handled for all players",
  "Golf cart hire coordinated for the group",
  "Club storage and transport arranged",
  "Post-round bar tab and dinner booked",
];

export default function GolfTrips() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Golf trip at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10">
          <span className="bt-label text-[#E8920A] block mb-4">Golf Trips</span>
          <h1 className="bt-display text-[clamp(3rem,8vw,6.5rem)] text-white mb-4">
            GOLF WEEKENDS<br /><span className="text-[#E8920A]">DONE RIGHT.</span>
          </h1>
          <p className="text-white/70 max-w-xl text-lg mb-8">
            Championship courses, luxury accommodation, custom gear, and a proper competition. We handle every booking so you can focus on your game.
          </p>
          <Link href="/contact">
            <button className="btn-amber text-base py-3.5 px-8">
              Plan a Golf Trip <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#E8920A] py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="bt-display text-[clamp(1.8rem,4vw,2.8rem)] text-[#111111]">
                EVERY GOLF TRIP INCLUDES:
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyGolf.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-[#111111] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={10} className="text-[#E8920A]" />
                  </div>
                  <span className="text-[#111111]/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="mb-12">
            <span className="bt-label text-[#E8920A] block mb-3">Golf Packages</span>
            <h2 className="bt-display text-[clamp(2rem,5vw,4rem)] text-white">PICK YOUR COURSE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {golfPackages.map((pkg) => (
              <div key={pkg.title} className="bg-[#1a1a1a] overflow-hidden card-lift group flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex gap-4 mb-3">
                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Users size={11} /> {pkg.group}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Calendar size={11} /> {pkg.duration}
                    </div>
                  </div>
                  <h3 className="bt-display text-xl text-white mb-4">{pkg.title}</h3>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-white/60 text-sm">
                        <Check size={13} className="text-[#E8920A] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
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

      {/* CTA */}
      <section className="bg-[#0d0d0d] py-16">
        <div className="container text-center">
          <h2 className="bt-display text-[clamp(2rem,5vw,3.5rem)] text-white mb-4">
            WANT A CUSTOM GOLF TRIP?
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            We can build a golf trip to any course in Australia. Tell us your destination and we'll handle the rest.
          </p>
          <Link href="/contact">
            <button className="btn-amber text-base py-4 px-10">
              Build My Golf Trip <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
