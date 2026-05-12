import HomePage from "@/components/pages/home-page";

// Force dynamic rendering - always fetch fresh data from API
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return <HomePage />;
}
