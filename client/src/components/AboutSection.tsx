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
              {t('about.title.1')} <span className="relative inline-block">
                <span className="absolute inset-0 bg-cosmic-gradient blur-sm opacity-70 rounded-md"></span>
                <span className="relative z-10 text-white px-2 py-1 rounded-md">{t('about.title.2')}</span>
              </span>
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
                  <a 
                    href="https://www.newhaven.edu/faculty-staff-profiles/nikodem-poplawski.php" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-muted dark:bg-dark-bg border border-border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                    {t('about.website')}
                  </a>
                  <a 
                    href="https://www.newhaven.edu/news/blog/2020/nikodem-poplawski-research.php" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-muted dark:bg-dark-bg border border-border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    title="Zobacz publikacje naukowe i badania Dr. Popławskiego"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"/>
                      <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"/>
                    </svg>
                    {t('about.scholar')}
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=thRNKtfTv-0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-muted dark:bg-dark-bg border border-border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                    {t('about.lectures')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Extended Theory Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold tracking-tight mb-4">
                Przełomowa Teoria <span className="relative inline-block">
                  <span className="absolute inset-0 bg-cosmic-gradient blur-sm opacity-70 rounded-md"></span>
                  <span className="relative z-10 text-white px-2 py-1 rounded-md">Wszechświata w Czarnej Dziurze</span>
                </span>
              </h2>
              <p className="text-muted-foreground">
                Na podstawie informacji z <a href="https://www.newhaven.edu/faculty-staff-profiles/nikodem-poplawski.php" target="_blank" rel="noopener noreferrer" className="text-cosmic-blue dark:text-cosmic-purple hover:underline">oficjalnej strony Uniwersytetu New Haven</a>
              </p>
            </div>
            
            <div className="bg-muted/30 dark:bg-dark-bg/30 rounded-xl p-6 mb-8 border border-border/50">
              <h3 className="font-display text-xl font-semibold mb-4">Kontekst Naukowy</h3>
              <p className="text-muted-foreground mb-4">
                Dr. Nikodem Popławski, profesor na Uniwersytecie New Haven, zaproponował rewolucyjną teorię kosmologiczną,
                która fundamentalnie zmienia nasze rozumienie czarnych dziur i początku wszechświata. 
                Jego badania koncentrują się na zastosowaniu teorii Einsteina-Cartana, która rozszerza ogólną teorię względności 
                o własność przestrzeni znaną jako torsja.
              </p>
              <p className="text-muted-foreground">
                Główne odkrycie dr. Popławskiego polega na tym, że materia przekraczająca horyzont zdarzeń czarnej dziury 
                nie tworzy osobliwości (punktu o nieskończonej gęstości) - jak przewiduje standardowa teoria względności. 
                Zamiast tego, dzięki efektom kwantowym i torsji przestrzeni, materia odbija się, tworząc nowy, rozszerzający się wszechświat.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-muted/30 dark:bg-dark-bg/30 rounded-xl p-6 border border-border/50">
                <h3 className="font-display text-xl font-semibold mb-4">Kluczowe Elementy Teorii</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cosmic-blue/20 dark:bg-cosmic-purple/20 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">1</span>
                    <div>
                      <strong className="font-medium block">Torsja Przestrzeni</strong>
                      <p className="text-muted-foreground text-sm">Rozszerzenie teorii Einsteina wprowadzające nową właściwość geometryczną przestrzeni, która zapobiega tworzeniu osobliwości.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cosmic-blue/20 dark:bg-cosmic-purple/20 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">2</span>
                    <div>
                      <strong className="font-medium block">Odbicie Materii</strong>
                      <p className="text-muted-foreground text-sm">W centrum czarnej dziury materia nie jest nieskończenie ściśnięta, lecz odbija się dzięki siłom kwantowym, tworząc "odbicie" lub "big bounce".</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cosmic-blue/20 dark:bg-cosmic-purple/20 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">3</span>
                    <div>
                      <strong className="font-medium block">Wszechświat-Dziecko</strong>
                      <p className="text-muted-foreground text-sm">Każda czarna dziura może zawierać w swoim wnętrzu cały nowy, rozszerzający się wszechświat, niedostępny dla zewnętrznych obserwatorów.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted/30 dark:bg-dark-bg/30 rounded-xl p-6 border border-border/50">
                <h3 className="font-display text-xl font-semibold mb-4">Implikacje Naukowe</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 text-cosmic-blue dark:text-cosmic-purple mr-3 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <div>
                      <strong className="font-medium block">Rozwiązanie problemu osobliwości</strong>
                      <p className="text-muted-foreground text-sm">Teoria eliminuje paradoks nieskończonej gęstości w centrum czarnych dziur, który od zawsze był problemem w fizyce.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 text-cosmic-blue dark:text-cosmic-purple mr-3 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <div>
                      <strong className="font-medium block">Nowe wyjaśnienie Wielkiego Wybuchu</strong>
                      <p className="text-muted-foreground text-sm">Sugeruje, że nasz własny wszechświat mógł powstać wewnątrz czarnej dziury w innym, większym wszechświecie.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 text-cosmic-blue dark:text-cosmic-purple mr-3 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <div>
                      <strong className="font-medium block">Potencjalne wyjaśnienie ciemnej materii</strong>
                      <p className="text-muted-foreground text-sm">Teoria może pomóc wyjaśnić niedostrzegalne komponenty kosmiczne, takie jak ciemna materia i ciemna energia.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cosmic-blue/10 to-cosmic-purple/10 dark:from-cosmic-blue/5 dark:to-cosmic-purple/5 rounded-xl p-6 border border-border/50">
              <h3 className="font-display text-xl font-semibold mb-4">Potencjalne Obserwacje i Weryfikacja</h3>
              <p className="text-muted-foreground mb-4">
                Teoria dr. Popławskiego, choć rewolucyjna, ma potencjał do weryfikacji obserwacyjnej. Według jego prac naukowych, 
                możliwe jest znalezienie sygnatur teorii w:
              </p>
              <ul className="text-muted-foreground space-y-2 mb-4 list-disc list-inside pl-2">
                <li>Kosmicznym mikrofalowym promieniowaniu tła (obecne dane z teleskopu kosmicznego JWST)</li>
                <li>Asymetrii w promieniowaniu z czarnych dziur (efekt torsji mógłby być widoczny w promienowaniu Hawkinga)</li>
                <li>Specyficznej charakterystyce fal grawitacyjnych generowanych przez zderzenia czarnych dziur</li>
              </ul>
              <p className="text-muted-foreground">
                Badania dr. Popławskiego są kontynuowane na Uniwersytecie New Haven, gdzie prowadzi on dalsze analizy 
                matematyczne i poszukuje empirycznych dowodów na poparcie swojej teorii wszechświata w czarnej dziurze.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
