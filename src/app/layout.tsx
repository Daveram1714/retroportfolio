import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Daveram A — Full Stack Developer",
    template: "%s | Daveram A",
  },
  description:
    "Daveram A is a Full Stack Developer building thoughtful web experiences with React, Next.js, Node.js and TypeScript.",
  applicationName: "Daveram.OS",
  keywords: [
    "Daveram A",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Next.js",
    "Coimbatore",
  ],
  openGraph: {
    type: "website",
    title: "Daveram A — Full Stack Developer",
    description:
      "A personal digital playground showcasing projects, skills and experiments.",
    siteName: "Daveram.OS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daveram A — Full Stack Developer",
    description: "Building thoughtful web experiences with modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
