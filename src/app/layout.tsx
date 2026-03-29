import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PulseCircle | Cardiac Rehab",
  description: "Your home-based cardiac recovery companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}