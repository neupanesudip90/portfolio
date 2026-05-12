import { Inter, Space_Grotesk } from "next/font/google";
import "./global.css";
import { cn } from "@/src/libs/utils";
import Navbar from "@/src/components/layouts/Navbar";
import DesktopPet from "@/src/components/pet/DesktopPet";
import { Providers } from "@/src/components/provider/providers";
import {Footer, CTASection } from "@/src/components/layouts/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, spaceGrotesk.variable)}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = saved || system;
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-bg-page text-primary transition-colors duration-200 antialiased">
        <Providers>
          <main className="page-wrapper">
          <Navbar />
            <DesktopPet />
            {children}
          <CTASection />
          <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
