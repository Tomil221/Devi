import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Devisor OY - Teollisuuden asiantuntijat",
  description:
    "Räätälöidyt palvelut terässäiliö, putkisto ja teräsrakenne tarpeisiin. Autamme teollisuusyrityksiä projekteissa, suunnittelussa ja resursoinnissa.",
  keywords: [
    "teollisuus",
    "projektipalvelut",
    "suunnittelupalvelut",
    "urakointi",
    "terässäiliö",
    "putkisto",
    "teräsrakenne",
    "Devisor",
  ],
};

export const viewport: Viewport = {
  themeColor: "#3C4044",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
