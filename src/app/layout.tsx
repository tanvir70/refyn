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
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[#F7F7F4] text-[#111318] selection:bg-[#0F172A] selection:text-[#F7F7F4]">
        {children}
      </body>
    </html>
  );
}
