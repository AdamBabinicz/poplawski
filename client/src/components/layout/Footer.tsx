import { Link, useLocation } from "wouter";
import { useTranslations } from "@/hooks/use-translations";
import BlackHoleLogo from "../ui/black-hole-logo";

export default function Footer() {
  const { t, currentLanguage } = useTranslations();
  const [location, navigate] = useLocation();

  const getLocalizedPath = (enPath: string) => {
    const pathMap: Record<string, string> = {
      "/theory": "/teoria",
      "/visualizations": "/wizualizacje",
      "/about": "/o-autorze",
      "/privacy-policy": "/polityka-prywatnosci",
      "/terms-of-service": "/regulamin",
      "/contact-admin": "/kontakt",
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
        top: offsetPosition < 0 ? 0 : offsetPosition,
        behavior: smooth ? "smooth" : "auto",
      });
    } else {
      console.warn(
        "Element #contact nie został znaleziony (potrzebny dla Quick Links Contact)."
      );
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
  };

  const handleNavLinkClick = (path: string) => {
    if (location === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <BlackHoleLogo className="mr-2" />
              <span className="font-display font-bold text-xl tracking-tight">
                <span className="text-cosmic-blue">{t("navbar.universe")}</span>
                <span className="text-foreground">{t("navbar.in")}</span>
                <span className="text-cosmic-purple">
                  {t("navbar.blackHole")}
                </span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/hashtag/blackhole"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cosmic-blue dark:hover:text-cosmic-purple transition-all duration-300 transform hover:scale-125"
                aria-label="Twitter"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/sciastro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cosmic-blue dark:hover:text-cosmic-purple transition-all duration-300 transform hover:scale-125"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/watch?v=9NTpFlU4dY8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cosmic-pink dark:hover:text-cosmic-pink transition-all duration-300 transform hover:scale-125"
                aria-label="YouTube"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </a>
              <a
                href="https://github.com/search?q=black+hole+simulation&type=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cosmic-purple dark:hover:text-cosmic-purple transition-all duration-300 transform hover:scale-125"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 16 16"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-3"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                <span>{t("contact.email")}</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-3"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <span>{t("contact.location")}</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-2.5"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.064.293.006.399.287.47l.45.083.082.38-.287.29-.287.287A1 1 0 0 1 5.37 12.1l.287-.287.287-.287.082-.38-.45-.083a1 1 0 0 1-.288-.469l.738-3.468c.064-.293-.006-.399-.287-.47l-.45-.083-.082-.38.287-.29L8.11 5.1a1 1 0 0 1 1.442.093l.287.287.287.287.082.38-.45.083a1 1 0 0 1-.288.469l-.738 3.468c-.064.293.006.399.287.47l.45.083.082.38-.287.29-.287.287a1 1 0 0 1-1.176.01zM8 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <span>{t("contact.response")}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li
                className="cursor-pointer"
                onClick={() => handleNavLinkClick("/")}
              >
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleNavLinkClick(getLocalizedPath("/theory"))}
              >
                <Link
                  href={getLocalizedPath("/theory")}
                  className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
                >
                  {t("navbar.theory")}
                </Link>
              </li>
              <li
                className="cursor-pointer"
                onClick={() =>
                  handleNavLinkClick(getLocalizedPath("/visualizations"))
                }
              >
                <Link
                  href={getLocalizedPath("/visualizations")}
                  className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
                >
                  {t("navbar.visualizations")}
                </Link>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleNavLinkClick(getLocalizedPath("/about"))}
              >
                <Link
                  href={getLocalizedPath("/about")}
                  className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li onClick={handleContactClick} className="cursor-pointer">
                <span className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">
                  {t("contact.title")}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.newhaven.edu/news/blog/2020/nikodem-poplawski-research.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
                  title="Informacje o badaniach i publikacjach Dr. Popławskiego"
                >
                  {t("footer.papers")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=thRNKtfTv-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
                >
                  {t("footer.lectures")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=il8gH6xr0Bo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
                >
                  {t("footer.lectures")} 2
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=7t3llhn0-GQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
                >
                  {t("footer.lectures")} 3
                </a>
              </li>
              <li>
                <a
                  href="https://www.tysol.pl/a135929-skromny-polski-geniusz-o-ktorym-morgan-freeman-powiedzial-ze-jest-drugim-kopernikiem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
                >
                  {t("footer.educational")}
                </a>
              </li>
              <li>
                <a
                  href="https://pl.linkedin.com/posts/maciejkawecki_ukryty-polski-geniusz-i-prof-nikodem-pop%C5%82awski-activity-7298245029179920384-oZYa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
                >
                  {t("footer.press")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm order-2 sm:order-1 mt-4 sm:mt-0">
            2025 - {new Date().getFullYear()} {t("footer.copyright")}
          </p>

          <div className="flex items-baseline space-x-6 order-1 sm:order-2">
            <div
              className="cursor-pointer"
              onClick={() =>
                handleNavLinkClick(getLocalizedPath("/privacy-policy"))
              }
            >
              <Link
                href={getLocalizedPath("/privacy-policy")}
                className="text-sm text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
              >
                {t("footer.privacy")}
              </Link>
            </div>

            <div
              className="cursor-pointer"
              onClick={() =>
                handleNavLinkClick(getLocalizedPath("/terms-of-service"))
              }
            >
              <Link
                href={getLocalizedPath("/terms-of-service")}
                className="text-sm text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
              >
                {t("footer.terms")}
              </Link>
            </div>

            <div
              className="cursor-pointer"
              onClick={() =>
                handleNavLinkClick(getLocalizedPath("/contact-admin"))
              }
            >
              <Link
                href={getLocalizedPath("/contact-admin")}
                className="text-sm text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition"
              >
                {t("footer.contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
