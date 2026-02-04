import { motion } from "framer-motion";
import appScreenshot from "../assets/telefoniciapp.PNG";
import appStoreBadge from "../assets/App_StoreLogo.png";
import googlePlayBadge from "../assets/Google_Play.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#5D5DBC]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#8E8ECF]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8E8ECF]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} className="text-[#5D5DBC] font-semibold text-sm uppercase tracking-wider mb-4">Üniversite Öğrencileri İçin</motion.p>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.05 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Kampüsün <span className="gradient-text">Sosyal Kalbi</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.1 }} className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">
              Sadece onaylı üniversite e-postan (.edu.tr) ile güvenle kayıt ol. Kendi kampüsünden veya şehrinden öğrencilerle tanış, eşleş, sohbet et.
            </motion.p>
            <div
              id="indir"
              className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 place-items-center"
            >
              <a
                href="#"
                className="block w-full max-w-[200px] sm:max-w-[260px] mx-auto opacity-100 hover:opacity-80 focus:outline-none cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                aria-label="App Store'dan İndir"
              >
                <img src={appStoreBadge} alt="App Store'dan İndir" className="w-full h-auto object-contain object-center select-none pointer-events-none rounded-xl" draggable={false} />
              </a>
              <a
                href="#"
                className="block w-full max-w-[200px] sm:max-w-[260px] mx-auto opacity-100 hover:opacity-80 focus:outline-none cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                aria-label="Google Play'den İndir"
              >
                <img src={googlePlayBadge} alt="Google Play'den İndir" className="w-full h-auto object-contain object-center select-none pointer-events-none rounded-xl" draggable={false} />
              </a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.15 }} className="relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="w-full bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl shadow-gray-900/40 ring-4 ring-gray-800">
                <div className="rounded-[2rem] overflow-hidden bg-black aspect-[9/19] flex items-center justify-center">
                  <img src={appScreenshot} alt="CampusGo uygulama ekranı" className="w-full h-full object-cover object-top" loading="eager" decoding="async" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
