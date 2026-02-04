import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [subject, setSubject] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mykpralz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setLoading(false);
        setSuccess(true);
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <section id="iletisim" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            İletişim
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sorularınız için buradayız.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 min-h-0">
            {/* Sol Panel - Bilgi Alanı (renkli) */}
            <div className="relative md:col-span-2 bg-gradient-to-br from-indigo-600 to-violet-600 p-8 md:p-10 flex flex-col justify-center">
              {/* Dekoratif daireler */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20" />
                <div className="absolute bottom-1/4 -left-8 w-32 h-32 rounded-full bg-white/20" />
                <div className="absolute top-1/2 right-4 w-24 h-24 rounded-full bg-white/10" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 text-white mb-6">
                  <Mail className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Bize Ulaşın
                </h3>
                <p className="text-white/90 leading-relaxed mb-6 text-sm md:text-base">
                  Doğrulama maili gelmedi mi? Şifrenizi mi unuttunuz? Hesap silme işlemleri veya aklınıza takılan diğer sorular için bize ulaşabilirsiniz.
                </p>
                <p className="text-white/90 font-medium mb-2 text-sm">
                  Doğrudan e-posta gönderin:
                </p>
                <a
                  href="mailto:info@campusgo.app"
                  className="inline-flex items-center gap-2 text-white font-semibold text-base md:text-lg hover:underline underline-offset-2 break-all"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  info@campusgo.app
                </a>
              </div>
            </div>

            {/* Sağ Panel - Form / Yükleniyor / Başarı (birbirini dışlayan) */}
            <div className="md:col-span-3 bg-white p-8 md:p-10 flex flex-col justify-center items-center min-h-[400px]">
              {loading && (
                <div className="flex flex-col items-center justify-center w-full py-8">
                  <Loader2 className="w-12 h-12 animate-spin text-indigo-600" strokeWidth={2} />
                  <p className="mt-5 text-gray-600 font-medium">Gönderiliyor...</p>
                </div>
              )}

              {!loading && success && (
                <div className="flex flex-col items-center justify-center text-center w-full py-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                    <CheckCircle className="w-10 h-10" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mesajınız Alındı!
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm">
                    Bizimle iletişime geçtiğiniz için teşekkürler. En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              )}

              {!loading && !success && (
                <div className="w-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Mesaj Gönder
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="hidden"
                      name="_subject"
                      value={subject ? `CampusGo Destek: ${subject}` : "CampusGo İletişim Formu"}
                    />
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        placeholder="Adınız Soyadınız"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        E-posta Adresi
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        placeholder="ornek@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-topic" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Konu
                      </label>
                      <select
                        id="contact-topic"
                        name="topic"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200 text-gray-900"
                      >
                        <option value="" disabled>Konu Seçin</option>
                        <option value="Teknik Destek">Teknik Destek</option>
                        <option value="Öneri / İstek">Öneri / İstek</option>
                        <option value="Şikayet">Şikayet</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mesajınız
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Mesajınızı yazın..."
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 resize-y min-h-[100px]"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#5D5DBC] to-[#8E8ECF] hover:from-[#4f4fa8] hover:to-[#7a7ac4] shadow-lg shadow-[#5D5DBC]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5D5DBC] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                    >
                      <Send className="w-5 h-5" />
                      Mesajı İlet
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
