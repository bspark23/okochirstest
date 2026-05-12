"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useAppSelector } from "@/store/hooks";
import { useContent } from "@/hooks/use-content";
import { Section, Item } from "@/models/content";

const inner = "max-w-[1440px] mx-auto px-5 md:px-[120px]";

export default function PowerFlexPlanPage() {
  useContent();
  const { powerflex } = useAppSelector((state) => state.content.content.siteContent);
  const s1 = powerflex?.section1 as Section;
  const s2 = powerflex?.section2 as Section;
  const s3 = powerflex?.section3 as Section;
  const s4 = powerflex?.section4 as Section;
  const s5 = powerflex?.section5 as Section;
  const s6 = powerflex?.section6 as Section;
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{ background: "#fff", paddingTop: 72, paddingBottom: 0 }}>
        <div className={`${inner} text-center`}>
          <span style={{ display: "inline-block", background: "#BBE3F2", color: "#0D3644", fontSize: 13, fontWeight: 600, padding: "16px 32px", borderRadius: 100, border: "1px solid #BBE3F2", marginBottom: 20 }}>
            PowerFlex Plan
          </span>
          <h1 style={{ color: "#185E77", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, marginBottom: 14 }}>
            Flexible Payment Solution
          </h1>
          <p style={{ color: "#4a6070", fontSize: 13, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.8 }}>
            Own a quality soundproof generator without the burden of full upfront payment. Our PowerFlex Plan lets you pay in comfortable instalments while enjoying uninterrupted power.
          </p>
        </div>
        <div className={inner} style={{ paddingBottom: 48 }}>
          <div style={{ borderRadius: 20, overflow: "hidden", position: "relative", height: 380 }}>
            <Image src="/images/tarikmechnicalsolutions10.png" alt="PowerFlex Plan" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
          </div>
        </div>
      </section>

      {/* ── PLAN DETAILS ── */}
      <section style={{ background: "#EEF8FC", paddingTop: 72, paddingBottom: 72 }}>
        <div className={`${inner} text-center`}>
          <span style={{ display: "inline-block", background: "#BBE3F2", color: "#0D3644", fontSize: 13, fontWeight: 600, padding: "16px 32px", borderRadius: 100, border: "1px solid #BBE3F2", marginBottom: 20 }}>
            What is PowerFlex?
          </span>
          <h2 style={{ color: "#185E77", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>TMS PowerFlex Plan</h2>
          <p style={{ color: "#4a6070", fontSize: 13, maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.8 }}>
            The TMS PowerFlex Plan is an innovative customer financing model that bridges the affordability gap for quality power solutions. We understand that purchasing a generator can be expensive, so we've created a flexible payment system that makes reliable power accessible to everyone.
          </p>

          {/* Big white card */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "36px", textAlign: "left" }}>

            {/* Payment Options */}
            <h3 style={{ color: "#0D3644", fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Payment Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginBottom: 32 }}>
              {/* 6-Month Plan */}
              <div style={{ background: "#EEF8FC", borderRadius: 16, padding: "24px" }}>
                <h4 style={{ color: "#185E77", fontSize: 15, fontWeight: 700, marginBottom: 16 }}>6-Month Plan</h4>
                {[
                  { n: 1, text: "20-30% initial deposit" },
                  { n: 2, text: "6 monthly payments" },
                  { n: 3, text: "Ideal for smaller generators" },
                ].map((item) => (
                  <div key={item.n} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#FFD275", color: "#7a5200", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.n}</span>
                    <span style={{ color: "#4a6070", fontSize: 13 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              {/* 12-Month Plan */}
              <div style={{ background: "#EEF8FC", borderRadius: 16, padding: "24px" }}>
                <h4 style={{ color: "#185E77", fontSize: 15, fontWeight: 700, marginBottom: 16 }}>12-Month Plan</h4>
                {[
                  { n: 1, text: "20-30% initial deposit" },
                  { n: 2, text: "12 smaller monthly payments" },
                  { n: 3, text: "Perfect for larger capacity units" },
                ].map((item) => (
                  <div key={item.n} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#FFD275", color: "#7a5200", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.n}</span>
                    <span style={{ color: "#4a6070", fontSize: 13 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Requirements */}
            <h3 style={{ color: "#0D3644", fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Application Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Odd numbered */}
              <div style={{ background: "#EEF8FC", borderRadius: 16, padding: "24px" }}>
                {[
                  { n: 1, text: "Valid government-issued ID (National ID, Driver's License, or International Passport)" },
                  { n: 3, text: "Guarantor information (for amounts above ₦500,000)" },
                  { n: 5, text: "Initial deposit of 20-30% of generator cost" },
                ].map((item) => (
                  <div key={item.n} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                    <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#FFD275", color: "#7a5200", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{item.n}</span>
                    <span style={{ color: "#4a6070", fontSize: 13, lineHeight: 1.6 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              {/* Even numbered */}
              <div style={{ background: "#EEF8FC", borderRadius: 16, padding: "24px" }}>
                {[
                  { n: 2, text: "Proof of residence or workplace" },
                  { n: 4, text: "Active bank account for payment processing" },
                  { n: 6, text: "Signed PowerFlex agreement form" },
                ].map((item) => (
                  <div key={item.n} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                    <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#FFD275", color: "#7a5200", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{item.n}</span>
                    <span style={{ color: "#4a6070", fontSize: 13, lineHeight: 1.6 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "#fff", paddingTop: 72, paddingBottom: 72 }}>
        <div className={`${inner} text-center`}>
          <span style={{ display: "inline-block", background: "#BBE3F2", color: "#0D3644", fontSize: 13, fontWeight: 600, padding: "16px 32px", borderRadius: 100, border: "1px solid #BBE3F2", marginBottom: 20 }}>
            How PowerFlex Works
          </span>
          <p style={{ color: "#4a6070", fontSize: 13, maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.8 }}>
            Six simple steps to owning your generator with flexible payments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 32 }}>
            {[
              { n: 1, title: "Apply Online or In-Store", body: "Fill out a simple application form online through our website or visit our office in Port Harcourt." },
              { n: 2, title: "Select Payment Term", body: "Choose between 6-month or 12-month instalment plans based on your financial comfort." },
              { n: 3, title: "Make Initial Deposit", body: "Pay 20-30% as initial down payment to secure your generator." },
              { n: 4, title: "Credit Verification", body: "Quick verification through ID, guarantor, or workplace confirmation for your security." },
              { n: 5, title: "Receive Your Generator", body: "Get your generator delivered and installed at your location with full technical support." },
              { n: 6, title: "Easy Monthly Payments", body: "Make convenient monthly payments via bank transfer, POS, or USSD with online tracking." },
            ].map((step) => (
              <div key={step.n} style={{ background: "#0D3644", borderRadius: 24, padding: 32, textAlign: "left", border: "1px solid #0D3644" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "#FFF8EB", color: "#7A5200", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  {step.n}
                </div>
                <h3 style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 1.7, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section style={{ background: "#fff", paddingTop: 72, paddingBottom: 72 }}>
        <div className={`${inner} text-center`}>
          <span style={{ display: "inline-block", background: "#BBE3F2", color: "#0D3644", fontSize: 13, fontWeight: 600, padding: "16px 32px", borderRadius: 100, border: "1px solid #BBE3F2", marginBottom: 20 }}>
            PowerFlex Benefits
          </span>
          <p style={{ color: "#4a6070", fontSize: 13, maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.8 }}>
            Why thousands of Nigerians choose TMS PowerFlex for their power solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 32 }}>
            {[
              { n: 1, title: "Flexible Payment Terms", body: "Choose 6 or 12-month instalment plans that fit your budget without financial strain." },
              { n: 2, title: "No Hidden Charges", body: "Transparent pricing with no surprise fees. Know exactly what you're paying from day one." },
              { n: 3, title: "Quick Approval", body: "Fast application processing with approval typically within 24-48 hours." },
              { n: 4, title: "Online Dashboard", body: "Track your payments, view balance, and receive reminders through your personal dashboard." },
              { n: 5, title: "Customer Support", body: "Dedicated support team to assist you throughout your payment journey." },
              { n: 6, title: "Ownership Guarantee", body: "Full ownership transfers to you upon completion of all instalment payments." },
            ].map((b) => (
              <div key={b.n} style={{ background: "#EEF8FC", borderRadius: 24, padding: 32, textAlign: "left", border: "1px solid #d6eef7" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "#DDF1F8", color: "#03668F", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  {b.n}
                </div>
                <h3 style={{ color: "#0D3644", fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ color: "#4a6070", fontSize: 12, lineHeight: 1.7, margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#0D3644", paddingTop: 72, paddingBottom: 72 }}>
        <div className={`${inner} text-center`}>
          <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>{s5?.title || 'PowerFlex Success'}</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.8 }}>
            {s5?.body}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {s5?.items?.map((item: Item, i: number) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: "32px 24px", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div style={{ color: "#fff", fontSize: 40, fontWeight: 800, marginBottom: 8 }}>{item.title}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#EEF8FC", paddingTop: 120, paddingBottom: 120 }}>
        <div className={`${inner} text-center`}>
          <h2 style={{ color: "#185E77", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Ready to Power Your Space?</h2>
          <p style={{ color: "#4a6070", fontSize: 13, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.8 }}>
            Get in touch with us today and let us find the right power solution for you.
          </p>
          <Link href="/contact"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#185E77", color: "#fff", padding: "16px 32px", borderRadius: 100, fontFamily: "'Clash Display Variable', sans-serif", fontWeight: 500, fontSize: 20, letterSpacing: "0.0125em", textTransform: "capitalize", width: 265, height: 48 }}
            className="hover:opacity-85 transition-opacity">
            Contact Us Today →
          </Link>
        </div>
      </section>

    </div>
  );
}
