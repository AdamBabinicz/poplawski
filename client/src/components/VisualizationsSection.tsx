import { useTranslations } from "@/hooks/use-translations";
import BlackHoleModel from "./animations/BlackHoleModel";
import matterFallingImage from "@/assets/images/matter-falling.avif";
import torsionEffectImage from "@/assets/images/torsion-effect.avif";
import nestedUniversesImage from "@/assets/images/nested-universes.avif";
import universeFormationImage from "@/assets/images/universe-formation.avif";

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

export default function VisualizationsSection() {
  const { t } = useTranslations();

  const galleryItems: GalleryItem[] = [
    {
      image: matterFallingImage,
      title: t("visualizations.item1.title"),
      description: t("visualizations.item1.description"),
    },
    {
      image: torsionEffectImage,
      title: t("visualizations.item2.title"),
      description: t("visualizations.item2.description"),
    },
    {
      image: nestedUniversesImage,
      title: t("visualizations.item3.title"),
      description: t("visualizations.item3.description"),
    },
  ];

  return (
    <section
      id="visualizations"
      className="relative py-20 bg-muted dark:bg-dark-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-6">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-cosmic-gradient blur-sm opacity-70 rounded-md"></span>
              <span className="relative z-10 text-white px-2 py-1 rounded-md text-shadow">
                {t("visualizations.title.1")}
              </span>
            </span>{" "}
            {t("visualizations.title.2")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("visualizations.description")}
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-3 group-hover:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Interactive Diagram - Special Item */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8">
            <div className="bg-background dark:bg-dark-surface rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="font-display text-2xl font-bold">
                  {t("visualizations.interactive.title")}
                </h3>
                <p className="text-muted-foreground mt-2">
                  {t("visualizations.interactive.description")}
                </p>
              </div>

              <BlackHoleModel />

              <div className="p-6 bg-background dark:bg-dark-surface">
                <p className="text-muted-foreground text-sm">
                  {t("visualizations.interactive.help")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
