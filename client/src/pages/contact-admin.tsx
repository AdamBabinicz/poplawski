import React, { useState } from "react";
import { useTranslations } from "@/hooks/use-translations";
import { Helmet } from "react-helmet-async";

export default function ContactAdmin() {
  const { t, currentLanguage } = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    "privacy-consent": false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    let fieldValue: string | boolean = value;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      fieldValue = target.checked;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const encode = (data: { [key: string]: any }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact-admin",
          ...formData,
        }),
      });

      setIsSubmitted(true);
    } catch (error) {
      alert(
        currentLanguage === "en"
          ? "An error occurred. Please try again."
          : "Wystąpił błąd. Spróbuj ponownie."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {currentLanguage === "en"
            ? "Contact Administrator"
            : "Kontakt z Administratorem"}{" "}
          | {t("navbar.universe")} {t("navbar.in")} {t("navbar.blackHole")}
        </title>
        <meta
          name="description"
          content={
            currentLanguage === "en"
              ? "Contact the administrator of the Universe in a Black Hole website."
              : "Skontaktuj się z administratorem strony Wszechświat w Czarnej Dziurze."
          }
        />
      </Helmet>

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
                {currentLanguage === "en"
                  ? "Use this form to contact the website administrator for technical issues, content corrections, or other administrative matters."
                  : "Użyj tego formularza, aby skontaktować się z administratorem strony w sprawie problemów technicznych, poprawek treści lub innych spraw administracyjnych."}
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-4 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h3 className="text-xl font-medium text-green-800 dark:text-green-200 mb-2">
                    {currentLanguage === "en"
                      ? "Message Sent Successfully!"
                      : "Wiadomość Wysłana Pomyślnie!"}
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    {currentLanguage === "en"
                      ? "Thank you for your message. We will get back to you as soon as possible."
                      : "Dziękujemy za Twoją wiadomość. Odpowiemy tak szybko, jak to możliwe."}
                  </p>
                </div>
              ) : (
                <form
                  name="contact-admin"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact-admin" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human:{" "}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        {currentLanguage === "en" ? "Your Name" : "Twoje Imię"}*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cosmic-blue dark:focus:ring-cosmic-purple focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        {currentLanguage === "en" ? "Your Email" : "Twój Email"}
                        *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cosmic-blue dark:focus:ring-cosmic-purple focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

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
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cosmic-blue dark:focus:ring-cosmic-purple focus:border-transparent outline-none transition"
                    />
                  </div>

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
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cosmic-blue dark:focus:ring-cosmic-purple focus:border-transparent outline-none transition resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="privacy-consent"
                        required
                        checked={formData["privacy-consent"]}
                        onChange={handleChange}
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
                    {isSubmitting ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        {/* ... ścieżki SVG ... */}
                      </svg>
                    ) : (
                      // Użyj poprawnego klucza tłumaczenia
                      t("contact.form.submit")
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
