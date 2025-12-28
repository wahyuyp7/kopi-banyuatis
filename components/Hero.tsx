import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "6281234567890";
const message = encodeURIComponent(
    "Halo, saya tertarik membeli Kopi Banyuatis. Mohon info produknya ya."
);

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center text-white overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hero-bg.png')" }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Grain Texture */}
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{ backgroundImage: "url('/grain.png')" }}
            />

            <div className="relative max-w-6xl mx-auto px-6 py-24">
                <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
                    Kopi Banyuatis <br />
                    Rasa Alam dari Pegunungan Bali
                </h1>

                <p className="mt-8 text-xl text-[#E6D9C9]/90 max-w-2xl leading-relaxed">
                    Kopi premium Bali yang tumbuh di dataran tinggi Banyuatis,
                    dipetik langsung oleh petani lokal dengan cita rasa alami.
                </p>

                {/* CTA Buttons */}
                <div className="mt-12 flex flex-wrap gap-6">

                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              inline-flex items-center gap-3
              bg-[#25D366] text-black
              px-8 py-4 rounded-full
              font-semibold tracking-wide
              hover:scale-[1.03]
              transition-all duration-300
            "
                    >
                        <FaWhatsapp size={22} />
                        Order via WhatsApp
                    </a>

                    {/* Secondary Button */}
                    <a
                        href="#about"
                        className="
    border border-[#E6D9C9]
    px-8 py-4 rounded-full
    hover:bg-white hover:text-black
    transition-all duration-300
  "
                    >
                        Pelajari Kopi Kami
                    </a>

                </div>
            </div>
        </section>
    );
}
