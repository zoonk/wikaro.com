import { Locale } from "@/types";
import "../globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
  params: Locale;
};

export async function generateStaticParams(): Promise<Locale[]> {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        <meta name="theme-color" content="#4F46E5" />
      </head>

      <body>{children}</body>
    </html>
  );
}
