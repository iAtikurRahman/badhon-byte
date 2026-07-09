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
    default: "BadhonByte | Software Solution",
    template: "%s | BadhonByte",
  },
  description:
    "ERP and POS software for businesses. Permanent license with yearly service or monthly subscription. Based in Rajshahi, Bangladesh.",
  keywords: [
    'ERP', 'POS', 'Nexra ERP', 'production factory software',
    'manufacturing management', 'inventory management', 'supply chain management',
    'warehouse management', 'factory management software',
    'business management system', 'accounting software', 'HR management',
    'CRM software', 'custom software solution', 'web application development',
    'mobile app development', 'cloud services', 'digital marketing',
    'Rajshahi software company', 'Bangladesh software company',
    'bilingual ERP', 'multi-company ERP', 'AI business insights',
    'point of sale system', 'enterprise resource planning'
  ],
  robots: { index: true, follow: true },
  icons: [
    { rel: 'icon', url: '/BadhonByte.png', type: 'image/png' },
  ],
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    siteName: 'BadhonByte',
    url: 'https://badhonbyte.com',
    title: "BadhonByte | Software Solution",
    description:
      "ERP and POS software for businesses. Permanent license with yearly service or monthly subscription.",
    images: [{ url: '/BadhonByte.png', width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary',
    title: "BadhonByte | Software Solution",
    description:
      "ERP and POS software for businesses. Permanent license with yearly service or monthly subscription.",
    images: ['/BadhonByte.png'],
  },
  alternates: {
    languages: {
      'bn-BD': '/',
      'en-US': '/en',
    },
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
