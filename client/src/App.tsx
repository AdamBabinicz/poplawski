import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { TranslationsProvider } from "@/hooks/use-translations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Home from "@/pages/home";
import Theory from "@/pages/theory";
import Visualizations from "@/pages/visualizations";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import { Helmet } from "react-helmet-async";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/theory" component={Theory} />
      <Route path="/visualizations" component={Visualizations} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Set up the page title
  useEffect(() => {
    document.title = "Universe in a Black Hole - Dr. Nikodem Popławski's Theory";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TranslationsProvider>
          <TooltipProvider>
            <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
              <meta name="theme-color" content="#121212" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            </Helmet>
            
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Router />
              </main>
              <Footer />
              <ScrollToTop />
            </div>
            
            <Toaster />
          </TooltipProvider>
        </TranslationsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
