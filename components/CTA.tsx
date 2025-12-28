import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "6281234567890";
const message = encodeURIComponent(
  "Halo, saya tertarik untuk membeli Kopi Banyuatis. Mohon info produk dan rekomendasinya ya."
);

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#2B1E17] text-white">

      {/* Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "url('/grain.png')" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight mb-8 leading-tight">
          Saatnya Menikmati Kopi
          <br className="hidden md:block" />
          dengan Cerita dan Karakter
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#E6D9C9]/90 leading-relaxed max-w-2xl mx-auto mb-14">
          Setiap biji Kopi Banyuatis membawa kehangatan alam
          Desa Bali, diproses dengan penuh perhatian
          untuk dinikmati di momen terbaikmu.
        </p>

        {/* CTA Button */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-4
            bg-[#25D366] text-black
            px-10 py-5 rounded-full
            text-lg font-semibold tracking-wide
            hover:scale-[1.04]
            transition-all duration-300
          "
        >
          <FaWhatsapp size={24} />
          Konsultasi & Order via WhatsApp
        </a>

        {/* Trust Note */}
        <p className="mt-8 text-sm text-[#E6D9C9]/70">
          Respon cepat • Rekomendasi sesuai selera • Pengiriman aman
        </p>
      </div>
    </section>
  );
}
