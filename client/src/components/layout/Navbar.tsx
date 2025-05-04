import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTranslations } from "@/hooks/use-translations";
import BlackHoleLogo from "../ui/black-hole-logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const [location, navigate] = useLocation();

  const { t, currentLanguage } = useTranslations();

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);

      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isMenuOpen]);
  const getLocalizedPath = (enPath: string) => {
    const pathMap: Record<string, string> = {
      "/theory": "/teoria",
      "/visualizations": "/wizualizacje",
      "/about": "/o-autorze",
      "/privacy-policy": "/polityka-prywatnosci",
      "/terms-of-service": "/regulamin",
    };

    if (currentLanguage === "pl" && pathMap[enPath]) {
      return pathMap[enPath];
    }

    return enPath;
  };

  const scrollToContact = (smooth: boolean = true) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: smooth ? "smooth" : "auto",
      });
    } else {
      console.warn(
        "Element #contact nie został znaleziony. Przewijanie do góry strony."
      );
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  const handleContactClick = () => {
    const contactPagePath = getLocalizedPath("/about");

    if (location === contactPagePath) {
      scrollToContact(true);
    } else {
      navigate(contactPagePath);

      setTimeout(() => scrollToContact(false), 150);
    }

    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMenuOpen && isMobileView) {
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string) => {
    return location === path;
  };

  const handleNavLinkClick = (path: string) => {
    if (location === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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

          <nav className="hidden md:flex items-center space-x-8">
            {" "}
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
            <button
              onClick={handleContactClick}
              className="font-medium hover:text-cosmic-blue transition-colors"
            >
              {t("contact.title")}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            <ThemeToggle />

            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-cosmic-blue dark:hover:text-cosmic-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cosmic-blue"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMobileMenu}
            >
              <i
                className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && isMobileView && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {" "}
            <div
              onClick={() => handleNavLinkClick("/")}
              className="cursor-pointer"
            >
              <Link href="/">
                <div
                  className={`px-3 py-2 rounded-md text-base font-medium min-w-[44px] min-h-[44px] flex items-center ${
                    isActive("/")
                      ? "text-cosmic-blue bg-muted dark:bg-dark-surface"
                      : "text-foreground hover:text-cosmic-blue hover:bg-muted/50 dark:hover:bg-dark-surface/50"
                  }`}
                >
                  {t("navbar.home")}
                </div>
              </Link>
            </div>
            <div
              onClick={() => handleNavLinkClick(getLocalizedPath("/theory"))}
              className="cursor-pointer"
            >
              <Link href={getLocalizedPath("/theory")}>
                <div
                  className={`px-3 py-2 rounded-md text-base font-medium min-w-[44px] min-h-[44px] flex items-center ${
                    isActive(getLocalizedPath("/theory"))
                      ? "text-cosmic-blue bg-muted dark:bg-dark-surface"
                      : "text-foreground hover:text-cosmic-blue hover:bg-muted/50 dark:hover:bg-dark-surface/50"
                  }`}
                >
                  {t("navbar.theory")}
                </div>
              </Link>
            </div>
            <div
              onClick={() =>
                handleNavLinkClick(getLocalizedPath("/visualizations"))
              }
              className="cursor-pointer"
            >
              <Link href={getLocalizedPath("/visualizations")}>
                <div
                  className={`px-3 py-2 rounded-md text-base font-medium min-w-[44px] min-h-[44px] flex items-center ${
                    isActive(getLocalizedPath("/visualizations"))
                      ? "text-cosmic-blue bg-muted dark:bg-dark-surface"
                      : "text-foreground hover:text-cosmic-blue hover:bg-muted/50 dark:hover:bg-dark-surface/50"
                  }`}
                >
                  {t("navbar.visualizations")}
                </div>
              </Link>
            </div>
            <div
              onClick={() => handleNavLinkClick(getLocalizedPath("/about"))}
              className="cursor-pointer"
            >
              <Link href={getLocalizedPath("/about")}>
                <div
                  className={`px-3 py-2 rounded-md text-base font-medium min-w-[44px] min-h-[44px] flex items-center ${
                    isActive(getLocalizedPath("/about"))
                      ? "text-cosmic-blue bg-muted dark:bg-dark-surface"
                      : "text-foreground hover:text-cosmic-blue hover:bg-muted/50 dark:hover:bg-dark-surface/50"
                  }`}
                >
                  {t("navbar.about")}
                </div>
              </Link>
            </div>
            <div onClick={handleContactClick} className="cursor-pointer">
              <div
                className={`px-3 py-2 rounded-md text-base font-medium min-w-[44px] min-h-[44px] flex items-center text-foreground hover:text-cosmic-blue hover:bg-muted/50 dark:hover:bg-dark-surface/50`}
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
