import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "6281234567890";
const EMAIL = "hello@kopibanyuatis.id";

export default function Footer() {
  return (
    <footer className="relative bg-black text-[#E6D9C9] pt-32 pb-20 overflow-hidden">

      {/* Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "url('/grain.png')" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Main Footer */}
        <div className="grid gap-20 md:grid-cols-3 mb-24">

          {/* Brand */}
          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 tracking-tight">
              Kopi Banyuatis
            </h3>
            <p className="text-base leading-relaxed max-w-sm">
              Kopi premium dari pegunungan Banyuatis, Bali.
              Diproses dengan penuh perhatian untuk menghadirkan
              aroma khas dan rasa seimbang di setiap cangkir.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Kontak
            </h4>

            <ul className="space-y-5 text-base">
              <li className="flex items-center gap-4">
                <FaWhatsapp className="text-[#25D366]" size={20} />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +{WHATSAPP_NUMBER}
                </a>
              </li>

              <li className="flex items-center gap-4">
                <FaEnvelope size={18} />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:underline"
                >
                  {EMAIL}
                </a>
              </li>

              <li className="flex items-center gap-4">
                <FaMapMarkerAlt size={18} />
                <span>Banyuatis, Bali</span>
              </li>
            </ul>
          </div>

          {/* Lokasi */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Lokasi Perkebunan
            </h4>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Banyuatis%2C%20Banjar%2C%20Buleleng%2C%20Bali&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-[#AAA]">
            © {new Date().getFullYear()} Kopi Banyuatis. All rights reserved.
          </p>

          <div className="flex gap-6 text-xl">
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-white">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
