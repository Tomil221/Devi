import aboutImage from "figma:asset/6c5b6edd544b4a31b3d07373c9bf787ffba7d5b3.png";
import { useLanguage } from "../context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section
      style={{ backgroundColor: "#1A1C1E", fontFamily: "'Poppins', sans-serif" }}
      className="py-24 px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left – Image */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                height: "480px",
              }}
            >
              <img
                src={aboutImage}
                alt={a.imgAlt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* Red bottom-left accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "4px",
                  height: "60%",
                  backgroundColor: "#EB0707",
                }}
              />
              {/* Experience badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "32px",
                  right: "32px",
                  backgroundColor: "#EB0707",
                  borderRadius: "8px",
                  padding: "16px 24px",
                  textAlign: "center",
                }}
              >
                <p style={{ fontWeight: 700, color: "#FFFFFF", fontSize: "32px", lineHeight: 1 }}>
                  20+
                </p>
                <p style={{ fontWeight: 400, color: "rgba(255,255,255,0.85)", fontSize: "12px", marginTop: "4px" }}>
                  {a.yearsLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Right – Text */}
          <div className="w-full lg:w-1/2">
            <span
              style={{ color: "#EB0707", fontWeight: 500 }}
              className="text-sm uppercase tracking-widest mb-3 block"
            >
              {a.eyebrow}
            </span>
            <h2
              style={{ fontWeight: 700, color: "#FFFFFF" }}
              className="text-4xl lg:text-5xl mb-6"
            >
              {a.title}
            </h2>

            <p
              style={{ fontWeight: 400, color: "rgba(255,255,255,0.70)", lineHeight: 1.8 }}
              className="text-base mb-6"
            >
              {a.p1}
            </p>
            <p
              style={{ fontWeight: 400, color: "rgba(255,255,255,0.70)", lineHeight: 1.8 }}
              className="text-base mb-10"
            >
              {a.p2}
            </p>

            {/* Industry tags */}
            <div className="flex flex-wrap gap-3">
              {a.industries.map((industry) => (
                <span
                  key={industry}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(235,7,7,0.30)",
                    color: "rgba(255,255,255,0.80)",
                    borderRadius: "4px",
                    padding: "6px 14px",
                    fontSize: "13px",
                    fontWeight: 400,
                  }}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
