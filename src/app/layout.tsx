import type { Metadata } from "next";
import localFont from "next/font/local";
import { ContentService } from "@/services/content.service";
import { SystemSettings } from "@/models/settings";
import { Providers } from "@/providers";
// import { GsapInit } from "@/components/ui/gsap-init";
import "./globals.css";

// Force dynamic rendering - always fetch fresh data from API
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter_24pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_24pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata() {
  try {
    const content = await ContentService.getContent();

    if (!content) {
      return {
        title: {
          template: "%s | Tarik Mechanical Solutions",
          default: "Tarik Mechanical Solutions",
        },
      } as Metadata;
    }

    const systemSettings = content.systemSettings || ({} as SystemSettings);

    return {
      title: {
        template: `%s | ${systemSettings?.siteName}`,
        default: systemSettings?.siteSlogan,
      },
      description: systemSettings?.siteDescription,
      metadataBase: new URL(systemSettings?.siteUrl || "http://localhost:3000"),
      keywords: systemSettings?.siteKeywords,
      authors: [{ name: systemSettings?.siteAuthor }],
      openGraph: {
        title: systemSettings?.ogTitle || "Oko Chris Engineering Ltd",
        description: systemSettings?.ogDescription || "Engineering Excellence",
        url: systemSettings?.siteUrl || "https://okochrisengineering.com",
        siteName: systemSettings?.siteName || "Oko Chris Engineering Ltd",
        images: systemSettings?.ogImage ? [
          {
            url: systemSettings.ogImage,
            alt: systemSettings.ogImageAlt || "Oko Chris Engineering Ltd",
          },
        ] : [],
        locale: systemSettings?.siteLocale || "en_NG",
        type: (systemSettings?.siteType as any) || "website",
      },
      twitter: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        card: systemSettings?.twitterCard as any,
        title: systemSettings?.twitterTitle,
        description: systemSettings?.twitterDescription,
        site: systemSettings?.twitterSite,
        creator: systemSettings?.twitterCreator,
        images: [systemSettings?.twitterImage || ""],
      },
    } as Metadata;
  } catch {
    return {
      title: {
        template: "%s | Oko Chris Engineering Ltd",
        default: "Oko Chris Engineering Ltd",
      },
    } as Metadata;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          {/* <GsapInit /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
