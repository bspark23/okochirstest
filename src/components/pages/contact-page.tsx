"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { useContent } from "@/hooks/use-content";
import { Section } from "@/models/content";
import { SubscriberService } from "@/services/subscriber.service";
import { useState, FormEvent } from "react";

const inner = "max-w-[1440px] mx-auto px-5 md:px-[120px]";

export default function ContactPage() {
  useContent();
  const siteContent = useAppSelector((state) => state.content.content.siteContent) || {};
  const systemSettings = useAppSelector((state) => state.content.content.systemSettings) || {};
  const contact = siteContent.contact;
  const contactInfo = systemSettings.contact;
  const s1 = contact?.section1 as Section;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const trimmedPhone = formData.phone.trim();
    let phoneToSend: string | undefined = undefined;

    if (trimmedPhone) {
      // Clean phone number format for backend validation (+[code][number])
      let cleanedPhone = trimmedPhone.replace(/[\s\-\(\)]/g, "");
      if (cleanedPhone.startsWith("0")) {
        phoneToSend = "+234" + cleanedPhone.slice(1);
      } else if (!cleanedPhone.startsWith("+")) {
        phoneToSend = "+" + cleanedPhone;
      } else {
        phoneToSend = cleanedPhone;
      }
    }

    try {
      await SubscriberService.subscribe({
        name: formData.name.trim(),
        email: formData.email.trim(),
        ...(phoneToSend ? { phone: phoneToSend } : {}),
        type: "enquiry",
        metadata: { message: formData.message.trim() },
      });

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div style={{ background: "#0A0E27" }}>

      {/* ── HERO ── */}
      <section style={{ 
        background: "linear-gradient(135deg, #0A0E27 0%, #0D1231 7.14%, #0F153C 14.29%, #121947 21.43%, #151D52 28.57%, #18205D 35.71%, #1B2469 42.86%, #1E2875 50%, #1B2469 57.14%, #18205D 64.29%, #151D52 71.43%, #121947 78.57%, #0F153C 85.71%, #0D1231 92.86%, #0A0E27 100%)",
        overflow: "hidden", 
        position: "relative", 
        minHeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ maxWidth: 1440, marginLeft: "auto", marginRight: "auto", position: "relative", zIndex: 2, textAlign: "center" }} className={`${inner} py-[80px] md:py-[100px]`}>
          
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ color: "#fff", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Get In <span style={{ color: "#FF4444" }}>Touch</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8 }}>
              {s1?.body || "Have a project in mind? Let's discuss how we can deliver international-standard engineering services for your facility."}
            </p>
          </div>

        </div>
      </section>

      {/* ── CONTACT FORM & INFO ── */}
      <section style={{ background: "#0A0E27", paddingTop: "clamp(40px, 8vw, 80px)", paddingBottom: "clamp(40px, 8vw, 80px)" }}>
        <div className={inner}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, marginBottom: 8 }}>Contact Information</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2vw, 15px)", lineHeight: 1.8, marginBottom: 40 }}>
                We're available to answer your questions and provide the support you need.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 32px)" }}>
                {/* Address */}
                <div style={{ display: "flex", gap: "clamp(12px, 2vw, 16px)", alignItems: "flex-start" }}>
                  <div style={{ width: "clamp(44px, 6vw, 48px)", height: "clamp(44px, 6vw, 48px)", borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={20} color="#fff" className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 style={{ color: "#fff", fontSize: "clamp(14px, 2vw, 16px)", fontWeight: 700, marginBottom: 8 }}>Office Address</h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(13px, 1.8vw, 14px)", lineHeight: 1.7, margin: 0 }}>
                      {contactInfo?.addresses?.[0]?.address || "#11 Olusegun Close, Kula Nla Ekpe LGA, Lagos, Nigeria"}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: "flex", gap: "clamp(12px, 2vw, 16px)", alignItems: "flex-start" }}>
                  <div style={{ width: "clamp(44px, 6vw, 48px)", height: "clamp(44px, 6vw, 48px)", borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={20} color="#fff" className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 style={{ color: "#fff", fontSize: "clamp(14px, 2vw, 16px)", fontWeight: 700, marginBottom: 8 }}>Phone Numbers</h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(13px, 1.8vw, 14px)", lineHeight: 1.7, margin: 0 }}>
                      {contactInfo?.phones?.[0] || "+234 702 672 3574"}<br />
                      {contactInfo?.phones?.[1] || "+234 802 590 9525"}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: "flex", gap: "clamp(12px, 2vw, 16px)", alignItems: "flex-start" }}>
                  <div style={{ width: "clamp(44px, 6vw, 48px)", height: "clamp(44px, 6vw, 48px)", borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={20} color="#fff" className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 style={{ color: "#fff", fontSize: "clamp(14px, 2vw, 16px)", fontWeight: 700, marginBottom: 8 }}>Email Address</h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(13px, 1.8vw, 14px)", lineHeight: 1.7, margin: 0 }}>
                      {contactInfo?.email || "hr.okochris@gmail.com"}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div style={{ display: "flex", gap: "clamp(12px, 2vw, 16px)", alignItems: "flex-start" }}>
                  <div style={{ width: "clamp(44px, 6vw, 48px)", height: "clamp(44px, 6vw, 48px)", borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Clock size={20} color="#fff" className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 style={{ color: "#fff", fontSize: "clamp(14px, 2vw, 16px)", fontWeight: 700, marginBottom: 8 }}>Business Hours</h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(13px, 1.8vw, 14px)", lineHeight: 1.7, margin: 0 }}>
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p style={{ color: "#FF4444", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 600, marginTop: 8 }}>Emergency Service: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: "rgba(19,26,76,0.6)", borderRadius: "clamp(16px, 3vw, 20px)", padding: "clamp(24px, 4vw, 40px)", border: "1px solid rgba(255,68,68,0.2)" }}>
              <h2 style={{ color: "#fff", fontSize: "clamp(20px, 3vw, 24px)", fontWeight: 800, marginBottom: "clamp(20px, 3vw, 24px)" }}>Send Us a Message</h2>
              
              {submitStatus && (
                <div style={{ 
                  padding: "12px 16px", 
                  borderRadius: 8, 
                  marginBottom: 20,
                  background: submitStatus.type === "success" ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)",
                  border: `1px solid ${submitStatus.type === "success" ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"}`,
                  color: submitStatus.type === "success" ? "#22c55e" : "#ef4444",
                  fontSize: "clamp(13px, 1.8vw, 14px)"
                }}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2.5vw, 20px)" }}>
                {/* Full Name */}
                <div>
                  <label style={{ display: "block", color: "#fff", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 600, marginBottom: 8 }}>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    style={{ width: "100%", padding: "clamp(12px, 2vw, 14px) clamp(14px, 2.5vw, 16px)", borderRadius: 8, border: "1px solid rgba(255,68,68,0.3)", fontSize: "clamp(13px, 1.8vw, 14px)", outline: "none", background: "rgba(10,14,39,0.5)", color: "#fff" }} 
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: "block", color: "#fff", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 600, marginBottom: 8 }}>Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    style={{ width: "100%", padding: "clamp(12px, 2vw, 14px) clamp(14px, 2.5vw, 16px)", borderRadius: 8, border: "1px solid rgba(255,68,68,0.3)", fontSize: "clamp(13px, 1.8vw, 14px)", outline: "none", background: "rgba(10,14,39,0.5)", color: "#fff" }} 
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: "block", color: "#fff", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 600, marginBottom: 8 }}>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    style={{ width: "100%", padding: "clamp(12px, 2vw, 14px) clamp(14px, 2.5vw, 16px)", borderRadius: 8, border: "1px solid rgba(255,68,68,0.3)", fontSize: "clamp(13px, 1.8vw, 14px)", outline: "none", background: "rgba(10,14,39,0.5)", color: "#fff" }} 
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", color: "#fff", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 600, marginBottom: 8 }}>Message</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    style={{ width: "100%", padding: "clamp(12px, 2vw, 14px) clamp(14px, 2.5vw, 16px)", borderRadius: 8, border: "1px solid rgba(255,68,68,0.3)", fontSize: "clamp(13px, 1.8vw, 14px)", outline: "none", resize: "vertical", background: "rgba(10,14,39,0.5)", color: "#fff" }} 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{ 
                    width: "100%", 
                    background: isSubmitting ? "rgba(255,68,68,0.5)" : "linear-gradient(270deg, #FF4444 0%, #E41F25 73.7%)", 
                    color: "#fff", 
                    padding: "clamp(14px, 2.5vw, 16px)", 
                    borderRadius: 100, 
                    fontSize: "clamp(14px, 2vw, 16px)", 
                    fontWeight: 700, 
                    border: "none", 
                    cursor: isSubmitting ? "not-allowed" : "pointer", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.05em" 
                  }}
                  className="hover:opacity-90 transition-opacity">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
