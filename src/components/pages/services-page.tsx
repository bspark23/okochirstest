"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { useContent } from "@/hooks/use-content";
import { Section } from "@/models/content";
import { 
  Wrench, 
  Layers, 
  Paintbrush, 
  Settings, 
  Truck, 
  Users,
  Award,
  Target,
  ShieldCheck
} from "lucide-react";

const inner = "max-w-[1440px] mx-auto px-5 md:px-[120px]";

export default function ServicesPage() {
  useContent();
  const { services, about } = useAppSelector((state) => state.content.content.siteContent);
  const section1 = services?.section1 as Section;

  // Dynamically collect all service sections from section2 up to section8
  const serviceSections = [
    services?.section2,
    services?.section3,
    services?.section4,
    services?.section5,
    services?.section6,
    services?.section7,
    services?.section8,
  ].filter(Boolean) as Section[];

  // Centered CTA block (section9 or fallback to section8 if not split yet)
  const ctaSection = services?.section9 || services?.section8;

  // Custom icons for the 7 service categories
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0: return <Wrench size={22} color="#fff" />;
      case 1: return <Layers size={22} color="#fff" />; // Structural layers
      case 2: return <Paintbrush size={22} color="#fff" />; // Painting/coating
      case 3: return <Settings size={22} color="#fff" />; // Equipment/fab
      case 4: return <Settings size={22} color="#fff" />; // Maintenance/gears
      case 5: return <Truck size={22} color="#fff" />; // Leasing/logistics
      case 6: return <Users size={22} color="#fff" />; // Manpower/personnel
      default: return <Wrench size={22} color="#fff" />;
    }
  };

  // Custom icons for the stats cards
  const getStatIcon = (index: number) => {
    switch (index) {
      case 0: return <Award size={24} color="#FF4444" />;
      case 1: return <Users size={24} color="#FF4444" />;
      case 2: return <Target size={24} color="#FF4444" />;
      case 3: return <ShieldCheck size={24} color="#FF4444" />;
      default: return <Award size={24} color="#FF4444" />;
    }
  };

  // Dynamic stats array fetched from about page (section7), with clean fallbacks
  const statsItems = about?.section7?.items || [
    { title: "7+", subtitle: "Major Projects", body: "" },
    { title: "5+", subtitle: "Key Clients", body: "" },
    { title: "ZERO", subtitle: "Safety Incidents", body: "" },
    { title: "100%", subtitle: "Quality Standard", body: "" }
  ];

  return (
    <div style={{ background: "#0A0E27" }}>

      {/* ── HERO ── */}
      <section style={{ 
        background: "linear-gradient(135deg, #0A0E27 0%, #0D1231 7.14%, #0F153C 14.29%, #121947 21.43%, #151D52 28.57%, #18205D 35.71%, #1B2469 42.86%, #1E2875 50%, #1B2469 57.14%, #18205D 64.29%, #151D52 71.43%, #121947 78.57%, #0F153C 85.71%, #0D1231 92.86%, #0A0E27 100%)",
        overflow: "hidden", 
        position: "relative", 
        minHeight: 450,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ maxWidth: 1440, marginLeft: "auto", marginRight: "auto", position: "relative", zIndex: 2, textAlign: "center" }} className={`${inner} py-[80px] md:py-[100px]`}>
          
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {/* Centered red wrench icon badge */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255, 68, 68, 0.1)",
                border: "1px solid rgba(255, 68, 68, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Wrench size={22} color="#FF4444" />
              </div>
            </div>

            <h1 style={{ color: "#fff", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Engineering <span style={{ color: "#FF4444" }}>Services</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8 }}>
              {section1?.body || "Comprehensive mechanical and civil engineering solutions for industrial facilities across Nigeria."}
            </p>
          </div>

        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 80 }}>
        <div className={inner}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            
            {serviceSections.map((service, index) => (
              <div 
                key={index} 
                style={{
                  background: "rgba(13, 20, 57, 0.45)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  padding: "clamp(24px, 4vw, 48px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden"
                }}
                className="hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,68,68,0.08)] group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Image container: Even index is order-1 (left), Odd index is order-2 (right) on large screens */}
                  <div className={`lg:col-span-5 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                    <div 
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/10",
                        borderRadius: "16px",
                        overflow: "hidden",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <Image
                        src={service.image || `/okochris-images/services/Img${index + 1}.png`}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        style={{ objectFit: "cover" }}
                        className="group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content container: Even index is order-2 (right), Odd index is order-1 (left) on large screens */}
                  <div className={`lg:col-span-7 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                    
                    {/* Floating red icon badge above the title */}
                    <div 
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "#FF4444",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px"
                      }}
                    >
                      {getServiceIcon(index)}
                    </div>

                    <h2 style={{ color: "#fff", fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 800, marginBottom: 16 }}>
                      {service.title}
                    </h2>
                    
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                      {service.body}
                    </p>
                    
                    {/* KEY CAPABILITIES */}
                    {service.items && service.items.length > 0 && (
                      <div>
                        <h3 style={{ color: "#FF4444", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                          KEY CAPABILITIES
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                          {service.items.map((item, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4444", flexShrink: 0 }} />
                              <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>{item.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section style={{ background: "#0A0E27", paddingTop: 0, paddingBottom: 80 }}>
        <div className={inner}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsItems.map((stat, i) => (
              <div 
                key={i} 
                style={{ 
                  background: "rgba(13, 20, 57, 0.45)", 
                  borderRadius: "20px", 
                  padding: "40px 24px", 
                  textAlign: "center", 
                  border: "1px solid rgba(255, 68, 68, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease"
                }}
                className="hover:border-red-500/40 hover:shadow-[0_0_20px_rgba(255,68,68,0.05)]"
              >
                {/* Centered red icon container */}
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(255, 68, 68, 0.1)",
                  border: "1px solid rgba(255, 68, 68, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px"
                }}>
                  {getStatIcon(i)}
                </div>
                
                <div style={{ fontSize: "clamp(32px, 4vw, 42px)", fontWeight: 800, color: "#fff", marginBottom: "8px", lineHeight: 1 }}>
                  {stat.title}
                </div>
                <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── READY TO START CTA ── */}
      <section style={{ background: "linear-gradient(270deg, #FF4444 0%, #E41F25 73.7%)", padding: "120px 20px" }}>
        <div style={{ maxWidth: 928, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 800, marginBottom: 20 }}>
            {ctaSection?.title || "Ready to Start?"}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.95)", fontSize: "clamp(14px, 2vw, 16px)", marginBottom: 40, maxWidth: 700, margin: "0 auto 40px", lineHeight: 1.7 }}>
            {ctaSection?.body || "Let's discuss how OKOCHRIS Engineering can deliver international-standard services for your facility."}
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#fff", color: "#E41F25", padding: "16px 40px", borderRadius: 100, fontSize: 16, fontWeight: 700, border: "none", textDecoration: "none" }} className="hover:scale-105 transition-transform duration-300">
            GET IN TOUCH
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
