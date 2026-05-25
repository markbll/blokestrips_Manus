/* ============================================================
   BLOKESTRIPS TESTIMONIALS PAGE
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Star } from "lucide-react";

const reviews = [
  { name: "Jake Thompson", trip: "Thurgoona Golf Trip", stars: 5, quote: "Honestly the best weekend we've had in years. Turned up, shirts were waiting, beer was cold, tee times were sorted. I didn't have to organise a single thing." },
  { name: "Mick O'Brien", trip: "Albury Golf Weekend", stars: 5, quote: "As the usual group organiser I'm always stressed before the trip starts. Having BlokesTrips run everything was an absolute game changer. Worth every cent." },
  { name: "Dave Carter", trip: "Murray River Weekend", stars: 5, quote: "Even as a non-golfer I had the best time. Everything was thought of. Already locked in next year's trip and bringing three more of the boys." },
  { name: "Tom Hargreaves", trip: "Gold Coast Fishing Charter", stars: 5, quote: "The fishing charter was unreal. Guide knew exactly where to go, caught heaps, and the BBQ dinner that night was the best meal of the year. Highly recommend." },
  { name: "Chris Wallace", trip: "Mornington Peninsula Golf", stars: 5, quote: "Three courses over three days, custom polos, a proper comp with trophies — this is how a golf trip should be done. Already planning the next one." },
  { name: "Andy Pearson", trip: "Murray River Fishing", stars: 5, quote: "The houseboat was incredible. Woke up on the river, fished all day, had beers on the deck at sunset. BlokesTrips nailed every detail." },
  { name: "Steve Nguyen", trip: "Bucks Party Weekend", stars: 5, quote: "Organised a bucks for my mate and it was the easiest thing I've ever done. Submitted the details, they did the rest. Groom said it was the best weekend of his life." },
  { name: "Brad Mitchell", trip: "Corporate Golf Day", stars: 5, quote: "Used BlokesTrips for our annual corporate golf day. Professional, seamless, and the custom gear was a huge hit with the clients. Will be using them every year." },
  { name: "Liam Donovan", trip: "Albury Golf Weekend", stars: 5, quote: "Second year in a row. The boys are already asking when we're booking the third. BlokesTrips makes the whole thing effortless." },
];

const stats = [
  { value: "500+", label: "Trips Organised" },
  { value: "4,800+", label: "Happy Blokes" },
  { value: "98%", label: "Would Book Again" },
  { value: "4.9/5", label: "Average Rating" },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[#0d0d0d]">
        <div className="container">
          <span className="bt-label text-[#E8920A] block mb-4">Reviews</span>
          <h1 className="bt-display text-[clamp(3rem,8vw,6rem)] text-white mb-4">
            REAL BLOKES.<br /><span className="text-[#E8920A]">REAL TRIPS.</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Don't take our word for it. Here's what the blokes say after their trips.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#E8920A]">
        <div className="container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-[#111111]/20">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center lg:px-8">
                <div className="bt-display-normal text-[#111111] text-4xl lg:text-5xl">{value}</div>
                <div className="text-[#111111]/70 text-sm font-semibold mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(({ name, trip, stars, quote }) => (
              <div key={name} className="bg-[#1a1a1a] p-8 relative">
                <div className="absolute top-0 left-0 w-12 h-1 bg-[#E8920A]" />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#E8920A] fill-[#E8920A]" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{quote}"</p>
                <div>
                  <div className="bt-display text-base text-white">{name}</div>
                  <div className="text-white/40 text-xs mt-0.5">{trip}</div>
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
            YOUR TRIP COULD BE NEXT.
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Join hundreds of groups who've stopped stressing and started enjoying their trips.
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
