import { Globe, Layers, ShieldCheck, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const icons = [Globe, Layers, ShieldCheck, TrendingUp];

export function FeatureGrid() {
  const { t } = useLanguage();
  const fg = t.featureGrid;

  return (
    <section
      style={{ backgroundColor: "#3C4044", fontFamily: "'Poppins', sans-serif" }}
      className="py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            style={{ fontWeight: 700, color: "#FFFFFF" }}
            className="text-4xl lg:text-5xl mb-4"
          >
            {fg.title}
          </h2>
          <p
            style={{ fontWeight: 400, color: "rgba(255,255,255,0.70)" }}
            className="text-base max-w-xl mx-auto"
          >
            {fg.subtitle}
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {fg.features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} icon={icons[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  icon: Icon,
}: {
  feature: { title: string; description: string };
  icon: React.ElementType;
}) {
  return (
    <div
      style={{
        backgroundColor: "#4A5055",
        borderRadius: "16px",
        padding: "28px 24px",
        borderLeft: "3px solid transparent",
        cursor: "default",
        transition: "border-left-color 250ms ease-in-out, box-shadow 250ms ease-in-out",
      }}
      className="feature-card"
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "10px",
          backgroundColor: "rgba(235,7,7,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <Icon size={22} style={{ color: "#EB0707" }} />
      </div>
      <h3 style={{ fontWeight: 600, color: "#FFFFFF" }} className="text-base mb-2">
        {feature.title}
      </h3>
      <p style={{ fontWeight: 400, color: "rgba(255,255,255,0.65)" }} className="text-sm leading-relaxed">
        {feature.description}
      </p>

      <style>{`
        .feature-card:hover {
          border-left-color: #EB0707 !important;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.25) !important;
        }
      `}</style>
    </div>
  );
}
