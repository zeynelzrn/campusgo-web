import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  Sparkles,
  SlidersHorizontal,
  MessageCircleHeart,
  RotateCcw,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Sadece Onaylı Öğrenciler",
    description:
      "Fake hesaplara veda et. Sadece .edu.tr uzantılı onaylı üniversite e-postası ile giriş yapılabilir. %100 gerçek profiller.",
  },
  {
    icon: MapPin,
    title: "Kampüsün Sınırlarını Aş",
    description:
      "İster kendi kampüsündeki kahve arkadaşını bul, ister şehrindeki diğer üniversitelilerle tanış.",
  },
  {
    icon: Sparkles,
    title: "Akıcı & Modern Deneyim",
    description: (
      <>
        Sıkıcı formlar yok. <strong>İstek at</strong>, eşleş ve anında etkileşime geç. Senin hızına yetişen modern bir arayüz.
      </>
    ),
  },
  {
    icon: SlidersHorizontal,
    title: "Tam Aradığın Kişi",
    description:
      "Kriterlerin belli mi? Bölüm, üniversite, sınıf veya şehre göre filtrele, nokta atışı yap.",
  },
  {
    icon: MessageCircleHeart,
    title: "Buzları Hemen Erit",
    description:
      "Eşleştiğin an sohbete başla. Ortak noktalarınızı keşfet ve üniversite hayatını daha sosyal yaşa.",
  },
  {
    icon: RotateCcw,
    title: "İkinci Bir Şansın Var",
    description:
      "Yanlışlıkla mı kaydırdın? Sorun değil. 'Geri Al' özelliği ile kaçırdığın fırsatları tekrar yakala.",
  },
];

export default function Features() {
  return (
    <section id="ozellikler" className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Neden <span className="gradient-text">CampusGo</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Üniversite hayatını daha sosyal ve güvenli kılan özellikler.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06 },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 ease-in-out"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 mb-5 group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors duration-300">
                <feature.icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                {typeof feature.description === "string" ? feature.description : feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
