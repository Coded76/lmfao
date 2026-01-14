import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "$LMFAO - Laugh Your Fucking Ass Off Coin",
  description: "Laugh your way to profits with $LMFAO. A community-driven meme token built on transparency and humor. Join the funniest crypto movement on the blockchain.",
  keywords: ["LMFAO", "meme coin", "crypto", "DeFi", "community"],
  authors: [{ name: "$LMFAO Community" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      {
        url: "/assets/IMG-20260113-WA0007.jpg",
        type: "image/jpeg",
      },
    ],
    shortcut: "/assets/IMG-20260113-WA0007.jpg",
    apple: "/assets/IMG-20260113-WA0007.jpg",
  },
  openGraph: {
    title: "$LMFAO - Laugh Your Fucking Ass Off Coin",
    description: "Laugh your way to profits with $LMFAO. A community-driven meme token built on transparency and humor.",
    url: "https://lmfao.site",
    type: "website",
    images: [
      {
        url: "/assets/IMG-20260113-WA0007.jpg",
        width: 1200,
        height: 1200,
        alt: "$LMFAO Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$LMFAO - Laugh Your Fucking Ass Off Coin",
    description: "Laugh your way to profits with $LMFAO. A community-driven meme token.",
    image: "/assets/IMG-20260113-WA0007.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
