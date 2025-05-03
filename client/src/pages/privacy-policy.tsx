import React from "react";
import { useTranslations } from "@/hooks/use-translations";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  const { t, currentLanguage } = useTranslations();

  return (
    <>
      <Helmet>
        <title>
          {currentLanguage === "en" ? "Privacy Policy" : "Polityka Prywatności"}{" "}
          | {t("navbar.universe")} {t("navbar.in")} {t("navbar.blackHole")}
        </title>
        <meta
          name="description"
          content={
            currentLanguage === "en"
              ? "Our privacy policy outlines how we collect, use, and protect your data when you visit our website."
              : "Nasza polityka prywatności określa, jak zbieramy, wykorzystujemy i chronimy Twoje dane podczas odwiedzania naszej strony."
          }
        />
      </Helmet>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 text-center">
            {currentLanguage === "en"
              ? "Privacy Policy"
              : "Polityka Prywatności"}
          </h1>

          <div className="prose prose-sm sm:prose-base dark:prose-invert mx-auto max-w-none">
            <p className="text-muted-foreground mb-8 text-center">
              {currentLanguage === "en"
                ? "Last updated: April 30, 2024"
                : "Ostatnia aktualizacja: 30 kwietnia 2024"}
            </p>

            <h2>
              {currentLanguage === "en" ? "1. Introduction" : "1. Wprowadzenie"}
            </h2>
            <p>
              {currentLanguage === "en"
                ? 'This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website "Universe in a Black Hole" dedicated to Dr. Nikodem Popławski\'s theory.'
                : 'Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy, przechowujemy i chronimy Twoje informacje, gdy odwiedzasz naszą stronę internetową "Wszechświat w Czarnej Dziurze" poświęconą teorii dr. Nikodema Popławskiego.'}
            </p>

            <h2>
              {currentLanguage === "en"
                ? "2. Information We Collect"
                : "2. Informacje, które zbieramy"}
            </h2>
            <p>
              {currentLanguage === "en"
                ? "We collect minimal information necessary to provide and improve our services:"
                : "Zbieramy minimalne informacje niezbędne do świadczenia i ulepszania naszych usług:"}
            </p>
            <ul>
              <li>
                {currentLanguage === "en"
                  ? "Information you provide: When you contact us through our form, we collect your name and email address."
                  : "Informacje, które podajesz: Gdy kontaktujesz się z nami poprzez formularz, zbieramy Twoje imię i adres e-mail."}
              </li>
              <li>
                {currentLanguage === "en"
                  ? "Automatically collected information: We use cookies and similar technologies to collect information about your device, browser, and browsing actions."
                  : "Automatycznie zbierane informacje: Używamy plików cookie i podobnych technologii do zbierania informacji o Twoim urządzeniu, przeglądarce i działaniach podczas przeglądania."}
              </li>
            </ul>

            <h2>
              {currentLanguage === "en"
                ? "3. How We Use Your Information"
                : "3. Jak wykorzystujemy Twoje informacje"}
            </h2>
            <p>
              {currentLanguage === "en"
                ? "We use the information we collect to:"
                : "Wykorzystujemy zebrane informacje do:"}
            </p>
            <ul>
              <li>
                {currentLanguage === "en"
                  ? "Respond to your inquiries and provide support"
                  : "Odpowiadania na Twoje zapytania i udzielania wsparcia"}
              </li>
              <li>
                {currentLanguage === "en"
                  ? "Improve our website and content"
                  : "Ulepszania naszej strony internetowej i treści"}
              </li>
              <li>
                {currentLanguage === "en"
                  ? "Analyze website usage to enhance user experience"
                  : "Analizowania korzystania ze strony w celu poprawy doświadczenia użytkownika"}
              </li>
              <li>
                {currentLanguage === "en"
                  ? "Ensure website security and proper functioning"
                  : "Zapewnienia bezpieczeństwa i prawidłowego funkcjonowania strony"}
              </li>
            </ul>

            <h2>
              {currentLanguage === "en"
                ? "4. Data Security"
                : "4. Bezpieczeństwo danych"}
            </h2>
            <p>
              {currentLanguage === "en"
                ? "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
                : "Wdrażamy odpowiednie środki bezpieczeństwa w celu ochrony Twoich danych osobowych przed nieautoryzowanym dostępem, zmianą, ujawnieniem lub zniszczeniem. Jednak żadna metoda transmisji przez Internet ani elektronicznego przechowywania nie jest w 100% bezpieczna i nie możemy zagwarantować całkowitego bezpieczeństwa."}
            </p>

            <h2>
              {currentLanguage === "en"
                ? "5. Third-Party Services"
                : "5. Usługi stron trzecich"}
            </h2>
            <p>
              {currentLanguage === "en"
                ? "Our website may use third-party services such as Google Analytics to help analyze how users use the site. These third-party services may use cookies and similar technologies to collect information about your use of our website. We do not have control over the privacy practices of these third parties."
                : "Nasza strona internetowa może korzystać z usług stron trzecich, takich jak Google Analytics, aby pomóc analizować, w jaki sposób użytkownicy korzystają z witryny. Te usługi stron trzecich mogą używać plików cookie i podobnych technologii do zbierania informacji o korzystaniu z naszej strony. Nie mamy kontroli nad praktykami prywatności tych stron trzecich."}
            </p>

            <h2>
              {currentLanguage === "en" ? "6. Your Rights" : "6. Twoje prawa"}
            </h2>
            <p>
              {currentLanguage === "en"
                ? "Depending on your location, you may have rights regarding your personal data, including:"
                : "W zależności od Twojej lokalizacji, możesz mieć prawa dotyczące Twoich danych osobowych, w tym:"}
            </p>
            <ul>
              <li>
                {currentLanguage === "en"
                  ? "Right to access and receive a copy of your personal data"
                  : "Prawo dostępu i otrzymania kopii Twoich danych osobowych"}
              </li>
              <li>
                {currentLanguage === "en"
                  ? "Right to rectification or correction of inaccurate data"
                  : "Prawo do sprostowania lub poprawienia niedokładnych danych"}
              </li>
              <li>
                {currentLanguage === "en"
                  ? "Right to erasure (right to be forgotten)"
                  : "Prawo do usunięcia (prawo do bycia zapomnianym)"}
              </li>
              <li>
                {currentLanguage === "en"
                  ? "Right to restrict processing"
                  : "Prawo do ograniczenia przetwarzania"}
              </li>
              <li>
                {currentLanguage === "en"
                  ? "Right to object to processing"
                  : "Prawo do sprzeciwu wobec przetwarzania"}
              </li>
              <li>
                {currentLanguage === "en"
                  ? "Right to data portability"
                  : "Prawo do przenoszenia danych"}
              </li>
            </ul>

            <h2>
              {currentLanguage === "en"
                ? "7. Changes to This Privacy Policy"
                : "7. Zmiany w Polityce Prywatności"}
            </h2>
            <p>
              {currentLanguage === "en"
                ? 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.'
                : 'Możemy aktualizować naszą Politykę Prywatności od czasu do czasu. Powiadomimy Cię o wszelkich zmianach, publikując nową Politykę Prywatności na tej stronie i aktualizując datę "Ostatnia aktualizacja".'}
            </p>

            <h2>
              {currentLanguage === "en" ? "8. Contact Us" : "8. Kontakt z nami"}
            </h2>
            <p>
              {currentLanguage === "en"
                ? "If you have any questions or concerns about this Privacy Policy, please contact us through the contact form on our website or by email at puaro@vp.pl."
                : "Jeśli masz jakiekolwiek pytania lub wątpliwości dotyczące niniejszej Polityki Prywatności, skontaktuj się z nami za pomocą formularza kontaktowego na naszej stronie lub przez e-mail pod adresem puaro@vp.pl."}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
