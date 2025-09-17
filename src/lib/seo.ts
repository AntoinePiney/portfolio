import { Metadata } from "next";

export const seoData: Metadata = {
  title: "Antoine Piney — Directeur Artistique",
  description:
    "Antoine Piney — Direction artistique, développeur créatif, motion designer. Entre esthétique, 3D et interactivité, des projets créatifs à la croisée du design et du développement.",
  keywords:
    "portfolio, art director, motion design, design immersif, web créatif, 3D, GSAP, Three.js, Next.js, Awwwards",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "Antoine Piney — Directeur Artistique",
    url: "https://antoinepiney.fr",
    description:
      "Découvrez l’univers de [Ton Nom] : direction artistique, motion design, 3D et expériences web interactives. Un portfolio qui mélange créativité et technique.",
    locale: "fr_FR",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://antoinepiney.fr/og-image.png",
      },
    ],
    siteName: "Portfolio — [Ton Nom]",
  },
  twitter: {
    card: "summary_large_image",
    site: "antoinepiney.fr",
    creator: "@[ton-handle-twitter-ou-instagram]",
    title: "Portfolio — Art Direction & Motion Design",
    description:
      "Portfolio de [Ton Nom] : direction artistique, motion design et web immersif.",
    images: [
      {
        url: "https://[ton-domaine].com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  authors: [{ name: "[Ton Nom]" }],
  creator: "[Ton Nom]",
  publisher: "[Ton Nom]",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

/**
 * Generate dynamic metadata for pages
 * @param title - Page title
 * @param description - Page description
 * @param image - Page image URL
 * @param url - Page URL
 * @returns Metadata object
 */
export function generateMetadata({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: image
        ? [
            {
              width: 1200,
              height: 630,
              url: image,
            },
          ]
        : seoData.openGraph?.images,
    },
    twitter: {
      ...seoData.twitter,
      title,
      description,
    },
  };
}

export default seoData;
