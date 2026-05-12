import ContactPage from "@/components/pages/contact-page";

// Force dynamic rendering - always fetch fresh data from API
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Contact() {
  return <ContactPage />;
}
