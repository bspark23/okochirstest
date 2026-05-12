import ServicesPage from "@/components/pages/services-page";

// Force dynamic rendering - always fetch fresh data from API
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Services() {
  return <ServicesPage />;
}
