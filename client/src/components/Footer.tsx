/* ============================================================
   BLOKESTRIPS FOOTER
   Design: Dark charcoal, 4-column layout, amber accents
   ============================================================ */
import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="bt-display-normal text-2xl">
                <span className="text-white">BLOKES</span>
                <span className="text-[#E8920A]">TRIPS</span>
              </span>
            </Link>
            <p className="mt-4 text-white/50 text-sm leading-relaxed">
              Done-for-you group trip planning. Golf trips, fishing getaways, bucks parties and weekend escapes — fully organised so you just show up.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/blokestrips"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#E8920A] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://facebook.com/blokestrips"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#E8920A] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Trips */}
          <div>
            <h4 className="bt-label text-[#E8920A] mb-5">Trips</h4>
            <ul className="space-y-3">
              {[
                { label: "Golf Weekends", href: "/golf-trips" },
                { label: "Fishing Trips", href: "/fishing-trips" },
                { label: "Custom Trips", href: "/custom-trips" },
                { label: "All Packages", href: "/packages" },
                { label: "Add-Ons & Extras", href: "/add-ons" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="bt-label text-[#E8920A] mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "For Organisers", href: "/for-organisers" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "FAQ", href: "/faq" },
                { label: "Franchise", href: "/franchise" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="bt-label text-[#E8920A] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#E8920A] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">1300 BLOKES</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#E8920A] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@blokestrips.com.au" className="text-white/50 hover:text-white text-sm transition-colors">
                  info@blokestrips.com.au
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#E8920A] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">Serving all of Australia</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact">
                <button className="btn-amber text-sm py-2.5 px-5 w-full justify-center">
                  Start Planning
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} BlokesTrips.com.au — All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Terms & Conditions", "Privacy Policy", "Cancellation Policy"].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
