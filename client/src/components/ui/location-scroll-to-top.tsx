import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Component that scrolls to the top of the page when the location (route) changes
 */
export default function LocationScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}
