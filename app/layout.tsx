import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        <meta name="theme-color" content="#4F46E5" />
      </head>

      <body>{children}</body>
    </html>
  );
}
