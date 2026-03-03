"use client";

import React, { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "fi" | "en";

export const translations = {
  fi: {
    navbar: {
      links: ["Palvelut", "Meistä", "Projektit", "Yhteystiedot"],
      cta: "Ota Yhteyttä",
    },
    hero: {
      eyebrow: "Teollisuuden asiantuntijat",
      h1_parts: {
        line1: "Räätälöidyt palvelut",
        line2_red: "terässäiliö, putkisto",
        line3_prefix: "ja ",
        line3_red: "teräsrakenne",
        line3_suffix: " tarpeisiin.",
      },
      body: "Autamme teollisuusyrityksiä projekteissa, suunnittelussa ja resursoinnissa. Selkeästi ja tehokkaasti.",
      cta1: "Tutustu palveluihin",
      cta2: "Lue lisää",
      imgAlt: "Teollisuuslaitos",
    },
    featureGrid: {
      title: "Miksi valita meidät",
      subtitle:
        "Teemme teollisuuden haasteista ratkottavia käytännönläheisesti ja tehokkaasti.",
      features: [
        {
          title: "Laaja verkosto",
          description:
            "Meillä on kumppaneita ja kokemusta jo 4 maasta joten rajat eivät ole este.",
        },
        {
          title: "Kokonaisvaltainen palvelu",
          description:
            "Hoidamme projektin alusta loppuun ammattitaidolla, jotta sinun ei tarvitse huolehtia välivaiheista.",
        },
        {
          title: "Riskienhallinta",
          description:
            "Tunnistamme ongelmat ennen kuin niistä tulee ongelmia. Meillä projektit pysyy aikataulussa sekä budjetissa.",
        },
        {
          title: "Joustava kasvu",
          description:
            "Palvelumme yrityksesi tarpeiden mukaisesti, oli kyse sitten pienestä hankkeesta tai isosta kokonaisuudesta.",
        },
      ],
    },
    whatWeOffer: {
      title: "Mitä teemme",
      subtitle:
        "Kolme selkeää palvelukokonaisuutta, jotka kattavat teollisuusyritysten tärkeimmät tarpeet.",
      services: [
        {
          title: "Teollisuuden projektipalvelut",
          description:
            "Viedään projektit maaliin ajallaan ja budjetin puitteissa. Hoidamme johtamisen, koordinoinnin ja seurannan alusta loppuun.",
          cta: "Lue lisää",
        },
        {
          title: "Suunnittelupalvelut",
          description:
            "Teemme selkeitä suunnitelmia, jotka toimivat. Prosessisuunnittelusta pitkän tähtäimen kehityssuunnitelmiin.",
          cta: "Lue lisää",
        },
        {
          title: "Urakointi ja resurssipalvelut",
          description:
            "Ammattitaitoiset tekijät projektiisi joustavasti ja nopeasti. Täydennämme oman tiimisi osaamista tarpeidenne mukaan.",
          cta: "Lue lisää",
        },
      ],
    },
    serviceDetails: {
      blocks: [
        {
          title: "Teollisuuden projektipalvelut",
          bullets: [
            "Säiliöt, putkistot, laiteasennukset, teräsrakenteet ja huoltoseisakit",
            "Asennusvalvontaa",
            "Pääurakointipalveluita",
            "Työmaajohtoa",
          ],
          cta: "Kerro projektistasi",
        },
        {
          title: "Suunnittelupalvelut asiakkaan tarpeisiin",
          bullets: [
            "Esisuunnittelu",
            "Suunnittelun johto",
            "Viranomaishyväksynnät",
            "Dokumentointi",
          ],
          cta: "Pyydä tarjous",
        },
        {
          title: "Urakointi ja resurssit",
          bullets: [
            "Asennusurakointi",
            "Huoltoseisakit",
            "Työvoiman välitys",
          ],
          cta: "Kysy resursseista",
        },
      ],
    },
    about: {
      eyebrow: "Meistä",
      title: "Vuosikymmenten kokemus teollisuuden projekteista",
      p1: "Asiakkaamme toimivat eri teollisuudenaloilla Euroopassa. Toteutamme myös välivarastointiin tarkoitettuja säiliöitä logistiikan tarpeisiin.",
      p2: "Laajan asiantuntemuksen ja joustavien toimintatapojemme ansiosta löydämme ratkaisut hankaliinkin ongelmakohtiin.",
      yearsLabel: "vuotta kokemusta",
      industries: [
        "Kemianteollisuus",
        "Energiateollisuus",
        "Sellu- ja paperiteollisuus",
        "Kaivosteollisuus",
        "Ympäristöteknologia",
        "Logistiikka ja välivarastointi",
      ],
      imgAlt: "Devisor teollisuusprojekti",
    },
    europeMap: {
      eyebrow: "Toimialueemme",
      title: "Projekteja ympäri Eurooppaa",
      subtitle:
        "Meidän työ kattaa merkittäviä kaupunkeja ja alueita ympäri Euroopan.",
      stats: [
        { value: "24+", label: "Tehtyä projektia" },
        { value: "4+", label: "Toimintamaata" },
        { value: "20+", label: "Vuotta kokemusta" },
      ],
    },
    contact: {
      eyebrow: "Ota yhteyttä",
      title: "Jäikö jokin mietityttämään?",
      phoneLabel: "Puhelin",
      phoneSub: "Ma–Pe klo 8–17",
      emailLabel: "Sähköposti",
      emailSub: "Vastaamme yleensä saman päivän aikana",
      panelTitle: "Pyydä tarjous, autamme mielellämme.",
      panelBody:
        "Kerro meille lyhyesti mitä tarvitset, projektipalvelua, suunnittelua vai resursointia. Ota yhteyttä ja käydään tilanne läpi yhdessä.",
      bullets: [
        "Vastaamme yleensä saman päivän aikana",
        "Maksuton alkukartoitus",
      ],
    },
    footer: {
      brand:
        "Devisor on teollisuudenalan asiantuntija, joka auttaa organisaatioita rakentamaan kestäviä strategioita.",
      servicesHeading: "Palvelut",
      siteHeading: "Sivusto",
      contactHeading: "Yhteystiedot",
      services: [
        "Teollisuuden projektipalvelut",
        "Suunnittelupalvelut",
        "Urakointi ja resurssipalvelut",
      ],
      nav: [
        "Miksi Devisor?",
        "Mitä teemme",
        "Toiminta-alueemme",
        "Ota yhteyttä",
      ],
      copyright: "© 2026 Devisor. Kaikki oikeudet pidätetään.",
      legal: "Tietosuojakäytäntö · Käyttöehdot",
    },
  },
  en: {
    navbar: {
      links: ["Services", "About", "Projects", "Contact"],
      cta: "Contact Us",
    },
    hero: {
      eyebrow: "Industrial Experts",
      h1_parts: {
        line1: "Tailored services for",
        line2_red: "steel tanks, piping",
        line3_prefix: "and ",
        line3_red: "steel structures",
        line3_suffix: ".",
      },
      body: "We help industrial companies with projects, engineering and resourcing. Clearly and efficiently.",
      cta1: "Explore services",
      cta2: "Learn more",
      imgAlt: "Industrial plant",
    },
    featureGrid: {
      title: "Why choose us?",
      subtitle:
        "We turn industrial challenges into solvable problems — practically and efficiently.",
      features: [
        {
          title: "Extensive network",
          description:
            "We have partners and experience in 4 countries, so borders are no obstacle.",
        },
        {
          title: "End-to-end service",
          description:
            "We manage the project from start to finish, so you don't have to worry about the in-between.",
        },
        {
          title: "Risk management",
          description:
            "We identify problems before they become problems. Projects stay on schedule and within budget.",
        },
        {
          title: "Flexible growth",
          description:
            "Our services scale to your needs, whether it's a small assignment or a large undertaking.",
        },
      ],
    },
    whatWeOffer: {
      title: "What We Do",
      subtitle:
        "Three clear service areas covering the most important needs of industrial companies.",
      services: [
        {
          title: "Industrial project services",
          description:
            "We deliver projects on time and within budget. We handle management, coordination and follow-up from start to finish.",
          cta: "Read more",
        },
        {
          title: "Engineering services",
          description:
            "We create clear plans that work. From process engineering to long-term development plans.",
          cta: "Read more",
        },
        {
          title: "Contracting & resource services",
          description:
            "Skilled professionals for your project — flexibly and quickly. We complement your team's capabilities as needed.",
          cta: "Read more",
        },
      ],
    },
    serviceDetails: {
      blocks: [
        {
          title: "Industrial project services",
          bullets: [
            "Tanks, pipelines, equipment installations, steel structures and maintenance shutdowns",
            "Installation supervision",
            "Main contracting services",
            "Site management",
          ],
          cta: "Tell us about your project",
        },
        {
          title: "Engineering services for your needs",
          bullets: [
            "Pre-engineering",
            "Engineering management",
            "Regulatory approvals",
            "Documentation",
          ],
          cta: "Request a quote",
        },
        {
          title: "Contracting & resources",
          bullets: [
            "Installation contracting",
            "Maintenance shutdowns",
            "Workforce supply",
          ],
          cta: "Ask about resources",
        },
      ],
    },
    about: {
      eyebrow: "About Us",
      title: "Decades of experience in industrial projects",
      p1: "Our clients operate across various industries in Europe. We also manufacture storage tanks for logistics purposes.",
      p2: "Thanks to our broad expertise and flexible approach, we find solutions even to the most challenging problems.",
      yearsLabel: "years of experience",
      industries: [
        "Chemical industry",
        "Energy industry",
        "Pulp & paper industry",
        "Mining industry",
        "Environmental technology",
        "Logistics & interim storage",
      ],
      imgAlt: "Devisor industrial project",
    },
    europeMap: {
      eyebrow: "Our operating area",
      title: "Projects across Europe",
      subtitle:
        "Our work covers significant cities and regions across Europe.",
      stats: [
        { value: "24+", label: "Completed projects" },
        { value: "4+", label: "Operating countries" },
        { value: "20+", label: "Years of experience" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Got something on your mind?",
      phoneLabel: "Phone",
      phoneSub: "Mon–Fri 8am–5pm",
      emailLabel: "Email",
      emailSub: "We typically respond the same day",
      panelTitle: "Request a quote — we're happy to help.",
      panelBody:
        "Tell us briefly what you need — project services, engineering or resourcing. Get in touch and we'll go through the situation together.",
      bullets: [
        "We typically respond the same day",
        "Free initial consultation",
      ],
    },
    footer: {
      brand:
        "Devisor is an industrial sector expert helping organisations build sustainable strategies.",
      servicesHeading: "Services",
      siteHeading: "Site",
      contactHeading: "Contact",
      services: [
        "Industrial project services",
        "Engineering services",
        "Contracting & resource services",
      ],
      nav: ["Why Devisor?", "What we do", "Our operating area", "Contact"],
      copyright: "© 2026 Devisor. All rights reserved.",
      legal: "Privacy Policy · Terms of Use",
    },
  },
};

type Translations = typeof translations.fi;

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("fi");
  const t = translations[lang] as Translations;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
