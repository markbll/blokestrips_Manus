/* ============================================================
   BLOKESTRIPS HOME PAGE
   Design: Bold Tactical Sports Brand
   - Hero: full-screen dark with generated golf image, left-anchored
   - Trust strip: 4 icons
   - Chaos banner: full-width amber
   - How It Works: 4 steps with ghost numbers
   - Packages: 3-column angular cards
   - Add-Ons: dark section with grid
   - Testimonials: quote cards
   - Final CTA: split layout with form
   ============================================================ */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Trophy,
  Beer,
  Users,
  Star,
  ClipboardList,
  UserCheck,
  CalendarCheck,
  PartyPopper,
  Check,
  ChevronRight,
  Shirt,
  Package,
  Gift,
  Truck,
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/hero-golf-AjZ9k7vhxpXhB35fxpGGXJ.webp";
const FISHING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/fishing-trip-Jg7b9uovwJQqTCcDZyHxBz.webp";
const AERIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/golf-aerial-jmuYbVWEt5GJoXTr6mbhe3.webp";
const MATES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/mates-weekend-FqWeZ7HxpGNm9NoigiRf55.webp";

const trustItems = [
  { icon: Trophy, label: "Legendary", sub: "Itineraries" },
  { icon: Beer, label: "Cold Beer", sub: "Waiting" },
  { icon: Users, label: "Expert", sub: "Coordination" },
  { icon: Star, label: "5-Star", sub: "Reviews" },
];

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Tell Us The Vision",
    desc: "Submit your group's details — dates, size, and what you're after. We handle the research and build the perfect itinerary.",
  },
  {
    num: "02",
    icon: UserCheck,
    title: "The Boys Lock In",
    desc: "We provide a custom booking link for your crew. Everyone pays their own deposit. No more chasing mates for cash.",
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "Logistics Handled",
    desc: "Accommodation, tee times, charter boats, transport — everything is booked and confirmed. You get a full digital itinerary.",
  },
  {
    num: "04",
    icon: PartyPopper,
    title: "Show Up & Send It",
    desc: "Turn up to cold beers in the fridge and custom gear waiting. No admin, no stress, just a legendary weekend with the boys.",
  },
];

const packages = [
  {
    img: AERIAL_IMG,
    location: "Murray River",
    group: "8+ Blokes",
    price: "$499",
    title: "The Ultimate Golf Weekend",
    features: [
      "2 Nights Luxury Accommodation",
      "36 Holes of Championship Golf",
      "Golf Carts & Bar Tab Included",
      "Custom Polos & Merch Pack",
      "Organised Comp & Prizes",
    ],
    href: "/golf-trips",
  },
  {
    img: FISHING_IMG,
    location: "Gold Coast",
    group: "6–12 Blokes",
    price: "$550",
    title: "Deep Sea Fishing Charter",
    features: [
      "2 Nights Waterfront Villa",
      "8-Hour Private Boat Charter",
      "All Bait, Tackle & Guide",
      "BBQ Seafood Dinner",
      "Biggest Catch Trophy",
    ],
    href: "/fishing-trips",
  },
  {
    img: MATES_IMG,
    location: "Nationwide",
    group: "Any Size",
    price: "Enquiry",
    title: "Custom Weekend Escape",
    features: [
      "Fully Tailored Itinerary",
      "Any Destination, Any Activity",
      "Custom Merchandise Pack",
      "Full Logistics Coordination",
      "Everything Booked & Sorted",
    ],
    href: "/custom-trips",
  },
];

const addOns = [
  { icon: Shirt, label: "Custom Polo Tops", desc: "Embroidered with your group name and trip details" },
  { icon: Package, label: "Merch Packs", desc: "Stubby holders, caps, and custom trip gear" },
  { icon: Beer, label: "Beer on Arrival", desc: "Cold beers delivered to your room on check-in" },
  { icon: Gift, label: "Big Caddy Golf Cards", desc: "Premium golf card packs for competitions" },
  { icon: Truck, label: "Transport Options", desc: "Carpooling coordination and charter buses" },
  { icon: Trophy, label: "Comp & Prizes", desc: "Organised competitions with trophies and prizes" },
];

