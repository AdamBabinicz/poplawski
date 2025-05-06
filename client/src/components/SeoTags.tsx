// SeoTags.tsx
import React from "react";

interface SeoTagsProps {
  canonicalUrl: string;
  currentLanguage: "pl" | "en";
  path: string;
}

const SeoTags: React.FC<SeoTagsProps> = ({
  canonicalUrl,
  currentLanguage,
  path,
}) => {
  const baseUrl = "https://blackhole-universe.netlify.app";
  const alternateLang = currentLanguage === "pl" ? "en" : "pl";
  const alternateHref =
    alternateLang === "pl"
      ? `${baseUrl}${path}`
      : `${baseUrl}/${alternateLang}${path}`;

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="pl" href={`${baseUrl}${path}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${path}`} />
    </>
  );
};

export default SeoTags;
