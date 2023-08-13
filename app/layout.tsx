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
      </head>
      <body>{children}</body>
    </html>
  );
}
