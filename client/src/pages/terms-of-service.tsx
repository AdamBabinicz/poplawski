import React from 'react';
import { useTranslations } from '@/hooks/use-translations';
import { Helmet } from 'react-helmet-async';

export default function TermsOfService() {
  const { t, currentLanguage } = useTranslations();
  
  return (
    <>
      <Helmet>
        <title>{currentLanguage === 'en' ? 'Terms of Service' : 'Warunki Usługi'} | {t('navbar.universe')} {t('navbar.in')} {t('navbar.blackHole')}</title>
        <meta name="description" content={currentLanguage === 'en' ? 'Terms of Service for Universe in a Black Hole website.' : 'Warunki korzystania ze strony Wszechświat w Czarnej Dziurze.'} />
      </Helmet>
    
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold mb-8 text-center">
            {currentLanguage === 'en' ? 'Terms of Service' : 'Warunki Usługi'}
          </h1>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground mb-8 text-center">
              {currentLanguage === 'en' 
                ? 'Last updated: April 30, 2024' 
                : 'Ostatnia aktualizacja: 30 kwietnia 2024'}
            </p>
            
            <h2>{currentLanguage === 'en' ? '1. Acceptance of Terms' : '1. Akceptacja Warunków'}</h2>
            <p>
              {currentLanguage === 'en' 
                ? 'By accessing or using the Universe in a Black Hole website ("the Website"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website.'
                : 'Uzyskując dostęp do strony internetowej Wszechświat w Czarnej Dziurze ("Strona") lub korzystając z niej, zgadzasz się przestrzegać niniejszych Warunków Usługi. Jeśli nie zgadzasz się z tymi warunkami, prosimy o niekorzystanie ze Strony.'}
            </p>
            
            <h2>{currentLanguage === 'en' ? '2. Description of Service' : '2. Opis Usługi'}</h2>
            <p>
              {currentLanguage === 'en'
                ? 'The Website provides educational content about Dr. Nikodem Popławski\'s theory of the Universe in a Black Hole. Our services include providing scientific information, visualizations, and contact possibilities for educational purposes.'
                : 'Strona internetowa dostarcza treści edukacyjne na temat teorii dr. Nikodema Popławskiego o Wszechświecie w Czarnej Dziurze. Nasze usługi obejmują dostarczanie informacji naukowych, wizualizacji i możliwości kontaktu w celach edukacyjnych.'}
            </p>
            
            <h2>{currentLanguage === 'en' ? '3. Intellectual Property Rights' : '3. Prawa Własności Intelektualnej'}</h2>
            <p>
              {currentLanguage === 'en'
                ? 'All content on the Website, including but not limited to text, graphics, logos, images, videos, and software, is the property of the Website owners or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.'
                : 'Wszystkie treści na Stronie, w tym między innymi tekst, grafika, logo, obrazy, filmy i oprogramowanie, są własnością właścicieli Strony lub jej dostawców treści i są chronione międzynarodowymi prawami autorskimi, znakami towarowymi i innymi prawami własności intelektualnej.'}
            </p>
            <p>
              {currentLanguage === 'en'
                ? 'You may access, download, or print materials from the Website for your personal, non-commercial use, provided that you keep all copyright and other proprietary notices intact.'
                : 'Możesz uzyskiwać dostęp, pobierać lub drukować materiały ze Strony do osobistego, niekomercyjnego użytku, pod warunkiem zachowania wszystkich informacji o prawach autorskich i innych prawach własności.'}
            </p>
            
            <h2>{currentLanguage === 'en' ? '4. User Conduct' : '4. Zachowanie Użytkownika'}</h2>
            <p>
              {currentLanguage === 'en'
                ? 'You agree not to use the Website to:'
                : 'Zgadzasz się nie używać Strony do:'}
            </p>
            <ul>
              <li>
                {currentLanguage === 'en'
                  ? 'Engage in any activity that violates any applicable local, state, national, or international law'
                  : 'Angażowania się w jakąkolwiek działalność, która narusza obowiązujące lokalne, stanowe, krajowe lub międzynarodowe prawo'}
              </li>
              <li>
                {currentLanguage === 'en'
                  ? 'Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable'
                  : 'Publikowania lub przesyłania jakichkolwiek treści, które są niezgodne z prawem, szkodliwe, grożące, obraźliwe, nękające, zniesławiające lub w inny sposób niewłaściwe'}
              </li>
              <li>
                {currentLanguage === 'en'
                  ? 'Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Website'
                  : 'Próby ingerencji, naruszenia integralności lub bezpieczeństwa systemu lub odszyfrowywania jakichkolwiek transmisji do lub z serwerów obsługujących Stronę'}
              </li>
              <li>
                {currentLanguage === 'en'
                  ? 'Collect or track personal information of others'
                  : 'Zbierania lub śledzenia danych osobowych innych osób'}
              </li>
            </ul>
            
            <h2>{currentLanguage === 'en' ? '5. Links to Third-Party Websites' : '5. Linki do Stron Trzecich'}</h2>
            <p>
              {currentLanguage === 'en'
                ? 'The Website may contain links to third-party websites that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We strongly advise you to read the terms and conditions and privacy policy of any third-party website that you visit.'
                : 'Strona może zawierać linki do stron internetowych stron trzecich, które nie są własnością ani nie są kontrolowane przez nas. Nie mamy kontroli nad treścią, politykami prywatności ani praktykami jakichkolwiek stron internetowych stron trzecich i nie ponosimy za nie odpowiedzialności. Zdecydowanie zalecamy zapoznanie się z warunkami i polityką prywatności każdej odwiedzanej strony internetowej stron trzecich.'}
            </p>
            
            <h2>{currentLanguage === 'en' ? '6. Disclaimer of Warranties' : '6. Wyłączenie Gwarancji'}</h2>
            <p>
              {currentLanguage === 'en'
                ? 'The Website is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the operation or availability of the Website. We do not warrant that the Website is free of viruses or other harmful components.'
                : 'Strona jest dostarczana w stanie "takim, jaki jest" i "w miarę dostępności". Nie udzielamy żadnych gwarancji, wyraźnych ani dorozumianych, dotyczących działania lub dostępności Strony. Nie gwarantujemy, że Strona jest wolna od wirusów lub innych szkodliwych składników.'}
            </p>
            
            <h2>{currentLanguage === 'en' ? '7. Limitation of Liability' : '7. Ograniczenie Odpowiedzialności'}</h2>
            <p>
              {currentLanguage === 'en'
                ? 'To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Website.'
                : 'W maksymalnym zakresie dozwolonym przez obowiązujące prawo, nie ponosimy odpowiedzialności za jakiekolwiek pośrednie, przypadkowe, specjalne, wynikowe lub karne szkody, ani za jakąkolwiek utratę zysków lub przychodów, poniesione bezpośrednio lub pośrednio, ani za jakąkolwiek utratę danych, użytkowania, wartości firmy lub inne straty niematerialne, wynikające z dostępu do Strony lub korzystania z niej lub niemożności dostępu do niej lub korzystania z niej.'}
            </p>
            
            <h2>{currentLanguage === 'en' ? '8. Modifications to Terms' : '8. Modyfikacje Warunków'}</h2>
            <p>
              {currentLanguage === 'en'
                ? 'We reserve the right to modify these Terms of Service at any time. We will provide notice of significant changes by posting an announcement on the Website. Your continued use of the Website after such modifications constitutes your acceptance of the modified terms.'
                : 'Zastrzegamy sobie prawo do modyfikacji niniejszych Warunków Usługi w dowolnym momencie. Zawiadomimy o istotnych zmianach, publikując ogłoszenie na Stronie. Dalsze korzystanie ze Strony po takich modyfikacjach stanowi akceptację zmodyfikowanych warunków.'}
            </p>
            
            <h2>{currentLanguage === 'en' ? '9. Governing Law' : '9. Prawo Właściwe'}</h2>
            <p>
              {currentLanguage === 'en'
                ? 'These Terms shall be governed by and construed in accordance with the laws of Poland, without regard to its conflict of law provisions.'
                : 'Niniejsze Warunki podlegają prawu polskiemu i są interpretowane zgodnie z nim, bez względu na przepisy kolizyjne.'}
            </p>
            
            <h2>{currentLanguage === 'en' ? '10. Contact Us' : '10. Kontakt z nami'}</h2>
            <p>
              {currentLanguage === 'en'
                ? 'If you have any questions about these Terms, please contact us through the contact form on our website or by email at admin@universeinblackhole.org.'
                : 'Jeśli masz jakiekolwiek pytania dotyczące niniejszych Warunków, skontaktuj się z nami za pomocą formularza kontaktowego na naszej stronie lub przez e-mail pod adresem admin@universeinblackhole.org.'}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}