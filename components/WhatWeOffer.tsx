"use client";

import { useState } from "react";
import { useLanguage } from "@/components/context/LanguageContext";

const images = [
  "https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwcm9hZG1hcCUyMHdoaXRlYm9hcmR8ZW58MXx8fHwxNzcyMjk2OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1768796372063-4da660e034b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYXRpb25hbCUyMGVmZmljaWVuY3klMjB3b3JrZmxvdyUyMHByb2Nlc3MlMjB0ZWFtfGVufDF8fHx8MTc3MjI5NjkwNXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1738248427115-3489f1aaa337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VycyUyMHdlbGRpbmclMjBzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMHNjYWZmb2xkaW5nfGVufDF8fHx8MTc3MjQ1NjAxOHww&ixlib=rb-4.1.0&q=80&w=1080",
];

export function WhatWeOffer() {
  const { t } = useLanguage();
  const wo = t.whatWeOffer;

  return (
    <section
      id="services"
      className="py-24 px-6 lg:px-12 bg-background font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            style={{ fontWeight: 700, color: "#3C4044" }}
            className="text-4xl lg:text-5xl mb-4 text-balance"
          >
            {wo.title}
          </h2>
          <p
            style={{ fontWeight: 400, color: "#3C4044" }}
            className="text-base max-w-xl mx-auto opacity-70"
          >
            {wo.subtitle}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wo.services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              image={images[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  image,
}: {
  service: { title: string; description: string; cta: string };
  image: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "4px",
        boxShadow: hovered
          ? "0 12px 48px rgba(60,64,68,0.18)"
          : "0 2px 16px rgba(60,64,68,0.08)",
        transition:
          "box-shadow 250ms ease-in-out, transform 250ms ease-in-out",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Card image */}
      <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={service.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 400ms ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: "24px 24px 28px" }}>
        <h3
          style={{ fontWeight: 600, color: "#3C4044" }}
          className="text-lg mb-3"
        >
          {service.title}
        </h3>

        <p
          style={{ fontWeight: 400, color: "#3C4044" }}
          className="text-sm mb-6 leading-relaxed opacity-70"
        >
          {service.description}
        </p>

        <a
          href="#contact"
          style={{
            color: "#EB0707",
            fontWeight: 600,
            textDecoration: "none",
            borderBottom: hovered
              ? "1px solid #EB0707"
              : "1px solid transparent",
            transition: "border-color 200ms ease",
            fontSize: "14px",
          }}
        >
          {service.cta} {"→"}
        </a>
      </div>

      {/* Bottom border accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
          width: hovered ? "100%" : "0%",
          backgroundColor: "#EB0707",
          transition: "width 300ms ease-in-out",
        }}
      />
    </div>
  );
}
