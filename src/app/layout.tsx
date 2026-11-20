import type { Metadata } from "next";
import Link from "next/link";
import { Assistant } from "next/font/google";
import "./globals.css";

// Defines --font-assistant on <html>; Tailwind's font-sans (globals.css) points at it.
const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "סטודיו לעיסוי",
  description: "קביעת תורים לטיפולי עיסוי וספא",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${assistant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b border-line bg-surface">
          <div className="mx-auto flex max-w-5xl items-center px-6 py-4">
            <Link
              href="/"
              className="text-xl font-semibold text-bark hover:text-ink"
            >
              סטודיו לעיסוי
            </Link>
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-ink-muted">
            © סטודיו לעיסוי
          </div>
        </footer>
      </body>
    </html>
  );
}
