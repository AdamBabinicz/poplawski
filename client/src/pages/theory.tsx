import { Helmet } from 'react-helmet-async';
import { useTranslations } from '@/hooks/use-translations';
import TheorySection from '@/components/TheorySection';

export default function Theory() {
  const { t, currentLanguage } = useTranslations();
  
  // Structured data for theory page (for better SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${t('theory.title.1')} ${t('theory.title.2')}`,
    "description": t('theory.description'),
    "image": "/og-image.png",
    "author": {
      "@type": "Person",
      "name": "Dr. Nikodem Popławski",
      "url": "https://poplawski.physics.slu.edu/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Universe in a Black Hole",
      "logo": {
        "@type": "ImageObject",
        "url": "/favicon.png"
      }
    },
    "datePublished": "2025-04-30",
    "dateModified": "2025-04-30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://universe-in-black-hole.replit.app/${currentLanguage}/theory`
    },
    "keywords": "black hole, universe, cosmology, physics, torsion, big bounce, Einstein-Cartan, astrophysics, gravity"
  };
  
  return (
    <>
      <Helmet>
        <title>{`${t('theory.title.1')} ${t('theory.title.2')} | ${t('meta.title')}`}</title>
        <meta name="description" content={t('theory.description')} />
        <meta property="og:title" content={`${t('theory.title.1')} ${t('theory.title.2')} | ${t('meta.title')}`} />
        <meta property="og:description" content={t('theory.description')} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="canonical" href={`https://universe-in-black-hole.replit.app/${currentLanguage}/theory`} />
        
        {/* Add structured data for search engines */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="pt-24">
        <TheorySection />
      </div>
    </>
  );
}
