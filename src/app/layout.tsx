import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { GeistSans } from 'geist/font/sans';
import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
 

export const metadata: Metadata = {
  title: "Abhyasa",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-dvh ${GeistSans.className}`}
      >
        <StickyNav/>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Footer/>
      </body>
    </html>
  );
}
