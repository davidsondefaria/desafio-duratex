import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Desafio Duratex",
  description: "O desafio Duratex foi reproduzir o site da DECOR.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header className={roboto.className} />
        <main className={twMerge(roboto.className, "relative top-[70px]")}>
          {children}
        </main>
      </body>
    </html>
  );
}
