import { useTranslations } from '@/hooks/use-translations';
import drPoplawskiImage from '@/assets/images/dr-poplawski.jpg';

export default function AboutSection() {
  const { t } = useTranslations();
  
  return (
    <section id="about" className="relative py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold tracking-tight mb-6">
              {t('about.title.1')} <span className="bg-clip-text text-transparent bg-cosmic-gradient">{t('about.title.2')}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about.description')}
            </p>
          </div>
          
          <div className="bg-muted dark:bg-dark-bg rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 md:flex gap-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={drPoplawskiImage} 
                    alt="Dr. Nikodem Popławski" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="font-display text-2xl font-bold mb-4">{t('about.role')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('about.bio.1')}
                </p>
                <p className="text-muted-foreground mb-6">
                  {t('about.bio.2')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-display font-semibold text-lg mb-1">{t('about.research')}</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      {t('about.research.items').split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-display font-semibold text-lg mb-1">{t('about.publications')}</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      {t('about.publications.items').split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-muted dark:bg-dark-bg border border-border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <i className='bx bx-link-external mr-2'></i>
                    {t('about.website')}
                  </a>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-muted dark:bg-dark-bg border border-border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <i className='bx bxl-google mr-2'></i>
                    {t('about.scholar')}
                  </a>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-muted dark:bg-dark-bg border border-border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <i className='bx bxl-youtube mr-2'></i>
                    {t('about.lectures')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
