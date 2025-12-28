import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kopi Banyuatis | Kopi Premium Bali",
  description:
    "Kopi premium dari pegunungan Banyuatis, Bali. Aroma khas, rasa seimbang, langsung dari petani lokal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
