import { NextIntlClientProvider, useMessages } from "next-intl";
import type { Metadata } from "next";
import { Cairo as FontSans } from "next/font/google";
import "../globals.css";

import { cn } from "@/lib/utils";
import useTextDirection from "@/hook/useTextDirection";
import LocaleSwitcher from "@/components/header/LocaleSwitcher";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"], 
  variable: "--font-sans",
});

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const direction = useTextDirection(locale);
  const messages = useMessages();

  return (
    <html lang={locale} dir={direction}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-slate-100",
          fontSans.variable
        )}
      >
        <main className={`${direction === "rtl" && "text-right"}`}>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
