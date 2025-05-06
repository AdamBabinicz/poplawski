import { Helmet } from "react-helmet-async";
import { useTranslations } from "@/hooks/use-translations";
import { useLocation } from "wouter";
import HeroSection from "@/components/HeroSection";
import TheorySection from "@/components/TheorySection";
import VisualizationsSection from "@/components/VisualizationsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SeoTags from "@/components/SeoTags";

export default function Home() {
  const { t } = useTranslations();
  const [currentPath] = useLocation();

  const baseUrl = "https://blackhole-universe.netlify.app";
  const supportedLanguages = ["pl", "en"];
  const canonicalPageUrl = `${baseUrl}${currentPath}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: t("meta.title"),
        description: t("meta.description"),
        inLanguage: supportedLanguages,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}${currentPath}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navbar.home", { defaultValue: "Strona główna" }),
            item: canonicalPageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the Universe in a Black Hole Theory?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dr. Nikodem Popławski's theory proposes that our universe exists inside a black hole. Einstein-Cartan theory with torsion prevents singularity formation and induces a Big Bounce, creating a new universe inside each black hole.",
            },
          },
          {
            "@type": "Question",
            name: "How does torsion prevent singularities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In Einstein-Cartan theory, spacetime torsion linked to particle spin creates repulsive forces that counteract gravitational collapse, preventing singularities and potentially explaining cosmic inflation.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:url" content={canonicalPageUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${baseUrl}/torsion-effects-updated.webp`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <SeoTags
        canonicalUrl={canonicalPageUrl}
        currentPath={currentPath}
        supportedLanguages={supportedLanguages}
        baseUrl={baseUrl}
      />

      <HeroSection />
      <TheorySection />
      <VisualizationsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
