import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderMain from "@/components/shared/main-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SidebarMain from "@/components/shared/sidebar";
import { ModalProvider } from "@/components/providers/modal-provider";
import HeaderMobile from "@/components/shared/header-mobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider />
          <div>
            <HeaderMain />
            <HeaderMobile />
            <SidebarMain />
            <main className="ml-0 md:ml-60 p-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
