import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "리뉴얼 포트폴리오",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
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