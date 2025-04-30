import { Helmet } from 'react-helmet-async';
import { useTranslations } from '@/hooks/use-translations';
import TheorySection from '@/components/TheorySection';

export default function Theory() {
  const { t, currentLanguage } = useTranslations();
  
  return (
    <>
      <Helmet>
        <title>{`${t('theory.title.1')} ${t('theory.title.2')} | ${t('meta.title')}`}</title>
        <meta name="description" content={t('theory.description')} />
        <meta property="og:title" content={`${t('theory.title.1')} ${t('theory.title.2')} | ${t('meta.title')}`} />
        <meta property="og:description" content={t('theory.description')} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href={`https://universeinablackhole.com/${currentLanguage}/theory`} />
      </Helmet>
      
      <div className="pt-24">
        <TheorySection />
      </div>
    </>
  );
}
