import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AUSI Services – Find Trusted House Helpers",
  description:
    "AUSI Services connects home owners with verified, professional house helpers. Manage schedules, payments, and tasks all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
