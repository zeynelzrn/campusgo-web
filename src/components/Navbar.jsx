import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import campusgoLogo from "../assets/campusgologo.png";

const navLinks = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/#ozellikler", label: "Özellikler" },
  { to: "/#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isLegal = location.pathname.startsWith("/yasal");

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 navbar-glass"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center shrink-0" aria-label="CampusGo Ana Sayfa">
            <img src={campusgoLogo} alt="CampusGo" className="h-8 sm:h-9 w-auto object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {!isLegal && navLinks.map((link) => (
              <a key={link.to} href={link.to} className="text-gray-600 hover:text-[#5D5DBC] font-medium transition-colors">{link.label}</a>
            ))}
            {isLegal && <Link to="/" className="text-gray-600 hover:text-[#5D5DBC] font-medium transition-colors">Ana Sayfa</Link>}
            <Link to="/yasal" className="text-gray-600 hover:text-[#5D5DBC] font-medium transition-colors text-sm">Yasal Metinler</Link>
            <a href="#indir" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#5D5DBC] to-[#8E8ECF] hover:from-[#4f4fa8] hover:to-[#7a7ac4] shadow-lg shadow-[#5D5DBC]/30 transition-all hover:scale-105 cursor-pointer">Uygulamayı İndir</a>
          </div>
          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" aria-label="Menü">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden">
              <div className="py-4 space-y-1 border-t border-gray-200">
                {!isLegal && navLinks.map((link) => (
                  <a key={link.to} href={link.to} onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">{link.label}</a>
                ))}
                <Link to="/yasal" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">Yasal Metinler</Link>
                <a href="#indir" onClick={() => setMobileOpen(false)} className="mx-4 mt-2 flex justify-center items-center gap-2 px-5 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#5D5DBC] to-[#8E8ECF]">Uygulamayı İndir</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
