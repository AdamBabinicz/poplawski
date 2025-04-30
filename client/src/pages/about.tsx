import { Helmet } from 'react-helmet-async';
import { useTranslations } from '@/hooks/use-translations';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function About() {
  const { t, currentLanguage } = useTranslations();
  
  return (
    <>
      <Helmet>
        <title>{`${t('about.title.1')} ${t('about.title.2')} | ${t('meta.title')}`}</title>
        <meta name="description" content={t('about.description')} />
        <meta property="og:title" content={`${t('about.title.1')} ${t('about.title.2')} | ${t('meta.title')}`} />
        <meta property="og:description" content={t('about.description')} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href={`https://universeinablackhole.com/${currentLanguage}/about`} />
      </Helmet>
      
      <div className="pt-24">
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
}
