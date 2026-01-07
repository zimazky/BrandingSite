import type { Metadata } from "next";
import { Anton, Roboto_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Olha Lazareva — Creative Designer",
  description: "Personal portfolio of Olha Lazareva, a creative designer based in Ukraine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${robotoMono.variable} font-sans bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
