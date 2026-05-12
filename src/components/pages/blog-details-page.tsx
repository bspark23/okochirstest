"use client";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/models/post";
import { ArrowLeft } from "lucide-react";

const inner = "max-w-[1440px] mx-auto px-5 md:px-[120px]";

export default function BlogDetailsPage({ post }: { post: Post }) {
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Draft";

  return (
    <div>
      <section style={{ background: "#fff", paddingTop: 32, paddingBottom: 72 }}>
        <div className={inner}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#3ab5e6", fontSize: 13, fontWeight: 600, marginBottom: 32, textDecoration: "none" }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Full width image */}
          <div className="h-[220px] sm:h-[320px] md:h-[480px]" style={{ borderRadius: 20, overflow: "hidden", position: "relative", marginBottom: 48 }}>
            <Image
              src={post.featuredMedia?.url || "/images/tarikmechnicalsolutions16.png"}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Centered title + meta */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h1 style={{ color: "#185E77", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, marginBottom: 8 }}>{post.title}</h1>
            {post.excerpt && (
              <p style={{ color: "#4a6070", fontSize: 13, marginBottom: 12 }}>{post.excerpt}</p>
            )}
            <span style={{ color: "#9ab0bc", fontSize: 12 }}>
              Published: {publishedDate}
            </span>
          </div>

          {/* Content */}
          <div
            className="blog-content"
            style={{ maxWidth: 800, margin: "0 auto", color: "#4a6070", fontSize: 14, lineHeight: 1.9, overflowWrap: "anywhere" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
      <style jsx>{`
        .blog-content :global(h1),
        .blog-content :global(h2),
        .blog-content :global(h3),
        .blog-content :global(h4),
        .blog-content :global(h5),
        .blog-content :global(h6) {
          color: #185e77;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }

        .blog-content :global(p) {
          margin-bottom: 1rem;
          line-height: 1.9;
        }

        .blog-content :global(a) {
          color: #3ab5e6;
          text-decoration: underline;
        }

        .blog-content :global(ul),
        .blog-content :global(ol) {
          margin: 0.75rem 0 1rem;
          padding-left: 1.25rem;
        }

        .blog-content :global(li) {
          margin-bottom: 0.4rem;
        }

        .blog-content :global(blockquote) {
          border-left: 3px solid #bbe3f2;
          padding-left: 0.9rem;
          color: #4a6070;
          margin: 1rem 0;
        }

        .blog-content :global(img) {
          width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 1rem 0;
        }

        .blog-content :global(pre) {
          overflow-x: auto;
          background: #f4f8fb;
          border-radius: 8px;
          padding: 0.75rem;
          margin: 1rem 0;
        }

        .blog-content :global(table) {
          width: 100%;
          border-collapse: collapse;
          display: block;
          overflow-x: auto;
        }

        .blog-content :global(th),
        .blog-content :global(td) {
          border: 1px solid #d7e5ec;
          padding: 0.55rem;
          text-align: left;
        }
      `}</style>
    </div>
  );
}
