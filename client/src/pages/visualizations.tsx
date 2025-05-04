import { Helmet } from "react-helmet-async";
import { useTranslations } from "@/hooks/use-translations";
import VisualizationsSection from "@/components/VisualizationsSection";

export default function Visualizations() {
  const { t, currentLanguage } = useTranslations();

  // Structured data for visualizations page (ImageGallery schema for SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    headline: `${t("visualizations.title.1")} ${t("visualizations.title.2")}`,
    description: t("visualizations.description"),
    image: "/torsion-effects-updated.webp",
    url: `https://blackhole-universe.netlify.app/${currentLanguage}/visualizations`,
    author: {
      "@type": "Person",
      name: "Dr. Nikodem Popławski",
    },
    publisher: {
      "@type": "Organization",
      name: "Universe in a Black Hole",
      logo: {
        "@type": "ImageObject",
        url: "/favicon.ico",
      },
    },
    datePublished: "2025-04-30",
    dateModified: "2025-04-30",
    contentLocation: {
      "@type": "Place",
      name: "Outer Space",
    },
    inLanguage: currentLanguage,
    keywords:
      "black hole, visualization, 3D model, interactive, torsion, cosmology, physics",
  };

  return (
    <>
      <Helmet>
        <title>{`${t("visualizations.title.1")} ${t(
          "visualizations.title.2"
        )} | ${t("meta.title")}`}</title>
        <meta name="description" content={t("visualizations.description")} />
        <meta
          property="og:title"
          content={`${t("visualizations.title.1")} ${t(
            "visualizations.title.2"
          )} | ${t("meta.title")}`}
        />
        <meta
          property="og:description"
          content={t("visualizations.description")}
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/torsion-effects-updated.webp" />
        <link
          rel="canonical"
          href={`https://blackhole-universe.netlify.app${
            currentLanguage === "pl" ? "" : "/" + currentLanguage
          }/visualizations`}
        />

        {/* Add structured data for search engines */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="pt-24">
        <VisualizationsSection />
      </div>
    </>
  );
}
