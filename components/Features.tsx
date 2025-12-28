import { FaLeaf, FaSeedling, FaFire, FaMugHot } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf size={26} />,
    title: "100% Kopi Lokal Bali",
    description:
      "Ditanam dan diolah sepenuhnya di Bali, tanpa campuran. Setiap biji kopi membawa karakter alam dan budaya lokal Banyuatis.",
  },
  {
    icon: <FaSeedling size={26} />,
    title: "Langsung dari Petani",
    description:
      "Dipanen langsung oleh petani lokal dengan metode tradisional untuk menjaga kualitas dan keberlanjutan lingkungan.",
  },
  {
    icon: <FaFire size={26} />,
    title: "Sangrai Berkualitas",
    description:
      "Disangrai dengan profil khusus untuk menonjolkan aroma alami, keseimbangan rasa, dan karakter asli biji kopi.",
  },
  {
    icon: <FaMugHot size={26} />,
    title: "Aroma & Rasa Seimbang",
    description:
      "Perpaduan lembut antara aroma, body, dan aftertaste yang nyaman untuk dinikmati setiap hari.",
  },
];

export default function Features() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
            Kenapa Memilih Kopi Banyuatis
          </h2>
          <p className="text-lg text-[#6B4F42] leading-relaxed">
            Setiap proses kami lakukan dengan penuh perhatian,
            dari kebun hingga ke cangkir, untuk menghadirkan
            pengalaman kopi yang jujur dan berkualitas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                flex gap-6 p-8 rounded-2xl bg-[#F7F3EE]
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:-translate-y-1 transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="flex-shrink-0 text-[#7A4A2E] mt-1">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-serif mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4B362C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
