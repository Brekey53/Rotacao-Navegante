import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rotação Navegante | O rumo certo para o seu destino",
  description: "Acelere os seus rendimentos sem burocracias. Junte-se à Rotação Navegante, utilize a nossa licença de Operador TVDE por uma quota fixa semanal e fique com 100% dos seus lucros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning className={`${inter.variable} antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
