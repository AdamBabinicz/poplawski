import { useState, useEffect } from "react";
// Import dla wouter v2: useLocation zwraca [location, navigate]
import { Link, useLocation } from "wouter";
import { useTranslations } from "@/hooks/use-translations";
import BlackHoleLogo from "../ui/black-hole-logo";
import ThemeToggle from "./ThemeToggle"; // Upewnij się, że ten import jest poprawny
import LanguageSwitcher from "./LanguageSwitcher"; // Upewnij się, że ten import jest poprawny

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Pobierz bieżącą lokalizację i funkcję nawigacji z wouter v2
  const [location, navigate] = useLocation();

  const { t, currentLanguage } = useTranslations();

  // Efekt do sprawdzania rozmiaru ekranu i zarządzania menu mobilnym
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      // Zamknij menu, jeśli przechodzimy z widoku mobilnego na desktopowy
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isMenuOpen]); // Dodano isMenuOpen jako zależność, aby poprawnie zarządzać stanem

  // Funkcja zwracająca zlokalizowaną ścieżkę
  const getLocalizedPath = (enPath: string) => {
    const pathMap: Record<string, string> = {
      // Ścieżki, które mają polskie odpowiedniki
      "/theory": "/teoria",
      "/visualizations": "/wizualizacje",
      "/about": "/o-autorze", // WAŻNE: Ścieżka do strony zawierającej sekcję #contact
      "/privacy-policy": "/polityka-prywatnosci",
      "/terms-of-service": "/regulamin",
      // Dodaj inne mapowania, jeśli są potrzebne
    };

    // Zwróć polską ścieżkę, jeśli język to pl i istnieje mapowanie
    if (currentLanguage === "pl" && pathMap[enPath]) {
      return pathMap[enPath];
    }
    // W przeciwnym razie zwróć oryginalną (angielską lub nie mapowaną) ścieżkę
    return enPath;
  };

  // Funkcja pomocnicza do przewijania do sekcji #contact
  const scrollToContact = (smooth: boolean = true) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 80; // Dostosuj do wysokości swojego nagłówka
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: smooth ? "smooth" : "auto", // Płynne lub natychmiastowe
      });
    } else {
      // Zdarza się, gdy element nie został jeszcze wyrenderowany lub ID jest błędne
      console.warn(
        "Element #contact nie został znaleziony. Przewijanie do góry strony."
      );
      window.scrollTo({ top: 0, behavior: "auto" }); // Fallback: przewiń do góry
    }
  };

  // Funkcja obsługująca kliknięcie przycisku/linku 'Kontakt'
  const handleContactClick = () => {
    // Pobierz poprawną ścieżkę do strony, która ZAWIERA sekcję #contact
    const contactPagePath = getLocalizedPath("/about"); // Upewnij się, że "/about" to właściwa angielska ścieżka

    if (location === contactPagePath) {
      // Jesteśmy już na stronie z kontaktem - tylko przewiń (płynnie)
      scrollToContact(true);
    } else {
      // Jesteśmy na innej stronie - nawiguj, a POTEM przewiń (natychmiast)
      navigate(contactPagePath);
      // Daj przeglądarce chwilę na nawigację i renderowanie DOM nowej strony
      // Wartość 150ms może wymagać dostosowania.
      setTimeout(() => scrollToContact(false), 150);
    }
    // Zawsze zamykaj menu mobilne po kliknięciu
    closeMobileMenu();
  };

  // Funkcja do otwierania/zamykania menu mobilnego
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Funkcja do zamykania menu mobilnego (np. po kliknięciu linku)
  const closeMobileMenu = () => {
    // Zamykaj tylko jeśli jest otwarte i jesteśmy w widoku mobilnym
    if (isMenuOpen && isMobileView) {
      setIsMenuOpen(false);
    }
  };

  // Funkcja sprawdzająca, czy dana ścieżka jest aktywna
  const isActive = (path: string) => {
    return location === path;
  };

  // Funkcja obsługująca kliknięcie zwykłego linku nawigacyjnego
  // Jeśli kliknięto link do bieżącej strony, przewija na górę.
  const handleNavLinkClick = (path: string) => {
    if (location === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Zamyka menu mobilne po kliknięciu *jakiegokolwiek* linku nawigacyjnego
    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Kliknięcie logo działa jak kliknięcie linku Home */}
          <div
            onClick={() => handleNavLinkClick("/")}
            className="cursor-pointer"
          >
            <Link href="/">
              <div className="flex items-center">
                <BlackHoleLogo className="mr-2" />
                <span className="font-display font-bold text-xl tracking-tight">
                  <span className="text-cosmic-blue">
                    {t("navbar.universe")}
                  </span>
                  <span className="text-foreground">{t("navbar.in")}</span>
                  <span className="text-cosmic-purple">
                    {t("navbar.blackHole")}
                  </span>
                </span>
              </div>
            </Link>
          </div>

          {/* Nawigacja Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {" "}
            {/* Dodano items-center dla wyrównania */}
            {/* Link Home */}
            <div
              onClick={() => handleNavLinkClick("/")}
              className="cursor-pointer"
            >
              <Link href="/">
                <div
                  className={`font-medium ${
                    isActive("/")
                      ? "text-cosmic-blue"
                      : "hover:text-cosmic-blue"
                  } transition-colors`}
                >
                  {t("navbar.home")}
                </div>
              </Link>
            </div>
            {/* Link Teoria */}
            <div
              onClick={() => handleNavLinkClick(getLocalizedPath("/theory"))}
              className="cursor-pointer"
            >
              <Link href={getLocalizedPath("/theory")}>
                <div
                  className={`font-medium ${
                    isActive(getLocalizedPath("/theory"))
                      ? "text-cosmic-blue"
                      : "hover:text-cosmic-blue"
                  } transition-colors`}
                >
                  {t("navbar.theory")}
                </div>
              </Link>
            </div>
            {/* Link Wizualizacje */}
            <div
              onClick={() =>
                handleNavLinkClick(getLocalizedPath("/visualizations"))
              }
              className="cursor-pointer"
            >
              <Link href={getLocalizedPath("/visualizations")}>
                <div
                  className={`font-medium ${
                    isActive(getLocalizedPath("/visualizations"))
                      ? "text-cosmic-blue"
                      : "hover:text-cosmic-blue"
                  } transition-colors`}
                >
                  {t("navbar.visualizations")}
                </div>
              </Link>
            </div>
            {/* Link O Autorze */}
            <div
              onClick={() => handleNavLinkClick(getLocalizedPath("/about"))}
              className="cursor-pointer"
            >
              <Link href={getLocalizedPath("/about")}>
                <div
                  className={`font-medium ${
                    isActive(getLocalizedPath("/about"))
                      ? "text-cosmic-blue"
                      : "hover:text-cosmic-blue"
                  } transition-colors`}
                >
                  {t("navbar.about")}
                </div>
              </Link>
            </div>
            {/* Przycisk Kontakt */}
            <button
              onClick={handleContactClick} // Używa specjalnej funkcji
              className="font-medium hover:text-cosmic-blue transition-colors"
            >
              {t("contact.title")}
            </button>
          </nav>

          {/* Kontrolki: Język, Motyw, Przycisk Menu Mobilnego */}
          <div className="flex items-center space-x-4">
            {/* Przełącznik Języka */}
            <LanguageSwitcher />

            {/* Przełącznik Motywu */}
            <ThemeToggle />

            {/* Przycisk Menu Mobilnego */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-cosmic-blue dark:hover:text-cosmic-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cosmic-blue" // Dodano style focus
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen} // Dodano atrybut dostępności
              onClick={toggleMobileMenu} // Otwiera/zamyka menu
            >
              <i
                className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobilne - renderowane warunkowo */}
      {isMenuOpen &&
        isMobileView && ( // Dodano isMobileView dla pewności
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
              {" "}
              {/* Dodano sm:px-3 dla spójności */}
              {/* Link Home Mobile */}
              <div
                onClick={() => handleNavLinkClick("/")}
                className="cursor-pointer"
              >
                <Link href="/">
                  <div
                    className={`block px-3 py-2 rounded-md text-base font-medium min-w-[44px] min-h-[44px] flex items-center ${
                      // 'block' zamiast 'flex' może być lepsze dla pełnej szerokości
                      isActive("/")
                        ? "text-cosmic-blue bg-muted dark:bg-dark-surface" // Dodano tło dla aktywnego
                        : "text-foreground hover:text-cosmic-blue hover:bg-muted/50 dark:hover:bg-dark-surface/50" // Style hover
                    }`}
                  >
                    {t("navbar.home")}
                  </div>
                </Link>
              </div>
              {/* Link Teoria Mobile */}
              <div
                onClick={() => handleNavLinkClick(getLocalizedPath("/theory"))}
                className="cursor-pointer"
              >
                <Link href={getLocalizedPath("/theory")}>
                  <div
                    className={`block px-3 py-2 rounded-md text-base font-medium min-w-[44px] min-h-[44px] flex items-center ${
                      isActive(getLocalizedPath("/theory"))
                        ? "text-cosmic-blue bg-muted dark:bg-dark-surface"
                        : "text-foreground hover:text-cosmic-blue hover:bg-muted/50 dark:hover:bg-dark-surface/50"
                    }`}
                  >
                    {t("navbar.theory")}
                  </div>
                </Link>
              </div>
              {/* Link Wizualizacje Mobile */}
              <div
                onClick={() =>
                  handleNavLinkClick(getLocalizedPath("/visualizations"))
                }
                className="cursor-pointer"
              >
                <Link href={getLocalizedPath("/visualizations")}>
                  <div
                    className={`block px-3 py-2 rounded-md text-base font-medium min-w-[44px] min-h-[44px] flex items-center ${
                      isActive(getLocalizedPath("/visualizations"))
                        ? "text-cosmic-blue bg-muted dark:bg-dark-surface"
                        : "text-foreground hover:text-cosmic-blue hover:bg-muted/50 dark:hover:bg-dark-surface/50"
                    }`}
                  >
                    {t("navbar.visualizations")}
                  </div>
                </Link>
              </div>
              {/* Link O Autorze Mobile */}
              <div
                onClick={() => handleNavLinkClick(getLocalizedPath("/about"))}
                className="cursor-pointer"
              >
                <Link href={getLocalizedPath("/about")}>
                  <div
                    className={`block px-3 py-2 rounded-md text-base font-medium min-w-[44px] min-h-[44px] flex items-center ${
                      isActive(getLocalizedPath("/about"))
                        ? "text-cosmic-blue bg-muted dark:bg-dark-surface"
                        : "text-foreground hover:text-cosmic-blue hover:bg-muted/50 dark:hover:bg-dark-surface/50"
                    }`}
                  >
                    {t("navbar.about")}
                  </div>
                </Link>
              </div>
              {/* Link/Przycisk Kontakt Mobile */}
              <div onClick={handleContactClick} className="cursor-pointer">
                <div
                  className={`block px-3 py-2 rounded-md text-base font-medium min-w-[44px] min-h-[44px] flex items-center text-foreground hover:text-cosmic-blue hover:bg-muted/50 dark:hover:bg-dark-surface/50`}
                >
                  {t("contact.title")}
                </div>
              </div>
            </div>
          </div>
        )}
    </header>
  );
}
