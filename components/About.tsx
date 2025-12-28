export default function About() {
  return (
    <section id="about" className="surface-light py-28">
      <div className="max-w-6xl mx-auto px-6 grid gap-16 md:grid-cols-2 items-center">

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-8">
            Dari Pegunungan Banyuatis,
            <br className="hidden md:block" />
            Untuk Secangkir Kopi Berkualitas
          </h2>

          <p className="text-lg leading-relaxed text-[#4B362C] mb-6">
            Kopi Banyuatis berasal dari dataran tinggi Bali Utara,
            tepatnya di wilayah pegunungan Banyuatis yang sejuk dan subur.
            Di tempat inilah kopi tumbuh secara alami, perlahan,
            dan membentuk karakter rasa yang khas.
          </p>

          <p className="text-lg leading-relaxed text-[#4B362C] mb-10">
            Setiap biji kopi dipanen langsung oleh petani lokal
            dengan metode tradisional, lalu diproses dengan penuh
            perhatian untuk menjaga aroma, keseimbangan rasa,
            dan kualitas terbaik di setiap seduhan.
          </p>

          <div className="flex items-center gap-6">
            <div>
              <p className="text-2xl font-serif">100%</p>
              <p className="text-sm text-[#6B4F42]">
                Kopi Lokal Bali
              </p>
            </div>

            <div>
              <p className="text-2xl font-serif">Single Origin</p>
              <p className="text-sm text-[#6B4F42]">
                Banyuatis Highland
              </p>
            </div>
          </div>
        </div>

        {/* Visual Accent */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
            <img
              src="/perkebunan-kopi-banyuatis-bali.png"
              alt="Perkebunan kopi Banyuatis Bali"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Subtle Frame */}
          <div className="absolute -inset-4 border border-[#E6D9C9]/40 rounded-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
