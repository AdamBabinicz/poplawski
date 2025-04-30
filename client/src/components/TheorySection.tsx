import { useTranslations } from '@/hooks/use-translations';

interface TheoryStep {
  number: string;
  colorClass: string;
  title: string;
  description: string;
  image: string;
}

interface KeyImplication {
  icon: string;
  colorClass: string;
  title: string;
  description: string;
}

export default function TheorySection() {
  const { t } = useTranslations();
  
  const theorySteps: TheoryStep[] = [
    {
      number: "1",
      colorClass: "cosmic-blue",
      title: t('theory.step1.title'),
      description: t('theory.step1.description'),
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      number: "2",
      colorClass: "cosmic-pink",
      title: t('theory.step2.title'),
      description: t('theory.step2.description'),
      image: "https://images.unsplash.com/photo-1506703719100-a0b3a3c845d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      number: "3",
      colorClass: "cosmic-purple",
      title: t('theory.step3.title'),
      description: t('theory.step3.description'),
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      number: "4",
      colorClass: "cosmic-orange",
      title: t('theory.step4.title'),
      description: t('theory.step4.description'),
      image: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];
  
  const keyImplications: KeyImplication[] = [
    {
      icon: 'bx-infinite',
      colorClass: "cosmic-blue",
      title: t('theory.implication1.title'),
      description: t('theory.implication1.description')
    },
    {
      icon: 'bx-bulb',
      colorClass: "cosmic-purple",
      title: t('theory.implication2.title'),
      description: t('theory.implication2.description')
    },
    {
      icon: 'bx-time',
      colorClass: "cosmic-pink",
      title: t('theory.implication3.title'),
      description: t('theory.implication3.description')
    },
    {
      icon: 'bx-test-tube',
      colorClass: "cosmic-orange",
      title: t('theory.implication4.title'),
      description: t('theory.implication4.description')
    }
  ];
  
  return (
    <section id="theory" className="relative py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-6">
            {t('theory.title.1')} <span className="bg-clip-text text-transparent bg-cosmic-gradient">{t('theory.title.2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('theory.description')}
          </p>
        </div>
        
        {/* Theory Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {theorySteps.map((step, index) => (
            <div key={index} className="bg-background dark:bg-dark-bg rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border border-border">
              <div className="p-1 bg-cosmic-gradient"></div>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-full bg-${step.colorClass}/10 dark:bg-${step.colorClass}/20 flex items-center justify-center mb-4`}>
                  <span className={`text-${step.colorClass} font-display font-bold text-xl`}>{step.number}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <div className="p-4 border-t border-border">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-48 object-cover rounded-lg" 
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Key Implications */}
        <div className="bg-muted dark:bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold mb-6 text-center">{t('theory.implications')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyImplications.map((implication, index) => (
              <div key={index} className="flex">
                <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-${implication.colorClass}/10 dark:bg-${implication.colorClass}/20 mr-4`}>
                  <i className={`bx ${implication.icon} text-${implication.colorClass} text-2xl`}></i>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold mb-2">{implication.title}</h4>
                  <p className="text-muted-foreground">
                    {implication.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
