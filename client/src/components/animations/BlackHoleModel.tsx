import { useState } from 'react';
import { useTranslations } from '@/hooks/use-translations';
import blackHoleModelImage from '@/assets/images/black-hole-model.png';
import accretionDiskImage from '@/assets/images/accretion-disk.png';
import torsionPhysicsImage from '@/assets/images/torsion-physics.png';

type Region = 'accretion-disk' | 'event-horizon' | 'torsion-zone';

export default function BlackHoleModel() {
  const { t } = useTranslations();
  const [activeRegion, setActiveRegion] = useState<Region | null>(null);
  
  const handleRegionClick = (region: Region) => {
    setActiveRegion(region === activeRegion ? null : region);
  };
  
  const getRegionInfo = (region: Region) => {
    switch(region) {
      case 'accretion-disk':
        return {
          title: t('visualizations.legend.accretion'),
          description: t('visualizations.item1.description'),
          image: accretionDiskImage,
          color: 'cosmic-blue'
        };
      case 'event-horizon':
        return {
          title: t('visualizations.legend.horizon'),
          description: 'The point of no return in spacetime, where gravity is so strong that not even light can escape. According to Dr. Popławski, this boundary marks where our parent universe ends and our universe begins.',
          image: blackHoleModelImage,
          color: 'cosmic-purple'
        };
      case 'torsion-zone':
        return {
          title: t('visualizations.legend.torsion'),
          description: t('visualizations.item2.description'),
          image: torsionPhysicsImage,
          color: 'cosmic-pink'
        };
      default:
        return { title: '', description: '', image: '', color: '' };
    }
  };
  
  return (
    <div className="p-6 aspect-video bg-gray-50 dark:bg-gray-900 relative flex items-center justify-center">
      <div className="relative w-full max-w-md aspect-square">
        {/* Black hole visualization */}
        <div className="absolute inset-[35%] rounded-full bg-black shadow-[0_0_30px_rgba(0,0,0,0.8)]"></div>
        
        {/* Accretion disk */}
        <div className="absolute inset-[10%] rounded-full accretion-disk animate-rotate-slow" style={{ clipPath: 'circle(90% at center)' }}></div>
        
        {/* Central black hole */}
        <div className="absolute inset-[34%] rounded-full bg-black z-10"></div>
        
        {/* Torsion lines */}
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
        
        {/* Hotspots */}
        <button 
          className="absolute top-[25%] left-[15%] w-5 h-5 rounded-full bg-cosmic-blue/50 animate-cosmic-pulse cursor-pointer"
          onClick={() => handleRegionClick('accretion-disk')}
          aria-label={t('visualizations.legend.accretion')}
        />
        <button 
          className="absolute top-[50%] left-[50%] w-5 h-5 rounded-full bg-cosmic-purple/50 animate-cosmic-pulse cursor-pointer"
          onClick={() => handleRegionClick('event-horizon')}
          aria-label={t('visualizations.legend.horizon')}
        />
        <button 
          className="absolute bottom-[30%] right-[20%] w-5 h-5 rounded-full bg-cosmic-pink/50 animate-cosmic-pulse cursor-pointer"
          onClick={() => handleRegionClick('torsion-zone')}
          aria-label={t('visualizations.legend.torsion')}
        />
      </div>
      
      {/* Legend */}
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
      
      {/* Region info popup */}
      {activeRegion && (
        <div className="absolute top-4 left-4 bg-background/95 p-4 rounded-lg shadow-lg text-sm max-w-sm border border-border transform transition-all duration-300 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h4 className={`font-display font-semibold text-${getRegionInfo(activeRegion).color}`}>
              {getRegionInfo(activeRegion).title}
            </h4>
            <button 
              onClick={() => setActiveRegion(null)}
              className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-muted"
            >
              <span className="sr-only">Close</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11M1 11L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          
          <div className="rounded-md overflow-hidden mb-3">
            <img 
              src={getRegionInfo(activeRegion).image} 
              alt={getRegionInfo(activeRegion).title} 
              className="w-full h-32 object-cover" 
            />
          </div>
          
          <p className="text-muted-foreground">{getRegionInfo(activeRegion).description}</p>
          
          <div className="mt-3 pt-2 border-t border-border">
            <button
              onClick={() => setActiveRegion(null)}
              className={`px-3 py-1.5 rounded text-white text-xs font-medium bg-${getRegionInfo(activeRegion).color} hover:opacity-90 transition-opacity`}
            >
              {t('visualizations.interactive.close')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
