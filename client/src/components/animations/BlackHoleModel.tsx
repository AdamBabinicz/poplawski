import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "@/hooks/use-translations";
import universeFormationImage from "@/assets/images/universe-formation.webp";
import accretionDiskNewImage from "@/assets/images/accretion-disk-new.webp";
import torsionEffectsUpdatedImage from "@/assets/images/torsion-effects-updated.webp";
import nestedUniversesImage from "@/assets/images/nested-universes.webp";
import eventHorizonImage from "@/assets/images/event-horizon.webp";

// Definiowanie regionów czarnej dziury
type Region = "accretion-disk" | "event-horizon" | "torsion-zone";

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
  const getRegionInfo = useCallback(
    (region: Region): RegionInfo => {
      switch (region) {
        case "accretion-disk":
          return {
            title: t("visualizations.legend.accretion"),
            description: t("visualizations.item1.description"),
            image: accretionDiskNewImage,
            color: "cosmic-blue",
            bgColor: "bg-cosmic-blue",
            textColor: "text-cosmic-blue",
          };
        case "event-horizon":
          return {
            title: t("visualizations.legend.horizon"),
            description:
              currentLanguage === "en"
                ? "The point of no return in spacetime, where gravity is so strong that not even light can escape. According to Dr. Popławski, this boundary marks where our parent universe ends and our universe begins."
                : "Punkt bez powrotu w czasoprzestrzeni, gdzie grawitacja jest tak silna, że nawet światło nie może uciec. Według dr Popławskiego ta granica wyznacza miejsce, gdzie kończy się nasz wszechświat macierzysty i zaczyna nasz wszechświat.",
            image: eventHorizonImage,
            color: "cosmic-purple",
            bgColor: "bg-cosmic-purple",
            textColor: "text-cosmic-purple",
          };
        case "torsion-zone":
          return {
            title: t("visualizations.legend.torsion"),
            description: t("visualizations.item2.description"),
            image: torsionEffectsUpdatedImage,
            color: "cosmic-pink",
            bgColor: "bg-cosmic-pink",
            textColor: "text-cosmic-pink",
          };
        default:
          return {
            title: "",
            description: "",
            image: "",
            color: "",
            bgColor: "",
            textColor: "",
          };
      }
    },
    [t, currentLanguage]
  );

  // Obsługa kliknięcia regionu
  const handleRegionClick = useCallback(
    (region: Region) => {
      console.log(`Clicked on region: ${region}`);
      if (region === activeRegion) {
        setShowInfo(false);
        // Opóźnione resetowanie aktywnego regionu po animacji
        setTimeout(() => setActiveRegion(null), 300);
      } else {
        setActiveRegion(region);
        // Dodajemy opóźnienie dla łagodnego pokazania popupu
        setTimeout(() => setShowInfo(true), 150);
      }
    },
    [activeRegion]
  );

  // Zamykanie okienka informacyjnego
  const closeInfoPanel = useCallback(() => {
    setShowInfo(false);
    // Dłuższe opóźnienie, aby wszystkie animacje mogły się zakończyć
    setTimeout(() => setActiveRegion(null), 400);
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
        <div
          className="absolute inset-[10%] rounded-full accretion-disk animate-rotate-slow"
          style={{ clipPath: "circle(90% at center)" }}
        ></div>

        {/* Centralna czarna dziura */}
        <div className="absolute inset-[34%] rounded-full bg-black z-10"></div>

        {/* Linie torsji */}
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          <defs>
            <linearGradient
              id="torsionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path
            d="M 50,0 Q 50,50 50,100"
            fill="none"
            stroke="url(#torsionGradient)"
            strokeWidth="0.5"
            className="torsion-line"
          />
          <path
            d="M 30,0 Q 30,50 30,100"
            fill="none"
            stroke="url(#torsionGradient)"
            strokeWidth="0.5"
            className="torsion-line"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M 70,0 Q 70,50 70,100"
            fill="none"
            stroke="url(#torsionGradient)"
            strokeWidth="0.5"
            className="torsion-line"
            style={{ animationDelay: "1s" }}
          />
        </svg>

        {/* Interaktywne punkty */}
        <button
          className="absolute top-[25%] left-[15%] w-12 h-12 rounded-full bg-cosmic-blue/60 animate-cosmic-pulse cursor-pointer hover:bg-cosmic-blue/90 transition-all z-20 flex items-center justify-center border-2 border-white/70 hover:border-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cosmic-blue"
          onClick={() => handleRegionClick("accretion-disk")}
          aria-label={t("visualizations.legend.accretion")}
          title={t("visualizations.legend.accretion")}
        >
          <span className="sr-only">
            {t("visualizations.legend.accretion")}
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 8V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 16V16.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cosmic-purple/60 animate-cosmic-pulse cursor-pointer hover:bg-cosmic-purple/90 transition-all z-20 flex items-center justify-center border-2 border-white/70 hover:border-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cosmic-purple"
          onClick={() => handleRegionClick("event-horizon")}
          aria-label={t("visualizations.legend.horizon")}
          title={t("visualizations.legend.horizon")}
        >
          <span className="sr-only">{t("visualizations.legend.horizon")}</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 8V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 16V16.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className="absolute bottom-[30%] right-[20%] w-12 h-12 rounded-full bg-cosmic-pink/60 animate-cosmic-pulse cursor-pointer hover:bg-cosmic-pink/90 transition-all z-20 flex items-center justify-center border-2 border-white/70 hover:border-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cosmic-pink"
          onClick={() => handleRegionClick("torsion-zone")}
          aria-label={t("visualizations.legend.torsion")}
          title={t("visualizations.legend.torsion")}
        >
          <span className="sr-only">{t("visualizations.legend.torsion")}</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 8V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 16V16.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Legenda */}
      <div className="absolute bottom-4 right-4 bg-background/90 p-3 rounded-lg shadow-lg text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 rounded-full bg-cosmic-blue mr-2"></div>
          <span>{t("visualizations.legend.accretion")}</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 rounded-full bg-cosmic-purple mr-2"></div>
          <span>{t("visualizations.legend.horizon")}</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-cosmic-pink mr-2"></div>
          <span>{t("visualizations.legend.torsion")}</span>
        </div>
      </div>

      {/* Instrukcja */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-background/70 px-4 py-2 rounded-lg text-sm text-center shadow-md border border-border backdrop-blur-sm">
        <div className="flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 text-cosmic-purple"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 16.01L12 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 12L12 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-medium">
            {currentLanguage === "en"
              ? "Click on the colored markers to explore"
              : "Kliknij w kolorowe znaczniki, aby eksplorować"}
          </span>
        </div>
      </div>

      {/* Panel informacyjny - wyświetlany po kliknięciu punktu */}
      {activeRegion && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${
            showInfo
              ? "bg-black/60 backdrop-blur-sm opacity-100"
              : "bg-black/0 backdrop-blur-none opacity-0"
          }`}
          onClick={closeInfoPanel}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`region-title-${activeRegion}`}
        >
          <div
            className={`relative bg-background p-5 rounded-xl shadow-2xl max-w-xl w-full h-auto sm:h-[650px] overflow-hidden flex flex-col mx-4 transform transition-all duration-400 ease-out dark:border ${
              activeRegion === "accretion-disk"
                ? "dark:border-cosmic-blue/40 dark:shadow-[0_0_25px_rgba(59,130,246,0.3),0_0_10px_rgba(59,130,246,0.1)] dark:bg-gradient-to-br dark:from-background dark:to-cosmic-blue/5"
                : activeRegion === "event-horizon"
                ? "dark:border-cosmic-purple/40 dark:shadow-[0_0_25px_rgba(139,92,246,0.3),0_0_10px_rgba(139,92,246,0.1)] dark:bg-gradient-to-br dark:from-background dark:to-cosmic-purple/5"
                : "dark:border-cosmic-pink/40 dark:shadow-[0_0_25px_rgba(236,72,153,0.3),0_0_10px_rgba(236,72,153,0.1)] dark:bg-gradient-to-br dark:from-background dark:to-cosmic-pink/5"
            } ${
              showInfo
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-95 opacity-0 -translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                id={`region-title-${activeRegion}`}
                className={`text-lg font-bold ${
                  getRegionInfo(activeRegion).textColor
                } transition-all duration-300 ${
                  showInfo
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                {getRegionInfo(activeRegion).title}
              </h3>
              <button
                onClick={closeInfoPanel}
                className="p-1 hover:bg-muted rounded-full focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                aria-label={
                  currentLanguage === "en"
                    ? "Close dialog"
                    : "Zamknij okno dialogowe"
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="rounded-lg overflow-hidden mb-4">
              <div className="overflow-hidden">
                <img
                  src={getRegionInfo(activeRegion).image}
                  alt={getRegionInfo(activeRegion).title}
                  className={`max-w-full max-h-full object-contain mx-auto transition-transform duration-700 ease-out ${
                    showInfo
                      ? "translate-y-0 scale-100"
                      : "-translate-y-full scale-105"
                  }`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <p
              className={`text-muted-foreground mb-4 text-sm transition-all duration-500 delay-100 ${
                showInfo
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              {getRegionInfo(activeRegion).description}
            </p>

            <button
              onClick={closeInfoPanel}
              className={`${
                getRegionInfo(activeRegion).bgColor
              } text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-500 delay-200 w-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
                getRegionInfo(activeRegion).color === "cosmic-blue"
                  ? "focus:ring-offset-cosmic-blue"
                  : getRegionInfo(activeRegion).color === "cosmic-purple"
                  ? "focus:ring-offset-cosmic-purple"
                  : "focus:ring-offset-cosmic-pink"
              } ${
                showInfo
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              aria-label={
                currentLanguage === "en"
                  ? "Close dialog"
                  : "Zamknij okno dialogowe"
              }
            >
              {currentLanguage === "en" ? "Close" : "Zamknij"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
