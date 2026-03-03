import imgProjektipalvelut from "figma:asset/21cf9039b0f0e2f72b32c98d7ca865b7753b7210.png";
import imgSuunnittelu from "figma:asset/1fb205236c37c73249e7305f6dff8aa472af5200.png";
import { useLanguage } from "../context/LanguageContext";

const imgUrakointi =
  "https://images.unsplash.com/photo-1738248427115-3489f1aaa337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VycyUyMHdlbGRpbmclMjBzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMHNjYWZmb2xkaW5nfGVufDF8fHx8MTc3MjQ1NjAxOHww&ixlib=rb-4.1.0&q=80&w=1080";

const blockMeta = [
  { bg: "#FFFFFF", textColor: "#3C4044", imageLeft: true, image: imgProjektipalvelut },
  { bg: "#3C4044", textColor: "#FFFFFF", imageLeft: false, image: imgSuunnittelu },
  { bg: "#FFFFFF", textColor: "#3C4044", imageLeft: true, image: imgUrakointi },
];

export function ServiceDetails() {
  const { t } = useLanguage();

  return (
    <section style={{ fontFamily: "'Poppins', sans-serif" }}>
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
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ height: "420px", maxHeight: "420px" }}
          />
        </div>

        {/* Text content */}
        <div className={`w-full md:w-1/2 ${imageLeft ? "md:order-2" : "md:order-1"}`}>
          <h3
            style={{ fontWeight: 700, color: textColor }}
            className="text-3xl lg:text-4xl mb-6"
          >
            {title}
          </h3>

          <ul className="space-y-3 mb-8">
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
            href="#"
            style={{
              backgroundColor: "#EB0707",
              color: "#FFFFFF",
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "14px",
              transition: "transform 200ms ease, filter 200ms ease",
            }}
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
