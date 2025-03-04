import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Theme from "@/context/Theme";
import Navbar from "@/components/navigation/navbar";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
});

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Inanc Ciftci | Portfolio",
  description: "Inanc Ciftci's Portfolio Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${robotoMono.className} ${inter.variable} antialiased bg-white dark:bg-black`}
      >
        <Theme attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
