import { Helmet } from "react-helmet-async";
import { useTranslations } from "@/hooks/use-translations";
import { useLocation } from "wouter";
import TheorySection from "@/components/TheorySection";
import SeoTags from "@/components/SeoTags";

export default function Theory() {
  const { t } = useTranslations();
  const [currentPath] = useLocation();

  const baseUrl = "https://blackhole-universe.netlify.app";
  const supportedLanguages = ["pl", "en"];
  const canonicalPageUrl = `${baseUrl}${currentPath}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${t("theory.title.1", { defaultValue: "The Universe" })} ${t(
      "theory.title.2",
      { defaultValue: "in a Black Hole" }
    )}`,
    description: t("theory.description"),
    image: `${baseUrl}/torsion-effects-updated.webp`,
    author: {
      "@type": "Person",
      name: "Dr. Nikodem Popławski",
      url: "https://www.newhaven.edu/faculty-staff-profiles/nikodem-poplawski.php",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalPageUrl,
    },
    keywords:
      "black hole, universe, cosmology, physics, torsion, big bounce, Einstein-Cartan, astrophysics, gravity",
  };

  return (
    <>
      <Helmet>
        <title>{`${t("theory.title.1", { defaultValue: "The Universe" })} ${t(
          "theory.title.2",
          { defaultValue: "in a Black Hole" }
        )} | ${t("meta.title")}`}</title>
        <meta name="description" content={t("theory.description")} />
        <meta property="og:url" content={canonicalPageUrl} />
        <meta
          property="og:title"
          content={`${t("theory.title.1", {
            defaultValue: "The Universe",
          })} ${t("theory.title.2", { defaultValue: "in a Black Hole" })} | ${t(
            "meta.title"
          )}`}
        />
        <meta property="og:description" content={t("theory.description")} />
        <meta property="og:type" content="article" />
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
        <TheorySection />
      </div>
    </>
  );
}
