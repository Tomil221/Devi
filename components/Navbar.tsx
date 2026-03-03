"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/context/LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionIds = ["services", "about", "projects", "contact"];

  const scrollToSection = (index: number) => {
    const el = document.getElementById(sectionIds[index]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        transition: "box-shadow 300ms ease",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.10)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <Image
            src="/images/devisor-logo.jpg"
            alt="Devisor OY"
            width={160}
            height={44}
            className="object-contain"
            style={{ height: "44px", width: "auto" }}
            priority
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {t.navbar.links.map((link, i) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(i)}
                style={{
                  fontWeight: 500,
                  color: "#3C4044",
                  position: "relative",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 200ms ease",
                }}
                className="text-sm font-sans group"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#EB0707";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#3C4044";
                }}
              >
                {link}
                <span
                  style={{
                    display: "block",
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    width: 0,
                    height: "2px",
                    backgroundColor: "#EB0707",
                    transition: "width 200ms ease",
                  }}
                  className="nav-underline"
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop right side: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center border border-foreground/20 rounded-md overflow-hidden">
            {(["fi", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  fontWeight: lang === l ? 700 : 500,
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: lang === l ? "#EB0707" : "transparent",
                  color: lang === l ? "#FFFFFF" : "#3C4044",
                  border: "none",
                  cursor: "pointer",
                  transition:
                    "background-color 200ms ease, color 200ms ease",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
                className="font-sans"
              >
                {l}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollToSection(3)}
            style={{
              fontWeight: 600,
              backgroundColor: "#EB0707",
              color: "#FFFFFF",
              transition: "background-color 200ms ease",
            }}
            className="inline-flex items-center px-5 py-2 rounded text-sm font-sans cursor-pointer"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#c40606";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#EB0707";
            }}
          >
            {t.navbar.cta}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          style={{ color: "#3C4044" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {t.navbar.links.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollToSection(i)}
              style={{ fontWeight: 500, color: "#3C4044" }}
              className="text-sm font-sans text-left"
            >
              {link}
            </button>
          ))}

          {/* Mobile lang switcher */}
          <div className="flex items-center gap-2 mt-1">
            {(["fi", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  fontWeight: lang === l ? 700 : 500,
                  fontSize: "12px",
                  padding: "5px 14px",
                  backgroundColor: lang === l ? "#EB0707" : "transparent",
                  color: lang === l ? "#FFFFFF" : "#3C4044",
                  border: "1px solid rgba(60,64,68,0.20)",
                  borderRadius: "5px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
                className="font-sans"
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection(3)}
            style={{
              fontWeight: 600,
              backgroundColor: "#EB0707",
              color: "#FFFFFF",
            }}
            className="inline-flex justify-center items-center px-5 py-2 rounded text-sm mt-1 font-sans cursor-pointer"
          >
            {t.navbar.cta}
          </button>
        </div>
      )}

      <style>{`
        button:hover .nav-underline { width: 100% !important; }
      `}</style>
    </nav>
  );
}
