import Navbar from "../components/Navbar"; // (Optionnel si vous l'avez mis dans page.tsx, sinon gardez-le)
import Footer from "../components/Footer"; // (Idem)
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Portfolio AIT ALI Marouane",
  description: "Portfolio Ingénieur",
};

// C'est cette partie qui manquait et qui règle le problème de taille sur mobile/web
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Si vous avez déplacé Navbar dans page.tsx comme suggéré avant, retirez-le d'ici pour éviter les doublons */}
          <div className="flex flex-col min-h-screen w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}