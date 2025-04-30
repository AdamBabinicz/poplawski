import { Helmet } from 'react-helmet-async';
import { useTranslations } from '@/hooks/use-translations';
import HeroSection from '@/components/HeroSection';
import TheorySection from '@/components/TheorySection';
import VisualizationsSection from '@/components/VisualizationsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const { t, currentLanguage } = useTranslations();
  
  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href={`https://universeinablackhole.com/${currentLanguage}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <HeroSection />
      <TheorySection />
      <VisualizationsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
