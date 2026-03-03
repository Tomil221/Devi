"use client";

import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/context/LanguageContext";

export function CTAFooter() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer
      style={{ backgroundColor: "#3C4044" }}
      className="px-6 lg:px-12 pt-16 pb-0 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Col 1 - Brand */}
          <div>
            <Image
              src="/images/devisor-logo.jpg"
              alt="Devisor OY"
              width={180}
              height={52}
              className="h-13 w-auto object-contain mb-3"
            />
            <p
              style={{ fontWeight: 300, color: "rgba(255,255,255,0.65)" }}
              className="text-sm leading-relaxed"
            >
              {f.brand}
            </p>
            <div className="flex gap-4 mt-6">
              {[Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{ color: "#FFFFFF", transition: "color 150ms ease" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#EB0707";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#FFFFFF";
                  }}
                  aria-label={i === 0 ? "LinkedIn" : "Instagram"}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h4
              style={{ fontWeight: 600, color: "#FFFFFF" }}
              className="text-sm mb-4 uppercase tracking-wider"
            >
              {f.servicesHeading}
            </h4>
            <ul className="flex flex-col gap-3">
              {f.services.map((item) => (
                <li key={item}>
                  <FooterLink label={item} />
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Navigation */}
          <div>
            <h4
              style={{ fontWeight: 600, color: "#FFFFFF" }}
              className="text-sm mb-4 uppercase tracking-wider"
            >
              {f.siteHeading}
            </h4>
            <ul className="flex flex-col gap-3">
              {f.nav.map((item) => (
                <li key={item}>
                  <FooterLink label={item} />
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4
              style={{ fontWeight: 600, color: "#FFFFFF" }}
              className="text-sm mb-4 uppercase tracking-wider"
            >
              {f.contactHeading}
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <span
                  style={{
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                  }}
                >
                  timo.jokinen@devisor.fi
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                  }}
                >
                  +358 040 713 0818
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                  }}
                >
                  86600 Haapavesi
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ height: "1px", backgroundColor: "#EB0707", opacity: 0.7 }}
        />

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontWeight: 300,
              color: "rgba(255,255,255,0.50)",
              fontSize: "12px",
            }}
          >
            {f.copyright}
          </p>

          {/* Certification badges */}
          <div className="flex items-center gap-4">
            {/* Luotettava Kumppani */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "6px",
                padding: "7px 12px",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1.5L2.5 5.5V10.5C2.5 15.19 6.2 19.57 11 20.5C15.8 19.57 19.5 15.19 19.5 10.5V5.5L11 1.5Z"
                  fill="#0E7C4A"
                  stroke="#0E7C4A"
                  strokeWidth="0.5"
                />
                <path
                  d="M7.5 11L9.8 13.3L14.5 8.5"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: 1.2,
                    letterSpacing: "0.04em",
                  }}
                >
                  LUOTETTAVA
                </p>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: 1.2,
                    letterSpacing: "0.04em",
                  }}
                >
                  KUMPPANI
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 300,
                    fontSize: "8px",
                    marginTop: "2px",
                  }}
                >
                  tilaajavastuu.fi
                </p>
              </div>
            </div>

            {/* AA-luottoluokitus */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "6px",
                padding: "7px 12px",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "4px",
                  backgroundColor: "#1A3A6B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "14px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  AA
                </span>
              </div>
              <div>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: 1.2,
                    letterSpacing: "0.04em",
                  }}
                >
                  LUOTTO-
                </p>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: 1.2,
                    letterSpacing: "0.04em",
                  }}
                >
                  LUOKITUS
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 300,
                    fontSize: "8px",
                    marginTop: "2px",
                  }}
                >
                  asiakastieto.fi
                </p>
              </div>
            </div>
          </div>

          <p
            style={{
              fontWeight: 300,
              color: "rgba(255,255,255,0.35)",
              fontSize: "12px",
            }}
          >
            {f.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      style={{
        fontWeight: 400,
        color: "rgba(255,255,255,0.65)",
        fontSize: "14px",
        textDecoration: "none",
        transition: "color 150ms ease",
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#EB0707";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color =
          "rgba(255,255,255,0.65)";
      }}
    >
      {label}
    </a>
  );
}
