/* ============================================================
   BLOKESTRIPS NAVBAR
   Hover-based dropdown for Packages, scroll to OUR EXPERIENCES
   ============================================================ */
import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (!href) return;

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
        setDropdownOpen(false);
      }
    }
  };

  const handlePackagesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.querySelector("#our-experiences");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setDropdownOpen(false);
      }
    } else {
      window.location.href = "/#our-experiences";
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const packageCategories = [
    { label: "Golf Weekends", href: "/packages/golf" },
    { label: "Fishing Trips", href: "/packages/fishing" },
    { label: "Sailing Adventures", href: "/packages/sailing" },
    { label: "Diving Expeditions", href: "/packages/diving" },
    { label: "Beer & Whiskey Tours", href: "/packages/beer-whiskey" },
    { label: "Custom Escapes", href: "/packages/custom" },
  ];

  const mainNavLinks = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="font-black text-xl italic tracking-tight flex-shrink-0">
          <span className="text-white">BLOKES</span>
          <span className="text-amber-500">TRIPS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {mainNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.href.startsWith("#") ? handleNavClick : undefined}
              className="text-sm font-medium text-foreground hover:text-amber-500 transition"
            >
              {link.label}
            </a>
          ))}

          {/* Packages Dropdown (Hover-based) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#our-experiences"
              onClick={handlePackagesClick}
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-amber-500 transition cursor-pointer"
            >
              Packages
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </a>

            {dropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-black/98 border border-amber-500/50 shadow-2xl z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {packageCategories.map((cat, idx) => (
                  <a
                    key={cat.href}
                    href={cat.href}
                    className={`block px-4 py-3 text-sm text-foreground hover:bg-amber-500/20 hover:text-amber-500 transition ${
                      idx !== packageCategories.length - 1 ? "border-b border-foreground/10" : ""
                    }`}
                  >
                    {cat.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTA */}
        <a
          href={isHomePage ? "#our-experiences" : "/#our-experiences"}
          onClick={isHomePage ? handleNavClick : undefined}
          className="hidden md:inline-block px-6 py-2 bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm transition"
        >
          PLAN MY TRIP
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 hover:bg-muted rounded transition"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-black/98 py-4">
          <div className="container space-y-2">
            {mainNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.href.startsWith("#") ? handleNavClick : undefined}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-amber-500 rounded transition"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Packages Section */}
            <a
              href="#our-experiences"
              onClick={handlePackagesClick}
              className="block px-4 py-2 text-sm font-medium text-amber-500 border-t border-foreground/10 mt-2 hover:bg-muted rounded transition"
            >
              Packages
            </a>
            {packageCategories.map((cat) => (
              <a
                key={cat.href}
                href={cat.href}
                className="block px-6 py-2 text-sm text-foreground hover:bg-muted hover:text-amber-500 rounded transition"
              >
                {cat.label}
              </a>
            ))}

            <a
              href={isHomePage ? "#our-experiences" : "/#our-experiences"}
              onClick={isHomePage ? handleNavClick : undefined}
              className="block px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm rounded transition mt-4"
            >
              PLAN MY TRIP
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
