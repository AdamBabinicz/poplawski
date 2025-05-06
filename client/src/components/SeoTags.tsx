import React from "react";
import { Helmet } from "react-helmet-async";

interface SeoTagsProps {
  canonicalUrl: string;
  currentPath: string;
  supportedLanguages: string[];
  baseUrl: string;
}

const SeoTags: React.FC<SeoTagsProps> = ({
  canonicalUrl,
  currentPath,
  supportedLanguages,
  baseUrl,
}) => {
  const pageUrlForHreflang = `${baseUrl}${currentPath}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />

      {supportedLanguages.map((langCode) => (
        <link
          key={langCode}
          rel="alternate"
          hrefLang={langCode}
          href={pageUrlForHreflang}
        />
      ))}

      <link rel="alternate" hrefLang="x-default" href={pageUrlForHreflang} />
    </Helmet>
  );
};

export default SeoTags;
