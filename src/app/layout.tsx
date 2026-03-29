import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PulseCircle",
  description: "Cardiac Rehab Companion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 flex justify-center">
        {/* Mobile Container: Forces a vertical phone aspect ratio on desktop */}
        <div className="w-full max-w-[430px] min-h-screen bg-[#FDFBF7] shadow-2xl relative overflow-x-hidden border-x border-slate-200">
          {children}
        </div>
      </body>
    </html>
  );
}