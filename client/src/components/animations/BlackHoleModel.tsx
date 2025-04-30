import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from '@/hooks/use-translations';
import blackHoleModelImage from '@/assets/images/black-hole-model.png';
import accretionDiskImage from '@/assets/images/accretion-disk.png';
import torsionPhysicsImage from '@/assets/images/torsion-physics.png';

// Definiowanie regionów czarnej dziury
type Region = 'accretion-disk' | 'event-horizon' | 'torsion-zone';

// Informacje o regionach
interface RegionInfo {
  title: string;
  description: string;
  image: string;
  color: string;
  bgColor: string;
  textColor: string;
}

export default function BlackHoleModel() {
  const { t, currentLanguage } = useTranslations();
  const [activeRegion, setActiveRegion] = useState<Region | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  // Funkcja do pobierania informacji o danym regionie
  const getRegionInfo = useCallback((region: Region): RegionInfo => {
    switch(region) {
      case 'accretion-disk':
        return {
          title: t('visualizations.legend.accretion'),
          description: t('visualizations.item1.description'),
          image: accretionDiskImage,
          color: 'cosmic-blue',
          bgColor: 'bg-cosmic-blue',
          textColor: 'text-cosmic-blue'
        };
      case 'event-horizon':
        return {
          title: t('visualizations.legend.horizon'),
          description: currentLanguage === 'en' 
            ? 'The point of no return in spacetime, where gravity is so strong that not even light can escape. According to Dr. Popławski, this boundary marks where our parent universe ends and our universe begins.'
            : 'Punkt bez powrotu w czasoprzestrzeni, gdzie grawitacja jest tak silna, że nawet światło nie może uciec. Według dr Popławskiego ta granica wyznacza miejsce, gdzie kończy się nasz wszechświat macierzysty i zaczyna nasz wszechświat.',
          image: blackHoleModelImage,
          color: 'cosmic-purple',
          bgColor: 'bg-cosmic-purple',
          textColor: 'text-cosmic-purple'
        };
      case 'torsion-zone':
        return {
          title: t('visualizations.legend.torsion'),
          description: t('visualizations.item2.description'),
          image: torsionPhysicsImage,
          color: 'cosmic-pink',
          bgColor: 'bg-cosmic-pink',
          textColor: 'text-cosmic-pink'
        };
      default:
        return { 
          title: '', 
          description: '', 
          image: '', 
          color: '', 
          bgColor: '',
          textColor: ''
        };
    }
  }, [t, currentLanguage]);

  // Obsługa kliknięcia regionu
  const handleRegionClick = useCallback((region: Region) => {
    console.log(`Clicked on region: ${region}`);
    if (region === activeRegion) {
      setActiveRegion(null);
      setShowInfo(false);
    } else {
      setActiveRegion(region);
      setShowInfo(true);
    }
  }, [activeRegion]);

  // Zamykanie okienka informacyjnego
  const closeInfoPanel = useCallback(() => {
    setShowInfo(false);
    setTimeout(() => setActiveRegion(null), 300); // Opóźnijmy reset aktywnego regionu po animacji
  }, []);

  // Efekt do debugowania
  useEffect(() => {
    console.log(`Active region: ${activeRegion}, showInfo: ${showInfo}`);
  }, [activeRegion, showInfo]);

  return (
    <div className="p-6 aspect-video bg-gray-50 dark:bg-gray-900 relative flex items-center justify-center">
      {/* Główna wizualizacja */}
      <div className="relative w-full max-w-md aspect-square">
        {/* Czarna dziura - cień */}
        <div className="absolute inset-[35%] rounded-full bg-black shadow-[0_0_30px_rgba(0,0,0,0.8)]"></div>
        
        {/* Dysk akrecyjny */}
        <div className="absolute inset-[10%] rounded-full accretion-disk animate-rotate-slow" 
          style={{ clipPath: 'circle(90% at center)' }}>
        </div>
        
        {/* Centralna czarna dziura */}
        <div className="absolute inset-[34%] rounded-full bg-black z-10"></div>
        
        {/* Linie torsji */}
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="torsionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path d="M 50,0 Q 50,50 50,100" fill="none" stroke="url(#torsionGradient)" strokeWidth="0.5" className="torsion-line" />
          <path d="M 30,0 Q 30,50 30,100" fill="none" stroke="url(#torsionGradient)" strokeWidth="0.5" className="torsion-line" style={{ animationDelay: '0.5s' }} />
          <path d="M 70,0 Q 70,50 70,100" fill="none" stroke="url(#torsionGradient)" strokeWidth="0.5" className="torsion-line" style={{ animationDelay: '1s' }} />
        </svg>
        
        {/* Interaktywne punkty */}
        <button 
          className="absolute top-[25%] left-[15%] w-10 h-10 rounded-full bg-cosmic-blue/50 animate-cosmic-pulse cursor-pointer hover:bg-cosmic-blue/80 transition-all z-20"
          onClick={() => handleRegionClick('accretion-disk')}
          aria-label={t('visualizations.legend.accretion')}
        >
          <span className="sr-only">{t('visualizations.legend.accretion')}</span>
        </button>
        <button 
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cosmic-purple/50 animate-cosmic-pulse cursor-pointer hover:bg-cosmic-purple/80 transition-all z-20"
          onClick={() => handleRegionClick('event-horizon')}
          aria-label={t('visualizations.legend.horizon')}
        >
          <span className="sr-only">{t('visualizations.legend.horizon')}</span>
        </button>
        <button 
          className="absolute bottom-[30%] right-[20%] w-10 h-10 rounded-full bg-cosmic-pink/50 animate-cosmic-pulse cursor-pointer hover:bg-cosmic-pink/80 transition-all z-20"
          onClick={() => handleRegionClick('torsion-zone')}
          aria-label={t('visualizations.legend.torsion')}
        >
          <span className="sr-only">{t('visualizations.legend.torsion')}</span>
        </button>
      </div>
      
      {/* Legenda */}
      <div className="absolute bottom-4 right-4 bg-background/90 p-3 rounded-lg shadow-lg text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 rounded-full bg-cosmic-blue mr-2"></div>
          <span>{t('visualizations.legend.accretion')}</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 rounded-full bg-cosmic-purple mr-2"></div>
          <span>{t('visualizations.legend.horizon')}</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-cosmic-pink mr-2"></div>
          <span>{t('visualizations.legend.torsion')}</span>
        </div>
      </div>
      
      {/* Instrukcja */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-background/50 px-3 py-1 rounded-full text-sm text-center">
        {currentLanguage === 'en' 
          ? 'Click on the colored dots to learn more' 
          : 'Kliknij w kolorowe punkty, aby dowiedzieć się więcej'}
      </div>
      
      {/* Panel informacyjny - wyświetlany po kliknięciu punktu */}
      {activeRegion && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity ${showInfo ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeInfoPanel}
        >
          <div 
            className={`bg-background p-5 rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ${showInfo ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-bold ${getRegionInfo(activeRegion).textColor}`}>
                {getRegionInfo(activeRegion).title}
              </h3>
              <button 
                onClick={closeInfoPanel}
                className="p-1 hover:bg-muted rounded-full"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
            
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src={getRegionInfo(activeRegion).image} 
                alt={getRegionInfo(activeRegion).title} 
                className="w-full h-48 object-cover"
              />
            </div>
            
            <p className="text-muted-foreground mb-4 text-sm">
              {getRegionInfo(activeRegion).description}
            </p>
            
            <button
              onClick={closeInfoPanel}
              className={`${getRegionInfo(activeRegion).bgColor} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity w-full`}
            >
              {currentLanguage === 'en' ? 'Close' : 'Zamknij'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
