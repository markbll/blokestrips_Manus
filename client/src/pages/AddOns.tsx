/* ============================================================
   BLOKESTRIPS ADD-ONS PAGE
   ============================================================ */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Shirt, Package, Beer, Gift, Truck, Trophy, Camera, Utensils, Music, Star } from "lucide-react";

const addOnCategories = [
  {
    category: "Custom Merchandise",
    items: [
      { icon: Shirt, name: "Custom Polo Tops", desc: "Embroidered with your group name, trip name, and year. Available in a range of colours and sizes.", price: "From $45/person" },
      { icon: Package, name: "Stubby Holder Pack", desc: "Custom printed neoprene stubby holders with your trip branding. Perfect keepsake.", price: "From $12/person" },
      { icon: Gift, name: "Custom Caps", desc: "Embroidered caps with your trip logo or club name. Structured or unstructured styles.", price: "From $28/person" },
      { icon: Shirt, name: "Custom Jackets", desc: "Softshell or fleece jackets with embroidered branding. Great for cooler destinations.", price: "From $75/person" },
    ],
  },
  {
    category: "Golf Extras",
    items: [
      { icon: Trophy, name: "Big Caddy Golf Cards", desc: "Premium golf card packs for group competitions. Includes scoring, handicap tracking, and prize categories.", price: "From $15/person" },
      { icon: Trophy, name: "Custom Trophies & Prizes", desc: "Engraved trophies for competition winners. Longest drive, nearest the pin, overall winner.", price: "From $80/set" },
      { icon: Star, name: "Golf Cart Upgrade", desc: "Private cart hire for the full group across all rounds.", price: "POA" },
      { icon: Gift, name: "Golf Towel & Tee Pack", desc: "Custom branded golf towels and tee packs for every player.", price: "From $18/person" },
    ],
  },
  {
    category: "Room & Arrival Extras",
    items: [
      { icon: Beer, name: "Beer on Arrival", desc: "Cold beers delivered to every room on check-in. Choose your preferred brand.", price: "From $25/room" },
      { icon: Utensils, name: "Snack Packs", desc: "Custom snack packs delivered to rooms. Chips, nuts, jerky, and energy drinks.", price: "From $18/person" },
      { icon: Gift, name: "Welcome Hamper", desc: "Premium welcome hamper with local produce, snacks, and drinks waiting in the room.", price: "From $65/room" },
      { icon: Beer, name: "Bar Tab Setup", desc: "Pre-loaded bar tab at the venue bar for the group. Managed and tracked throughout the trip.", price: "POA" },
    ],
  },
  {
    category: "Experience Upgrades",
    items: [
      { icon: Camera, name: "Trip Photographer", desc: "Professional photographer for a session during the trip. Great for group shots and action photos.", price: "From $350/session" },
      { icon: Music, name: "Private Function Room", desc: "Exclusive use of a function room for your group dinner or awards night.", price: "POA" },
      { icon: Truck, name: "Charter Bus Transport", desc: "Private charter bus for the group from a central meeting point to the destination.", price: "POA" },
      { icon: Utensils, name: "Private Chef Dinner", desc: "Private chef for a group dinner on one evening of the trip.", price: "From $85/person" },
    ],
  },
];

export default function AddOns() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[#0d0d0d]">
        <div className="container">
          <span className="bt-label text-[#E8920A] block mb-4">Extras & Upgrades</span>
          <h1 className="bt-display text-[clamp(3rem,8vw,6rem)] text-white mb-4">
            MAKE IT<br /><span className="text-[#E8920A]">LEGENDARY</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Every trip can be loaded up with custom extras. Add merchandise, experiences, and surprises that make the weekend unforgettable.
          </p>
        </div>
      </section>

      {/* Add-Ons Grid */}
      {addOnCategories.map(({ category, items }) => (
        <section key={category} className="py-14 lg:py-16 border-t border-white/10">
          <div className="container">
            <h2 className="bt-display text-2xl text-[#E8920A] mb-8">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {items.map(({ icon: Icon, name, desc, price }) => (
                <div key={name} className="bg-[#1a1a1a] p-7 hover:bg-[#242424] transition-colors group">
                  <div className="w-10 h-10 bg-[#E8920A]/10 flex items-center justify-center mb-4 group-hover:bg-[#E8920A]/20 transition-colors">
                    <Icon size={18} className="text-[#E8920A]" />
                  </div>
                  <h3 className="bt-display text-lg text-white mb-2">{name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="bt-label text-[#E8920A] text-[10px]">{price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#E8920A] py-14">
        <div className="container text-center">
          <h2 className="bt-display text-[clamp(2rem,5vw,3.5rem)] text-[#111111] mb-4">
            READY TO BUILD YOUR PACKAGE?
          </h2>
          <p className="text-[#111111]/70 mb-8 max-w-lg mx-auto">
            Tell us your trip details and we'll put together a full package with your chosen add-ons and pricing.
          </p>
          <Link href="/contact">
            <button className="bg-[#111111] text-white font-[Barlow] font-700 uppercase tracking-widest text-sm py-3 px-8 hover:bg-[#1a1a1a] transition-colors inline-flex items-center gap-2">
              Get a Quote <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
