import Image from "next/image";

type Testimonial = {
    name: string;
    location: string;
    quote: string;
    highlight: string;
    avatar: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Andi Pratama",
        location: "Jakarta",
        quote:
            "Aromanya langsung terasa sejak pertama diseduh. Rasanya seimbang, tidak terlalu asam, dan nyaman diminum setiap pagi sebelum kerja.",
        highlight: "Aroma kuat & rasa seimbang",
        avatar: "/avatar-testi-andi-jakarta.png",
    },
    {
        name: "Maya Lestari",
        location: "Surabaya",
        quote:
            "Saya pertama kali mencoba Kopi Banyuatis saat liburan di Bali. Sejak itu selalu repeat order karena rasanya konsisten dan terasa alami.",
        highlight: "Konsisten & alami",
        avatar: "/avatar-testi-maya-surabaya.png",
    },
    {
        name: "Kevin Mahendra",
        location: "Bali",
        quote:
            "Cocok untuk manual brew di rumah. Aftertaste-nya lembut dan tidak bikin eneg, bahkan untuk diminum setiap hari.",
        highlight: "Aftertaste lembut",
        avatar: "/avatar-testi-kevin-bali.png",
    },
];

export default function Testimonials() {
    return (
        <section className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div className="max-w-2xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
                        Cerita dari Mereka yang Menikmati
                    </h2>
                    <p className="text-lg text-[#6B4F42] leading-relaxed">
                        Pengalaman nyata dari para penikmat kopi yang telah
                        merasakan karakter rasa Kopi Banyuatis.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-12 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-[#F7F3EE] rounded-3xl p-10
                shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                hover:-translate-y-1 transition-all duration-300
              "
                        >
                            {/* Highlight */}
                            <p className="text-sm uppercase tracking-wide text-[#7A4A2E] font-medium mb-6">
                                {item.highlight}
                            </p>

                            {/* Quote */}
                            <p className="text-[#4B362C] leading-relaxed mb-10">
                                “{item.quote}”
                            </p>

                            {/* Profile */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium text-[#2B1E17]">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-[#6B4F42]">
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
