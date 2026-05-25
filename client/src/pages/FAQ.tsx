/* ============================================================
   BLOKESTRIPS FAQ PAGE
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      { q: "How do I get started with BlokesTrips?", a: "Fill out our simple enquiry form with your trip dates, approximate group size, location preference, and what type of trip you're after. We'll come back to you within 24 hours with full options and pricing." },
      { q: "Is there any commitment when I enquire?", a: "No commitment at all. The initial enquiry is completely free. We'll send you options and pricing, and you decide if you want to proceed. No pressure, no obligation." },
      { q: "How far in advance should I book?", a: "We recommend booking at least 6–8 weeks in advance to secure your preferred venue and dates. For popular destinations and peak periods (long weekends, school holidays), 3–4 months ahead is ideal." },
      { q: "Can you organise a trip at short notice?", a: "Sometimes. It depends on availability at your preferred destination. Contact us and we'll let you know what's possible. We've organised trips in as little as 2 weeks when venues have had availability." },
    ],
  },
  {
    category: "Payments & Deposits",
    questions: [
      { q: "How does the deposit system work?", a: "Once your trip is confirmed, each attendee pays a $200 non-refundable deposit to secure their spot. We send each person their own payment link — you don't have to chase anyone for money." },
      { q: "When is the final payment due?", a: "Final payment is due 3 weeks before the trip. We send payment requests and automated reminders to all attendees. You don't have to follow up with anyone." },
      { q: "What payment methods are accepted?", a: "We accept all major credit and debit cards via our secure payment gateway. Bank transfer is also available for the organiser if preferred." },
      { q: "What happens if someone can't make it after paying?", a: "The $200 deposit is non-refundable. For final payments, our cancellation policy applies — please refer to our Cancellation Policy page for full details. We can often find a replacement for the spot if needed." },
    ],
  },
  {
    category: "Trip Details",
    questions: [
      { q: "What's included in the price?", a: "Each package listing details exactly what's included. Most packages include accommodation, the main activity (golf rounds, fishing charter, etc.), custom merchandise, and a competition format. Add-ons are priced separately." },
      { q: "Can we customise the itinerary?", a: "Absolutely. All packages can be customised — different destinations, extra nights, additional activities, upgraded accommodation, and any add-ons you want. Just let us know what you're after." },
      { q: "What about dietary requirements and special requests?", a: "We collect all dietary requirements, special requests, and personal preferences from each attendee before the trip. Everything is communicated to the venue on your behalf." },
      { q: "How does rooming work?", a: "We collect roommate preferences from each attendee and organise the room allocations. We'll let you know what room types are available at your chosen venue (twin share, singles, etc.)." },
    ],
  },
  {
    category: "Merchandise & Add-Ons",
    questions: [
      { q: "How do custom polos work?", a: "We collect clothing sizes from each attendee as part of the booking process. Polos are embroidered with your group name and trip details, and are waiting in your rooms on arrival." },
      { q: "Can we add extra merchandise after booking?", a: "Yes, additional merchandise can be added up to 4 weeks before the trip to allow for production and delivery time." },
      { q: "What other add-ons are available?", a: "We offer a wide range of add-ons including custom jackets, stubby holders, caps, beer on arrival, snack packs, welcome hampers, private function rooms, charter buses, and more. See our Add-Ons page for the full list." },
    ],
  },
  {
    category: "Franchise & Partnerships",
    questions: [
      { q: "How does the franchise model work?", a: "BlokesTrips franchise operators run the service in their local territory. You get the brand, booking system, supplier network, and ongoing support. You deliver the trips and earn a margin on every booking." },
      { q: "What territories are available?", a: "We're expanding nationally. Contact us to find out which territories are currently available in your area." },
      { q: "Do you work with golf clubs and sporting associations?", a: "Yes. We work with golf clubs, sporting clubs, and associations to organise their annual trips and events. Contact us to discuss a partnership arrangement." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-white font-semibold text-sm leading-relaxed">{q}</span>
        <ChevronDown
          size={18}
          className={`text-[#E8920A] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-white/60 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[#0d0d0d]">
        <div className="container">
          <span className="bt-label text-[#E8920A] block mb-4">FAQ</span>
          <h1 className="bt-display text-[clamp(3rem,8vw,6rem)] text-white mb-4">
            COMMON<br /><span className="text-[#E8920A]">QUESTIONS</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Everything you need to know about booking with BlokesTrips.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            {faqs.map(({ category, questions }) => (
              <div key={category} className="mb-12">
                <h2 className="bt-display text-xl text-[#E8920A] mb-6 pb-4 border-b border-[#E8920A]/20">
                  {category}
                </h2>
                <div>
                  {questions.map(({ q, a }) => (
                    <FAQItem key={q} q={q} a={a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8920A] py-14">
        <div className="container text-center">
          <h2 className="bt-display text-[clamp(2rem,5vw,3rem)] text-[#111111] mb-4">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-[#111111]/70 mb-8 max-w-lg mx-auto">
            Get in touch and we'll answer anything you need to know before booking.
          </p>
          <Link href="/contact">
            <button className="bg-[#111111] text-white font-[Barlow] font-700 uppercase tracking-widest text-sm py-3 px-8 hover:bg-[#1a1a1a] transition-colors inline-flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
