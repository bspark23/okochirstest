"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section, Item, Button } from "@/models/content";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useContent } from "@/hooks/use-content";
import { fetchPosts } from "@/store/slices/blog-slice";

const inner = "max-w-[1440px] mx-auto px-5 md:px-[120px]";

export default function HomePage() {
  useContent();
  const dispatch = useAppDispatch();
  const { home } = useAppSelector((state) => state.content.content.siteContent);
  const { posts } = useAppSelector((state) => state.blog);
  const section1 = home?.section1 as Section;
  const section2 = home?.section2 as Section;
  const section2a = home?.section2a as Section;
  const section2b = home?.section2b as Section;
  const section3 = home?.section3 as Section;
  const section4 = home?.section4 as Section;
  const section5 = home?.section5 as Section;
  const section6 = home?.section6 as Section;

  useEffect(() => {
    dispatch(fetchPosts({ filters: {}, page: 1, limit: 3 }));
  }, [dispatch]);

  return (
    <div style={{ background: "#0A0E27" }}>

      {/* ── HERO ── */}
      <section style={{ overflow: "hidden", position: "relative", minHeight: 600 }}>
        {/* Background Image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <Image
            src="/okochris-images/hero-slider/slider-1.png"
            alt="Engineering Excellence Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          {/* Very light overlay for text readability */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,14,39,0.85) 0%, rgba(10,14,39,0.4) 50%, rgba(10,14,39,0.2) 100%)" }} />
        </div>

        <div style={{ maxWidth: 1440, marginLeft: "auto", marginRight: "auto", position: "relative", zIndex: 2 }} className={`${inner} pt-[100px] pb-[100px] md:pt-[140px] md:pb-[140px]`}>
          
          {/* Desktop layout - content on left side */}
          <div className="hidden md:flex items-center justify-start">
            <div style={{ maxWidth: 700 }}>
              <h1 style={{ color: "#fff", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 28 }}>
                {section1?.title ? section1.title.split(' ')[0] : "Engineering"} <span style={{ color: "#FF4444" }}>{section1?.title ? section1.title.split(' ').slice(1).join(' ') : "Excellence"}</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.95)", fontSize: 20, lineHeight: 1.7, marginBottom: 48, maxWidth: 650 }}>
                {section1?.body || "Nigerian-owned mechanical and civil engineering firm delivering international-standard services to oil & gas, cement, and industrial sectors."}
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {section1?.buttons && section1.buttons.length > 0 ? section1.buttons.map((btn: Button, i: number) => (
                  <Link
                    key={i}
                    href={btn.href}
                    className="hover:opacity-90 transition-all"
                    style={
                      i === 0
                        ? { background: "linear-gradient(270deg, #FF4444 0%, #E41F25 73.7%)", color: "#fff", padding: "18px 48px", borderRadius: 100, fontSize: 15, fontWeight: 700, border: "none", textTransform: "uppercase", letterSpacing: "0.05em" }
                        : { background: "rgba(255,255,255,0.1)", color: "#fff", padding: "18px 48px", borderRadius: 100, fontSize: 15, fontWeight: 700, border: "2px solid rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }
                    }
                  >
                    {btn.title}
                  </Link>
                )) : null}
              </div>
            </div>
          </div>

          {/* Mobile layout - centered content with horizontal buttons */}
          <div className="md:hidden">
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 9vw, 48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, textAlign: "center" }}>
              {section1?.title ? section1.title.split(' ')[0] : "Engineering"} <span style={{ color: "#FF4444" }}>{section1?.title ? section1.title.split(' ').slice(1).join(' ') : "Excellence"}</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.95)", fontSize: 16, lineHeight: 1.7, marginBottom: 40, textAlign: "center" }}>
              {section1?.body || "Nigerian-owned mechanical and civil engineering firm delivering international-standard services to oil & gas, cement, and industrial sectors."}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              {section1?.buttons && section1.buttons.length > 0 ? section1.buttons.map((btn: Button, i: number) => (
                <Link
                  key={i}
                  href={btn.href}
                  className="hover:opacity-90 transition-all"
                  style={
                    i === 0
                      ? { background: "linear-gradient(270deg, #FF4444 0%, #E41F25 73.7%)", color: "#fff", padding: "16px 32px", borderRadius: 100, fontSize: 14, fontWeight: 700, border: "none", whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.05em" }
                      : { background: "rgba(255,255,255,0.1)", color: "#fff", padding: "16px 32px", borderRadius: 100, fontSize: 14, fontWeight: 700, border: "2px solid rgba(255,255,255,0.4)", whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.05em" }
                  }
                >
                  {btn.title}
                </Link>
              )) : null}
            </div>
          </div>

        </div>
      </section>
      {/* ── QUALITY ASSURANCE + STATS ── */}
      <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 80 }}>
        <div className={inner}>
          {/* Quality Assurance & Quality Standards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Left: Quality Assurance */}
            <div>
              <div style={{ width: 64, height: 64, borderRadius: 12, background: "rgba(255,68,68,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 800, marginBottom: 16 }}>
                {section2a?.title || "Quality Assurance"}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.8 }}>
                {section2a?.body || "We maintain ISO-compliant quality management systems and have achieved zero safety incidents across all our projects."}
              </p>
            </div>

            {/* Right: Quality Standards with red line */}
            <div style={{ background: "rgba(19,26,76,0.5)", borderRadius: 16, padding: 40, border: "1px solid rgba(255,68,68,0.2)", position: "relative" }}>
              {/* Small red line at top center */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 60, height: 3, background: "#FF4444", borderRadius: "0 0 2px 2px" }} />
              
              <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 24 }}>
                {section2b?.title || "Quality Standards"}
              </h3>
              
              {/* List with checkmarks */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {section2b?.items && section2b.items.length > 0 ? section2b.items.map((item: Item, i: number) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="12" cy="12" r="10" stroke="#FF4444" strokeWidth="2" fill="none" />
                      <path d="M8 12l2 2 4-4" stroke="#FF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.6 }}>{item.title}</span>
                  </div>
                )) : null}
              </div>
            </div>
          </div>

          {/* Stats row with red borders */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {section2?.items && section2.items.length > 0 ? section2.items.map((item: Item, i: number) => (
              <div key={i} style={{ background: "rgba(19,26,76,0.6)", borderRadius: 16, padding: "clamp(24px, 5vw, 40px) 20px", textAlign: "center", border: "2px solid #FF4444", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ marginBottom: 16 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF4444" strokeWidth="2.5" style={{ margin: "0 auto" }}>
                    {i === 0 && <path d="M9 11l3 3L22 4" />}
                    {i === 1 && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></>}
                    {i === 2 && <circle cx="12" cy="12" r="10" />}
                    {i === 3 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                  </svg>
                </div>
                <div style={{ fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 800, color: "#fff", marginBottom: 8, lineHeight: 1 }}>{item.title}</div>
                <div style={{ fontSize: "clamp(9px, 1.5vw, 11px)", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.subtitle}</div>
              </div>
            )) : null}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 80 }}>
        <div className={`${inner} text-center`}>
          <h2 style={{ color: "#fff", fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 800, marginBottom: 8 }}>
            Core <span style={{ color: "#FF4444" }}>Values</span>
          </h2>
          {/* Small red line under title */}
          <div style={{ width: 80, height: 3, background: "#FF4444", margin: "0 auto 16px" }} />
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2vw, 15px)", maxWidth: 700, margin: "0 auto 56px", padding: "0 20px" }}>
            {section3?.body || "Non-negotiable principles governing every decision, conversation, and project execution."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {section3?.items && section3.items.length > 0 ? section3.items.map((item: Item, i: number) => (
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
            )) : null}
          </div>
        </div>
      </section>

      {/* ── ENGINEERING SERVICES ── */}
      <section style={{ background: "linear-gradient(276.49deg, #0A0E27 0%, #131A4C 53.92%)", paddingTop: 80, paddingBottom: 80 }}>
        <div className={`${inner} text-center`}>
          <h2 style={{ color: "#fff", fontSize: 48, fontWeight: 800, marginBottom: 8 }}>
            Engineering <span style={{ color: "#FF4444" }}>Services</span>
          </h2>
          {/* Small red line under title */}
          <div style={{ width: 80, height: 3, background: "#FF4444", margin: "0 auto 56px" }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section4?.items && section4.items.length > 0 ? section4.items.map((item: Item, i: number) => (
              <Link key={i} href="/services" style={{ borderRadius: 20, overflow: "hidden", display: "block", textDecoration: "none", position: "relative", height: 320 }} className="group">
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={item.image || "/okochris-images/Engineering-services/Img1.png"} alt={item.title} fill style={{ objectFit: "cover" }} className="group-hover:scale-105 transition duration-500" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,14,39,0.95) 0%, rgba(10,14,39,0.4) 100%)" }} />
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px", zIndex: 1 }}>
                  <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                </div>
              </Link>
            )) : null}
          </div>
        </div>
      </section>

      {/* ── OUR VISION ── */}
      <section style={{ background: "linear-gradient(270deg, #FF4444 0%, #E41F25 73.7%)", padding: "120px 0" }}>
        <div className={inner} style={{ maxWidth: 1228, padding: "0 120px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 style={{ color: "#fff", fontSize: 48, fontWeight: 800, marginBottom: 24 }}>
              {section5?.title || "Our Vision"}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.95)", fontSize: 18, lineHeight: 1.8, maxWidth: 900, margin: "0 auto" }}>
              {section5?.body || "To be the customer's delight, operating in a quality, profitable, and responsible manner."}
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR PARTNERS ── */}
      <section style={{ background: "#fff", paddingTop: 60, paddingBottom: 60 }}>
        <div style={{ maxWidth: 928, margin: "0 auto", padding: "0 20px" }}>
          <h3 style={{ color: "#0A0E27", fontSize: 20, fontWeight: 700, marginBottom: 40, textAlign: "center" }}>Our Partners</h3>
          
          {/* Scrolling container */}
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div className="partner-scroll" style={{ display: "flex", gap: 60, alignItems: "center" }}>
              {/* Duplicate the partners for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                [
                  { title: "Partner 1", image: "/okochris-images/partners/partner1.png" },
                  { title: "Partner 2", image: "/okochris-images/partners/partner2.png" },
                  { title: "Partner 3", image: "/okochris-images/partners/partner3.png" },
                  { title: "Partner 4", image: "/okochris-images/partners/partner4.png" }
                ].map((item, i: number) => (
                  <div key={`${setIndex}-${i}`} style={{ position: "relative", width: 140, height: 70, opacity: 0.6, flexShrink: 0 }} className="hover:opacity-100 transition-opacity">
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "contain" }} />
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .partner-scroll {
            animation: scroll 20s linear infinite;
          }

          .partner-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ── ENGINEERING KNOWLEDGE HUB (BLOG) ── */}
      <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 80 }}>
        <div className={inner}>
          <h2 style={{ color: "#fff", fontSize: 48, fontWeight: 800, marginBottom: 8, textAlign: "center" }}>
            Engineering <span style={{ color: "#FF4444" }}>Knowledge Hub</span>
          </h2>
          {/* Small red line under title */}
          <div style={{ width: 80, height: 3, background: "#FF4444", margin: "0 auto 56px" }} />
          
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.5)" }}>
              No blog posts available yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.slice(0, 3).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} style={{ background: "rgba(19,26,76,0.6)", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,68,68,0.2)", display: "block", textDecoration: "none" }} className="group hover:border-red-500/50 transition-all">
                  <div style={{ position: "relative", height: 240, width: "100%", borderRadius: "20px 20px 0 0", overflow: "hidden" }}>
                    <Image src={post.featuredMedia.url} alt={post.featuredMedia.alt || post.title} fill style={{ objectFit: "cover" }} className="group-hover:scale-105 transition duration-500" />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <span style={{ color: "#FF4444", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{post.category.name}</span>
                      <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>{post.stats.readingTime} min read</span>
                    </div>
                    <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 12, lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{post.excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "#FF4444", fontSize: 14, fontWeight: 600 }}>Read More</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#FF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── READY TO START CTA ── */}
      <section style={{ background: "linear-gradient(270deg, #FF4444 0%, #E41F25 73.7%)", padding: "120px 20px" }}>
        <div style={{ maxWidth: 928, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 800, marginBottom: 20 }}>{section6?.title || "Ready to Start?"}</h2>
          <p style={{ color: "rgba(255,255,255,0.95)", fontSize: "clamp(14px, 2vw, 16px)", marginBottom: 40, maxWidth: 700, margin: "0 auto 40px", lineHeight: 1.7 }}>
            {section6?.body || "Let's discuss how OKOCHRIS Engineering can deliver international-standard services for your industrial facility."}
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
