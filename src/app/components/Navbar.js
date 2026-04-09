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
          background: "rgba(245,240,232,0.92)",
          border: "0.5px solid rgba(30,20,8,0.25)",
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
              color: "#3b1f0a",
              fontSize: "14px",
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
          <div style={{ width: "0.5px", height: "16px", background: "rgba(30,20,8,0.15)" }} />
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
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "5px 11px",
                  borderRadius: "50px",
                  border: active === id
                    ? "0.5px solid rgba(45,106,79,0.22)"
                    : "0.5px solid transparent",
                  background: active === id ? "rgba(45,106,79,0.13)" : "transparent",
                  color: active === id ? "#2d6a4f" : "rgba(30,20,8,0.50)",
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
              fontSize: "13px",
              fontWeight: "bold",
              padding: "7px 18px",
              borderRadius: "50px",
              background: "#3b1f0a",
              color: "#f5f0e8",
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
              color: "rgba(30,20,8,0.7)",
              cursor: "pointer",
              fontSize: "14px",
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
            background: "rgba(245,240,232,0.97)",
            border: "0.5px solid rgba(30,20,8,0.25)",
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
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "10px 20px",
                background: "none",
                border: "none",
                color: active === id ? "#2d6a4f" : "rgba(30,20,8,0.6)",
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
