import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { TranslationsProvider } from "@/hooks/use-translations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import LocationScrollToTop from "@/components/ui/location-scroll-to-top";
import Home from "@/pages/home";
import Theory from "@/pages/theory";
import Visualizations from "@/pages/visualizations";
import About from "@/pages/about";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import ContactAdmin from "@/pages/contact-admin";
import Contact from "@/components/ContactSection";
import NotFound from "@/pages/not-found";
import { Helmet } from "react-helmet-async";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/theory" component={Theory} />
      <Route path="/visualizations" component={Visualizations} />
      <Route path="/about" component={About} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/contact-admin" component={ContactAdmin} />
      <Route path="/contact" component={Contact} />

      <Route path="/teoria" component={Theory} />
      <Route path="/wizualizacje" component={Visualizations} />
      <Route path="/o-autorze" component={About} />
      <Route path="/polityka-prywatnosci" component={PrivacyPolicy} />
      <Route path="/regulamin" component={TermsOfService} />
      <Route path="/kontakt" component={ContactAdmin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    document.title =
      "Universe in a Black Hole - Dr. Nikodem Popławski's Theory";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TranslationsProvider>
          <TooltipProvider>
            <Helmet>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <meta name="theme-color" content="#121212" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
              />
            </Helmet>
            <LocationScrollToTop />
            <div className="min-h-screen flex flex-col">
              <div className="max-w-screen-2xl mx-auto w-full px-0 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
                <Navbar />
                <main className="flex-grow">
                  <Router />
                </main>
                <Footer />
                <ScrollToTop />
              </div>
            </div>
            <Toaster />
          </TooltipProvider>
        </TranslationsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
