import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AUSI Signature Staffing – Find Trusted House Helpers",
  description:
    "AUSI Signature Staffing connects home owners with verified, professional house helpers across South Africa. Manage schedules, payments, and tasks all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sankofa+Display&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
