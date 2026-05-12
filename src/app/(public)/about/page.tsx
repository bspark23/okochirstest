import AboutPage from "@/components/pages/about-page";

// Force dynamic rendering - always fetch fresh data from API
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function About() {
  return <AboutPage />;
}
