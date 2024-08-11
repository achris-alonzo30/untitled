import "@/styles/globals.css";
import { type Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/Header";


export const metadata: Metadata = {
  title: "Untitled",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${GeistSans.variable} h-full w-full`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
