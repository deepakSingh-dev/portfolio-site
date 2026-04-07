"use client";
import { useState, useEffect } from "react";

const SUBTITLES = [
  "MS Information Systems @ Stevens",
  "Full-Stack · AI/ML · Data Engineering",
  "Building intelligent systems",
];

const mono = { fontFamily: "'Courier New', Courier, monospace" };
const serif = { fontFamily: "Georgia, serif" };

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const phrase = SUBTITLES[phraseIdx];

    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 1800);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      if (charIdx < phrase.length) {
        const t = setTimeout(() => {
          setDisplayed(phrase.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 42);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(phrase.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 22);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % SUBTITLES.length);
        }, 400);
        return () => clearTimeout(t);
      }
    }
  }, [charIdx, deleting, paused, phraseIdx]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 clamp(24px, 6vw, 100px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Vertical teal accent line — left */}
      <div
        style={{
          position: "absolute",
          left: "clamp(24px, 6vw, 100px)",
          top: "15%",
          bottom: "15%",
          width: "2px",
          background: "linear-gradient(to bottom, transparent, #5ec4a0 20%, #5ec4a0 80%, transparent)",
        }}
      />
      {/* Vertical teal accent line — right */}
      <div
        style={{
          position: "absolute",
          right: "clamp(24px, 6vw, 100px)",
          top: "15%",
          bottom: "15%",
          width: "2px",
          background: "linear-gradient(to bottom, transparent, #5ec4a0 20%, #5ec4a0 80%, transparent)",
        }}
      />

      <div style={{ textAlign: "center", maxWidth: "640px" }}>
        {/* Name */}
        <h1
          style={{
            ...serif,
            fontSize: "clamp(44px, 7vw, 58px)",
            fontStyle: "italic",
            color: "#c8b88a",
            lineHeight: 1.1,
            marginBottom: "28px",
          }}
        >
          Deepak
          <br />
          Singh
        </h1>

        {/* Tagline below name */}
        <p
          style={{
            ...mono,
            fontSize: "11px",
            color: "rgba(255,255,255,0.38)",
            letterSpacing: "0.06em",
            lineHeight: 1.7,
            marginBottom: "28px",
            maxWidth: "540px",
            margin: "0 auto 28px",
          }}
        >
          MSIS · MSFE · BSCS &nbsp;|&nbsp; Stevens Institute of Technology &nbsp;|&nbsp; Ex - Software Engineer @ Robotspace &nbsp;|&nbsp; AI Systems · RPA · Python, React, Java, C++, Cloud Services, Distributed Systems
        </p>

        {/* Typed subtitle */}
        <div
          style={{
            ...mono,
            fontSize: "15px",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "44px",
            minHeight: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>{displayed}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "16px",
              background: "#5ec4a0",
              marginLeft: "1px",
              animation: "cursor-blink 1s step-end infinite",
            }}
          />
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              ...mono,
              fontSize: "13px",
              fontWeight: "bold",
              padding: "12px 28px",
              borderRadius: "3px",
              background: "#c8b88a",
              color: "#0e0e10",
              border: "none",
              cursor: "pointer",
            }}
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...mono,
              fontSize: "13px",
              padding: "12px 28px",
              borderRadius: "3px",
              background: "transparent",
              color: "#c8b88a",
              border: "0.5px solid rgba(200,184,138,0.6)",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
