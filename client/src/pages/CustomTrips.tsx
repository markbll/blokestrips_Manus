/* ============================================================
   BLOKESTRIPS CUSTOM TRIPS PAGE
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";

const MATES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/hero-golf-AjZ9k7vhxpXhB35fxpGGXJ.webp";

const tripTypes = [
  { title: "Bucks Parties", desc: "Full weekend itinerary, activities, accommodation, and custom gear. We handle everything from first enquiry to final night." },
  { title: "Sports Event Weekends", desc: "Premium AFL, NRL, or cricket tickets combined with accommodation, transport, and a full social itinerary." },
  { title: "Corporate Group Trips", desc: "Team-building weekends, client entertainment, and corporate retreats — fully organised and professionally delivered." },
  { title: "Club & Association Trips", desc: "Annual club trips, association weekends, and sporting club getaways — scalable for any group size." },
  { title: "Milestone Celebrations", desc: "Milestone birthdays, retirements, and special occasions — we build a trip that matches the moment." },
  { title: "Multi-Activity Weekends", desc: "Combine golf, fishing, go-karts, brewery tours, and more into a single fully-organised weekend itinerary." },
];

export default function CustomTrips() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={MATES_IMG} alt="Custom group trip" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10">
          <span className="bt-label text-[#E8920A] block mb-4">Custom Trips</span>
          <h1 className="bt-display text-[clamp(3rem,8vw,6.5rem)] text-white mb-4">
            YOUR TRIP.<br /><span className="text-[#E8920A]">YOUR WAY.</span>
          </h1>
          <p className="text-white/70 max-w-xl text-lg mb-8">
            Don't see exactly what you want? We build fully custom trips for any group, any destination, any activity. Just tell us the vision.
          </p>
          <Link href="/contact">
            <button className="btn-amber text-base py-3.5 px-8">
              Build a Custom Trip <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      {/* Trip Types */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="mb-14">
            <span className="bt-label text-[#E8920A] block mb-3">What We Can Build</span>
            <h2 className="bt-display text-[clamp(2rem,5vw,4rem)] text-white">ANY TRIP. FULLY SORTED.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {tripTypes.map(({ title, desc }) => (
              <div key={title} className="bg-[#1a1a1a] p-8 hover:bg-[#242424] transition-colors group">
                <div className="w-8 h-1 bg-[#E8920A] mb-5" />
                <h3 className="bt-display text-xl text-white mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Custom Works */}
      <section className="bg-[#E8920A] py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="bt-display text-[clamp(2rem,5vw,3.5rem)] text-[#111111] mb-4">
                HOW CUSTOM TRIPS WORK
              </h2>
              <p className="text-[#111111]/70 leading-relaxed">
                Tell us your vision in a 3-minute enquiry form. We research options, build a full itinerary, and come back to you within 24 hours with pricing and options. No commitment required.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Submit your vision — dates, group size, activity preferences",
                "We research and build a full custom itinerary",
                "You review options and confirm the plan",
                "We handle every booking, payment, and detail",
                "You show up and enjoy the trip",
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-[#111111] flex items-center justify-center flex-shrink-0">
                    <span className="bt-display-normal text-[#E8920A] text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="text-[#111111]/80 text-sm leading-relaxed pt-1">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0d0d] py-16">
        <div className="container text-center">
          <h2 className="bt-display text-[clamp(2rem,5vw,3.5rem)] text-white mb-4">
            TELL US THE VISION
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            No commitment required. We'll come back within 24 hours with full options and pricing.
          </p>
          <Link href="/contact">
            <button className="btn-amber text-base py-4 px-10">
              Start Planning <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
