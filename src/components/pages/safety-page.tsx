"use client";

import Link from "next/link";
import { Shield, AlertTriangle, HardHat, FileCheck } from "lucide-react";

const inner = "max-w-[1440px] mx-auto px-5 md:px-[120px]";

export default function SafetyPage() {
  return (
    <div style={{ background: "#0A0E27" }}>

      {/* ── HERO ── */}
      <section style={{ 
        background: "linear-gradient(135deg, #0A0E27 0%, #0D1231 7.14%, #0F153C 14.29%, #121947 21.43%, #151D52 28.57%, #18205D 35.71%, #1B2469 42.86%, #1E2875 50%, #1B2469 57.14%, #18205D 64.29%, #151D52 71.43%, #121947 78.57%, #0F153C 85.71%, #0D1231 92.86%, #0A0E27 100%)",
        overflow: "hidden", 
        position: "relative", 
        minHeight: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ maxWidth: 1440, marginLeft: "auto", marginRight: "auto", position: "relative", zIndex: 2, textAlign: "center" }} className={`${inner} py-[80px] md:py-[100px]`}>
          
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ color: "#fff", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 8 }}>
              Safety First
            </h1>
            <h2 style={{ color: "#FF4444", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Quality Always
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8 }}>
              Our commitment to zero incidents and 100% quality compliance. Every project, every site, every day.
            </p>
          </div>

        </div>
      </section>

      {/* ── OUR SAFETY STANDARD: ALWAYS ZERO ── */}
      <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 80 }}>
        <div className={inner}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, marginBottom: 16 }}>
              Our Safety Standard: Always Zero
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2vw, 16px)", maxWidth: 800, margin: "0 auto" }}>
              Our HSE target on every project is zero incidents, zero accidents, and zero fatalities. We do not accept that harm is an inevitable cost of engineering work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "ZERO", subtitle: "INCIDENTS", icon: <AlertTriangle size={32} /> },
              { title: "ZERO", subtitle: "ACCIDENTS", icon: <Shield size={32} /> },
              { title: "ZERO", subtitle: "FATALITIES", icon: <HardHat size={32} /> }
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(26,35,86,0.8)", borderRadius: 20, padding: 40, textAlign: "center", border: "2px solid #FF4444" }}>
                <div style={{ marginBottom: 24, color: "#FF4444" }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: 56, fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAFETY PRACTICES ── */}
      <section style={{ background: "#0A0E27", paddingTop: 0, paddingBottom: 80 }}>
        <div className={inner}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Proper Site Induction",
                description: "Comprehensive safety training and orientation for all personnel before site access.",
                icon: <HardHat size={24} />
              },
              {
                title: "Hazard Identification",
                description: "Systematic identification, assessment, and control of workplace hazards.",
                icon: <AlertTriangle size={24} />
              },
              {
                title: "Method Statements",
                description: "Detailed work procedures and risk assessments for every critical activity.",
                icon: <FileCheck size={24} />
              },
              {
                title: "PPE Compliance",
                description: "Mandatory personal protective equipment for all personnel on site.",
                icon: <Shield size={24} />
              }
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(26,35,86,0.6)", borderRadius: 16, padding: 28, border: "1px solid rgba(255,68,68,0.1)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, color: "#fff" }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY ASSURANCE & QUALITY STANDARDS ── */}
      <section style={{ background: "#0A0E27", paddingTop: 0, paddingBottom: 80 }}>
        <div className={inner}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Quality Assurance */}
            <div style={{ background: "rgba(17,24,66,0.9)", borderRadius: 20, padding: 40, border: "1px solid rgba(255,68,68,0.12)" }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <Shield size={28} color="#fff" />
              </div>
              <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 800, marginBottom: 16 }}>
                Quality Assurance
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                Every project executed by Okochris Engineering Limited is governed by a quality plan that defines inspection and test requirements, hold points, release criteria, and documentation standards.
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.8 }}>
                We maintain QA/QC personnel on every active project site, and we do not pass work through to the next phase until it has been verified against the specified standard.
              </p>
            </div>

            {/* Quality Standards */}
            <div style={{ background: "rgba(17,24,66,0.9)", borderRadius: 20, padding: 40, border: "1px solid rgba(255,68,68,0.12)", position: "relative" }}>
              {/* Small red line at top center */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 60, height: 3, background: "#FF4444", borderRadius: "0 0 2px 2px" }} />
              
              <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 800, marginBottom: 24 }}>
                Quality Standards
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "ISO-compliant quality management systems",
                  "Inspection and test requirements at every stage",
                  "Hold points and release criteria documentation",
                  "QA/QC personnel on every active project site",
                  "Material verification and traceability",
                  "Non-destructive testing coordination",
                  "Pressure testing and final documentation",
                  "Third-party inspection interface"
                ].map((text, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid #FF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="#FF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.6 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OUR COMMITMENT ── */}
      <section style={{ background: "#0A0E27", paddingTop: 0, paddingBottom: 80 }}>
        <div className={inner}>
          <div style={{ background: "rgba(17,24,66,0.9)", borderRadius: 20, padding: "clamp(32px, 5vw, 48px)", border: "1px solid rgba(255,68,68,0.12)" }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, marginBottom: 20 }}>
              Our Commitment
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8, marginBottom: 16 }}>
              Okochris Engineering Limited is committed to providing a safe and healthy work environment for all employees, contractors, clients, and visitors. We believe that all workplace injuries and illnesses are preventable, and we are dedicated to achieving zero harm.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8, marginBottom: 16 }}>
              Our HSE policy is built on the principle that safety is everyone's responsibility. From senior management to field workers, every member of our team is empowered and expected to stop work if they observe unsafe conditions or practices.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8 }}>
              We comply with all applicable health, safety, and environmental regulations, and we continuously strive to exceed industry standards. Our goal is not just compliance — it's excellence in safety performance on every project, every day.
            </p>
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
