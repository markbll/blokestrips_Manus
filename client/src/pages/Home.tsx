/*
   BLOKESTRIPS HOME PAGE - CONVERSION OPTIMIZED
   Single-page experience with anchor navigation
   Design: Dark tactical brand, amber accents, sharp corners
   ============================================================ */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, MapPin, Users, Clock, Zap } from "lucide-react";
import { useLocation } from "wouter";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/hero-golf-AjZ9k7vhxpXhB35fxpGGXJ.webp";
const FISHING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/fishing-trip-Jg7b9uovwJQqTCcDZyHxBz.webp";
const GOLF_AERIAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/golf-aerial-jmuYbVWEt5GJoXTr6mbhe3.webp";
const MATES_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp";

export default function Home() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripType: "",
    groupSize: "",
    message: "",
  });

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to backend/CRM
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (sectionId: string) => {
    const elem = document.querySelector(`#${sectionId}`);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />

      {/* ============================================================
          HERO SECTION - CONVERSION OPTIMIZED
          ============================================================ */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <img
          src={HERO_IMAGE}
          alt="Golf sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="container relative z-20 py-32 flex flex-col justify-center min-h-[90vh]">
          {/* Trust Badge */}
          <div className="mb-12 inline-flex items-center gap-2 w-fit px-4 py-2 border border-amber-500/50 bg-black/50">
            <span className="text-amber-500 text-sm font-bold">★</span>
            <span className="text-xs font-bold text-amber-500 tracking-wider">AUSTRALIA'S #1 GROUP TRIP ORGANISER</span>
          </div>

          {/* Hero Headline - NEW COPY */}
          <h1 className="text-5xl md:text-7xl font-black italic leading-tight mb-6 max-w-3xl text-white">
            Golf weekends, fishing adventures & epic group getaways — planned for you.
          </h1>

          {/* Hero Subheading - NEW COPY */}
          <p className="text-xl text-foreground/90 max-w-2xl mb-12 leading-relaxed font-light">
            No chasing accommodation. No organising mates. No hassle. We build unforgettable weekends for your crew.
          </p>

          {/* Hero CTAs - PRIMARY & SECONDARY */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mb-16">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 text-lg"
            >
              Get a Fast Quote
            </Button>
            <Button
              onClick={() => scrollToSection("packages")}
              variant="outline"
              className="border-amber-500/50 hover:bg-amber-500/10 font-bold py-4 px-8 text-lg"
            >
              Browse Packages
            </Button>
          </div>

          {/* Trust Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-amber-500/20">
            <div className="space-y-1">
              <div className="text-3xl font-black text-amber-500">500+</div>
              <div className="text-sm text-foreground/70 font-medium">Trips Organised</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-amber-500">4,800+</div>
              <div className="text-sm text-foreground/70 font-medium">Happy Blokes</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-amber-500">98%</div>
              <div className="text-sm text-foreground/70 font-medium">Would Book Again</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-amber-500">24hr</div>
              <div className="text-sm text-foreground/70 font-medium">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST ICONS SECTION - TRIP TYPES
          ============================================================ */}
      <section className="py-16 bg-black/50 border-y border-amber-500/20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 text-amber-500 text-2xl font-bold">⛳</div>
              <span className="text-sm font-bold text-foreground/80">Golf Trips</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 text-amber-500 text-2xl font-bold">🎣</div>
              <span className="text-sm font-bold text-foreground/80">Fishing</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 text-amber-500 text-2xl font-bold">🏆</div>
              <span className="text-sm font-bold text-foreground/80">Bucks Parties</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Zap className="w-10 h-10 text-amber-500" />
              <span className="text-sm font-bold text-foreground/80">AFL / NRL</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 text-amber-500 text-2xl font-bold">🍺</div>
              <span className="text-sm font-bold text-foreground/80">Brewery Tours</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS - SIMPLIFIED 3-STEP
          ============================================================ */}
      <section className="py-24 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black italic mb-6">
              How It Works
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              From idea to unforgettable weekend in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-8 left-0 text-6xl font-black text-amber-500/20">01</div>
              <div className="relative z-10 pt-8">
                <h3 className="text-2xl font-black italic mb-4">Tell Us Your Trip</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Share your dates, location, group size, and what you're after. We handle all the research.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-8 left-0 text-6xl font-black text-amber-500/20">02</div>
              <div className="relative z-10 pt-8">
                <h3 className="text-2xl font-black italic mb-4">We Build the Itinerary</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Custom itinerary, accommodation, activities, and pricing. Everything locked in and ready to go.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-8 left-0 text-6xl font-black text-amber-500/20">03</div>
              <div className="relative z-10 pt-8">
                <h3 className="text-2xl font-black italic mb-4">Confirm & Enjoy</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Your crew confirms attendance, pays deposits, and we handle everything else. Just show up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED TRIP SECTION
          ============================================================ */}
      <section className="py-24 bg-gradient-to-b from-black to-black/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm font-bold text-amber-500 tracking-widest mb-4">FEATURED EXPERIENCE</h3>
              <h2 className="text-5xl md:text-6xl font-black italic mb-8">
                Murray River
                <br />
                <span className="text-amber-500">Ultimate</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Championship golf course, luxury accommodation, and legendary camaraderie. Everything you need for an unforgettable weekend.
              </p>
              <Button
                onClick={() => navigate("/packages/golf")}
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 text-lg"
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

      {/* ============================================================
          OUR EXPERIENCES / PACKAGES
          ============================================================ */}
      <section id="packages" className="py-24 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black italic mb-6">
              Choose Your Legend
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Every package includes full organisation, custom gear, and cold beer waiting in your room.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Golf Package */}
            <div className="border border-amber-500/30 bg-black/50 overflow-hidden hover:border-amber-500 transition-colors">
              <img src={GOLF_AERIAL} alt="Golf" className="w-full h-48 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-black italic mb-2">Golf Weekends</h3>
                <p className="text-amber-500 font-bold mb-4">From $499pp</p>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                  Championship courses, custom polos, bar tabs, and organised competitions.
                </p>
                <Button
                  onClick={() => navigate("/packages/golf")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold"
                >
                  View Packages
                </Button>
              </div>
            </div>

            {/* Fishing Package */}
            <div className="border border-amber-500/30 bg-black/50 overflow-hidden hover:border-amber-500 transition-colors">
              <img src={FISHING_IMAGE} alt="Fishing" className="w-full h-48 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-black italic mb-2">Fishing Trips</h3>
                <p className="text-amber-500 font-bold mb-4">From $550pp</p>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                  Private charters, experienced guides, seafood dinners, and biggest catch prizes.
                </p>
                <Button
                  onClick={() => navigate("/packages/fishing")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold"
                >
                  View Packages
                </Button>
              </div>
            </div>

            {/* Custom Package */}
            <div className="border border-amber-500/30 bg-black/50 overflow-hidden hover:border-amber-500 transition-colors">
              <img src={MATES_IMAGE} alt="Custom" className="w-full h-48 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-black italic mb-2">Custom Escapes</h3>
                <p className="text-amber-500 font-bold mb-4">Enquiry</p>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                  Bucks parties, brewery tours, AFL/NRL events, or anything else you can dream up.
                </p>
                <Button
                  onClick={() => navigate("/packages/custom-escapes")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PREMIUM PACKAGE CARDS SECTION
          ============================================================ */}
      <section className="py-24 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black italic mb-6">
              Premium Experiences
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Handpicked packages designed for unforgettable weekends with your crew.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Golf Weekend Card */}
            <div className="group relative overflow-hidden border border-amber-500/30 hover:border-amber-500 transition-all duration-300">
              <div className="relative overflow-hidden h-80">
                <img
                  src={GOLF_AERIAL}
                  alt="Golf Weekend"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-black italic text-white mb-3">Golf Weekend Packages</h3>
                <ul className="space-y-2 mb-6 text-sm text-foreground/90">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Accommodation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Tee times
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Optional brewery add-ons
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Transfers
                  </li>
                </ul>
                <Button
                  onClick={() => navigate("/packages/golf")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 text-base"
                >
                  View Golf Trips
                </Button>
              </div>
            </div>

            {/* Fishing Weekends Card */}
            <div className="group relative overflow-hidden border border-amber-500/30 hover:border-amber-500 transition-all duration-300">
              <div className="relative overflow-hidden h-80">
                <img
                  src={FISHING_IMAGE}
                  alt="Fishing Weekends"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-black italic text-white mb-3">Fishing Weekends</h3>
                <ul className="space-y-2 mb-6 text-sm text-foreground/90">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Charter options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Accommodation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Local pub recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Experienced guides
                  </li>
                </ul>
                <Button
                  onClick={() => navigate("/packages/fishing")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 text-base"
                >
                  View Fishing Trips
                </Button>
              </div>
            </div>

            {/* Bucks Party Card */}
            <div className="group relative overflow-hidden border border-amber-500/30 hover:border-amber-500 transition-all duration-300">
              <div className="relative overflow-hidden h-80">
                <img
                  src={MATES_IMAGE}
                  alt="Bucks Party"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-black italic text-white mb-3">Bucks Party Weekends</h3>
                <ul className="space-y-2 mb-6 text-sm text-foreground/90">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Accommodation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Golf
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Nightlife
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Brewery tours
                  </li>
                </ul>
                <Button
                  onClick={() => navigate("/packages/custom-escapes")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 text-base"
                >
                  Plan Bucks Trip
                </Button>
              </div>
            </div>

            {/* Sport Weekend Card */}
            <div className="group relative overflow-hidden border border-amber-500/30 hover:border-amber-500 transition-all duration-300">
              <div className="relative overflow-hidden h-80">
                <img
                  src={HERO_IMAGE}
                  alt="Sport Weekends"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-black italic text-white mb-3">Sport Weekend Packages</h3>
                <ul className="space-y-2 mb-6 text-sm text-foreground/90">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> AFL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> NRL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Accommodation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> Group planning
                  </li>
                </ul>
                <Button
                  onClick={() => navigate("/packages/custom-escapes")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 text-base"
                >
                  See Sports Packages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS SECTION
          ============================================================ */}
      <section className="py-24 bg-black/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black italic mb-6">
              Real Blokes. Real Trips.
            </h2>
            <p className="text-lg text-foreground/80">
              Hear from crews who've already locked in their legend status.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="border border-amber-500/30 p-8 bg-black">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 italic leading-relaxed">
                "Honestly the best weekend we've had in years. Turned up, shirts were waiting, beer was cold, tee times were sorted. I didn't have to organise a single thing."
              </p>
              <div>
                <p className="font-bold text-amber-500">Jake Thompson</p>
                <p className="text-sm text-foreground/70">Thurgoona Golf Trip</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="border border-amber-500/30 p-8 bg-black">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 italic leading-relaxed">
                "As the usual group organiser I'm always stressed before the trip starts. Having BlokesTrips run everything was an absolute game changer. Worth every cent."
              </p>
              <div>
                <p className="font-bold text-amber-500">Mick O'Brien</p>
                <p className="text-sm text-foreground/70">Albury Golf Weekend</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="border border-amber-500/30 p-8 bg-black">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 italic leading-relaxed">
                "Even as a non-golfer I had the best time. Everything was thought of. Already locked in next year's trip and bringing three more of the boys."
              </p>
              <div>
                <p className="font-bold text-amber-500">Dave Carter</p>
                <p className="text-sm text-foreground/70">Murray River Weekend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ SECTION
          ============================================================ */}
      <section className="py-24 bg-black">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black italic mb-6">
              Got Questions?
            </h2>
            <p className="text-lg text-foreground/80">
              Everything you need to know about planning your trip.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-amber-500/30 px-6">
              <AccordionTrigger className="text-lg font-bold hover:text-amber-500">
                How much does a trip cost?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Pricing varies by trip type and location. Golf weekends start from $499pp, fishing trips from $550pp. We provide custom quotes for bucks parties and special events. Request a quote to get exact pricing for your group.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-amber-500/30 px-6">
              <AccordionTrigger className="text-lg font-bold hover:text-amber-500">
                What's included in the package?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Each package includes accommodation, activities (golf/fishing/etc), meals, custom merchandise, all bookings and logistics, and 24/7 support. Everything is fully organised — you just show up.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-amber-500/30 px-6">
              <AccordionTrigger className="text-lg font-bold hover:text-amber-500">
                How do deposits and payments work?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                We collect a $200 non-refundable deposit per person to lock in the trip. Final payment is due 3 weeks before departure. We send payment links to your crew, and everything is tracked in our system.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-amber-500/30 px-6">
              <AccordionTrigger className="text-lg font-bold hover:text-amber-500">
                Can you customise a trip for us?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Absolutely. We specialise in custom trips. Tell us your dates, location, group size, and what you're after, and we'll build a bespoke itinerary. Request a quote to get started.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-amber-500/30 px-6">
              <AccordionTrigger className="text-lg font-bold hover:text-amber-500">
                What if someone can't make it?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                We have a cancellation policy that allows changes up to 30 days before the trip. Deposits are non-refundable but can be transferred to another trip. Check our full policy for details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-amber-500/30 px-6">
              <AccordionTrigger className="text-lg font-bold hover:text-amber-500">
                How quickly can you organise a trip?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                We typically need 6-8 weeks to organise a trip properly. However, we can sometimes accommodate shorter timelines depending on availability. Contact us to discuss your dates.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ============================================================
          STRONG CTA SECTION - NEAR FOOTER
          ============================================================ */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-black italic text-black mb-6">
            Ready to Lock In the Trip?
          </h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto mb-12">
            Get a fast quote from our team and start planning your next legendary weekend.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-black hover:bg-black/90 text-amber-500 font-bold py-4 px-12 text-lg"
          >
            Get Pricing
          </Button>
        </div>
      </section>

      {/* ============================================================
          CONTACT / ENQUIRY FORM
          ============================================================ */}
      <section id="contact" className="py-24 bg-black">
        <div className="container max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black italic mb-6">
              Start Your Trip
            </h2>
            <p className="text-lg text-foreground/80">
              Tell us what you're after and we'll get back to you within 24 hours with a custom quote.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 border border-amber-500/30 p-8 bg-black/50">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleFormChange("name", e.target.value)}
                className="bg-black/50 border-amber-500/30 text-foreground placeholder:text-foreground/50"
              />
              <Input
                placeholder="Mobile"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleFormChange("phone", e.target.value)}
                className="bg-black/50 border-amber-500/30 text-foreground placeholder:text-foreground/50"
              />
            </div>

            <Input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleFormChange("email", e.target.value)}
              className="bg-black/50 border-amber-500/30 text-foreground placeholder:text-foreground/50"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Select value={formData.tripType} onValueChange={(value) => handleFormChange("tripType", value)}>
                <SelectTrigger className="bg-black/50 border-amber-500/30 text-foreground">
                  <SelectValue placeholder="Trip Type" />
                </SelectTrigger>
                <SelectContent className="bg-black border-amber-500/30">
                  <SelectItem value="golf">Golf Weekend</SelectItem>
                  <SelectItem value="fishing">Fishing Trip</SelectItem>
                  <SelectItem value="bucks">Bucks Party</SelectItem>
                  <SelectItem value="afl">AFL / NRL Event</SelectItem>
                  <SelectItem value="brewery">Brewery Tour</SelectItem>
                  <SelectItem value="custom">Custom Trip</SelectItem>
                </SelectContent>
              </Select>

              <Select value={formData.groupSize} onValueChange={(value) => handleFormChange("groupSize", value)}>
                <SelectTrigger className="bg-black/50 border-amber-500/30 text-foreground">
                  <SelectValue placeholder="Group Size" />
                </SelectTrigger>
                <SelectContent className="bg-black border-amber-500/30">
                  <SelectItem value="4-8">4–8 blokes</SelectItem>
                  <SelectItem value="8-16">8–16 blokes</SelectItem>
                  <SelectItem value="16-24">16–24 blokes</SelectItem>
                  <SelectItem value="24+">24+ blokes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Textarea
              placeholder="Tell us about preferred dates, locations, or special requests..."
              value={formData.message}
              onChange={(e) => handleFormChange("message", e.target.value)}
              className="bg-black/50 border-amber-500/30 text-foreground placeholder:text-foreground/50 min-h-32"
            />

            <div className="text-xs text-foreground/60">
              By submitting you agree to our Terms & Conditions.
            </div>

            <Button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 text-lg"
            >
              SEND ENQUIRY
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
