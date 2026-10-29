import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreya Manjera — Designer & Developer",
  description: "Portfolio of Shreya Manjera, web designer, frontend developer and UI/UX designer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
