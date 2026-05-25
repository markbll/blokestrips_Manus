/* ============================================================
   BLOKESTRIPS HOME PAGE
   Single-page experience with anchor navigation
   Design: Dark tactical brand, amber accents, sharp corners
   ============================================================ */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageModal from "@/components/PackageModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, MapPin, Users, Clock } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/hero-golf-AjZ9k7vhxpXhB35fxpGGXJ.webp";
const FISHING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/fishing-trip-Jg7b9uovwJQqTCcDZyHxBz.webp";
const GOLF_AERIAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/golf-aerial-jmuYbVWEt5GJoXTr6mbhe3.webp";
const MATES_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<"golf" | "fishing" | "custom" | null>(null);

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <img
          src={HERO_IMAGE}
          alt="Golf sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="container relative z-20 py-32 flex flex-col justify-center min-h-[80vh]">
          {/* Trust Badge */}
          <div className="mb-8 inline-flex items-center gap-2 w-fit px-4 py-2 border border-amber-500/50 bg-black/50">
            <span className="text-amber-500 text-sm font-bold">★</span>
            <span className="text-xs font-bold text-amber-500 tracking-wider">AUSTRALIA'S #1 GROUP TRIP ORGANISER</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-6xl md:text-7xl font-black italic leading-tight mb-6 max-w-2xl">
            <span className="text-white">GUYS</span>
            <br />
            <span className="text-white">WEEKENDS</span>
            <br />
            <span className="text-amber-500">SORTED.</span>
          </h1>

          {/* Hero Subheading */}
          <p className="text-lg text-foreground/90 max-w-xl mb-8 leading-relaxed">
            Golf trips, fishing getaways, bucks parties — fully organised end-to-end. You bring the crew. We handle absolutely everything else.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <Button
              onClick={() => {
                const elem = document.querySelector("#packages");
                elem?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 text-base"
            >
              VIEW PACKAGES →
            </Button>
            <Button
              onClick={() => {
                const elem = document.querySelector("#contact");
                elem?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              className="border-amber-500/50 hover:bg-amber-500/10 font-bold py-3 px-6 text-base"
            >
              START A TRIP
            </Button>
          </div>

          {/* Trust Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-16 border-t border-amber-500/20">
            <div className="space-y-1">
              <div className="text-2xl font-black text-amber-500">500+</div>
              <div className="text-xs text-foreground/70 font-medium">Trips Organised</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-amber-500">4,800+</div>
              <div className="text-xs text-foreground/70 font-medium">Happy Blokes</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-amber-500">98%</div>
              <div className="text-xs text-foreground/70 font-medium">Would Book Again</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-amber-500">24hr</div>
              <div className="text-xs text-foreground/70 font-medium">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TRIP SECTION */}
      <section className="py-20 bg-gradient-to-b from-black to-black/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm font-bold text-amber-500 tracking-widest mb-4">FEATURED TRIP</h3>
              <h2 className="text-4xl md:text-5xl font-black italic mb-6">
                Murray River
                <br />
                <span className="text-amber-500">Ultimate</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Championship golf course, luxury accommodation, and legendary camaraderie. Everything you need for an unforgettable weekend.
              </p>
              <Button
                onClick={() => setSelectedPackage("golf")}
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8"
              >
                EXPLORE GOLF TRIPS
              </Button>
            </div>
            <div className="relative overflow-hidden">
              <img
                src={GOLF_AERIAL}
                alt="Golf course aerial"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CHAOS TO SORTED SECTION */}
      <section className="py-20 bg-amber-500">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black italic text-black mb-6">
            THINK GROUP CHAT CHAOS
            <br />
            <span className="text-black/60">MINUS THE CHAOS.</span>
          </h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            We handle the tee times, the bookings, the gear, and the payments. You just turn up with the boys and send it.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="container">
          <div className="mb-16">
            <h3 className="text-sm font-bold text-amber-500 tracking-widest mb-4">PROCESS</h3>
            <h2 className="text-5xl md:text-6xl font-black italic mb-4">
              FOUR STEPS TO A
              <br />
              <span className="text-foreground/30">LEGENDARY WEEKEND</span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mt-6">
              Every bit of group-chat chaos — removed. From first enquiry to cold beer in your room, it's all covered.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Tell Us The Vision",
                desc: "Submit your group's details — dates, size, and what you're after. We handle the research and build the perfect itinerary.",
              },
              {
                step: "02",
                title: "The Boys Lock In",
                desc: "We provide a custom booking link for your crew. Everyone pays their own deposit. No more chasing mates for cash.",
              },
              {
                step: "03",
                title: "Logistics Handled",
                desc: "Accommodation, tee times, charter boats, transport — everything is booked and confirmed. You get a full digital itinerary.",
              },
              {
                step: "04",
                title: "Show Up & Send It",
                desc: "Turn up to cold beers in the fridge and custom gear waiting. No admin, no stress, just a legendary weekend with the boys.",
              },
            ].map((item) => (
              <div key={item.step} className="space-y-4">
                <div className="text-6xl font-black text-foreground/10">{item.step}</div>
                <h3 className="text-xl font-black italic text-white">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section id="packages" className="py-20 bg-black">
        <div className="container">
          <div className="mb-16">
            <h3 className="text-sm font-bold text-amber-500 tracking-widest mb-4">OUR EXPERIENCES</h3>
            <h2 className="text-5xl md:text-6xl font-black italic mb-4">
              CHOOSE YOUR
              <br />
              <span className="text-amber-500">LEGEND</span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mt-6">
              Every package includes full organisation, custom polos, prizes and cold beer waiting in your room. Don't see what you want? We'll build it for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Golf Package */}
            <div className="border border-foreground/20 overflow-hidden hover:border-amber-500/50 transition">
              <img src={GOLF_AERIAL} alt="Golf" className="w-full h-48 object-cover" />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white text-lg">Murray River</h3>
                    <p className="text-sm text-foreground/60">8+ Blokes</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-amber-500">$499</div>
                    <p className="text-xs text-foreground/60">Per person</p>
                  </div>
                </div>
                <h4 className="font-bold text-white">The Ultimate Golf Weekend</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>2 Nights Luxury Accommodation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>36 Holes of Championship Golf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Golf Carts & Bar Tab Included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Custom Polos & Merch Pack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Organised Comp & Prizes</span>
                  </li>
                </ul>
                <Button
                  onClick={() => setSelectedPackage("golf")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold mt-4"
                >
                  LOCK IT IN
                </Button>
              </div>
            </div>

            {/* Fishing Package */}
            <div className="border border-foreground/20 overflow-hidden hover:border-amber-500/50 transition">
              <img src={FISHING_IMAGE} alt="Fishing" className="w-full h-48 object-cover" />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white text-lg">Gold Coast</h3>
                    <p className="text-sm text-foreground/60">6–12 Blokes</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-amber-500">$550</div>
                    <p className="text-xs text-foreground/60">Per person</p>
                  </div>
                </div>
                <h4 className="font-bold text-white">Deep Sea Fishing Charter</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>2 Nights Waterfront Villa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>8-Hour Private Boat Charter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>All Bait, Tackle & Guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>BBQ Seafood Dinner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Biggest Catch Trophy</span>
                  </li>
                </ul>
                <Button
                  onClick={() => setSelectedPackage("fishing")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold mt-4"
                >
                  LOCK IT IN
                </Button>
              </div>
            </div>

            {/* Custom Package */}
            <div className="border border-foreground/20 overflow-hidden hover:border-amber-500/50 transition">
              <img src={MATES_IMAGE} alt="Custom" className="w-full h-48 object-cover" />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white text-lg">Nationwide</h3>
                    <p className="text-sm text-foreground/60">Any Size</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-amber-500">Enquiry</div>
                    <p className="text-xs text-foreground/60">Per person</p>
                  </div>
                </div>
                <h4 className="font-bold text-white">Custom Weekend Escape</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Fully Tailored Itinerary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Any Destination, Any Activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Custom Merchandise Pack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Full Logistics Coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>Everything Booked & Sorted</span>
                  </li>
                </ul>
                <Button
                  onClick={() => setSelectedPackage("custom")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold mt-4"
                >
                  LOCK IT IN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRANCHISE SECTION */}
      <section id="franchise" className="py-20 bg-gradient-to-b from-black to-black/50">
        <div className="container">
          <div className="max-w-2xl">
            <h3 className="text-sm font-bold text-amber-500 tracking-widest mb-4">OPPORTUNITY</h3>
            <h2 className="text-5xl md:text-6xl font-black italic mb-6">
              OWN A BLOKESTRIPS
              <br />
              <span className="text-amber-500">TERRITORY</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              We're building a nationwide network. You get the brand, leads, booking system and supplier network. You deliver the trips.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8">
              GET FRANCHISE KIT
            </Button>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-20 bg-black">
        <div className="container">
          <div className="mb-16">
            <h3 className="text-sm font-bold text-amber-500 tracking-widest mb-4">TESTIMONIALS</h3>
            <h2 className="text-5xl md:text-6xl font-black italic mb-4">
              REAL BLOKES.
              <br />
              <span className="text-amber-500">REAL TRIPS.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Honestly the best weekend we've had in years. Turned up, shirts were waiting, beer was cold, tee times were sorted. I didn't have to organise a single thing.",
                author: "Jake Thompson",
                trip: "Thurgoona Golf Trip",
              },
              {
                quote: "As the usual group organiser I'm always stressed before the trip starts. Having BlokesTrips run everything was an absolute game changer. Worth every cent.",
                author: "Mick O'Brien",
                trip: "Albury Golf Weekend",
              },
              {
                quote: "Even as a non-golfer I had the best time. Everything was thought of. Already locked in next year's trip and bringing three more of the boys.",
                author: "Dave Carter",
                trip: "Murray River Weekend",
              },
            ].map((review, idx) => (
              <div key={idx} className="border border-foreground/20 p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-foreground/80 italic">"{review.quote}"</p>
                <div>
                  <p className="font-bold text-white">{review.author}</p>
                  <p className="text-sm text-foreground/60">{review.trip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-black">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-sm font-bold text-amber-500 tracking-widest mb-4">GET STARTED</h3>
            <h2 className="text-5xl md:text-6xl font-black italic mb-8">
              READY TO PLAN
              <br />
              <span className="text-amber-500">YOUR NEXT TRIP?</span>
            </h2>

            <form className="space-y-4 mb-8">
              <Input
                placeholder="Full Name"
                className="bg-muted border-foreground/20 text-white placeholder:text-foreground/50"
              />
              <Input
                placeholder="Mobile"
                type="tel"
                className="bg-muted border-foreground/20 text-white placeholder:text-foreground/50"
              />
              <Input
                placeholder="Email"
                type="email"
                className="bg-muted border-foreground/20 text-white placeholder:text-foreground/50"
              />

              <Select>
                <SelectTrigger className="bg-muted border-foreground/20 text-white">
                  <SelectValue placeholder="Trip Type" />
                </SelectTrigger>
                <SelectContent className="bg-muted border-foreground/20">
                  <SelectItem value="golf">Golf Weekend</SelectItem>
                  <SelectItem value="fishing">Fishing Trip</SelectItem>
                  <SelectItem value="bucks">Bucks Party</SelectItem>
                  <SelectItem value="custom">Custom Trip</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-muted border-foreground/20 text-white">
                  <SelectValue placeholder="Group Size" />
                </SelectTrigger>
                <SelectContent className="bg-muted border-foreground/20">
                  <SelectItem value="4-8">4–8 blokes</SelectItem>
                  <SelectItem value="8-16">8–16 blokes</SelectItem>
                  <SelectItem value="16-24">16–24 blokes</SelectItem>
                  <SelectItem value="24+">24+ blokes</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Tell us about preferred dates, locations, or special requests..."
                className="bg-muted border-foreground/20 text-white placeholder:text-foreground/50 min-h-24"
              />

              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3">
                SEND ENQUIRY
              </Button>
            </form>

            <p className="text-sm text-foreground/60 text-center">
              By submitting you agree to our Terms & Conditions.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Package Modal */}
      <PackageModal
        isOpen={selectedPackage !== null}
        onClose={() => setSelectedPackage(null)}
        tripType={selectedPackage}
      />
    </div>
  );
}
