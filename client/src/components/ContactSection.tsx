import { useState } from 'react';
import { useTranslations } from '@/hooks/use-translations';

export default function ContactSection() {
  const { t } = useTranslations();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setConsent(false);
    }, 1000);
  };
  
  return (
    <section className="relative py-16 bg-muted dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-background dark:bg-dark-surface rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-cosmic-gradient text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold mb-4">{t('contact.title')}</h3>
                <p className="mb-6 text-white/80">
                  {t('contact.description')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className='bx bx-envelope text-xl mr-3'></i>
                    <span>{t('contact.email')}</span>
                  </div>
                  <div className="flex items-center">
                    <i className='bx bx-map text-xl mr-3'></i>
                    <span>{t('contact.location')}</span>
                  </div>
                  <div className="flex items-center">
                    <i className='bx bx-time text-xl mr-3'></i>
                    <span>{t('contact.response')}</span>
                  </div>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition" aria-label="Twitter">
                    <i className='bx bxl-twitter text-white'></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition" aria-label="Facebook">
                    <i className='bx bxl-facebook text-white'></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition" aria-label="YouTube">
                    <i className='bx bxl-youtube text-white'></i>
                  </a>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full border-8 border-white/10"></div>
              <div className="absolute top-12 -right-12 w-32 h-32 rounded-full border-4 border-white/10"></div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h3 className="font-display text-2xl font-bold mb-6">{t('contact.subscribe.title')}</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-lg">
                  <p>Thank you for subscribing! We'll keep you updated on the latest developments.</p>
                </div>
              ) : (
                <>
                  <p className="text-muted-foreground mb-6">
                    {t('contact.subscribe.description')}
                  </p>
                  
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">{t('contact.form.name')}</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cosmic-blue dark:focus:ring-cosmic-purple focus:border-transparent outline-none transition" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">{t('contact.form.email')}</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cosmic-blue dark:focus:ring-cosmic-purple focus:border-transparent outline-none transition" 
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          required
                          className="rounded text-cosmic-blue focus:ring-cosmic-blue dark:text-cosmic-purple dark:focus:ring-cosmic-purple h-4 w-4" 
                        />
                        <span className="ml-2 text-sm text-muted-foreground">
                          {t('contact.form.consent')}
                        </span>
                      </label>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-cosmic-gradient text-white font-medium py-2 px-4 rounded-lg shadow hover:shadow-lg transform transition hover:-translate-y-1 disabled:opacity-70 disabled:transform-none"
                    >
                      {isSubmitting ? 'Submitting...' : t('contact.form.button')}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
