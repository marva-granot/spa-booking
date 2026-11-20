import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "סטודיו לעיסוי",
  description: "קביעת תורים לטיפולי עיסוי וספא",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
