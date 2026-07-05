import type { Metadata } from "next";
import { Fira_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--body-font",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

export const metadata: Metadata = {
  title: {
    default: "Badhon Byte | Software Solutions",
    template: "%s | Badhon Byte",
  },
  description:
    "ERP and POS software for businesses. Permanent license with yearly service or monthly subscription. Based in Rajshahi, Bangladesh.",
  openGraph: {
    title: "Badhon Byte | Software Solutions",
    description:
      "ERP and POS software for businesses. Permanent license with yearly service or monthly subscription.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${firaSans.variable} ${poppins.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
