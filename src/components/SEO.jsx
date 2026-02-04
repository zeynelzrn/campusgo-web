import { Helmet } from "react-helmet-async";

const SITE_URL = "https://campusgo.app";
const DEFAULT_LOGO = `${SITE_URL}/logo.png`;

const defaultProps = {
  title: "CampusGo | Kampüsün Sosyal Medyası",
  description:
    "Üniversite öğrencileri için güvenli sosyalleşme, etkinlik ve tanışma uygulaması. Kampüsünü keşfet, yeni arkadaşlar edin.",
  keywords:
    "üniversite, sosyal medya, arkadaşlık, kampüs, öğrenci, izmir, yaşar üniversitesi",
  canonical: null,
};

export default function SEO({ title, description, keywords, canonical } = {}) {
  const metaTitle = title ?? defaultProps.title;
  const metaDescription = description ?? defaultProps.description;
  const metaKeywords = keywords ?? defaultProps.keywords;
  const canonicalUrl = canonical ? (canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`) : SITE_URL;

  const mobileApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "CampusGo",
    applicationCategory: "SocialNetworkingApplication",
    operatingSystem: "iOS, Android",
    url: SITE_URL,
    logo: DEFAULT_LOGO,
    description:
      "Kampüsün Sosyal Medyası. Üniversiteliler için özel tanışma ve sosyalleşme platformu.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CampusGo",
    url: SITE_URL,
    description: metaDescription,
    logo: DEFAULT_LOGO,
    publisher: {
      "@type": "Organization",
      name: "CampusGo",
      url: SITE_URL,
      logo: DEFAULT_LOGO,
    },
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        name: "Ana Sayfa",
        url: SITE_URL,
        position: 1,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Özellikler",
        url: `${SITE_URL}/#ozellikler`,
        position: 2,
      },
      {
        "@type": "SiteNavigationElement",
        name: "İletişim",
        url: `${SITE_URL}/#iletisim`,
        position: 3,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Yasal",
        url: `${SITE_URL}/yasal`,
        position: 4,
      },
    ],
  };

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={DEFAULT_LOGO} />
      <meta property="og:locale" content="tr_TR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <script type="application/ld+json">{JSON.stringify(mobileApplicationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(navigationSchema)}</script>
    </Helmet>
  );
}
