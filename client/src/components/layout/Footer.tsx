import { Link } from "wouter";
import { useTranslations } from "@/hooks/use-translations";
import BlackHoleLogo from "../ui/black-hole-logo";

export default function Footer() {
  const { t } = useTranslations();
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <BlackHoleLogo className="mr-2" />
              <span className="font-display font-bold text-xl tracking-tight">
                <span className="text-cosmic-blue">{t('navbar.universe')}</span> 
                <span className="text-foreground">{t('navbar.in')}</span> 
                <span className="text-cosmic-purple">{t('navbar.blackHole')}</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-cosmic-blue dark:hover:text-cosmic-purple transition" aria-label="Twitter">
                <i className='bx bxl-twitter text-xl'></i>
              </a>
              <a href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-cosmic-blue dark:hover:text-cosmic-purple transition" aria-label="Facebook">
                <i className='bx bxl-facebook text-xl'></i>
              </a>
              <a href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-cosmic-blue dark:hover:text-cosmic-purple transition" aria-label="YouTube">
                <i className='bx bxl-youtube text-xl'></i>
              </a>
              <a href="#" rel="noopener noreferrer" className="text-gray-400 hover:text-cosmic-blue dark:hover:text-cosmic-purple transition" aria-label="GitHub">
                <i className='bx bxl-github text-xl'></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('navbar.home')}</Link></li>
              <li><Link href="/theory" className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('navbar.theory')}</Link></li>
              <li><Link href="/visualizations" className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('navbar.visualizations')}</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('navbar.about')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li><a href="https://arxiv.org/abs/1410.3881" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('footer.papers')}</a></li>
              <li><a href="https://www.youtube.com/watch?v=ijpEd1qHBkg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('footer.lectures')}</a></li>
              <li><a href="https://www.insidescience.org/news/every-black-hole-contains-new-universe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('footer.educational')}</a></li>
              <li><a href="https://phys.org/news/2012-05-black-holes-universe.html" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('footer.press')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm order-2 sm:order-1 mt-4 sm:mt-0">
            © 2024 {t('footer.copyright')}
          </p>
          
          <div className="flex space-x-6 order-1 sm:order-2">
            <a href="#" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('footer.privacy')}</a>
            <a href="#" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('footer.terms')}</a>
            <a href="#" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-cosmic-blue dark:hover:text-cosmic-purple transition">{t('footer.contact')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
