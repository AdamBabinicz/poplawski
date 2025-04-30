import { useTranslations } from '@/hooks/use-translations';
import CosmicBackground from './animations/CosmicBackground';
import { scrollToElement } from '@/lib/utils';
import blackHoleModelImage from '@/assets/images/black-hole-model.png';

export default function HeroSection() {
  const { t } = useTranslations();
  
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Animated Background */}
      <CosmicBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-6 max-w-2xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block">{t('hero.title.1')}</span>
              <span className="block hero-text-outline text-7xl md:text-8xl -mt-2">{t('hero.title.2')}</span>
              <span className="bg-clip-text text-transparent bg-cosmic-gradient">{t('hero.title.3')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToElement('theory')}
                className="px-6 py-3 bg-cosmic-gradient text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                {t('hero.exploreButton')}
              </button>
              <button
                onClick={() => scrollToElement('visualizations')}
                className="px-6 py-3 bg-transparent border border-cosmic-blue dark:border-cosmic-purple text-foreground font-medium rounded-lg hover:bg-cosmic-blue/10 dark:hover:bg-cosmic-purple/10 transition"
              >
                {t('hero.visualizationsButton')}
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-square animate-float">
              <img 
                src={blackHoleModelImage} 
                alt="Black hole visualization" 
                className="w-full h-full object-cover rounded-full shadow-[0_0_50px_rgba(59,130,246,0.5)]" 
              />
              
              {/* Annotation lines */}
              <div className="absolute -top-4 -left-16 text-sm text-cosmic-blue hidden lg:block">
                <div className="flex items-center">
                  <div className="h-[1px] w-12 bg-cosmic-blue"></div>
                  <div className="ml-2">{t('hero.annotation.1')}</div>
                </div>
              </div>
              <div className="absolute top-1/3 -right-20 text-sm text-cosmic-purple hidden lg:block">
                <div className="flex items-center">
                  <div className="h-[1px] w-12 bg-cosmic-purple"></div>
                  <div className="ml-2">{t('hero.annotation.2')}</div>
                </div>
              </div>
              <div className="absolute bottom-10 -left-24 text-sm text-cosmic-pink hidden lg:block">
                <div className="flex items-center">
                  <div className="h-[1px] w-12 bg-cosmic-pink"></div>
                  <div className="ml-2">{t('hero.annotation.3')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#FFFFFF" className="dark:fill-dark-surface"></path>
        </svg>
      </div>
    </section>
  );
}
