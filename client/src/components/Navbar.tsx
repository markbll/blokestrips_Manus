/* ============================================================
   BLOKESTRIPS NAVBAR
   Single-page anchor navigation with smooth scroll
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Packages", href: "#packages" },
    { label: "Franchise", href: "#franchise" },
    { label: "Reviews", href: "#reviews" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (!href) return;

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-black text-xl italic tracking-tight flex-shrink-0">
          <span className="text-white">BLOKES</span>
          <span className="text-amber-500">TRIPS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-sm font-medium text-foreground hover:text-amber-500 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={handleNavClick}
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-amber-500 rounded transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm rounded transition"
            >
              PLAN MY TRIP
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
