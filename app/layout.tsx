import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kopi Banyuatis | Kopi Premium Bali",
  description:
    "Kopi premium dari pegunungan Banyuatis, Bali. Aroma khas, rasa seimbang, langsung dari petani lokal.",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="light">
      <body className="bg-[#F7F3EE] text-[#2B1E17] antialiased">
        {children}
      </body>
    </html>
  );
}
