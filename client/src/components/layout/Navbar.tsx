import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTranslations } from "@/hooks/use-translations";
import BlackHoleLogo from "../ui/black-hole-logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [location] = useLocation();
  const { t, currentLanguage } = useTranslations();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu}>
            <a className="flex items-center">
              <BlackHoleLogo className="mr-2" />
              <span className="font-display font-bold text-xl tracking-tight">
                <span className="text-cosmic-blue">{t('navbar.universe')}</span> 
                <span className="text-foreground">{t('navbar.in')}</span> 
                <span className="text-cosmic-purple">{t('navbar.blackHole')}</span>
              </span>
            </a>
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className={`font-medium ${isActive('/') ? 'text-cosmic-blue' : 'hover:text-cosmic-blue'} transition-colors`}>
                {t('navbar.home')}
              </a>
            </Link>
            <Link href="/theory">
              <a className={`font-medium ${isActive('/theory') ? 'text-cosmic-blue' : 'hover:text-cosmic-blue'} transition-colors`}>
                {t('navbar.theory')}
              </a>
            </Link>
            <Link href="/visualizations">
              <a className={`font-medium ${isActive('/visualizations') ? 'text-cosmic-blue' : 'hover:text-cosmic-blue'} transition-colors`}>
                {t('navbar.visualizations')}
              </a>
            </Link>
            <Link href="/about">
              <a className={`font-medium ${isActive('/about') ? 'text-cosmic-blue' : 'hover:text-cosmic-blue'} transition-colors`}>
                {t('navbar.about')}
              </a>
            </Link>
          </nav>
          
          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-cosmic-blue dark:hover:text-cosmic-blue"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMobileMenu}
            >
              <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
            <Link href="/">
              <a className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-cosmic-blue' : 'text-foreground hover:text-cosmic-blue'}`} onClick={closeMobileMenu}>
                {t('navbar.home')}
              </a>
            </Link>
            <Link href="/theory">
              <a className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/theory') ? 'text-cosmic-blue' : 'text-foreground hover:text-cosmic-blue'}`} onClick={closeMobileMenu}>
                {t('navbar.theory')}
              </a>
            </Link>
            <Link href="/visualizations">
              <a className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/visualizations') ? 'text-cosmic-blue' : 'text-foreground hover:text-cosmic-blue'}`} onClick={closeMobileMenu}>
                {t('navbar.visualizations')}
              </a>
            </Link>
            <Link href="/about">
              <a className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-cosmic-blue' : 'text-foreground hover:text-cosmic-blue'}`} onClick={closeMobileMenu}>
                {t('navbar.about')}
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
