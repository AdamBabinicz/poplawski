import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Create an array of random stars for the cosmic background
export function generateStars(count: number = 100): { top: string; left: string; size: string; delay: string }[] {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`
    });
  }
  return stars;
}

// Smooth scroll to element by ID
export function scrollToElement(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
