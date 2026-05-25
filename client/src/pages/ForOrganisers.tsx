/* ============================================================
   BLOKESTRIPS FOR ORGANISERS PAGE
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, X } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/hero-golf-AjZ9k7vhxpXhB35fxpGGXJ.webp";

const withoutBT = [
  "Spending hours researching venues and courses",
  "Chasing 12 different people for payment via bank transfer",
  "Managing a group chat that goes quiet for weeks",
  "Collecting clothing sizes via text message",
  "Sorting out who's rooming with who",
  "Booking tee times, boats, and restaurants separately",
  "Sending reminder after reminder to unpaid attendees",
  "Coordinating transport and carpooling logistics",
  "Fielding questions about the itinerary on the day",
  "Arriving at the trip already exhausted from the admin",
];

const withBT = [
  "Submit a 3-minute enquiry form",
  "Review the itinerary we build for you",
  "Confirm the plan and let us handle the rest",
  "Show up on the day and enjoy the trip",
];

const organiserFeatures = [
  { title: "Real-Time Payment Dashboard", desc: "See exactly who has paid, who hasn't, and how much has been collected — without sending a single message." },
  { title: "Automated Reminders", desc: "We send payment reminders and trip updates to attendees automatically. You don't have to chase anyone." },
  { title: "Custom Booking Link", desc: "Every attendee gets their own booking link to confirm attendance, pay their deposit, and submit their details." },
  { title: "Digital Itinerary", desc: "A full digital itinerary is shared with every attendee before the trip. Every detail, every timing, every location." },
  { title: "Venue Coordination", desc: "We communicate directly with the venue on your behalf — rooming lists, extras, dietary requirements, and timing." },
  { title: "24-Hour Support", desc: "We're available throughout the trip if anything needs to be sorted. You're never on your own." },
];

export default function ForOrganisers() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <span className="bt-label text-[#E8920A] block mb-4">For Organisers</span>
          <h1 className="bt-display text-[clamp(3rem,8vw,6rem)] text-white mb-4">
            STOP BEING THE<br /><span className="text-[#E8920A]">GROUP ADMIN.</span>
          </h1>
          <p className="text-white/70 max-w-xl text-lg mb-8">
            You've organised enough trips to know how much work goes into it. BlokesTrips takes every bit of that work off your plate — permanently.
          </p>
          <Link href="/contact">
            <button className="btn-amber text-base py-3.5 px-8">
              Start Planning <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      {/* Without vs With */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="bt-display text-[clamp(2rem,5vw,4rem)] text-white">
              THE DIFFERENCE
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
            {/* Without */}
            <div className="bg-[#1a1a1a] p-10">
              <h3 className="bt-display text-2xl text-white/40 mb-8">WITHOUT BLOKESTRIPS</h3>
              <div className="space-y-3">
                {withoutBT.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={11} className="text-red-400" />
                    </div>
                    <span className="text-white/50 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* With */}
            <div className="bg-[#1a1a1a] p-10 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#E8920A]" />
              <h3 className="bt-display text-2xl text-[#E8920A] mb-8">WITH BLOKESTRIPS</h3>
              <div className="space-y-4">
                {withBT.map((item, i) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-[#E8920A] flex items-center justify-center flex-shrink-0">
                      <span className="bt-display-normal text-[#111111] text-sm">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <span className="text-white text-sm leading-relaxed pt-1">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/50 text-sm italic">
                  "As the usual group organiser I'm always stressed before the trip starts. Having BlokesTrips run everything was an absolute game changer."
                </p>
                <div className="mt-3">
                  <div className="bt-display text-sm text-white">Mick O'Brien</div>
                  <div className="text-white/40 text-xs">Albury Golf Weekend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0d0d0d] py-20 lg:py-28">
        <div className="container">
          <div className="mb-14">
            <span className="bt-label text-[#E8920A] block mb-3">Organiser Tools</span>
            <h2 className="bt-display text-[clamp(2rem,5vw,4rem)] text-white">WHAT YOU GET</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {organiserFeatures.map(({ title, desc }) => (
              <div key={title} className="bg-[#0d0d0d] p-8 hover:bg-[#1a1a1a] transition-colors group">
                <div className="w-8 h-1 bg-[#E8920A] mb-5" />
                <h3 className="bt-display text-xl text-white mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8920A] py-16">
        <div className="container text-center">
          <h2 className="bt-display text-[clamp(2rem,5vw,3.5rem)] text-[#111111] mb-4">
            READY TO HAND OVER THE ADMIN?
          </h2>
          <p className="text-[#111111]/70 mb-8 max-w-lg mx-auto">
            Submit your trip details and we'll take it from here. No commitment required.
          </p>
          <Link href="/contact">
            <button className="bg-[#111111] text-white font-[Barlow] font-700 uppercase tracking-widest text-sm py-3 px-8 hover:bg-[#1a1a1a] transition-colors inline-flex items-center gap-2">
              Start Planning <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
