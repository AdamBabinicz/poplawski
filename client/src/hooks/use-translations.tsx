import { useState, useEffect, createContext, useContext } from "react";
import enTranslations from "@/locales/en";
import plTranslations from "@/locales/pl";

type TranslationsType = typeof enTranslations;
type LanguageCode = "en" | "pl";

interface TranslationsContextType {
  t: (key: keyof TranslationsType) => string;
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const translationsMap = {
  en: enTranslations,
  pl: plTranslations,
};

// Create context
const TranslationsContext = createContext<TranslationsContextType | undefined>(
  undefined
);

// Provider component
export function TranslationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(() => {
    // Try to get language from localStorage first
    const savedLang = localStorage.getItem("language") as LanguageCode;
    if (savedLang && (savedLang === "en" || savedLang === "pl")) {
      return savedLang;
    }

    // Otherwise try to detect from browser
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "pl") {
      return "pl";
    }

    // Default to English
    return "pl";
  });

  useEffect(() => {
    localStorage.setItem("language", currentLanguage);
    // Update HTML lang attribute for accessibility and SEO
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const t = (key: keyof TranslationsType): string => {
    return (
      translationsMap[currentLanguage][key] || translationsMap.en[key] || key
    );
  };

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
  };

  return (
    <TranslationsContext.Provider value={{ t, currentLanguage, setLanguage }}>
      {children}
    </TranslationsContext.Provider>
  );
}

// Hook for using translations
export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error(
      "useTranslations must be used within a TranslationsProvider"
    );
  }
  return context;
}
