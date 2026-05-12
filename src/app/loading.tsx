"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "#0A0E27",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999
    }}>
      {/* Logo */}
      <div style={{
        position: "relative",
        width: 200,
        height: 200,
        marginBottom: 40
      }}>
        <Image
          src="/okochris-images/logo/OKOCHRIS-LOGO-white 1.png"
          alt="OKOCHRIS Engineering"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* Loading Spinner */}
      <div style={{
        width: 60,
        height: 60,
        border: "4px solid rgba(255,68,68,0.2)",
        borderTop: "4px solid #FF4444",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />

      <p style={{
        color: "rgba(255,255,255,0.7)",
        fontSize: 16,
        marginTop: 24,
        fontWeight: 600
      }}>
        Loading...
      </p>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
