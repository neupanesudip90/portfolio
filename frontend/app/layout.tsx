//importing fonts
import { Inter, Space_Grotesk } from "next/font/google";
import "./global.css";
import { Theme } from "@radix-ui/themes";
import { cn } from "@/src/libs/utils";
import Navbar from "@/src/components/layouts/Navbar";
import DesktopPet from "@/src/components/pet/DesktopPet";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my work and projects.",
  keywords:
    "portfolio, projects, works, resume, web development, software engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.variable, spaceGrotesk.variable)}>
      <body>
        <Theme>
          <Analytics />
          <Navbar />
          <main className="page-wrapper">
            <DesktopPet />
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
