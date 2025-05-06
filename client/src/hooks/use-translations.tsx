import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import enTranslations from "@/locales/en"; // Upewnij się, że ścieżki są poprawne
import plTranslations from "@/locales/pl"; // Upewnij się, że ścieżki są poprawne

// Typ bazuje na angielskim dla struktury, ale klucze będą stringami
type TranslationsType = typeof enTranslations;
export type LanguageCode = "en" | "pl";

interface TranslationsContextType {
  // Funkcja t przyjmuje string, ponieważ obsługuje różne struktury kluczy
  t: (key: string, options?: { defaultValue?: string }) => string;
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const translationsMap = {
  en: enTranslations,
  pl: plTranslations,
};

const TranslationsContext = createContext<TranslationsContextType | undefined>(
  undefined
);

export function TranslationsProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(() => {
    const isBrowser = typeof window !== "undefined";
    let detectedLanguage: LanguageCode = "pl"; // Domyślnie polski
    if (isBrowser) {
      try {
        const savedLang = localStorage.getItem("language") as LanguageCode;
        if (savedLang && (savedLang === "en" || savedLang === "pl")) {
          detectedLanguage = savedLang;
        } else {
          const browserLang = navigator.language.split("-")[0];
          if (browserLang === "pl") {
            detectedLanguage = "pl";
          } else if (browserLang === "en") {
            detectedLanguage = "en";
          }
        }
      } catch (error) {
        console.warn(
          "Could not detect language from storage or browser:",
          error
        );
      }
    }
    return detectedLanguage;
  });

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      try {
        localStorage.setItem("language", currentLanguage);
        document.documentElement.lang = currentLanguage;
      } catch (error) {
        console.warn("Could not save language to localStorage:", error);
      }
    }
  }, [currentLanguage]);

  // --- FUNKCJA 't' v4.1 - Z ROZSZERZONYM LOGOWANIEM ---
  const t = (key: string, options?: { defaultValue?: string }): string => {
    console.log(`\n--- t() called with key: "${key}" ---`); // Log 1: Klucz wejściowy

    const currentLangObj = translationsMap[currentLanguage];
    const fallbackLangObj = translationsMap.en;

    // Funkcja rekurencyjna do szukania wartości Z LOGOWANIEM
    const findValue = (
      obj: any,
      keyParts: string[],
      level = 0
    ): string | undefined => {
      const indent = "  ".repeat(level); // Wcięcie dla czytelności logów
      // console.log(`${indent}findValue called with path: [${keyParts.join(', ')}]`); // Można odkomentować dla jeszcze większej szczegółowości

      // Warunek bazowy: jeśli nie ma obiektu lub ścieżki, nie ma co szukać
      if (!obj || typeof obj !== "object" || keyParts.length === 0) {
        // console.log(`${indent} -> Base case: Invalid obj or empty path.`);
        return undefined;
      }

      const currentKeyPart = keyParts[0];
      const remainingKeyParts = keyParts.slice(1);

      // 1. Sprawdź, czy CAŁY ORYGINALNY klucz (z kropkami) istnieje na TYM poziomie
      const fullRemainingKey = keyParts.join(".");
      // console.log(`${indent}Checking for flat key: "${fullRemainingKey}"`);
      if (Object.prototype.hasOwnProperty.call(obj, fullRemainingKey)) {
        const fullKeyValue = obj[fullRemainingKey];
        if (typeof fullKeyValue === "string") {
          console.log(
            `${indent} -> Found FLAT key "${fullRemainingKey}" with value: "${fullKeyValue}"`
          ); // Log ZNALEZIONO PŁASKI
          return fullKeyValue;
        }
        // console.log(`${indent} -> Flat key "${fullRemainingKey}" exists but value is not string (type: ${typeof fullKeyValue})`);
      } else {
        // console.log(`${indent} -> Flat key "${fullRemainingKey}" not found at this level.`);
      }

      // 2. Jeśli nie znaleziono jako płaski klucz z kropkami, spróbuj zejść głębiej
      //    używając tylko BIEŻĄCEJ części klucza
      // console.log(`${indent}Checking for nested key part: "${currentKeyPart}"`);
      if (Object.prototype.hasOwnProperty.call(obj, currentKeyPart)) {
        const value = obj[currentKeyPart];
        // console.log(`${indent} -> Found nested key part "${currentKeyPart}". Value type: ${typeof value}`);

        // Jeśli to koniec ścieżki i znaleziono string
        if (remainingKeyParts.length === 0 && typeof value === "string") {
          console.log(
            `${indent} -> Found NESTED value at end of path: "${value}"`
          ); // Log ZNALEZIONO ZAGNIEŻDŻONY
          return value;
        }
        // Jeśli są dalsze części ścieżki i wartość jest obiektem, idź dalej
        if (remainingKeyParts.length > 0 && typeof value === "object") {
          // console.log(`${indent} -> Going deeper for remaining path: [${remainingKeyParts.join(', ')}]`);
          return findValue(value, remainingKeyParts, level + 1); // Rekurencja
        }
        // console.log(`${indent} -> Nested path ended here but value is not string or path continues.`);
      } else {
        // console.log(`${indent} -> Nested key part "${currentKeyPart}" not found at this level.`);
      }

      // Nie znaleziono na tej ścieżce w żaden sposób
      // console.log(`${indent} -> No value found for path [${keyParts.join(', ')}] at this level.`);
      return undefined;
    };

    const keys = key.split("."); // Rozbij klucz na części

    console.log(
      `[t] Searching in language: "${currentLanguage}" for path: [${keys.join(
        ", "
      )}]`
    ); // Log Język i ścieżka
    let translation = findValue(currentLangObj, keys);

    if (translation === undefined) {
      console.log(
        `[t] Not found in "${currentLanguage}". Searching in fallback "en" for path: [${keys.join(
          ", "
        )}]`
      ); // Log Fallback
      translation = findValue(fallbackLangObj, keys);
    }

    if (translation !== undefined) {
      console.log(
        `[t] SUCCESS: Returning translation for "${key}": "${translation}"`
      ); // Log Sukces
      return translation;
    } else {
      console.warn(
        `[t] FAILED: Translation key "${key}" not found. Returning key.`
      ); // Log Porażka
      if (options?.defaultValue !== undefined) {
        return options.defaultValue;
      }
      return key; // Zwróć oryginalny klucz
    }
  };
  // --- KONIEC FUNKCJI 't' v4.1 ---

  const setLanguage = (lang: LanguageCode) => {
    if (lang === "en" || lang === "pl") {
      setCurrentLanguage(lang);
    } else {
      console.warn(`Attempted to set invalid language: ${lang}`);
    }
  };

  return (
    <TranslationsContext.Provider value={{ t, currentLanguage, setLanguage }}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error(
      "useTranslations must be used within a TranslationsProvider"
    );
  }
  return context;
}
