import React, { useState } from "react";
import { useTranslations } from "@/hooks/use-translations";
import { Helmet } from "react-helmet-async";

export default function ContactAdmin() {
  const { t, currentLanguage } = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null); // Dodajemy stan na błędy

  // Helper do kodowania danych dla Netlify
  const encode = (data: Record<string, string | File | boolean>) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(String(data[key])) // Używamy String() dla boolean
      )
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null); // Resetuj błąd przy nowej próbie

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formName = form.getAttribute("name"); // Pobierz nazwę formularza

    // Przygotuj dane do wysłania, upewniając się, że 'form-name' jest zawarte
    const dataToSend: Record<string, string | File | boolean> = {};
    formData.forEach((value, key) => {
      // Obsługa checkboxa - wysyłamy 'on' lub wartość, jeśli istnieje, lub 'false' jeśli nie zaznaczony
      if (
        form.elements.namedItem(key) instanceof HTMLInputElement &&
        (form.elements.namedItem(key) as HTMLInputElement).type === "checkbox"
      ) {
        dataToSend[key] = (form.elements.namedItem(key) as HTMLInputElement)
          .checked
          ? (form.elements.namedItem(key) as HTMLInputElement).value || "on"
          : "false";
      } else {
        dataToSend[key] = value;
      }
    });

    // Dodaj form-name ręcznie, jeśli nie ma (chociaż powinno być z hidden input)
    if (formName && !dataToSend["form-name"]) {
      dataToSend["form-name"] = formName;
    }

    // Upewnij się, że form-name na pewno jest (bardzo ważne dla Netlify)
    if (!dataToSend["form-name"]) {
      console.error(
        "Netlify form submission failed: 'form-name' attribute is missing."
      );
      setSubmitError(
        currentLanguage === "en"
          ? "Form configuration error. Please try again later."
          : "Błąd konfiguracji formularza. Spróbuj ponownie później."
      );
      setIsSubmitting(false);
      return;
    }

    fetch("/", {
      // Wysyłamy POST na ten sam adres URL (root '/') Netlify to obsłuży
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(dataToSend), // Używamy zakodowanych danych
    })
      .then(() => {
        setIsSubmitted(true); // Sukces - pokaż komunikat
      })
      .catch((error) => {
        console.error("Netlify form submission error:", error);
        setSubmitError(
          currentLanguage === "en"
            ? "An error occurred while sending the message. Please try again."
            : "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie."
        );
      })
      .finally(() => {
        setIsSubmitting(false); // Zawsze zakończ stan ładowania
      });
  };

  return (
    <>
      <Helmet>{/* ... bez zmian ... */}</Helmet>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 text-center">
            {/* ... bez zmian ... */}
          </h1>

          <div className="bg-background dark:bg-dark-surface rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <p className="text-muted-foreground mb-8 text-center">
                {/* ... bez zmian ... */}
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center">
                  {/* ... komunikat sukcesu bez zmian ... */}
                </div>
              ) : (
                <>
                  {" "}
                  {/* Dodajemy fragment, aby móc wyświetlić błąd */}
                  {submitError && ( // Wyświetl błąd, jeśli wystąpił
                    <div className="mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg p-4 text-center text-sm text-red-700 dark:text-red-300">
                      {submitError}
                    </div>
                  )}
                  <form
                    name="contact-admin" // Nazwa formularza
                    method="POST"
                    data-netlify="true"
                    className="space-y-6"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit} // Nadal używamy naszej funkcji
                  >
                    {/* To pole jest kluczowe! */}
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact-admin"
                    />
                    <p className="hidden">
                      <label>
                        Don't fill this out if you're human:{" "}
                        <input name="bot-field" />
                      </label>
                    </p>

                    {/* ... reszta pól formularza (name, email, subject, message, checkbox) bez zmian ... */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-1"
                        >
                          {currentLanguage === "en"
                            ? "Your Name"
                            : "Twoje Imię"}
                          *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cosmic-blue dark:focus:ring-cosmic-purple focus:border-transparent outline-none transition"
                        />
                      </div>
                      {/* Email Input */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-1"
                        >
                          {currentLanguage === "en"
                            ? "Your Email"
                            : "Twój Email"}
                          *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cosmic-blue dark:focus:ring-cosmic-purple focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>
                    {/* Subject Input */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        {currentLanguage === "en" ? "Subject" : "Temat"}*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cosmic-blue dark:focus:ring-cosmic-purple focus:border-transparent outline-none transition"
                      />
                    </div>
                    {/* Message Textarea */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        {currentLanguage === "en" ? "Message" : "Wiadomość"}*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cosmic-blue dark:focus:ring-cosmic-purple focus:border-transparent outline-none transition resize-none"
                      ></textarea>
                    </div>
                    {/* Privacy Checkbox */}
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="privacy-consent"
                          required
                          className="w-4 h-4 text-cosmic-blue bg-background border-border rounded focus:ring-cosmic-blue"
                        />
                        <span className="ml-2 text-sm text-muted-foreground">
                          {currentLanguage === "en"
                            ? "I agree to the processing of my personal data in accordance with the Privacy Policy."
                            : "Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Polityką Prywatności."}
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-cosmic-gradient text-white font-medium py-3 px-4 rounded-lg shadow hover:shadow-lg transform transition hover:-translate-y-1 flex justify-center items-center"
                      disabled={isSubmitting}
                    >
                      {/* ... spinner i tekst przycisku bez zmian ... */}
                      {isSubmitting ? (
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : null}
                      {isSubmitting
                        ? currentLanguage === "en"
                          ? "Sending..."
                          : "Wysyłanie..."
                        : currentLanguage === "en"
                        ? "Send Message"
                        : "Wyślij Wiadomość"}
                    </button>
                  </form>
                </>
              )}

              <div className="mt-8 border-t border-border pt-8">
                {/* ... Inne opcje kontaktu bez zmian ... */}
                <h2 className="text-lg sm:text-xl font-display font-semibold mb-4 text-center">
                  {currentLanguage === "en"
                    ? "Other Contact Options"
                    : "Inne Opcje Kontaktu"}
                </h2>
                {/* ... Grid z Email i Godzinami ... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex items-start">
                    {/* Ikona */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cosmic-blue/10 dark:bg-cosmic-blue/20 flex items-center justify-center text-cosmic-blue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                      </svg>
                    </div>
                    {/* Tekst */}
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-foreground">
                        {currentLanguage === "en" ? "Email" : "Email"}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        puaro@vp.pl
                      </p>
                    </div>
                  </div>
                  {/* Godziny */}
                  <div className="flex items-start">
                    {/* Ikona */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cosmic-purple/10 dark:bg-cosmic-purple/20 flex items-center justify-center text-cosmic-purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                      </svg>
                    </div>
                    {/* Tekst */}
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-foreground">
                        {currentLanguage === "en"
                          ? "Support Hours"
                          : "Godziny Wsparcia"}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {currentLanguage === "en"
                          ? "Monday to Friday, 9am to 5pm CET"
                          : "Poniedziałek - Piątek, 9:00 - 17:00 CET"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
