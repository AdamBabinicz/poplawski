import { Helmet } from 'react-helmet-async';
import { useTranslations } from '@/hooks/use-translations';
import HeroSection from '@/components/HeroSection';
import TheorySection from '@/components/TheorySection';
import VisualizationsSection from '@/components/VisualizationsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const { t, currentLanguage } = useTranslations();
  
  // Structured data for homepage (WebSite and BreadcrumbList schemas for SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://universe-in-black-hole.replit.app/#website",
        "url": "https://universe-in-black-hole.replit.app/",
        "name": t('meta.title'),
        "description": t('meta.description'),
        "inLanguage": ["en", "pl"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://universe-in-black-hole.replit.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://universe-in-black-hole.replit.app/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Universe in a Black Hole Theory?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Nikodem Popławski's theory proposes that our universe exists inside a black hole. Einstein-Cartan theory with torsion prevents singularity formation and induces a Big Bounce, creating a new universe inside each black hole."
            }
          },
          {
            "@type": "Question",
            "name": "How does torsion prevent singularities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Einstein-Cartan theory, spacetime torsion linked to particle spin creates repulsive forces that counteract gravitational collapse, preventing singularities and potentially explaining cosmic inflation."
            }
          }
        ]
      }
    ]
  };
  
  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="canonical" href={`https://universe-in-black-hole.replit.app/${currentLanguage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Add structured data for search engines */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <HeroSection />
      <TheorySection />
      <VisualizationsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
