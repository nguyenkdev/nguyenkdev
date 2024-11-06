import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Lato } from "next/font/google";
import Navbar from "@/components/navbar";
import Contact from "@/components/Contact";
import CopyrightFooter from "@/components/CopyrightFooter";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "NguyenkDev",
  description: "NguyenkDev Portfolio Frontend Developer",
  icons: {
    icon: "/assets/logo-icon.svg",
  },
};

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-lato",
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${lato.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="lato">{children}</main>
            <Contact />
            <CopyrightFooter />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
