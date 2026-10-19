import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Refyn Venture — Software that moves business forward.",
  description:
    "Refyn Venture is a software venture studio and systems engineering lab founded by Tanvir Anjum Refat. Home of Dr.Page, Pristha, and high-integrity enterprise operational systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+Bengali:wght@400;500;600&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[#FFFFFF] text-[#121317] antialiased selection:bg-[#121317] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
