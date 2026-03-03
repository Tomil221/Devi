import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import devisorLogo from "figma:asset/189a2d557411daaeccec54dc7449e13b82433654.png";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        fontFamily: "'Poppins', sans-serif",
        transition: "box-shadow 300ms ease",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.10)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img
            src={devisorLogo}
            alt="Devisor OY"
            style={{ height: "44px", width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {t.navbar.links.map((link) => (
            <li key={link}>
              <a
                href="#"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  color: "#3C4044",
                  position: "relative",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                }}
                className="text-sm group"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#EB0707";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#3C4044";
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
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(60,64,68,0.20)",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            {(["fi", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: lang === l ? 700 : 500,
                  fontSize: "12px",
                  padding: "5px 10px",
                  backgroundColor: lang === l ? "#EB0707" : "transparent",
                  color: lang === l ? "#FFFFFF" : "#3C4044",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 200ms ease, color 200ms ease",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              backgroundColor: "#EB0707",
              color: "#FFFFFF",
              transition: "background-color 200ms ease",
            }}
            className="inline-flex items-center px-5 py-2 rounded text-sm"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c40606";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EB0707";
            }}
          >
            {t.navbar.cta}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          style={{ color: "#3C4044" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {t.navbar.links.map((link) => (
            <a
              key={link}
              href="#"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, color: "#3C4044" }}
              className="text-sm"
            >
              {link}
            </a>
          ))}

          {/* Mobile lang switcher */}
          <div className="flex items-center gap-2 mt-1">
            {(["fi", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  fontFamily: "'Poppins', sans-serif",
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
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              backgroundColor: "#EB0707",
              color: "#FFFFFF",
            }}
            className="inline-flex justify-center items-center px-5 py-2 rounded text-sm mt-1"
          >
            {t.navbar.cta}
          </a>
        </div>
      )}

      <style>{`
        a:hover .nav-underline { width: 100% !important; }
      `}</style>
    </nav>
  );
}
