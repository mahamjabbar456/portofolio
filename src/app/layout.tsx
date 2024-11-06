import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const poppins = Poppins({ subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Maham Portofolio",
  description: "I created my portofolio with the help of next js, tailwind css and framer motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
