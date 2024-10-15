import type { Metadata } from "next";
import { Alkatra, Nothing_You_Could_Do, Poppins, Prosto_One } from "next/font/google";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";



const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-nothing-you-could-do",
});
const prostoOne = Prosto_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-prosto",
});

const alkatra = Alkatra({
  weight:['400'],
  subsets:['latin'],
  variable:"--font-alatra"
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pro Study Mate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${prostoOne.variable} ${nothingYouCouldDo.variable} ${alkatra.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
