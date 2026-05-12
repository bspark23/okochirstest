"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { useContent } from "@/hooks/use-content";
import { Link as NavLink, LinkSection } from "@/models/settings";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle, ChevronDown } from "lucide-react";

const MAX_W = 1440;

const socialIconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook size={16} />,
  instagram: <Instagram size={16} />,
  linkedin: <Linkedin size={16} />,
  twitter: <Twitter size={16} />,
  x: <Twitter size={16} />,
  youtube: <Youtube size={16} />,
  whatsapp: <MessageCircle size={16} />,
};

const defaultSocials = [
  { icon: "whatsapp", href: "#", label: "WhatsApp" },
  { icon: "linkedin", href: "#", label: "LinkedIn" },
  { icon: "instagram", href: "#", label: "Instagram" },
  { icon: "facebook", href: "#", label: "Facebook" },
  { icon: "x", href: "#", label: "X" },
];

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  useContent();
  const pathname = usePathname();
  const { systemSettings } = useAppSelector((state) => state.content.content);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Hardcoded navigation links
  const navLinks: (NavLink & { hasDropdown?: boolean })[] = [
    { label: "HOME", href: "/", isButton: false },
    { label: "ABOUT", href: "/about", isButton: false },
    { label: "SERVICES", href: "/services", isButton: false },
    { label: "FEATURES", href: "#", isButton: false, hasDropdown: true },
    { label: "BLOG", href: "/blog", isButton: false },
    { label: "CONTACT US", href: "/contact", isButton: true },
  ];

  const featuresDropdown = [
    {
      title: "PROJECTS",
      description: "Proven track record delivering",
      href: "/projects",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      )
    },
    {
      title: "SAFETY",
      description: "Our commitment to safety and quality",
      href: "/safety",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    }
  ];

  const footerSections = systemSettings?.footerLinks || [];
  const socialLinks = systemSettings?.socialLinks || [];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      {/* ── MOBILE MENU — completely outside header, highest z-index ── */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 99999,
          background: "#111742",
          display: "flex", flexDirection: "column",
          padding: "32px 32px 48px",
          overflowY: "auto",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 48 }}>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/okochris-images/logo/OKOCHRIS-LOGO-white 1.png" alt="Okochris Engineering" width={72} height={72} style={{ objectFit: "contain" }} />
            </Link>
            <button onClick={() => setMobileOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 8 }}>
              <X size={28} color="#fff" />
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {navLinks.map((link: NavLink, i: number) =>
              link.isButton ? (
                <Link key={i} href={link.href} onClick={() => setMobileOpen(false)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 56, borderRadius: 8, background: "linear-gradient(270deg, #FF4444 0%, #E41F25 73.7%)", color: "#fff", fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
                  {link.label}
                </Link>
              ) : (
                <Link key={i} href={link.href} onClick={() => setMobileOpen(false)}
                  style={{ color: isActive(link.href) ? "#fff" : "rgba(255,255,255,0.65)", fontSize: 22, fontWeight: isActive(link.href) ? 700 : 400, textDecoration: "none" }}>
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}

      {/* ── NAVBAR ── */}
      <header style={{ background: "#111742", position: "sticky", top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: MAX_W, margin: "0 auto", height: 88, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px" }}
          className="md:px-[80px]">
          <Link href="/" style={{ flexShrink: 0 }}>
            <Image src="/okochris-images/logo/OKOCHRIS-LOGO-white 1.png" alt="Oko Chris Engineering Ltd" width={56} height={56} style={{ objectFit: "contain" }} />
          </Link>

          <ul className="hidden md:flex" style={{ listStyle: "none", margin: 0, padding: 0, gap: 48, alignItems: "center" }}>
            {navLinks.map((link, i: number) =>
              link.isButton ? (
                <li key={i}>
                  <Link href={link.href}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 52, borderRadius: 100, paddingLeft: 40, paddingRight: 40, background: "linear-gradient(270deg, #FF4444 0%, #E41F25 73.7%)", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap", letterSpacing: "0.02em", textTransform: "uppercase" }}
                    className="hover:opacity-90 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ) : link.hasDropdown ? (
                <li key={i} style={{ position: "relative" }}>
                  <div ref={dropdownRef}>
                    <button
                      onClick={() => setFeaturesOpen(!featuresOpen)}
                      style={{ color: featuresOpen ? "#FF4444" : "rgba(255,255,255,0.8)", fontSize: 14, textDecoration: "none", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer" }}
                      className="hover:text-red-400 transition-colors">
                      {link.label}
                      <ChevronDown size={14} style={{ transform: featuresOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                    </button>
                    {featuresOpen && (
                      <div style={{ position: "absolute", top: "calc(100% + 20px)", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(276.49deg, #0A0E27 0%, #131A4C 53.92%)", borderRadius: 16, padding: 24, minWidth: 320, border: "1px solid rgba(255,68,68,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)", zIndex: 1000 }}>
                        <h3 style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 600, marginBottom: 16, letterSpacing: "0.05em" }}>Features</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                          {featuresDropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setFeaturesOpen(false)}
                              style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, borderRadius: 12, background: "rgba(19,26,76,0.6)", textDecoration: "none", border: "1px solid transparent" }}
                              className="hover:border-red-500/30 transition-all">
                              <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(100,120,200,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                {item.icon}
                              </div>
                              <div>
                                <div style={{ color: pathname === item.href ? "#FF4444" : "#fff", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{item.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ) : (
                <li key={i}>
                  <Link href={link.href}
                    style={{ color: isActive(link.href) ? "#FF4444" : "rgba(255,255,255,0.8)", fontSize: 14, textDecoration: "none", fontWeight: isActive(link.href) ? 600 : 400, textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 4 }}
                    className="hover:text-red-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <button className="md:hidden" onClick={() => setMobileOpen(true)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 8 }}>
            <Menu size={26} color="#fff" />
          </button>
        </div>
      </header>

      {/* ── PAGE CONTENT ── */}
      <main style={{ flex: 1 }}>{children}</main>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0F1133", borderTop: "1px solid rgba(227,30,36,0.2)" }}>
        <div style={{ maxWidth: 1728, margin: "0 auto", padding: "80px 120px" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Logo & Description */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <div style={{ marginBottom: 20 }}>
                <Image src="/okochris-images/logo/OKOCHRIS-LOGO-white 1.png" alt="Okochris Engineering" width={80} height={80} style={{ objectFit: "contain" }} />
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.7, marginBottom: 24 }}>
                Delivering top-tier mechanical and civil engineering services to international standards. Safety First. Quality Always.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {(socialLinks.length > 0 ? socialLinks : defaultSocials).map((s: NavLink) => (
                  <Link key={s.label} href={s.href} aria-label={s.label}
                    style={{ width: 40, height: 40, borderRadius: "50%", background: "#FF4444", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
                    className="hover:opacity-80 transition-opacity">
                    {socialIconMap[s.icon?.toLowerCase() || ""] ?? <span style={{ fontSize: 14, fontWeight: 700 }}>{s.label[0]}</span>}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ color: "#FF4444", fontSize: 14, fontWeight: 700, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>QUICK LINKS</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Our Services", href: "/services" },
                  { label: "Projects", href: "/blog" },
                  { label: "Clients", href: "/about#clients" },
                  { label: "Safety & Quality", href: "/about#quality" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" }
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, textDecoration: "none" }} className="hover:text-red-400 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 style={{ color: "#FF4444", fontSize: 14, fontWeight: 700, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>OUR SERVICES</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Piping & Pipelines",
                  "Mechanical Structures",
                  "Surface Treatment",
                  "Equipment Fabrication",
                  "Maintenance & Shutdown",
                  "Equipment Leasing",
                  "Manpower Supply"
                ].map((l) => (
                  <li key={l}>
                    <Link href="/services" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, textDecoration: "none" }} className="hover:text-red-400 transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 style={{ color: "#FF4444", fontSize: 14, fontWeight: 700, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>CONTACT US</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                    #11 Olusegun Close, Kala Nla Ekpe LGA, Lagos, Nigeria
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2" style={{ flexShrink: 0 }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <a href="tel:+2347026723574" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, textDecoration: "none" }} className="hover:text-red-400 transition-colors">
                      +234 702 672 3574
                    </a>
                    <a href="tel:+2348025909525" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, textDecoration: "none" }} className="hover:text-red-400 transition-colors">
                      +234 802 590 9525
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2" style={{ flexShrink: 0 }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:hr.okochris@gmail.com" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, textDecoration: "none" }} className="hover:text-red-400 transition-colors">
                    hr.okochris@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ background: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 1728, margin: "0 auto", padding: "24px 120px", display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}
            className="md:flex-row md:justify-between">
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, textAlign: "center" }}>
              © {new Date().getFullYear()} Okochris Engineering Limited (RC: 1713481). All rights reserved.
            </span>
            <div style={{ display: "flex", gap: 24 }}>
              <Link href="#" style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, textDecoration: "none" }} className="hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, textDecoration: "none" }} className="hover:text-red-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
