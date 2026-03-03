"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/context/LanguageContext";

const projects = [
  { lat: 55.85, lng: -4.2531, title: "Glasgow Project", description: "Urban Strategy 2023" },
  { lat: 59.903, lng: 17.353, title: "Uppsala Project", description: "Cultural Study 2022" },
  { lat: 57.2655, lng: 16.4485, title: "Oskarshamn Project", description: "Heritage Research 2021" },
  { lat: 61.6333, lng: 17.0667, title: "Iggesund Project", description: "Heritage Research 2021" },
  { lat: 59.6333, lng: 18.0, title: "Brista Project", description: "Heritage Research 2021" },
  { lat: 58.5, lng: 13.167, title: "Lidköping Project", description: "Heritage Research 2021" },
  { lat: 48.20854, lng: 12.39893, title: "Waldkraiburg Project", description: "Heritage Research 2021" },
  { lat: 64.13333, lng: 25.36667, title: "Haapavesi Project", description: "Heritage Research 2021" },
  { lat: 64.48699, lng: 24.98868, title: "Vihanti Project", description: "Heritage Research 2021" },
  { lat: 65.96456, lng: 29.18833, title: "Kuusamo Project", description: "Heritage Research 2021" },
  { lat: 60.90693, lng: 26.62419, title: "Kuusankoski Project", description: "Heritage Research 2021" },
  { lat: 62.24167, lng: 25.74958, title: "Jyväskylä Project", description: "Heritage Research 2021" },
  { lat: 61.23406, lng: 21.49075, title: "Olkiluoto Project", description: "Heritage Research 2021" },
  { lat: 64.68453, lng: 24.48163, title: "Raahe Project", description: "Heritage Research 2021" },
  { lat: 66.50255, lng: 25.73039, title: "Rovaniemi Project", description: "Heritage Research 2021" },
  { lat: 60.29299, lng: 25.04367, title: "Vantaa Project", description: "Heritage Research 2021" },
  { lat: 62.60064, lng: 29.76198, title: "Joensuu Project", description: "Heritage Research 2021" },
  { lat: 62.60322, lng: 25.73014, title: "Äänekoski Project", description: "Heritage Research 2021" },
  { lat: 62.21005, lng: 27.6889, title: "Huutokoski Project", description: "Heritage Research 2021" },
  { lat: 64.13183, lng: 28.38783, title: "Sotkamo Project", description: "Heritage Research 2021" },
  { lat: 60.16662, lng: 24.94354, title: "Helsinki Project", description: "Heritage Research 2021" },
  { lat: 65.73334, lng: 24.56665, title: "Kemi Project", description: "Heritage Research 2021" },
  { lat: 60.46727, lng: 26.94595, title: "Kotka Project", description: "Heritage Research 2021" },
  { lat: 63.07442, lng: 27.65894, title: "Siilinjärvi Project", description: "Heritage Research 2021" },
];

export function EuropeMap() {
  const { t } = useLanguage();
  const em = t.europeMap;
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      // Import leaflet CSS dynamically
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      const map = L.map(mapRef.current!, {
        center: [54, 15],
        zoom: 4,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: true,
        dragging: true,
        maxBounds: [
          [34, -25],
          [72, 45],
        ],
      });

      mapInstanceRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
        { attribution: "&copy; OpenStreetMap contributors" }
      ).addTo(map);

      projects.forEach(({ lat, lng, title, description }) => {
        L.circleMarker([lat, lng], {
          radius: 8,
          fillColor: "#EB0707",
          color: "#ffffff",
          weight: 2,
          fillOpacity: 1,
        })
          .addTo(map)
          .bindPopup(`<strong>${title}</strong><br/>${description}`);
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section
      id="projects"
      style={{ backgroundColor: "#3C4044" }}
      className="py-24 px-6 lg:px-12 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span
            style={{ color: "#EB0707", fontWeight: 500 }}
            className="text-sm uppercase tracking-widest block mb-3"
          >
            {em.eyebrow}
          </span>
          <h2
            style={{ fontWeight: 700, color: "#FFFFFF" }}
            className="text-4xl lg:text-5xl mb-4 text-balance"
          >
            {em.title}
          </h2>
          <p
            style={{ fontWeight: 400, color: "rgba(255,255,255,0.65)" }}
            className="text-base max-w-xl"
          >
            {em.subtitle}
          </p>
        </div>

        {/* Map + Stats layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Map container */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              flex: "1 1 0%",
              minHeight: "480px",
            }}
          >
            <div ref={mapRef} style={{ height: "480px", width: "100%" }} />
          </div>

          {/* Side stats panel */}
          <div className="flex flex-col gap-4 lg:w-64 shrink-0">
            {em.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .leaflet-popup-content-wrapper {
          background: #1e293b;
          color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
        }
        .leaflet-popup-tip {
          background: #1e293b;
        }
        .leaflet-popup-content strong {
          color: #EB0707;
          display: block;
          margin-bottom: 2px;
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
        }
        .leaflet-control-zoom a {
          background: #1e293b !important;
          color: #ffffff !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
        }
        .leaflet-control-zoom a:hover {
          background: #EB0707 !important;
        }
      `}</style>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: "12px",
        padding: "20px 24px",
        border: "1px solid rgba(255,255,255,0.08)",
        borderLeft: "3px solid #EB0707",
      }}
    >
      <p
        style={{ fontWeight: 700, color: "#FFFFFF" }}
        className="text-3xl mb-1"
      >
        {value}
      </p>
      <p
        style={{
          fontWeight: 400,
          color: "rgba(255,255,255,0.65)",
          fontSize: "13px",
        }}
      >
        {label}
      </p>
    </div>
  );
}
