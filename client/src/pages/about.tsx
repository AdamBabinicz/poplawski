import { Helmet } from "react-helmet-async";
import { useTranslations } from "@/hooks/use-translations";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function About() {
  const { t, currentLanguage } = useTranslations();

  // Structured data for about page (Person schema for SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Nikodem Popławski",
    description: t("about.description"),
    image: "/og-image.png",
    url: "https://blackhole-universe.netlify.app/",
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
        <title>{`${t("about.title.1")} ${t("about.title.2")} | ${t(
          "meta.title"
        )}`}</title>
        <meta name="description" content={t("about.description")} />
        <meta
          property="og:title"
          content={`${t("about.title.1")} ${t("about.title.2")} | ${t(
            "meta.title"
          )}`}
        />
        <meta property="og:description" content={t("about.description")} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/og-image.png" />
        <link
          rel="canonical"
          href={`https://blackhole-universe.netlify.app/${currentLanguage}/about`}
        />

        {/* Add structured data for search engines */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="pt-24">
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
}
