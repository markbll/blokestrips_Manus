/* ============================================================
   BLOKESTRIPS HOW IT WORKS PAGE
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/hero-golf-AjZ9k7vhxpXhB35fxpGGXJ.webp";

const steps = [
  {
    num: "01",
    title: "You Submit the Vision",
    desc: "Fill out our simple enquiry form with your dates, location preference, approximate group size, and what kind of trip you're after. Takes less than 3 minutes.",
    organiser: true,
    details: ["Dates and location preference", "Group size (approximate)", "Trip type (golf, fishing, custom)", "Any special requests or preferences"],
  },
  {
    num: "02",
    title: "We Contact the Venue",
    desc: "We immediately reach out to venues and accommodation providers to check availability, negotiate group rates, and secure a provisional hold on your behalf.",
    organiser: false,
    details: ["Venue availability check", "Group rate negotiation", "Provisional booking hold", "Itinerary draft prepared"],
  },
  {
    num: "03",
    title: "Invitations Go Out",
    desc: "Once confirmed, we send personalised invitations and RSVP links to every attendee. They can accept or decline directly — no group chat chaos required.",
    organiser: false,
    details: ["Custom invitation emails", "Individual RSVP links", "Trip details and itinerary preview", "Automated follow-up reminders"],
  },
  {
    num: "04",
    title: "Deposits Collected",
    desc: "Accepted attendees receive a secure payment link for their $200 non-refundable deposit. We chase every payment — you don't have to ask anyone for money.",
    organiser: false,
    details: ["$200 non-refundable deposit per person", "Secure online payment gateway", "Automated payment reminders", "Real-time payment tracking for organiser"],
  },
  {
    num: "05",
    title: "Venue Confirmed",
    desc: "Once deposits are received, we confirm the booking with the venue and lock in all group details, room allocations, and activity bookings.",
    organiser: false,
    details: ["Venue confirmation sent", "Room allocations prepared", "Activity bookings locked in", "Group itinerary finalised"],
  },
  {
    num: "06",
    title: "Personal Details Collected",
    desc: "We collect everything we need from each attendee — clothing sizes, add-on preferences, room requests, roommate preferences, transport details, and special requests.",
    organiser: false,
    details: ["Clothing sizes for custom gear", "Add-on and upgrade selections", "Room and roommate preferences", "Transport and carpooling details", "Dietary and special requests"],
  },
  {
    num: "07",
    title: "Final Payment Requests",
    desc: "Three weeks before the trip, we send final payment requests to all attendees via email and SMS with a direct payment link. Automated reminders go out to anyone who hasn't paid.",
    organiser: false,
    details: ["Final payment request 3 weeks out", "Email and SMS delivery", "Automated payment reminders", "Real-time payment status dashboard"],
  },
  {
    num: "08",
    title: "Venue Briefed",
    desc: "Once all payments are received, we send the venue a comprehensive brief covering rooming lists, extras, attendee details, dietary requirements, and all special requests.",
    organiser: false,
    details: ["Full rooming list", "Custom gear and extras order", "Dietary and special requirements", "Arrival and departure schedule"],
  },
  {
    num: "09",
    title: "You Show Up & Send It",
    desc: "Turn up to cold beers in the fridge, custom gear waiting, and a fully organised weekend ahead. No admin, no stress — just a legendary time with the boys.",
    organiser: true,
    details: ["Cold beers on arrival", "Custom polos and gear waiting", "Full digital itinerary on your phone", "BlokesTrips support throughout the trip"],
  },
];

const organiserBenefits = [
  "No more chasing payments via bank transfer",
  "No group chat admin or reminder messages",
  "No venue negotiation or availability research",
  "No spreadsheet of clothing sizes and room preferences",
  "No awkward conversations about who hasn't paid",
  "No last-minute logistics on the day",
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 to-[#111111]" />
        </div>
        <div className="container relative z-10">
          <span className="bt-label text-[#E8920A] block mb-4">The Process</span>
          <h1 className="bt-display text-[clamp(3rem,8vw,6rem)] text-white mb-4">
            HOW IT<br /><span className="text-[#E8920A]">WORKS</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            From first enquiry to cold beer in your room — every step is handled. Here's exactly what happens when you book with BlokesTrips.
          </p>
        </div>
      </section>

      {/* Organiser Benefits */}
      <section className="bg-[#E8920A] py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="bt-display text-[clamp(1.8rem,4vw,2.8rem)] text-[#111111]">
                STOP BEING THE GROUP ADMIN.
              </h2>
              <p className="text-[#111111]/70 mt-3">
                When you use BlokesTrips, you hand over the admin permanently. Here's what you never have to do again:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {organiserBenefits.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 bg-[#111111] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={10} className="text-[#E8920A]" />
                  </div>
                  <span className="text-[#111111]/80 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="bt-display text-[clamp(2rem,5vw,4rem)] text-white">
              THE FULL JOURNEY
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Nine steps. Zero effort from you after step one.
            </p>
          </div>

          <div className="space-y-px">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex flex-col lg:flex-row gap-0 ${i % 2 === 0 ? "bg-[#1a1a1a]" : "bg-[#161616]"}`}
              >
                {/* Number */}
                <div className="lg:w-32 flex-shrink-0 flex items-center justify-center p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bt-display text-[5rem] text-white/[0.04] select-none">{step.num}</span>
                  </div>
                  <span className="bt-display text-3xl text-[#E8920A] relative z-10">{step.num}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10 border-l border-white/5">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="bt-display text-2xl text-white">{step.title}</h3>
                        {step.organiser && (
                          <span className="bg-[#E8920A] px-2 py-0.5">
                            <span className="bt-label text-[#111111] text-[9px]">You</span>
                          </span>
                        )}
                        {!step.organiser && (
                          <span className="bg-white/10 px-2 py-0.5">
                            <span className="bt-label text-white/60 text-[9px]">BlokesTrips</span>
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="space-y-2">
                        {step.details.map((d) => (
                          <div key={d} className="flex items-center gap-2.5">
                            <Check size={12} className="text-[#E8920A] flex-shrink-0" />
                            <span className="text-white/50 text-sm">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
            READY TO GET STARTED?
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Submit your trip details and we'll come back within 24 hours with full options and pricing.
          </p>
          <Link href="/contact">
            <button className="btn-amber text-base py-4 px-10">
              Plan My Trip <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
