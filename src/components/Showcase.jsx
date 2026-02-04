import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Compass, SlidersHorizontal, Eye, MessageCircle, HeartHandshake } from "lucide-react";
import screen1 from "../assets/1.PNG";
import screen2 from "../assets/2.PNG";
import screen3 from "../assets/3.PNG";
import screen4 from "../assets/4.PNG";
import screen5 from "../assets/5.PNG";

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&q=80";

const slides = [
  {
    id: 1,
    title: "Kampüsündeki Herkesi Keşfet",
    subtitle: "Kendi fanusun dışına çık! Kampüsünde seninle aynı havayı soluyan, tanışabileceğin yüzlerce yeni insanı ana sayfanda keşfet.",
    icon: Compass,
    image: screen1,
    bg: "from-[#5D5DBC] to-[#8E8ECF]",
  },
  {
    id: 2,
    title: "Tam Kafa Dengini Bul",
    subtitle: "Bölüm, sınıf veya ilgi alanlarına göre detaylı filtreler uygula. Kampüste tam olarak aradığın kriterlerdeki kişileri saniyeler içinde listele.",
    icon: SlidersHorizontal,
    image: screen2,
    bg: "from-violet-500 to-fuchsia-500",
  },
  {
    id: 3,
    title: "Seni Kimler Merak Ediyor?",
    subtitle: "Profilini ziyaret edenleri ve sana takip isteği gönderenleri kaçırma. Kampüste popülerliğin artarken kontrol her zaman sende olsun.",
    icon: Eye,
    image: screen3,
    bg: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Anında Mesajlaşmaya Başla",
    subtitle: "Eşleştiğin kişilerle beklemeden sohbete başla. Güvenli, hızlı ve eğlenceli mesajlaşma ile kampüs sosyalliğini cebine taşı.",
    icon: MessageCircle,
    image: screen4,
    bg: "from-indigo-500 to-purple-500",
  },
  {
    id: 5,
    title: "Ortak Noktalarda Buluş",
    subtitle: "İlgi alanlarını belirle, seninle aynı zevklere sahip kampüsdaşlarınla anında eşleş. Yeni arkadaşlıklar ortak zevklerle başlar.",
    icon: HeartHandshake,
    image: screen5,
    bg: "from-amber-500 to-orange-500",
  },
];

export default function Showcase() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-left mb-12 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Uygulama İçi Deneyim</h2>
          <p className="text-lg text-gray-600 max-w-2xl">Basit, eğlenceli ve güvenli.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden md:overflow-visible shadow-2xl md:h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className={`relative flex flex-col h-auto rounded-3xl bg-gradient-to-br ${slides[current].bg} md:absolute md:inset-0 md:grid md:grid-cols-2 md:items-end md:overflow-visible`}
              >
                {/* Metin: mobilde üstte, masaüstünde sol sütun */}
                <div className="flex flex-col justify-center text-center md:text-left p-6 md:p-12">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 text-white mb-5 mx-auto md:mx-0">
                    {(() => {
                      const Icon = slides[current].icon;
                      return <Icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2} />;
                    })()}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                    {slides[current].title}
                  </h3>
                  <p className="text-white/90 text-lg max-w-md mx-auto md:mx-0">
                    {slides[current].subtitle}
                  </p>
                </div>

                {/* Telefon: mobilde akışta (relative), masaüstünde absolute pop-out */}
                <div className="relative mt-4 mx-auto w-3/4 max-w-[256px] pb-6 md:mt-0 md:mx-0 md:max-w-none md:w-full md:h-full md:flex md:justify-center md:items-end md:pb-0 md:px-8">
                  <div
                    className="relative w-full h-auto md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:h-[130%] md:w-auto md:max-w-none transform -rotate-6 scale-105 md:scale-110"
                    style={{ aspectRatio: "9/19" }}
                  >
                    <div className="w-full h-full rounded-[2rem] overflow-hidden border-8 border-white/20 bg-gray-900 ring-4 ring-black/30 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
                      <img
                        src={slides[current].image}
                        alt=""
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            type="button"
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#5D5DBC]" : "bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Slayt ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
