import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Pokazuj przycisk tylko po przewinięciu o określoną odległość
  // Użyj mniejszej wartości progowej dla małych ekranów
  const toggleVisibility = () => {
    const isMobile = window.innerWidth < 768;
    const threshold = isMobile ? 150 : 300;

    if (window.pageYOffset > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Funkcja do płynnego przewijania do góry strony
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Dodaj listener na scroll i na zmianę rozmiaru okna
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", toggleVisibility);

    // Wywołaj toggleVisibility od razu, aby poprawnie ustawić stan przy pierwszym renderze
    toggleVisibility();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-16 right-6 p-3 rounded-full bg-cosmic-gradient text-white shadow-lg hover:shadow-xl z-50 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            className="sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
