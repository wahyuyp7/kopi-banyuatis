import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "6281234567890";

type Product = {
    name: string;
    description: string;
    tastingNotes: string;
    bestFor: string;
    price: string;
    image: string;
    whatsappText: string;
};

const products: Product[] = [
    {
        name: "Arabika Banyuatis",
        description:
            "Kopi Arabika dari dataran tinggi Banyuatis dengan karakter rasa yang bersih dan elegan.",
        tastingNotes: "Floral, sedikit asam, aftertaste lembut",
        bestFor: "Manual brew, pour over, V60",
        price: "Mulai Rp45.000",
        image: "/kopi-banyuatis-kemasan-landscape.png",
        whatsappText:
            "Halo, saya tertarik membeli Arabika Banyuatis. Mohon info varian dan harga ya.",
    },
    {
        name: "Robusta Banyuatis",
        description:
            "Kopi Robusta khas Banyuatis dengan body kuat dan rasa yang bold.",
        tastingNotes: "Coklat gelap, pahit seimbang, body tebal",
        bestFor: "Espresso, kopi susu",
        price: "Mulai Rp40.000",
        image: "/kopi-banyuatis-kemasan-landscape.png",
        whatsappText:
            "Halo, saya tertarik membeli Robusta Banyuatis. Mohon info varian dan harga ya.",
    },
];

export default function Products() {
    return (
        <section className="surface-light py-28 bg-[#F7F3EE]">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div className="max-w-2xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
                        Pilihan Kopi Kami
                    </h2>
                    <p className="text-lg text-[#6B4F42] leading-relaxed">
                        Setiap varian kopi dipilih dan diproses dengan penuh perhatian
                        untuk menghadirkan karakter rasa terbaik dari pegunungan Banyuatis.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid gap-16 md:grid-cols-2">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="
                bg-white rounded-3xl overflow-hidden
                hover:-translate-y-1 transition-all duration-300
              "
                        >
                            {/* Image */}
                            <div className="relative h-[320px]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-10">
                                <h3 className="text-2xl font-serif mb-3">
                                    {product.name}
                                </h3>

                                <p className="text-[#4B362C] leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                {/* Detail */}
                                <div className="space-y-3 text-sm text-[#6B4F42] mb-8">
                                    <p>
                                        <span className="font-medium text-[#2B1E17]">
                                            Tasting notes:
                                        </span>{" "}
                                        {product.tastingNotes}
                                    </p>
                                    <p>
                                        <span className="font-medium text-[#2B1E17]">
                                            Cocok untuk:
                                        </span>{" "}
                                        {product.bestFor}
                                    </p>
                                </div>

                                {/* Price & CTA */}
                                <div className="flex flex-wrap items-center justify-between gap-6">
                                    <span className="text-lg font-semibold">
                                        {product.price}
                                    </span>

                                    <a
                                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                                            product.whatsappText
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      inline-flex items-center gap-3
                      bg-[#25D366] text-black
                      px-6 py-3 rounded-full
                      font-semibold
                      hover:scale-[1.03]
                      transition-all duration-300
                    "
                                    >
                                        <FaWhatsapp />
                                        Order via WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
