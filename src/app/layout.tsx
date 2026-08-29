import type { Metadata } from "next";
import { Noto_Sans_Armenian, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const notoSans = Noto_Sans_Armenian({
  variable: "--font-app-sans",
  subsets: ["latin", "armenian"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HaySilicon Foundation | ՀայՍիլիկոն Հիմնադրամ",
  description:
    "HaySilicon Foundation advances education, science, engineering and technology in Armenia, with a focus on semiconductors, digital design and embedded systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
