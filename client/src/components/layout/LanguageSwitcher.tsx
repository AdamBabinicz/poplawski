import { useState } from "react";
import { useTranslations } from "@/hooks/use-translations";

export default function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const switchToLanguage = (lang: 'en' | 'pl') => {
    setLanguage(lang);
    closeMenu();
  };

  return (
    <div className="relative group">
      <button
        type="button"
        className="flex items-center text-sm font-medium text-foreground hover:text-cosmic-blue transition-colors"
        aria-label="Change language"
        onClick={toggleMenu}
      >
        <span>{currentLanguage.toUpperCase()}</span>
        <i className='bx bx-chevron-down ml-1 text-lg'></i>
      </button>
      
      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-background border border-border z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => switchToLanguage('en')}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-muted ${currentLanguage === 'en' ? 'text-cosmic-blue' : 'text-foreground'}`}
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => switchToLanguage('pl')}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-muted ${currentLanguage === 'pl' ? 'text-cosmic-blue' : 'text-foreground'}`}
              role="menuitem"
            >
              Polski
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
