import { LanguageParams } from "@/types";
import type { Metadata, Viewport } from "next";
import colors from "tailwindcss/colors";

import "../globals.css";
import Header from "@/components/Header";

type RootLayoutProps = {
  children: React.ReactNode;
  params: LanguageParams;
};

export const viewport: Viewport = {
  themeColor: colors.indigo[600],
  colorScheme: "light",
};

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  category: "education",
  metadataBase: new URL("https://wikaro.com"),
};

export async function generateStaticParams(): Promise<LanguageParams[]> {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html
      lang={params.lang}
      className="h-full scroll-smooth bg-white antialiased"
    >
      <body className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <Header locale={params.lang} />
        {children}
      </body>
    </html>
  );
}
