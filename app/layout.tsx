import "@/styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5tupidmuffin",
  description: "Full Stack Developer based in Mumbai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://avatars.githubusercontent.com/u/43025025?v=4" // github pfp
        ></link>
        <link rel="canonical" href="https://5tupidmuffin.github.io/" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Rameshwar Kamble | 5tupidmuffin"
        />
        <meta name="description" content="Portfolio of 5tupidmuffin" />
        <meta property="og:title" content="Rameshwar Kamble | 5tupidmuffin" />
        <meta
          property="og:description"
          content="Portfolio of 5tupidmuffin"
        />
        <meta property="og:url" content="https://5tupidmuffin.github.io/" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </head>
      <body>{children}</body>
    </html>
  );
}