const testimonials = [
  {
    quote: "Honestly the best weekend we've had in years. Turned up, shirts were waiting, beer was cold, tee times were sorted. I didn't have to organise a single thing.",
    name: "Jake Thompson",
    trip: "Thurgoona Golf Trip",
    stars: 5,
  },
  {
    quote: "As the usual group organiser I'm always stressed before the trip starts. Having BlokesTrips run everything was an absolute game changer. Worth every cent.",
    name: "Mick O'Brien",
    trip: "Albury Golf Weekend",
    stars: 5,
  },
  {
    quote: "Even as a non-golfer I had the best time. Everything was thought of. Already locked in next year's trip and bringing three more of the boys.",
    name: "Dave Carter",
    trip: "Murray River Weekend",
    stars: 5,
  },
];

const stats = [
  { value: "500+", label: "Trips Organised" },
  { value: "4,800+", label: "Happy Blokes" },
  { value: "98%", label: "Would Book Again" },
  { value: "24hr", label: "Response Time" },
];

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thanks! We'll be in touch within 24 hours with your trip options.");
    formRef.current?.reset();
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Group of blokes on a championship golf course at golden sunset"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-[#111111]/30" />
        </div>

        <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#E8920A]/40 px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8920A]" />
              <span className="bt-label text-[#E8920A] text-[10px]">Australia's #1 Group Trip Organiser</span>
            </div>

            {/* Headline */}
            <h1 className="bt-display text-[clamp(4rem,10vw,8rem)] leading-[0.88] mb-6">
              <span className="block text-white">GUYS WEEKENDS</span>
              <span className="block text-[#E8920A]">SORTED.</span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg font-[Barlow]">
              Golf trips, fishing getaways, bucks parties — fully organised end-to-end. You bring the crew. We handle absolutely everything else.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/packages">
                <button className="btn-amber text-sm lg:text-base py-3 px-7">
                  View Packages <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-outline-white text-sm lg:text-base py-3 px-7">
                  Start a Trip
                </button>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/15">
              {trustItems.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon size={18} className="text-[#E8920A]" />
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">{label}</div>
                    <div className="text-white/50 text-xs">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-10 bg-white animate-pulse" />
          <span className="bt-label text-white text-[9px]">Scroll</span>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#E8920A]">
        <div className="container py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#111111]/20">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center lg:px-8">
                <div className="bt-display-normal text-[#111111] text-4xl lg:text-5xl">{value}</div>
                <div className="text-[#111111]/70 text-sm font-semibold mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAOS BANNER ── */}
      <section className="bg-[#1a1a1a] py-20 lg:py-28 overflow-hidden relative">
        <div className="container text-center relative z-10">
          <h2 className="bt-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-6">
            <span className="block text-white">THINK GROUP CHAT CHAOS</span>
            <span className="block text-white/30">MINUS THE CHAOS.</span>
          </h2>
          <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            We handle the tee times, the bookings, the gear, and the payments. You just turn up with the boys and send it.
          </p>
        </div>
        {/* Decorative amber line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8920A]" />
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="bg-[#111111] py-20 lg:py-28 overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <span className="bt-label text-[#E8920A] block mb-3">Process</span>
              <h2 className="bt-display text-[clamp(2.5rem,6vw,5rem)]">
                <span className="block text-white">FOUR STEPS TO A</span>
                <span className="block text-white/20">LEGENDARY WEEKEND</span>
              </h2>
            </div>
            <p className="text-white/50 max-w-sm lg:text-right leading-relaxed">
              Every bit of group-chat chaos — removed. From first enquiry to cold beer in your room, it's all covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {steps.map(({ num, icon: Icon, title, desc }) => (
              <div
                key={num}
                className="bg-[#111111] p-8 relative overflow-hidden group hover:bg-[#1a1a1a] transition-colors"
              >
                {/* Ghost number */}
                <div className="absolute -top-4 -right-2 bt-display text-[7rem] leading-none text-white/[0.04] select-none pointer-events-none">
                  {num}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-[#E8920A]/10 flex items-center justify-center mb-4 group-hover:bg-[#E8920A]/20 transition-colors">
                    <Icon size={20} className="text-[#E8920A]" />
                  </div>
                  <div className="bt-label text-white/30 text-[10px] mb-2">{num}</div>
                  <h3 className="bt-display text-xl text-white mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/how-it-works">
              <button className="btn-outline-white text-sm py-3 px-8">
                See Full Process <ChevronRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="bg-[#0d0d0d] py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <span className="bt-label text-[#E8920A] block mb-3">Our Experiences</span>
            <h2 className="bt-display text-[clamp(2.5rem,6vw,5rem)]">
              <span className="text-white">CHOOSE YOUR </span>
              <span className="text-[#E8920A]">LEGEND</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Every package includes full organisation, custom polos, prizes and cold beer waiting in your room. Don't see what you want? We'll build it for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.title} className="bg-[#1a1a1a] overflow-hidden card-lift group">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <div className="bt-label text-white/60 text-[9px]">{pkg.location}</div>
                      <div className="bt-label text-white text-[10px]">{pkg.group}</div>
                    </div>
                    <div className="text-right">
                      <div className="bt-display-normal text-[#E8920A] text-2xl">{pkg.price}</div>
                      <div className="text-white/40 text-[10px]">Per person</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="bt-display text-xl text-white mb-4">{pkg.title}</h3>
                  <ul className="space-y-2 mb-6">
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

          <div className="mt-10 text-center">
            <Link href="/packages">
              <button className="btn-outline-white text-sm py-3 px-8">
                View All Packages <ChevronRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOR ORGANISERS ── */}
      <section className="bg-[#E8920A] py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="bt-label text-[#111111]/60 block mb-2">For Organisers</span>
              <h2 className="bt-display text-[clamp(2rem,5vw,3.5rem)] text-[#111111]">
                STOP BEING THE GROUP CHAT ADMIN.
              </h2>
              <p className="text-[#111111]/70 mt-3 max-w-xl">
                One message from you. We handle every detail — venue, invites, deposits, reminders, rooming, and extras. You just enjoy the trip.
              </p>
            </div>
            <div className="flex-shrink-0 flex gap-4">
              <Link href="/for-organisers">
                <button className="bg-[#111111] text-white font-[Barlow] font-700 uppercase tracking-widest text-sm py-3 px-7 hover:bg-[#1a1a1a] transition-colors">
                  How It Works
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-outline-white text-sm py-3 px-7 border-[#111111]/40 text-[#111111] hover:bg-[#111111]/10">
                  Start Planning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ── */}
      <section className="bg-[#111111] py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
            <div>
              <span className="bt-label text-[#E8920A] block mb-3">Extras</span>
              <h2 className="bt-display text-[clamp(2rem,5vw,4rem)] text-white">
                MAKE IT LEGENDARY
              </h2>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Every trip can be loaded up with custom extras. Add merchandise, experiences, and surprises that make the weekend unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {addOns.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-[#111111] p-7 hover:bg-[#1a1a1a] transition-colors group">
                <div className="w-10 h-10 bg-[#E8920A]/10 flex items-center justify-center mb-4 group-hover:bg-[#E8920A]/20 transition-colors">
                  <Icon size={18} className="text-[#E8920A]" />
                </div>
                <h4 className="bt-display text-lg text-white mb-2">{label}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/add-ons">
              <button className="btn-amber text-sm py-3 px-8">
                View All Add-Ons <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="reviews" className="bg-[#0d0d0d] py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <span className="bt-label text-[#E8920A] block mb-3">Reviews</span>
            <h2 className="bt-display text-[clamp(2.5rem,6vw,5rem)] text-white">
              REAL BLOKES. REAL TRIPS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, trip, stars }) => (
              <div key={name} className="bg-[#1a1a1a] p-8 relative">
                {/* Amber accent top */}
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

          <div className="mt-10 text-center">
            <Link href="/testimonials">
              <button className="btn-outline-white text-sm py-3 px-8">
                Read More Reviews <ChevronRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FRANCHISE BANNER ── */}
      <section className="relative bg-[#1a1a1a] py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={AERIAL_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1a1a1a]/70" />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="bt-display text-[clamp(2rem,5vw,3.5rem)] text-white">
                OWN A <span className="text-[#E8920A]">BLOKESTRIPS</span> TERRITORY
              </h2>
              <p className="text-white/60 mt-3 max-w-lg">
                We're building a nationwide network. You get the brand, leads, booking system and supplier network. You deliver the trips.
              </p>
            </div>
            <Link href="/franchise">
              <button className="btn-amber text-sm py-3 px-8 flex-shrink-0">
                Get Franchise Kit <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA / CONTACT FORM ── */}
      <section id="contact" className="bg-[#111111] py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left: Copy */}
            <div>
              <span className="bt-label text-[#E8920A] block mb-4">Get Started</span>
              <h2 className="bt-display text-[clamp(2.5rem,5vw,4rem)] text-white mb-6">
                READY TO PLAN YOUR NEXT TRIP?
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                Tell us what you're after and we'll come back within 24 hours with full trip options and pricing. No commitment required.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Response within 24 hours", desc: "Full trip options and pricing sent directly to you." },
                  { title: "$200 deposit locks your spot", desc: "Non-refundable. Protects your group's allocation." },
                  { title: "Everything included", desc: "Polos, prizes, stubby holders, beer on arrival." },
                  { title: "You do nothing", desc: "We manage all registrations, payments and logistics." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-6 h-6 bg-[#E8920A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-[#111111]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{title}</div>
                      <div className="text-white/50 text-sm mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#1a1a1a] p-8 lg:p-10">
              <h3 className="bt-display text-2xl text-white mb-8">Plan My Trip</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="bt-label text-white/50 text-[10px] block mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors"
                  />
                </div>
                <div>
                  <label className="bt-label text-white/50 text-[10px] block mb-2">Mobile</label>
                  <input
                    type="tel"
                    placeholder="0400 000 000"
                    required
                    className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors"
                  />
                </div>
                <div>
                  <label className="bt-label text-white/50 text-[10px] block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="bt-label text-white/50 text-[10px] block mb-2">Trip Type</label>
                    <select
                      required
                      className="w-full bg-[#111111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors appearance-none"
                    >
                      <option value="" className="text-white/30">Select type...</option>
                      <option value="golf">Golf Weekend</option>
                      <option value="fishing">Fishing Trip</option>
                      <option value="bucks">Bucks Party</option>
                      <option value="custom">Custom Trip</option>
                    </select>
                  </div>
                  <div>
                    <label className="bt-label text-white/50 text-[10px] block mb-2">Group Size</label>
                    <select
                      required
                      className="w-full bg-[#111111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors appearance-none"
                    >
                      <option value="">Select size...</option>
                      <option value="4-8">4–8 blokes</option>
                      <option value="8-16">8–16 blokes</option>
                      <option value="16-24">16–24 blokes</option>
                      <option value="24+">24+ blokes</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="bt-label text-white/50 text-[10px] block mb-2">Anything Else?</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about preferred dates, locations, or special requests..."
                    className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-amber w-full justify-center py-4 text-base">
                  Send Enquiry <ArrowRight size={18} />
                </button>
                <p className="text-white/30 text-xs text-center">
                  By submitting you agree to our Terms & Conditions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
