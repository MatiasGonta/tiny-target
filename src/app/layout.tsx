import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib";
import { Footer, SessionProvider, ThemeProvider, Toaster } from "@/components";
import "./globals.css";

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Tiny Target",
  description: "Tiny Target es un potente servicio de acortamiento de URLs que te permite crear enlaces compactos y compartibles. Con características amigables para el usuario y una interfaz elegante, es la herramienta perfecta para hacer que tus URLs largas sean más manejables y fáciles de compartir. Simplifica tus enlaces con Tiny Target!",
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/tiny-target-logo.ico"></link>
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontInter.variable
      )}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Background */}
            <div className="absolute top-0 z-[-2] h-screen w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(198,157,119,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(28,16,3,100),rgb(20,13,2))]"></div>

            {children}
            <Footer />
            <Toaster
              position="bottom-center"
              toastOptions={{
                duration: 5000,
              }}
            />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}