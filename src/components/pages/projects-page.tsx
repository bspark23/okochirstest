"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

const inner = "max-w-[1440px] mx-auto px-5 md:px-[120px]";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Dangote Fertilizer Plant",
      category: "Piping & Mechanical Installation",
      date: "2023 - 2024",
      description: "Complete piping installation and mechanical structures for fertilizer production facility. Scope included process piping, pipe racks, and equipment supports.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    },
    {
      title: "Dangote Refinery",
      category: "Surface Treatment & Coating",
      date: "2022 - 2023",
      description: "Industrial sandblasting, painting, and coating services for refinery equipment and structures. NACE-compliant corrosion protection systems.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      title: "Dangote Refinery",
      category: "Mechanical Structures",
      date: "2022 - 2023",
      description: "Fabrication and installation of pipe rack steel structures, gallery systems, and equipment support frameworks for refinery operations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    },
    {
      title: "Mangal Cement Line 1",
      category: "Piping & Equipment Installation",
      date: "2021 - 2022",
      description: "Complete piping systems installation and equipment setup for cement production line. Included process piping, utility systems, and commissioning support.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      )
    },
    {
      title: "BUA Cement Line 2",
      category: "Mechanical Installation",
      date: "2021 - 2022",
      description: "Mechanical installation services for cement production line including equipment installation, alignment, and structural support systems.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M1 12h6m6 0h6M4.8 4.8l4.2 4.2m0 6l-4.2 4.2" />
        </svg>
      )
    },
    {
      title: "BUA Cement Line 3",
      category: "Piping & Structures",
      date: "2020 - 2021",
      description: "Comprehensive piping and structural steel installation for cement plant expansion. Delivered on schedule with zero safety incidents.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "BUA HRS",
      category: "Heat Recovery System",
      date: "2020 - 2021",
      description: "Installation of heat recovery system including piping, equipment, and control systems. Enhanced energy efficiency for cement production.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: "Dangote Refinery",
      category: "Maintenance & Shutdown",
      date: "2019 - 2020",
      description: "Planned maintenance and turnaround services during refinery shutdown. Provided skilled manpower and project management for critical path activities.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    }
  ];

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
            <h1 style={{ color: "#fff", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Project <span style={{ color: "#FF4444" }}>Portfolio</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8 }}>
              Proven track record delivering complex mechanical and civil engineering projects to international standards. Safety first. Quality always.
            </p>
          </div>

        </div>
      </section>

      {/* ── PROJECTS LIST ── */}
      <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 80 }}>
        <div className={inner}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {projects.map((project, i) => (
              <div key={i} style={{ background: "rgba(17,24,66,0.9)", borderRadius: 20, padding: "clamp(24px, 4vw, 32px)", border: "1px solid rgba(255,68,68,0.12)", display: "flex", alignItems: "center", gap: 24 }} className="hover:border-red-500/30 transition-all group">
                
                {/* Icon Badge */}
                <div style={{ width: 56, height: 56, borderRadius: 12, background: "#FF4444", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {project.icon}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 8 }} className="flex-col md:flex-row">
                    <div>
                      <h3 style={{ color: "#fff", fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 800, marginBottom: 6 }}>
                        {project.title}
                      </h3>
                      <p style={{ color: "#FF4444", fontSize: "clamp(12px, 1.5vw, 14px)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {project.category}
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)", fontSize: 13, flexShrink: 0 }}>
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(13px, 1.8vw, 15px)", lineHeight: 1.7, marginBottom: 0 }}>
                    {project.description}
                  </p>
                </div>

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
