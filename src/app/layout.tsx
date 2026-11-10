import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daveram A — Digital Playground",
  description: "The personal portfolio of Daveram A, Full Stack Developer.",
  metadataBase: new URL("https://github.com/Daveram1714")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}