import "@/styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5tupidmuffin",
  description: "just an avg dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>5tupidmuffin</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://avatars.githubusercontent.com/u/43025025?v=4" // github pfp
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
