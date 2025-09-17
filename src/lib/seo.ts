import { Metadata } from "next";

export const seoData: Metadata = {
  title: "Portfolio - Your content delivery partner for large scale applications",
  description: "A platform integrating Aceternity with Strapi for seamless content management.",
  keywords: "content, delivery, web, hosting",
  openGraph: {
    type: "website",
    title: "LaunchPad - Your content delivery partner for large scale applications",
    url: "https://ui.aceternity.com",
    description: "A platform integrating Aceternity with Strapi for seamless content management.",
    locale: "en_EN",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://ui.aceternity.com/banner.png",
      },
    ],
    siteName: "launchpad",
  },
  twitter: {
    card: "summary_large_image",
    site: "ui.aceternity.com",
    creator: "@mannupaaji",
  },
  authors: [{ name: "LaunchPad Team" }],
  creator: "LaunchPad",
  publisher: "LaunchPad",
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

/**
 * Example usage for dynamic pages:
 * 
 * // In a dynamic page like [slug]/page.tsx
 * import { generateMetadata } from '@/lib/seo'
 * 
 * export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
 *   const article = await getArticle(params.slug)
 *   
 *   return generateMetadata({
 *     title: article.title,
 *     description: article.description,
 *     image: article.image?.url,
 *     url: `https://yoursite.com/articles/${params.slug}`,
 *   })
 * }
 */

export default seoData; 