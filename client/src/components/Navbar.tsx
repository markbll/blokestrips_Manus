/* ============================================================
   BLOKESTRIPS NAVBAR
   Design: Dark sticky nav, logo left, links centre, amber CTA right
   Sharp corners, Barlow Condensed labels
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  {
    label: "Packages",
    href: "/packages",
    children: [
      { label: "Golf Trips", href: "/golf-trips" },
      { label: "Fishing Trips", href: "/fishing-trips" },
      { label: "Custom Trips", href: "/custom-trips" },
    ],
  },
  { label: "Add-Ons", href: "/add-ons" },
  { label: "For Organisers", href: "/for-organisers" },
  { label: "Reviews", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="bt-display-normal text-2xl lg:text-3xl tracking-tight">
              <span className="text-white">BLOKES</span>
              <span className="text-[#E8920A]">TRIPS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-white/80 hover:text-white bt-label text-[11px] transition-colors">
                    {link.label}
                    <ChevronDown size={12} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-44 bg-[#1a1a1a] border border-white/10 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-white/70 hover:text-white hover:bg-[#242424] bt-label text-[11px] transition-colors border-b border-white/5 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 bt-label text-[11px] transition-colors ${
                    location === link.href
                      ? "text-[#E8920A]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <button className="btn-amber text-sm py-2.5 px-5">
                Plan My Trip
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-t border-white/10">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="px-2 py-3 text-white/50 bt-label text-[11px]">{link.label}</div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-white/70 hover:text-white bt-label text-[11px] transition-colors"
                    >
                      — {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-2 py-3 text-white/80 hover:text-white bt-label text-[11px] transition-colors border-b border-white/5"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link href="/contact">
                <button className="btn-amber w-full justify-center text-sm">
                  Plan My Trip
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
