"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { useContent } from "@/hooks/use-content";
import { Section, Item } from "@/models/content";

const inner = "max-w-[1440px] mx-auto px-5 md:px-[120px]";

export default function ServicesPage() {
  useContent();
  const { services } = useAppSelector((state) => state.content.content.siteContent);
  const section1 = services?.section1 as Section;
  const section2 = services?.section2 as Section;

  return (
    <div style={{ background: "#0A0E27" }}>

      {/* ── HERO ── */}
      <section style={{ 
        background: "linear-gradient(135deg, #0A0E27 0%, #0D1231 7.14%, #0F153C 14.29%, #121947 21.43%, #151D52 28.57%, #18205D 35.71%, #1B2469 42.86%, #1E2875 50%, #1B2469 57.14%, #18205D 64.29%, #151D52 71.43%, #121947 78.57%, #0F153C 85.71%, #0D1231 92.86%, #0A0E27 100%)",
        overflow: "hidden", 
        position: "relative", 
        minHeight: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ maxWidth: 1440, marginLeft: "auto", marginRight: "auto", position: "relative", zIndex: 2, textAlign: "center" }} className={`${inner} py-[80px] md:py-[100px]`}>
          
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ color: "#FF4444", fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
              // OUR SERVICES
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              {section1?.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8 }}>
              {section1?.body}
            </p>
          </div>

        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 80 }}>
        <div className={inner}>
          
          {/* Services in groups */}
          <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
            
            {/* Group 1: First 2 services */}
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {section2?.items?.slice(0, 2).map((service: Item & { capabilities?: string[] }, index: number) => (
                <div key={index} style={{ display: "flex", flexDirection: index % 2 === 0 ? "row" : "row-reverse", gap: 40, alignItems: "center" }} className="flex-col md:flex-row">
                  {/* Image */}
                  <div style={{ flex: "0 0 auto", width: "100%", maxWidth: 500, position: "relative", height: 350, borderRadius: 20, overflow: "hidden" }}>
                    <Image
                      src={service.image || "/okochris-images/Engineering-services/Img1.png"}
                      alt={service.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {/* Red icon badge */}
                    <div style={{ position: "absolute", top: 24, left: 24, width: 56, height: 56, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h2 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, marginBottom: 16 }}>
                      {service.title}
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                      {service.body}
                    </p>
                    
                    {/* KEY CAPABILITIES */}
                    {service.capabilities && service.capabilities.length > 0 && (
                      <div>
                        <h3 style={{ color: "#FF4444", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                          KEY CAPABILITIES
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                          {service.capabilities.map((cap: string, i: number) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4444", flexShrink: 0 }} />
                              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Group 2: Next 2 services */}
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {section2?.items?.slice(2, 4).map((service: Item & { capabilities?: string[] }, index: number) => (
                <div key={index} style={{ display: "flex", flexDirection: index % 2 === 0 ? "row" : "row-reverse", gap: 40, alignItems: "center" }} className="flex-col md:flex-row">
                  {/* Image */}
                  <div style={{ flex: "0 0 auto", width: "100%", maxWidth: 500, position: "relative", height: 350, borderRadius: 20, overflow: "hidden" }}>
                    <Image
                      src={service.image || "/okochris-images/Engineering-services/Img2.png"}
                      alt={service.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {/* Red icon badge */}
                    <div style={{ position: "absolute", top: 24, left: 24, width: 56, height: 56, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h2 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, marginBottom: 16 }}>
                      {service.title}
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                      {service.body}
                    </p>
                    
                    {/* KEY CAPABILITIES */}
                    {service.capabilities && service.capabilities.length > 0 && (
                      <div>
                        <h3 style={{ color: "#FF4444", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                          KEY CAPABILITIES
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                          {service.capabilities.map((cap: string, i: number) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4444", flexShrink: 0 }} />
                              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Group 3: Next 2 services */}
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {section2?.items?.slice(4, 6).map((service: Item & { capabilities?: string[] }, index: number) => (
                <div key={index} style={{ display: "flex", flexDirection: index % 2 === 0 ? "row" : "row-reverse", gap: 40, alignItems: "center" }} className="flex-col md:flex-row">
                  {/* Image */}
                  <div style={{ flex: "0 0 auto", width: "100%", maxWidth: 500, position: "relative", height: 350, borderRadius: 20, overflow: "hidden" }}>
                    <Image
                      src={service.image || "/okochris-images/Engineering-services/Img3.png"}
                      alt={service.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    {/* Red icon badge */}
                    <div style={{ position: "absolute", top: 24, left: 24, width: 56, height: 56, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h2 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, marginBottom: 16 }}>
                      {service.title}
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                      {service.body}
                    </p>
                    
                    {/* KEY CAPABILITIES */}
                    {service.capabilities && service.capabilities.length > 0 && (
                      <div>
                        <h3 style={{ color: "#FF4444", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                          KEY CAPABILITIES
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                          {service.capabilities.map((cap: string, i: number) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4444", flexShrink: 0 }} />
                              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Group 4: Last service (standalone) */}
            {section2?.items?.[6] && (
              <div style={{ display: "flex", flexDirection: "row", gap: 40, alignItems: "center" }} className="flex-col md:flex-row">
                {/* Image */}
                <div style={{ flex: "0 0 auto", width: "100%", maxWidth: 500, position: "relative", height: 350, borderRadius: 20, overflow: "hidden" }}>
                  <Image
                    src={section2.items[6].image || "/okochris-images/Engineering-services/Img4.png"}
                    alt={section2.items[6].title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {/* Red icon badge */}
                  <div style={{ position: "absolute", top: 24, left: 24, width: 56, height: 56, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h2 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, marginBottom: 16 }}>
                    {section2.items[6].title}
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                    {section2.items[6].body}
                  </p>
                  
                  {/* KEY CAPABILITIES */}
                  {(section2.items[6] as Item & { capabilities?: string[] }).capabilities && (section2.items[6] as Item & { capabilities?: string[] }).capabilities!.length > 0 && (
                    <div>
                      <h3 style={{ color: "#FF4444", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                        KEY CAPABILITIES
                      </h3>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                        {(section2.items[6] as Item & { capabilities?: string[] }).capabilities!.map((cap: string, i: number) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4444", flexShrink: 0 }} />
                            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#0A0E27", paddingTop: 0, paddingBottom: 80 }}>
        <div className={inner}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "7+", subtitle: "MAJOR PROJECTS" },
              { title: "5+", subtitle: "KEY CLIENTS" },
              { title: "ZERO", subtitle: "SAFETY INCIDENTS" },
              { title: "100%", subtitle: "QUALITY STANDARD" }
            ].map((stat, i) => (
              <div key={i} style={{ background: "rgba(19,26,76,0.6)", borderRadius: 16, padding: "40px 20px", textAlign: "center", border: "2px solid #FF4444" }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{stat.title}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── READY TO START CTA ── */}
      <section style={{ background: "linear-gradient(270deg, #FF4444 0%, #E41F25 73.7%)", padding: "120px 20px" }}>
        <div style={{ maxWidth: 928, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 800, marginBottom: 20 }}>Ready to Start?</h2>
          <p style={{ color: "rgba(255,255,255,0.95)", fontSize: "clamp(14px, 2vw, 16px)", marginBottom: 40, maxWidth: 700, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Let's discuss how OKOCHRIS Engineering can deliver international-standard services for your industrial facility.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#fff", color: "#E41F25", padding: "16px 40px", borderRadius: 100, fontSize: 16, fontWeight: 700, border: "none", textDecoration: "none" }} className="hover:opacity-90 transition-opacity">
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
