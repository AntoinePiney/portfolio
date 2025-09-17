import "@/styles/globals.css";
import "@/styles/colors.css";
import "@/styles/fonts.css";
import "@/styles/utils.css";

import { Metadata } from "next";
import seoData from "@/lib/seo";
import ClientLayout from "./ClientLayout";
import Header from "@/components/HeaderMain/header";
import DynamicFavicon from "@/components/DynamicFavicon";

export const metadata: Metadata = seoData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <DynamicFavicon />
        <Header />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}