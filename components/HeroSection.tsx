"use client";

import { useLanguage } from "@/components/context/LanguageContext";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1768128834332-7d3479c8d634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHBsYW50JTIwcmVmaW5lcnklMjBpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzcyNDU0ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      className="relative w-full flex overflow-hidden justify-center bg-background font-sans"
      style={{ height: "82vh", minHeight: "520px" }}
    >
      <div
        className="relative flex w-full overflow-hidden"
        style={{ maxWidth: "80%" }}
      >
        {/* Left: Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center pt-16 px-10 lg:px-20 z-10 shrink-0">
          <span
            style={{ color: "#EB0707", fontWeight: 500 }}
            className="text-sm uppercase tracking-widest mb-4 block"
          >
            {h.eyebrow}
          </span>

          <h1
            style={{ fontWeight: 700, color: "#3C4044", lineHeight: 1.2 }}
            className="text-3xl lg:text-4xl mb-5 text-balance"
          >
            {h.h1_parts.line1}
            <br />
            <span style={{ color: "#EB0707" }}>{h.h1_parts.line2_red}</span>
            <br />
            {h.h1_parts.line3_prefix}
            <span style={{ color: "#EB0707" }}>{h.h1_parts.line3_red}</span>
            {h.h1_parts.line3_suffix}
          </h1>

          <p
            style={{ fontWeight: 400, color: "#3C4044" }}
            className="text-lg mb-10 max-w-md opacity-80"
          >
            {h.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              style={{
                backgroundColor: "#EB0707",
                color: "#FFFFFF",
                fontWeight: 600,
                transition: "background-color 200ms ease",
              }}
              className="inline-flex justify-center items-center px-8 py-3 rounded text-sm font-sans"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#c40606";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#EB0707";
              }}
            >
              {h.cta1}
            </a>
            <a
              href="#about"
              style={{
                border: "2px solid #3C4044",
                color: "#3C4044",
                fontWeight: 600,
                transition: "border-color 200ms ease, color 200ms ease",
              }}
              className="inline-flex justify-center items-center px-8 py-3 rounded text-sm font-sans"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "#EB0707";
                (e.currentTarget as HTMLAnchorElement).style.color = "#EB0707";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "#3C4044";
                (e.currentTarget as HTMLAnchorElement).style.color = "#3C4044";
              }}
            >
              {h.cta2}
            </a>
          </div>
        </div>

        {/* Right: Diagonal-sliced image */}
        <div
          className="hidden md:block flex-1"
          style={{
            clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt={h.imgAlt}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.1), rgba(0,0,0,0.05))",
            }}
          />
        </div>

        {/* Mobile image */}
        <div
          className="md:hidden absolute bottom-0 left-0 right-0"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)",
            height: "40%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt={h.imgAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Decorative accent line */}
      <div
        className="absolute bottom-0 left-0 h-1 w-1/3"
        style={{ backgroundColor: "#EB0707" }}
      />
    </section>
  );
}
