import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./portfolio.css";
import Navigation from "./navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachel Fernandez — Personal Portfolio",
  description: "Get to know Rachel Fernandez, an Information Technology student at NCF. Explore my story, hobbies, education, and ways to get in touch.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="site-body">
        <a className="skip-link" href="#main">Skip to content</a>
        <Navigation />
        <main id="main" className="page-container" tabIndex={-1}>{children}</main>
        <footer className="site-footer"><div className="footer-inner"><span>© 2026 Rachel Fernandez</span><span>Learning. Creating. Growing.</span></div></footer>
      </body>
    </html>
  );
}
