import React from "react"; // Usunięto useState
import { useTranslations } from "@/hooks/use-translations";
import { Helmet } from "react-helmet-async";

export default function ContactAdmin() {
  const { t, currentLanguage } = useTranslations();
  // Usunięto stany isSubmitting, isSubmitted, submitError

  // Usunięto funkcje encode i handleSubmit

  // Określ ścieżkę dla atrybutu action
  const formActionPath =
    currentLanguage === "en" ? "/thank-you/" : "/podziekowanie/"; // Wskaż na stronę podziękowania

  return (
    <>
      <Helmet>{/* ... bez zmian ... */}</Helmet>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 text-center">
            {currentLanguage === "en"
              ? "Contact Administrator"
              : "Kontakt z Administratorem"}
          </h1>

          <div className="bg-background dark:bg-dark-surface rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <p className="text-muted-foreground mb-8 text-center">
                {/* ... bez zmian ... */}
              </p>

              {/* Zwykły formularz HTML bez obsługi JS */}
              <form
                name="contact-admin"
                method="POST"
                action={formActionPath} // Dodano action
                data-netlify="true"
                className="space-y-6"
                netlify-honeypot="bot-field"
                // Usunięto onSubmit
              >
                <input type="hidden" name="form-name" value="contact-admin" />
                <p className="hidden">
                  <label>
                    {" "}
                    Don't fill this out if you're human:{" "}
                    <input name="bot-field" />{" "}
                  </label>
                </p>

                {/* ... Wszystkie pola formularza bez zmian ... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {" "}
                  {/* Name/Email */}{" "}
                </div>
                <div> {/* Subject */} </div>
                <div> {/* Message */} </div>
                <div> {/* Checkbox */} </div>

                {/* Zwykły przycisk submit */}
                <button
                  type="submit"
                  className="w-full bg-cosmic-gradient text-white font-medium py-3 px-4 rounded-lg shadow hover:shadow-lg transform transition hover:-translate-y-1 flex justify-center items-center"
                  // Usunięto disabled i spinner
                >
                  {currentLanguage === "en"
                    ? "Send Message"
                    : "Wyślij Wiadomość"}
                </button>
              </form>

              <div className="mt-8 border-t border-border pt-8">
                {/* ... Inne opcje kontaktu bez zmian ... */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
