import { Navbar, Footer } from "@/components/layout";
import { CustomCursorProvider } from "@/components/providers/custom-cursor-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SceneBackground } from "@/components/ui/scene-background";
import { siteMetadata } from "@/config/site";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontVariables} h-full font-sans antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <CustomCursorProvider>
            <SceneBackground />
            <SmoothScrollProvider>
              <Navbar />
              <main className="relative z-10">{children}</main>
              <Footer />
            </SmoothScrollProvider>
          </CustomCursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
