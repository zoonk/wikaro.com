import { Locale } from "@/types";
import type { Metadata, Viewport } from "next";
import colors from "tailwindcss/colors";

import "../globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
  params: Locale;
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

export async function generateStaticParams(): Promise<Locale[]> {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
