import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CursorFollower } from "../components/CursorFollower";
import { Noise } from "../components/Noise";
import { Preloader } from "../components/Preloader";
import { UndergroundFooter } from "../components/UndergroundFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Adarsh Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Preloader />
        <Noise />
        <CursorFollower />
        <div className="relative z-10 bg-black">
          {children}
        </div>
        <UndergroundFooter />
      </body>
    </html>
  );
}
