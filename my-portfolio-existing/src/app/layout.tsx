import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation"; // 아래에서 만들 컴포넌트

export const metadata: Metadata = {
  title: "SPA Portfolio",
  description: "Next.js & shadcn/ui 리뉴얼 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />

          <main id="app" className="main-layout">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}