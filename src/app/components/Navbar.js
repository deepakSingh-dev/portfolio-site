"use client";
import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "connect", label: "Connect" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

const mono = { fontFamily: "'Courier New', Courier, monospace" };

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Desktop pill nav */}
      <nav
        style={{
          position: "fixed",
          top: "14px",
          left: "28px",
          right: "28px",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 18px",
          borderRadius: "50px",
          background: "rgba(14,14,16,0.82)",
          border: "0.5px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {/* Left: name + divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexShrink: 0 }}>
          <button
            onClick={() => scrollTo("hero")}
            style={{
              ...mono,
              color: "#c8b88a",
              fontSize: "13px",
              fontWeight: "bold",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              whiteSpace: "nowrap",
            }}
          >
            Deepak Singh
          </button>
          <div style={{ width: "0.5px", height: "16px", background: "rgba(255,255,255,0.15)" }} />
        </div>

        {/* Center: nav links (hidden on small screens) */}
        <ul
          style={{
            display: "flex",
            gap: "2px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            flexWrap: "nowrap",
          }}
          className="nav-links-desktop"
        >
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  ...mono,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "5px 11px",
                  borderRadius: "50px",
                  border: active === id
                    ? "0.5px solid rgba(94,196,160,0.22)"
                    : "0.5px solid transparent",
                  background: active === id ? "rgba(94,196,160,0.13)" : "transparent",
                  color: active === id ? "#5ec4a0" : "rgba(255,255,255,0.50)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: hire me + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              ...mono,
              fontSize: "12px",
              fontWeight: "bold",
              padding: "7px 18px",
              borderRadius: "50px",
              background: "#c8b88a",
              color: "#0e0e10",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Hire Me
          </button>
          {/* Hamburger for mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.7)",
              cursor: "pointer",
              fontSize: "18px",
              display: "none",
              padding: "4px",
            }}
            className="nav-hamburger"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: "28px",
            right: "28px",
            zIndex: 99,
            background: "rgba(14,14,16,0.96)",
            border: "0.5px solid rgba(255,255,255,0.10)",
            borderRadius: "10px",
            padding: "12px 0",
            backdropFilter: "blur(16px)",
          }}
        >
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => { scrollTo(id); setMenuOpen(false); }}
              style={{
                ...mono,
                display: "block",
                width: "100%",
                textAlign: "left",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "10px 20px",
                background: "none",
                border: "none",
                color: active === id ? "#5ec4a0" : "rgba(255,255,255,0.6)",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
