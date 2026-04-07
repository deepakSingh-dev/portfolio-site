"use client";
import { useState } from "react";

const mono = { fontFamily: "'Courier New', Courier, monospace" };
const serif = { fontFamily: "Georgia, serif" };

const CARDS = [
  { label: "LinkedIn", sub: "linkedin.com/in/deepaksinghdev", href: "https://linkedin.com/in/deepaksinghdev" },
  { label: "GitHub", sub: "github.com/deepakSingh-dev", href: "https://github.com/deepakSingh-dev" },
  { label: "Email", sub: "singhdeepak2406@gmail.com", href: "mailto:singhdeepak2406@gmail.com" },
];

function Card({ label, sub, href, fullWidth }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith("mailto") || href.endsWith(".pdf") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 24px",
        borderRadius: "10px",
        border: hovered
          ? "0.5px solid rgba(94,196,160,0.4)"
          : "0.5px solid rgba(255,255,255,0.07)",
        background: hovered ? "rgba(94,196,160,0.04)" : "transparent",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.22s ease",
        textDecoration: "none",
        gridColumn: fullWidth ? "1 / -1" : undefined,
        cursor: "pointer",
      }}
    >
      <div>
        <div style={{ ...mono, fontSize: "13px", color: "rgba(255,255,255,0.8)", marginBottom: "4px" }}>
          {label}
        </div>
        <div style={{ ...mono, fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>
          {sub}
        </div>
      </div>
      <span
        style={{
          ...mono,
          fontSize: "18px",
          color: hovered ? "#5ec4a0" : "rgba(255,255,255,0.3)",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          transition: "all 0.22s ease",
        }}
      >
        {fullWidth ? "↓" : "→"}
      </span>
    </a>
  );
}

export default function Connect() {
  return (
    <section
      id="connect"
      style={{ padding: "90px clamp(24px, 6vw, 100px)", position: "relative", zIndex: 1 }}
    >
      <h2
        style={{
          ...serif,
          fontSize: "32px",
          color: "rgba(255,255,255,0.85)",
          marginBottom: "32px",
        }}
      >
        Connect
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
        }}
      >
        {CARDS.map((c) => (
          <Card key={c.label} {...c} />
        ))}
      </div>
    </section>
  );
}
