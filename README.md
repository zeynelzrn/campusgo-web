# CampusGo

> **Kampüsün Sosyal Medyası** — Üniversiteliler için sosyalleşme ve etkinlik platformu.

[![Live](https://img.shields.io/badge/Live-campusgo.app-5D5DBC?style=for-the-badge&logo=link&logoColor=white)](https://campusgo.app)

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 📖 Proje Hakkında

**CampusGo**, Türkiye’deki üniversite öğrencilerinin kampüs içi sosyalleşmesini, etkinlik keşfini ve güvenli tanışmayı hedefleyen bir web tanıtım sitesidir. Site, mobil uygulamanın özelliklerini tanıtır; öğrencilerin kampüsü keşfetmesi, ilgi alanlarına göre eşleşmesi ve güvenli bir ortamda iletişim kurması fikrini öne çıkarır.

- 🌐 **Canlı site:** [campusgo.app](https://campusgo.app)
- 📱 Hedef kitle: `.edu.tr` e-posta doğrulaması ile üniversite öğrencileri
- 🎯 Tek sayfa (landing) + yasal sayfalar (KVKK, Gizlilik, Kullanıcı Sözleşmesi vb.)

---

## ✨ Öne Çıkan Özellikler


| Özellik                 | Açıklama                                                                |
| ----------------------- | ----------------------------------------------------------------------- |
| **🎯 Akıllı Eşleşme**   | İlgi alanları, bölüm ve kampüse göre arkadaş önerisi ve eşleşme.        |
| **🗺️ Kampüs Keşfi**    | Etkinlikler, popüler profiller ve kampüs odaklı keşif deneyimi.         |
| **🖼️ Modern UI/UX**    | Glassmorphism, split-screen tanıtım kartları ve akıcı animasyonlar.     |
| **🔒 Güvenli İletişim** | Üniversite e-posta doğrulaması odaklı, güvenli sosyal platform vurgusu. |


---

## 🛠️ Teknik Detaylar ve Geliştirmeler

### 🔍 Gelişmiş SEO & Metadata

- **Dinamik head yönetimi:** `react-helmet-async` ile sayfa bazlı `title`, `description`, `keywords` ve `canonical` URL.
- **Yapısal veri (JSON-LD):** Schema.org uyumlu `MobileApplication`, `WebSite` ve `SiteNavigationElement` (sitelinks) şemaları; Google Rich Results ve site bağlantıları için optimize.
- **Open Graph & Twitter Card:** Paylaşım önizlemeleri için meta etiketleri.

### 📱 Mobile-First Tasarım

- **iOS Safe Area:** Viewport meta’da `viewport-fit=cover` ile çentikli ekranlarda tam alan kullanımı.
- **Overscroll uyumu:** Body arka planı footer rengiyle senkronize; mobilde üst/altta “zıplama” alanları koyu, içerik alanı aydınlık (beyaz) kalır.

### ⚡ Performans

- **Vite:** Hızlı geliştirme sunucusu ve optimize production build (tree-shaking, code splitting).
- **Semantik HTML:** `<main>`, `<nav>`, `<footer>` ve bölüm `id`’leri ile erişilebilirlik ve SEO.
- **Lazy loading / minimal bundle:** Gerekli bileşenler ve asset’ler proje yapısına uygun şekilde yüklenir.

### 📐 Responsive Layout

- **Mobil:** Akışkan (flow) düzen; metin ve telefon mockup üst üste, taşma yok.
- **Masaüstü:** Grid + absolute konumlandırma; “pop-out” telefon efekti ve split-screen kartlar.

---

## 🧩 Teknoloji Yığını


| Kategori      | Teknolojiler                               |
| ------------- | ------------------------------------------ |
| **Frontend**  | React 19, Vite 7, React Router DOM         |
| **Styling**   | Tailwind CSS 4, Lucide React (ikonlar)     |
| **SEO**       | React Helmet Async                         |
| **Animasyon** | Framer Motion, CSS transitions & keyframes |


---

## 🚀 Kurulum

Projeyi yerel ortamda çalıştırmak için:

```bash
# Repoyu klonla
git clone https://github.com/<kullanici>/campusgo-web.git
cd campusgo-web

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda [http://localhost:5173](http://localhost:5173) adresinden siteye erişebilirsiniz.

**Production build:**

```bash
npm run build
npm run preview   # Build çıktısını önizlemek için
```

---

## 📄 Lisans ve İletişim

© CampusGo. Bu proje CampusGo tanıtım web sitesidir. Canlı sürüm: [https://campusgo.app](https://campusgo.app).