/* ============================================================
   BLOKESTRIPS FRANCHISE PAGE
   ============================================================ */
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";

const AERIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663693922838/Vg3wV8EyDYpxYQ2te2QLoi/golf-aerial-jmuYbVWEt5GJoXTr6mbhe3.webp";

const franchiseIncludes = [
  "BlokesTrips brand licence and trademark rights",
  "Full booking and CRM system access",
  "Established supplier and venue network",
  "Lead generation and marketing support",
  "Comprehensive training and onboarding",
  "Ongoing operational support",
  "Exclusive territory rights",
  "Custom merchandise supplier access",
];

const franchiseBenefits = [
  { title: "Proven Model", desc: "A tested system with hundreds of successful trips already delivered across Australia." },
  { title: "Exclusive Territory", desc: "Your own geographic territory with no internal competition from other BlokesTrips operators." },
  { title: "Full System Access", desc: "The booking platform, CRM, payment system, and supplier network — all ready to go." },
  { title: "Marketing Support", desc: "National brand marketing, social media, and lead generation to drive enquiries to your territory." },
  { title: "Training & Support", desc: "Comprehensive onboarding training and ongoing support from the BlokesTrips head office team." },
  { title: "Scalable Income", desc: "Earn a margin on every trip booked in your territory. Scale as fast or as slow as you want." },
];

export default function Franchise() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thanks for your interest! We'll send you the franchise kit within 24 hours.");
    formRef.current?.reset();
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={AERIAL_IMG} alt="Golf course aerial" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-[#111111]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10">
          <span className="bt-label text-[#E8920A] block mb-4">Franchise</span>
          <h1 className="bt-display text-[clamp(3rem,8vw,6rem)] text-white mb-4">
            OWN A<br /><span className="text-[#E8920A]">BLOKESTRIPS</span><br />TERRITORY
          </h1>
          <p className="text-white/70 max-w-xl text-lg mb-8">
            We're building a nationwide network of BlokesTrips operators. You get the brand, the system, and the supplier network. You deliver the trips.
          </p>
          <a href="#franchise-form">
            <button className="btn-amber text-base py-3.5 px-8">
              Get Franchise Kit <ArrowRight size={18} />
            </button>
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bt-label text-[#E8920A] block mb-4">What You Get</span>
              <h2 className="bt-display text-[clamp(2rem,5vw,4rem)] text-white mb-6">
                EVERYTHING YOU NEED TO RUN THE BUSINESS
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                BlokesTrips franchise operators don't start from scratch. You get a complete, proven system that's ready to generate bookings from day one.
              </p>
              <div className="space-y-3">
                {franchiseIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#E8920A] flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-[#111111]" />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-10">
              <h3 className="bt-display text-2xl text-white mb-8">WHY BLOKESTRIPS?</h3>
              <div className="space-y-6">
                {franchiseBenefits.map(({ title, desc }) => (
                  <div key={title} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                    <div className="bt-display text-lg text-[#E8920A] mb-2">{title}</div>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Form */}
      <section id="franchise-form" className="bg-[#0d0d0d] py-20 lg:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="bt-label text-[#E8920A] block mb-4">Get the Kit</span>
              <h2 className="bt-display text-[clamp(2rem,5vw,3.5rem)] text-white mb-4">
                REQUEST YOUR FRANCHISE KIT
              </h2>
              <p className="text-white/50">
                Fill out the form below and we'll send you the full franchise information kit within 24 hours.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-8 lg:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="bt-label text-white/50 text-[10px] block mb-2">Full Name *</label>
                    <input type="text" placeholder="John Doe" required className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors" />
                  </div>
                  <div>
                    <label className="bt-label text-white/50 text-[10px] block mb-2">Mobile *</label>
                    <input type="tel" placeholder="0400 000 000" required className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="bt-label text-white/50 text-[10px] block mb-2">Email Address *</label>
                  <input type="email" placeholder="john@example.com" required className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors" />
                </div>
                <div>
                  <label className="bt-label text-white/50 text-[10px] block mb-2">Location / Territory of Interest *</label>
                  <input type="text" placeholder="e.g. Albury-Wodonga, Regional NSW" required className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors" />
                </div>
                <div>
                  <label className="bt-label text-white/50 text-[10px] block mb-2">Background / Experience</label>
                  <textarea rows={3} placeholder="Tell us about your background, any relevant experience, and why you're interested in BlokesTrips..." className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors resize-none" />
                </div>
                <button type="submit" className="btn-amber w-full justify-center py-4 text-base">
                  Get Franchise Kit <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
