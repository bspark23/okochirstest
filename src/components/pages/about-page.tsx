"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { useContent } from "@/hooks/use-content";
import { Section, Item } from "@/models/content";

const inner = "max-w-[1440px] mx-auto px-5 md:px-[120px]";

export default function AboutPage() {
  useContent();
  const { about } = useAppSelector((state) => state.content.content.siteContent);
  const s1 = about?.section1 as Section;
  const s2 = about?.section2 as Section;
  const s3 = about?.section3 as Section;
  const s4 = about?.section4 as Section;
  const s5 = about?.section5 as Section;

  return (
    <div style={{ background: "#0A0E27" }}>

      {/* ── HERO ── */}
      <section style={{ 
        background: "linear-gradient(135deg, #0A0E27 0%, #0D1231 7.14%, #0F153C 14.29%, #121947 21.43%, #151D52 28.57%, #18205D 35.71%, #1B2469 42.86%, #1E2875 50%, #1B2469 57.14%, #18205D 64.29%, #151D52 71.43%, #121947 78.57%, #0F153C 85.71%, #0D1231 92.86%, #0A0E27 100%)",
        overflow: "hidden", 
        position: "relative", 
        minHeight: 894,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ maxWidth: 1440, marginLeft: "auto", marginRight: "auto", position: "relative", zIndex: 2, textAlign: "center" }} className={`${inner} py-[80px] md:py-[100px]`}>
          
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ color: "#fff", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              About <span style={{ color: "#FF4444" }}>OKOCHRIS Engineering</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8 }}>
              {s1?.body || "We are an ISO-certified engineering company delivering top-tier mechanical and civil engineering services to international standards. Built on integrity, innovation, and a relentless commitment to quality."}
            </p>
          </div>

        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 80 }}>
        <div className={inner}>
          <div style={{ background: "rgba(19,26,76,0.6)", borderRadius: 20, padding: "clamp(32px, 5vw, 48px)", border: "1px solid rgba(255,68,68,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, margin: 0 }}>Who We Are</h2>
            </div>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8, marginBottom: 0 }}>
              {s2?.body || "Okochris Engineering Limited is a Nigerian-based mechanical and civil engineering company specializing in the design, fabrication, installation, and maintenance of industrial systems. We serve clients across the oil & gas, cement, power, and manufacturing sectors, delivering projects that meet the highest international standards for quality, safety, and performance."}
            </p>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section style={{ background: "#0A0E27", paddingTop: 0, paddingBottom: 80 }}>
        <div className={inner}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Our Vision */}
            <div style={{ background: "rgba(19,26,76,0.6)", borderRadius: 20, padding: "clamp(32px, 5vw, 40px)", border: "1px solid rgba(255,68,68,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 style={{ color: "#fff", fontSize: "clamp(20px, 3vw, 24px)", fontWeight: 800, margin: 0 }}>Our Vision</h3>
              </div>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(14px, 2vw, 15px)", lineHeight: 1.8, margin: 0 }}>
                {s3?.body || "To be the customer's delight, operating in a quality, profitable, and responsible manner."}
              </p>
            </div>

            {/* Our Mission */}
            <div style={{ background: "rgba(19,26,76,0.6)", borderRadius: 20, padding: "clamp(32px, 5vw, 40px)", border: "1px solid rgba(255,68,68,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 style={{ color: "#fff", fontSize: "clamp(20px, 3vw, 24px)", fontWeight: 800, margin: 0 }}>Our Mission</h3>
              </div>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(14px, 2vw, 15px)", lineHeight: 1.8, margin: 0 }}>
                {s4?.body || "Providing exclusive services that give customers confidence and pride — a certificate lift."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES (Reused from Home) ── */}
      <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 80 }}>
        <div className={`${inner} text-center`}>
          <h2 style={{ color: "#fff", fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 800, marginBottom: 8 }}>
            Core <span style={{ color: "#FF4444" }}>Values</span>
          </h2>
          <div style={{ width: 80, height: 3, background: "#FF4444", margin: "0 auto 16px" }} />
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2vw, 15px)", maxWidth: 700, margin: "0 auto 56px", padding: "0 20px" }}>
            Non-negotiable principles governing every decision, conversation, and project execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {s5?.items?.map((item: Item, i: number) => (
              <div key={i} style={{ background: "rgba(19,26,76,0.6)", borderRadius: 20, padding: "clamp(24px, 5vw, 40px)", textAlign: "left", border: "1px solid rgba(255,68,68,0.3)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    {i === 0 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                    {i === 1 && <><circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M1 12h6m6 0h6M4.8 4.8l4.2 4.2m0 6l-4.2 4.2" /></>}
                    {i === 2 && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
                    {i === 3 && <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>}
                  </svg>
                </div>
                <h3 style={{ color: "#fff", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 700, marginBottom: 16 }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2vw, 15px)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK (Projects Gallery) ── */}
      <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 80 }}>
        <div className={`${inner} text-center`}>
          <h2 style={{ color: "#fff", fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 800, marginBottom: 8 }}>
            Our <span style={{ color: "#FF4444" }}>Work</span>
          </h2>
          <div style={{ width: 80, height: 3, background: "#FF4444", margin: "0 auto 56px" }} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Dangote Cement Plant", subtitle: "Mechanical Installation", image: "/okochris-images/about-okochris-our-work/Img1.png" },
              { title: "Fabrication Structures", subtitle: "Steel Structures", image: "/okochris-images/about-okochris-our-work/Img2.png" },
              { title: "Pipeline Installation", subtitle: "Oil & Gas", image: "/okochris-images/about-okochris-our-work/Img3.png" },
              { title: "Refinery Maintenance", subtitle: "Shutdown Services", image: "/okochris-images/about-okochris-our-work/Img4.png" },
              { title: "Equipment Leasing", subtitle: "Industrial Equipment", image: "/okochris-images/about-okochris-our-work/Img5.png" },
              { title: "Surface Treatment", subtitle: "Coating & Blasting", image: "/okochris-images/about-okochris-our-work/Img6.png" }
            ].map((project, i) => (
              <div key={i} style={{ borderRadius: 20, overflow: "hidden", position: "relative", height: 280, border: "1px solid rgba(255,68,68,0.2)" }} className="group">
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} className="group-hover:scale-105 transition duration-500" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,14,39,0.95) 0%, rgba(10,14,39,0.4) 100%)" }} />
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px", zIndex: 1 }}>
                  <p style={{ color: "#FF4444", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{project.subtitle}</p>
                  <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: 0 }}>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── READY TO START CTA (Reused from Home) ── */}
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
