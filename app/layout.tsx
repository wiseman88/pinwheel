import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Pinwheel",
  description: "Here goes meta description for your website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${merriweather.variable} overflow-x-hidden bg-gray-50 leading-relaxed text-gray-900`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
