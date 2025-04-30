import { Helmet } from 'react-helmet-async';
import { useTranslations } from '@/hooks/use-translations';
import VisualizationsSection from '@/components/VisualizationsSection';

export default function Visualizations() {
  const { t, currentLanguage } = useTranslations();
  
  return (
    <>
      <Helmet>
        <title>{`${t('visualizations.title.1')} ${t('visualizations.title.2')} | ${t('meta.title')}`}</title>
        <meta name="description" content={t('visualizations.description')} />
        <meta property="og:title" content={`${t('visualizations.title.1')} ${t('visualizations.title.2')} | ${t('meta.title')}`} />
        <meta property="og:description" content={t('visualizations.description')} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506703719100-a0b3a3c845d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href={`https://universeinablackhole.com/${currentLanguage}/visualizations`} />
      </Helmet>
      
      <div className="pt-24">
        <VisualizationsSection />
      </div>
    </>
  );
}
