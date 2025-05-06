import { Helmet } from "react-helmet-async";
import { useTranslations } from "@/hooks/use-translations";
import { useLocation } from "wouter"; // Dodajemy useLocation
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SeoTags from "@/components/SeoTags";

export default function About() {
  const { t } = useTranslations();
  const [currentPath] = useLocation(); // Pobieramy aktualną ścieżkę (powinno być np. "/about")

  const baseUrl = "https://blackhole-universe.netlify.app";
  const supportedLanguages = ["pl", "en"];
  const canonicalPageUrl = `${baseUrl}${currentPath}`; // np. https://blackhole-universe.netlify.app/about

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Nikodem Popławski",
    description: t("about.description"),
    image: `${baseUrl}/torsion-effects-updated.webp`,
    url: canonicalPageUrl, // Używamy dynamicznego URL strony "O mnie"
    sameAs: [
      "https://poplawski.physics.slu.edu/",
      "https://en.wikipedia.org/wiki/Nikodem_Popławski",
    ],
    jobTitle: "Theoretical Physicist",
    worksFor: {
      "@type": "Organization",
      name: "University of New Haven",
    },
    knowsAbout: [
      "Black holes",
      "Cosmology",
      "Einstein-Cartan theory",
      "Torsion",
      "Big Bounce",
    ],
  };

  return (
    <>
      <Helmet>
        <title>{`${t("about.title.1", { defaultValue: "About" })} ${t(
          "about.title.2",
          { defaultValue: "Dr. Popławski" }
        )} | ${t("meta.title")}`}</title>
        <meta name="description" content={t("about.description")} />
        <meta property="og:url" content={canonicalPageUrl} />
        <meta
          property="og:title"
          content={`${t("about.title.1", { defaultValue: "About" })} ${t(
            "about.title.2",
            { defaultValue: "Dr. Popławski" }
          )} | ${t("meta.title")}`}
        />
        <meta property="og:description" content={t("about.description")} />
        <meta property="og:type" content="profile" />
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
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
}
