"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPosts } from "@/store/slices/blog-slice";

const inner = "max-w-[1440px] mx-auto px-5 md:px-[120px]";

export default function BlogPage() {
  const dispatch = useAppDispatch();
  const { posts, isLoading } = useAppSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchPosts({ filters: {}, page: 1, limit: 20 }));
  }, [dispatch]);

  // Get featured and other posts from API
  const featuredPost = posts.find(post => post.isFeatured);
  const otherPosts = posts.filter(post => !post.isFeatured);

  // Format date helper
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

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
            <p style={{ color: "#FF4444", fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
              // ENGINEERING INSIGHTS
            </p>
            <h1 style={{ color: "#fff", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 8 }}>
              Engineering
            </h1>
            <h2 style={{ color: "#FF4444", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
              Knowledge Hub
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8 }}>
              Industry insights, technical deep-dives, and project updates from Nigeria's leading engineering firm.
            </p>
          </div>

        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {!isLoading && featuredPost && (
        <section style={{ background: "#0A0E27", paddingTop: 80, paddingBottom: 40 }}>
          <div className={inner}>
            <Link href={`/blog/${featuredPost.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(17,24,66,0.9)", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,68,68,0.12)", display: "flex", flexDirection: "column-reverse", minHeight: 400 }} className="md:flex-row hover:border-red-500/30 transition-all group">
                
                {/* Content - Left Side */}
                <div style={{ flex: 1, padding: "clamp(32px, 5vw, 48px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <div style={{ background: "#FF4444", color: "#fff", padding: "6px 14px", borderRadius: 6, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      FEATURED
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{featuredPost.stats.readingTime} min read</span>
                  </div>
                  
                  <h2 style={{ color: "#fff", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
                    {featuredPost.title}
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.7, marginBottom: 28 }}>
                    {featuredPost.excerpt}
                  </p>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                      <User size={16} />
                      <span>{featuredPost.author.name}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                      <Calendar size={16} />
                      <span>{formatDate(featuredPost.publishedAt || featuredPost.createdAt)}</span>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: 24 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FF4444", color: "#fff", padding: "12px 28px", borderRadius: 100, fontSize: 14, fontWeight: 600 }}>
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Image - Right Side */}
                <div style={{ flex: "0 0 auto", position: "relative", height: 350, width: "100%" }} className="md:w-[45%] md:h-auto">
                  <Image
                    src={featuredPost.featuredMedia.url}
                    alt={featuredPost.featuredMedia.alt || featuredPost.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── LATEST ARTICLES ── */}
      <section style={{ background: "#0A0E27", paddingTop: 40, paddingBottom: 80 }}>
        <div className={inner}>
          <h2 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, marginBottom: 40 }}>
            Latest Articles
          </h2>

          {isLoading ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.5)" }}>
              Loading posts...
            </div>
          ) : otherPosts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.5)" }}>
              No posts available yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "rgba(17,24,66,0.9)", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,68,68,0.12)", height: "100%" }} className="hover:border-red-500/30 transition-all group">
                    <div style={{ position: "relative", height: 200 }}>
                      <Image
                        src={post.featuredMedia.url}
                        alt={post.featuredMedia.alt || post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div style={{ padding: 24 }}>
                      <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 12, lineHeight: 1.4 }}>
                        {post.title}
                      </h3>
                      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                        {post.excerpt}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                          {formatDate(post.publishedAt || post.createdAt)}
                        </span>
                        <span style={{ color: "#FF4444", fontSize: 14, fontWeight: 600 }}>Read more →</span>
                      </div>
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
