import type { Metadata } from "next";
import "./globals.css";

const publicBaseURL = new URL("https://ronvaisman.github.io/noisenest-support/");

export const metadata: Metadata = {
  metadataBase: publicBaseURL,
  title: { default: "NoiseNest — Offline Sleep Sounds", template: "%s · NoiseNest" },
  description: "NoiseNest is an offline iOS sleep-sound mixer with no ads, account, or tracking.",
  alternates: { canonical: publicBaseURL },
  icons: {
    icon: "/noisenest-support/app-icon.png",
    apple: "/noisenest-support/app-icon.png",
  },
  openGraph: {
    title: "NoiseNest",
    description: "Sleep sounds without the noise. Offline, with no ads or account.",
    type: "website",
    url: publicBaseURL,
    images: [{
      url: "https://ronvaisman.github.io/noisenest-support/og.png",
      width: 1536,
      height: 1024,
      alt: "NoiseNest — Sleep sounds without the noise",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoiseNest",
    description: "Sleep sounds without the noise. Offline, with no ads or account.",
    images: ["https://ronvaisman.github.io/noisenest-support/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
