import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { Inter,Hedvig_Letters_Serif } from 'next/font/google'
import { GeistSans } from 'geist/font/sans';
 
const inter = Inter({ subsets: ['latin'] })



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
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
