import { Mail, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const c = t.contact;

  const contactItems = [
    {
      icon: Phone,
      label: c.phoneLabel,
      value: "+358 040 713 0818",
      sub: c.phoneSub,
      href: "tel:+358 040 713 0818",
    },
    {
      icon: Mail,
      label: c.emailLabel,
      value: "timo.jokinen@devisor.fi",
      sub: c.emailSub,
      href: "mailto:timo.jokinen@devisor.fi",
    },
  ];

  return (
    <section
      style={{ backgroundColor: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
      className="py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span
            style={{ color: "#EB0707", fontWeight: 500 }}
            className="text-sm uppercase tracking-widest mb-3 block"
          >
            {c.eyebrow}
          </span>
          <h2
            style={{ fontWeight: 700, color: "#3C4044" }}
            className="text-4xl lg:text-5xl"
          >
            {c.title}
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactItems.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </div>

          {/* Right: dark panel */}
          <div
            style={{
              backgroundColor: "#3C4044",
              borderRadius: "16px",
              padding: "48px 40px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Left red accent bar */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", backgroundColor: "#EB0707" }} />

            <h3
              style={{ fontWeight: 700, color: "#FFFFFF" }}
              className="text-2xl mb-4"
            >
              {c.panelTitle}
            </h3>
            <p
              style={{ fontWeight: 400, color: "rgba(255,255,255,0.70)" }}
              className="text-sm leading-relaxed mb-8"
            >
              {c.panelBody}
            </p>

            <div className="space-y-4">
              {c.bullets.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div
                    style={{
                      marginTop: "5px",
                      width: 8,
                      height: 8,
                      flexShrink: 0,
                      backgroundColor: "#EB0707",
                      transform: "rotate(45deg)",
                    }}
                  />
                  <span style={{ color: "rgba(255,255,255,0.80)", fontWeight: 400 }} className="text-sm">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  item,
}: {
  item: { icon: React.ElementType; label: string; value: string; sub: string; href: string };
}) {
  const Icon = item.icon;

  const inner = (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(60,64,68,0.10)",
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "box-shadow 200ms ease, border-color 200ms ease",
        cursor: item.href ? "pointer" : "default",
      }}
      className="contact-card"
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "10px",
          backgroundColor: "rgba(235,7,7,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={20} style={{ color: "#EB0707" }} />
      </div>
      <div>
        <p style={{ fontWeight: 600, color: "#3C4044" }} className="text-sm mb-1">{item.label}</p>
        <p style={{ fontWeight: 500, color: "#3C4044" }} className="text-base">{item.value}</p>
        <p style={{ fontWeight: 400, color: "#3C4044" }} className="text-xs mt-1 opacity-55">{item.sub}</p>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        .contact-card:hover {
          box-shadow: 0 6px 24px rgba(60,64,68,0.12) !important;
          border-color: rgba(235,7,7,0.25) !important;
        }
      `}</style>
      {item.href ? (
        <a href={item.href} style={{ textDecoration: "none" }}>{inner}</a>
      ) : (
        inner
      )}
    </>
  );
}
