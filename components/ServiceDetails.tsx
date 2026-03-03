"use client";

import { useLanguage } from "@/components/context/LanguageContext";

const INDUSTRIAL_IMAGE =
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const ENGINEERING_IMAGE =
  "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const CONTRACTING_IMAGE =
  "https://images.unsplash.com/photo-1738248427115-3489f1aaa337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VycyUyMHdlbGRpbmclMjBzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMHNjYWZmb2xkaW5nfGVufDF8fHx8MTc3MjQ1NjAxOHww&ixlib=rb-4.1.0&q=80&w=1080";

const blockMeta = [
  { bg: "#FFFFFF", textColor: "#3C4044", imageLeft: true, image: INDUSTRIAL_IMAGE },
  { bg: "#3C4044", textColor: "#FFFFFF", imageLeft: false, image: ENGINEERING_IMAGE },
  { bg: "#FFFFFF", textColor: "#3C4044", imageLeft: true, image: CONTRACTING_IMAGE },
];

export function ServiceDetails() {
  const { t } = useLanguage();

  return (
    <section className="font-sans">
      {t.serviceDetails.blocks.map((block, index) => (
        <ServiceBlock
          key={index}
          title={block.title}
          bullets={block.bullets}
          cta={block.cta}
          meta={blockMeta[index]}
        />
      ))}
    </section>
  );
}

function ServiceBlock({
  title,
  bullets,
  cta,
  meta,
}: {
  title: string;
  bullets: string[];
  cta: string;
  meta: { bg: string; textColor: string; imageLeft: boolean; image: string };
}) {
  const { bg, textColor, imageLeft, image } = meta;

  return (
    <div
      style={{ backgroundColor: bg }}
      className="py-20 px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Image */}
        <div
          className={`w-full md:w-1/2 ${imageLeft ? "md:order-1" : "md:order-2"}`}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%)",
            height: "420px",
            maxHeight: "420px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ height: "420px", maxHeight: "420px" }}
          />
        </div>

        {/* Text content */}
        <div
          className={`w-full md:w-1/2 ${imageLeft ? "md:order-2" : "md:order-1"}`}
        >
          <h3
            style={{ fontWeight: 700, color: textColor }}
            className="text-3xl lg:text-4xl mb-6"
          >
            {title}
          </h3>

          <ul className="flex flex-col gap-3 mb-8">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span
                  style={{
                    marginTop: "6px",
                    flexShrink: 0,
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#EB0707",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{ fontWeight: 400, color: textColor, opacity: 0.85 }}
                  className="text-sm leading-relaxed"
                >
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            style={{
              backgroundColor: "#EB0707",
              color: "#FFFFFF",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "14px",
              transition: "transform 200ms ease, filter 200ms ease",
            }}
            className="font-sans"
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "scale(1.03)";
              el.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "scale(1)";
              el.style.filter = "brightness(1)";
            }}
          >
            {cta}
          </a>
        </div>
      </div>
    </div>
  );
}
