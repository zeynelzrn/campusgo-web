import { useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import { legalSections } from "../data/legalContent";

function LegalContentText({ content, className = "" }) {
  if (!content) return null;
  const paragraphs = content.split(/\n\n+/).filter(Boolean);
  return (
    <div className={`space-y-4 leading-relaxed ${className}`}>
      {paragraphs.map((para, i) => {
        const parts = para.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="mb-4 last:mb-0">
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={j} className="font-semibold text-inherit opacity-90">{part.slice(2, -2)}</strong>;
              }
              const lines = part.split("\n");
              return (
                <Fragment key={j}>
                  {lines.map((line, k) => (
                    <span key={k}>{line}{k < lines.length - 1 && <br />}</span>
                  ))}
                </Fragment>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default function LegalPage() {
  const location = useLocation();
  const hash = location.hash.replace("#", "") || legalSections[0].id;
  const [activeId, setActiveId] = useState(hash);

  useEffect(() => {
    setActiveId(hash || legalSections[0].id);
  }, [hash]);

  const activeSection = legalSections.find((s) => s.id === activeId) || legalSections[0];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title={`${activeSection.title} | CampusGo`}
        description={`CampusGo yasal metinleri: ${activeSection.title}. Kampüsün sosyal medyası CampusGo kullanım koşulları ve gizlilik politikaları.`}
        canonical="/yasal"
      />
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[#5D5DBC] hover:text-[#4f4fa8] font-medium">
            <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
          </Link>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:w-64 flex-shrink-0">
            <div className="sticky top-28 rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="font-bold text-gray-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#5D5DBC]" /> Yasal Metinler
                </h2>
              </div>
              <nav className="p-2">
                {legalSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveId(section.id);
                      window.history.replaceState(null, "", `#${section.id}`);
                    }}
                    className={`block px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${activeId === section.id ? "bg-[#5D5DBC] text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
                  >
                    {section.titleEn ? `${section.title} / ${section.titleEn}` : section.title}
                  </a>
                ))}
              </nav>
            </div>
          </motion.aside>
          <article className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div key={activeSection.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8 md:p-10 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {activeSection.titleEn ? `${activeSection.title} / ${activeSection.titleEn}` : activeSection.title}
                  </h1>
                  <div className="flex gap-2">
                    <a
                      href="#legal-tr"
                      onClick={(e) => { e.preventDefault(); document.getElementById("legal-tr")?.scrollIntoView({ behavior: "smooth" }); }}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      Türkçe
                    </a>
                    <a
                      href="#legal-en"
                      onClick={(e) => { e.preventDefault(); document.getElementById("legal-en")?.scrollIntoView({ behavior: "smooth" }); }}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      English
                    </a>
                  </div>
                </div>
                <div className="p-6 sm:p-8 md:p-10 prose prose-gray max-w-none">
                  <div id="legal-tr" className="scroll-mt-4 text-gray-700">
                    <LegalContentText content={activeSection.content} />
                  </div>
                  {activeSection.contentEn && (
                    <>
                      <hr className="my-8 border-gray-200" />
                      <div id="legal-en" className="scroll-mt-4 text-[#666]" style={{ color: "#666" }}>
                        <LegalContentText content={activeSection.contentEn} className="text-[#666]" />
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </article>
        </div>
      </main>
    </div>
  );
}
