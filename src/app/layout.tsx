// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

// 这里示例使用 Inter 字体，你可以换成需要的 Google Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taizhou Youjiu Trading Co., Ltd.",
  description: "Professional Supplier of Magnetic Materials, Enameled Wire, Electric Motorcycle & More",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
