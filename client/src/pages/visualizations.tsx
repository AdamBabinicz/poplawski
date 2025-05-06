import { Helmet } from "react-helmet-async";
import { useTranslations } from "@/hooks/use-translations";
import { useLocation } from "wouter";
import VisualizationsSection from "@/components/VisualizationsSection";
import SeoTags from "@/components/SeoTags";

export default function Visualizations() {
  const { t, currentLanguage } = useTranslations(); // currentLanguage może być potrzebny dla structuredData.inLanguage
  const [currentPath] = useLocation();

  const baseUrl = "https://blackhole-universe.netlify.app";
  const supportedLanguages = ["pl", "en"];
  const canonicalPageUrl = `${baseUrl}${currentPath}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    headline: `${t("visualizations.title.1", {
      defaultValue: "Visualizations",
    })} ${t("visualizations.title.2", { defaultValue: "of Black Holes" })}`,
    description: t("visualizations.description"),
    image: `${baseUrl}/torsion-effects-updated.webp`, // Główny obraz galerii lub reprezentatywny
    url: canonicalPageUrl,
    author: {
      "@type": "Person",
      name: "Dr. Nikodem Popławski",
    },
    publisher: {
      "@type": "Organization",
      name: t("meta.title", { defaultValue: "Universe in a Black Hole" }),
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon.ico`,
      },
    },
    datePublished: "2024-01-01", // Rozważ dynamiczną datę lub aktualną
    dateModified: "2024-05-15", // Rozważ dynamiczną datę lub aktualną
    contentLocation: {
      "@type": "Place",
      name: "Outer Space",
    },
    inLanguage: currentLanguage, // Język, w którym prezentowana jest galeria (np. opisy)
    keywords:
      "black hole, visualization, 3D model, interactive, torsion, cosmology, physics",
  };

  return (
    <>
      <Helmet>
        <title>{`${t("visualizations.title.1", {
          defaultValue: "Visualizations",
        })} ${t("visualizations.title.2", {
          defaultValue: "of Black Holes",
        })} | ${t("meta.title")}`}</title>
        <meta name="description" content={t("visualizations.description")} />
        <meta property="og:url" content={canonicalPageUrl} />
        <meta
          property="og:title"
          content={`${t("visualizations.title.1", {
            defaultValue: "Visualizations",
          })} ${t("visualizations.title.2", {
            defaultValue: "of Black Holes",
          })} | ${t("meta.title")}`}
        />
        <meta
          property="og:description"
          content={t("visualizations.description")}
        />
        <meta property="og:type" content="article" />{" "}
        {/* Lub "website" jeśli galeria to główna treść */}
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

      <div className="pt-24">
        <VisualizationsSection />
      </div>
    </>
  );
}
