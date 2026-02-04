import { Link } from "react-router-dom";
import { Instagram, Twitter, Mail } from "lucide-react";
import campusgoLogo from "../assets/campusgologo.png";

const footerLinks = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/#ozellikler", label: "Özellikler" },
  { to: "/#iletisim", label: "İletişim" },
  { to: "/yasal", label: "Yasal Metinler" },
];

const legalLinks = [
  { to: "/yasal", hash: "#kvkk", label: "KVKK" },
  { to: "/yasal", hash: "#gizlilik", label: "Gizlilik Politikası" },
  { to: "/yasal", hash: "#acik-riza", label: "Açık Rıza" },
  { to: "/yasal", hash: "#cerez", label: "Çerez Politikası" },
  { to: "/yasal", hash: "#kullanim", label: "Kullanıcı Sözleşmesi" },
];

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "mailto:destek@campusgo.app", icon: Mail, label: "E-posta" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4" aria-label="CampusGo Ana Sayfa">
              <img src={campusgoLogo} alt="CampusGo" className="h-8 w-auto object-contain brightness-0 invert opacity-95" />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">Türk üniversite öğrencileri için güvenli sosyalleşme ve tanışma platformu.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Site</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.to} className="text-gray-400 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}><Link to={`${link.to}${link.hash}`} className="text-gray-400 hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors" aria-label={item.label}><item.icon className="w-5 h-5" /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CampusGo. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
