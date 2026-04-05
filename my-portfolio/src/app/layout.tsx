import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "리뉴얼 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="ko" 
      suppressHydrationWarning 
    >
      <body className="font-sans antialiased text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}