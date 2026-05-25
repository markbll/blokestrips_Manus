/* ============================================================
   BLOKESTRIPS CONTACT PAGE
   ============================================================ */
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Phone, Mail, MapPin, Clock, Check } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thanks! We'll be in touch within 24 hours with your trip options and pricing.");
    formRef.current?.reset();
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[#0d0d0d]">
        <div className="container">
          <span className="bt-label text-[#E8920A] block mb-4">Get Started</span>
          <h1 className="bt-display text-[clamp(3rem,8vw,6rem)] text-white mb-4">
            PLAN MY<br /><span className="text-[#E8920A]">TRIP</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Tell us what you're after and we'll come back within 24 hours with full trip options and pricing. No commitment required.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <h2 className="bt-display text-2xl text-white mb-8">WHAT HAPPENS NEXT</h2>

              <div className="space-y-6 mb-12">
                {[
                  { step: "01", title: "We review your enquiry", desc: "Within 24 hours of submitting." },
                  { step: "02", title: "We build your options", desc: "Full itinerary, pricing, and package details." },
                  { step: "03", title: "You review and confirm", desc: "No commitment until you're happy with the plan." },
                  { step: "04", title: "We handle everything", desc: "Bookings, invites, payments, logistics — all of it." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#E8920A] flex items-center justify-center flex-shrink-0">
                      <span className="bt-display-normal text-[#111111] text-sm">{step}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{title}</div>
                      <div className="text-white/50 text-sm mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Details */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#E8920A]" />
                  <span className="text-white/70 text-sm">1300 BLOKES</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#E8920A]" />
                  <a href="mailto:info@blokestrips.com.au" className="text-white/70 hover:text-white text-sm transition-colors">
                    info@blokestrips.com.au
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#E8920A]" />
                  <span className="text-white/70 text-sm">Serving all of Australia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#E8920A]" />
                  <span className="text-white/70 text-sm">Response within 24 hours</span>
                </div>
              </div>

              {/* Trust Points */}
              <div className="bg-[#1a1a1a] p-6">
                <h3 className="bt-display text-lg text-white mb-5">WHAT'S INCLUDED</h3>
                <div className="space-y-3">
                  {[
                    "Full trip options and pricing",
                    "Custom itinerary built for your group",
                    "$200 deposit locks your spot",
                    "Custom polos, prizes, stubby holders",
                    "Beer on arrival in every room",
                    "We manage all payments and logistics",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <Check size={12} className="text-[#E8920A] flex-shrink-0" />
                      <span className="text-white/60 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#1a1a1a] p-8 lg:p-10">
                <h3 className="bt-display text-2xl text-white mb-8">Trip Enquiry Form</h3>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="bt-label text-white/50 text-[10px] block mb-2">Trip Type *</label>
                      <select required className="w-full bg-[#111111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors appearance-none">
                        <option value="">Select type...</option>
                        <option value="golf">Golf Weekend</option>
                        <option value="fishing">Fishing Trip</option>
                        <option value="bucks">Bucks Party</option>
                        <option value="sports">Sports Event</option>
                        <option value="custom">Custom Trip</option>
                        <option value="corporate">Corporate Group</option>
                      </select>
                    </div>
                    <div>
                      <label className="bt-label text-white/50 text-[10px] block mb-2">Group Size *</label>
                      <select required className="w-full bg-[#111111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors appearance-none">
                        <option value="">Select size...</option>
                        <option value="4-8">4–8 blokes</option>
                        <option value="8-16">8–16 blokes</option>
                        <option value="16-24">16–24 blokes</option>
                        <option value="24+">24+ blokes</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="bt-label text-white/50 text-[10px] block mb-2">Preferred Dates</label>
                      <input type="text" placeholder="e.g. Late July, Long weekend" className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors" />
                    </div>
                    <div>
                      <label className="bt-label text-white/50 text-[10px] block mb-2">Location Preference</label>
                      <input type="text" placeholder="e.g. Murray River, Gold Coast" className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="bt-label text-white/50 text-[10px] block mb-2">Budget Per Person</label>
                    <select className="w-full bg-[#111111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors appearance-none">
                      <option value="">Select budget...</option>
                      <option value="under-300">Under $300</option>
                      <option value="300-500">$300–$500</option>
                      <option value="500-750">$500–$750</option>
                      <option value="750-1000">$750–$1,000</option>
                      <option value="1000+">$1,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="bt-label text-white/50 text-[10px] block mb-2">Tell Us More</label>
                    <textarea rows={4} placeholder="Tell us about your group, preferred activities, any special requests, or anything else we should know..." className="w-full bg-[#111111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#E8920A] transition-colors resize-none" />
                  </div>
                  <button type="submit" className="btn-amber w-full justify-center py-4 text-base">
                    Send Enquiry <ArrowRight size={18} />
                  </button>
                  <p className="text-white/30 text-xs text-center">
                    By submitting you agree to our Terms & Conditions. We'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
