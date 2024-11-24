import "@/public/globals.css";
import Footer from "@/scaffold/Footer";
import type { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Uphoria",
    default: "Uphoria",
  },
  description:
    "UPHORIA: Redefining financial freedom with cutting-edge AI tools and expert-driven resources. Unlock skill-building opportunities, gain financial knowledge, and take control of your future. Join the movement toward success and empowerment with UPHORIA—the ultimate platform for achieving your financial goals.",
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s — Uphoria",
      default: "Uphoria",
    },
    creator: "@uphoria",
    description:
      "UPHORIA: Redefining financial freedom with cutting-edge AI tools and expert-driven resources. Unlock skill-building opportunities, gain financial knowledge, and take control of your future. Join the movement toward success and empowerment with UPHORIA—the ultimate platform for achieving your financial goals.",
    images: ["/promo-image.jpg"],
  },

  other: {
    "google-site-verification": "sqsJwdYR5ZIcNWbO7-ebNMCFDOzPgyn4NnaktgI7rWM",
  },
  keywords:
    "financial freedom, cryptocurrency mining, passive income, social media monetization, digital learning, advanced earning models, daily rewards, Uphoria platform, uphoria, uphorianet",
  openGraph: {
    title: {
      template: "%s — Uphoria",
      default: "Uphoria",
    },
    description:
      "UPHORIA: Redefining financial freedom with cutting-edge AI tools and expert-driven resources. Unlock skill-building opportunities, gain financial knowledge, and take control of your future. Join the movement toward success and empowerment with UPHORIA—the ultimate platform for achieving your financial goals.",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: `uphoria promo image`,
      },
    ],
  },
  // metadataBase: new URL(
  //   process.env.NEXT_PUBLIC_APP_BASE_URL || "https://localhost:3000"
  // ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
