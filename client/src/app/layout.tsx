import type { Metadata } from "next";
import { Anton, Roboto_Mono, PT_Sans_Narrow } from "next/font/google";
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

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans-narrow",
});

export const metadata: Metadata = {
  title: "Andrey Zimatskiy — Developer/Automation Specialist",
  description: "Personal portfolio of Andrey Zimatskiy, a developer and automation specialist based in Saint-Petersburg, Russia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${robotoMono.variable} ${ptSansNarrow.variable} font-sans bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
