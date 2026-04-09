"use client";
import { useState, useEffect } from "react";

const SUBTITLES = [
  "MS Information Systems @ Stevens",
  "Full-Stack · AI/ML · Data Engineering",
  "Building intelligent systems",
];

const SUMMARY =
  "Software engineer and Masters candidate at Stevens Institute of Technology specializing in AI/ML systems, full-stack development, and data engineering. I've shipped production applications spanning LLM-powered tools, fraud detection models, and robotics automation platforms. Passionate about building intelligent systems that solve tangible problems.";

const mono = { fontFamily: "'Courier New', Courier, monospace" };
const serif = { fontFamily: "Georgia, serif" };

export default function Hero() {
  // Typewriter — subtitle (loops)
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  // Typewriter — summary (one-time)
  const [sumIdx, setSumIdx] = useState(0);
  const [sumStarted, setSumStarted] = useState(false);
  const [sumDone, setSumDone] = useState(false);

  // Start summary typing after mount
  useEffect(() => {
    const t = setTimeout(() => setSumStarted(true), 700);
    return () => clearTimeout(t);
  }, []);

  // Summary typewriter tick
  useEffect(() => {
    if (!sumStarted || sumDone) return;
    if (sumIdx < SUMMARY.length) {
      const t = setTimeout(() => setSumIdx((i) => i + 1), 22);
      return () => clearTimeout(t);
    } else {
      setSumDone(true);
    }
  }, [sumIdx, sumStarted, sumDone]);

  // Subtitle typewriter tick
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
          background: "linear-gradient(to bottom, transparent, #c9a227 20%, #c9a227 80%, transparent)",
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
          background: "linear-gradient(to bottom, transparent, #c9a227 20%, #c9a227 80%, transparent)",
        }}
      />

      <div style={{ textAlign: "center", maxWidth: "900px", width: "100%" }}>
        {/* Name */}
        <h1
          style={{
            ...serif,
            fontSize: "clamp(53px, 8vw, 73px)",
            fontStyle: "italic",
            color: "#3b1f0a",
            lineHeight: 1.1,
            marginBottom: "20px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          Deepak Singh
        </h1>

        {/* Static tagline */}
        <p
          style={{
            ...mono,
            fontSize: "14px",
            color: "rgba(30,20,8,0.38)",
            letterSpacing: "0.06em",
            lineHeight: 1.7,
            maxWidth: "820px",
            margin: "0 auto 24px",
          }}
        >
          MSIS · MSFE · BSCS &nbsp;|&nbsp; Stevens Institute of Technology &nbsp;|&nbsp; Ex - Software Engineer @ Robotspace &nbsp;|&nbsp; AI Systems · RPA · Python, React, Java, C++, Cloud Services, Distributed Systems
        </p>

        {/* Typed subtitle (loops) */}
        <div
          style={{
            ...mono,
            fontSize: "14px",
            color: "rgba(30,20,8,0.65)",
            marginBottom: "28px",
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
              background: "#2d6a4f",
              marginLeft: "1px",
              animation: "cursor-blink 1s step-end infinite",
            }}
          />
        </div>

        {/* Summary — one-time typewriter */}
        <p
          style={{
            ...mono,
            fontSize: "13px",
            color: "rgba(30,20,8,0.45)",
            lineHeight: 1.85,
            maxWidth: "820px",
            margin: "0 auto 40px",
            minHeight: "88px",
            textAlign: "left",
          }}
        >
          {SUMMARY.slice(0, sumIdx)}
          {!sumDone && sumStarted && (
            <span
              style={{
                display: "inline-block",
                width: "1.5px",
                height: "13px",
                background: "rgba(45,106,79,0.7)",
                marginLeft: "1px",
                verticalAlign: "middle",
                animation: "cursor-blink 1s step-end infinite",
              }}
            />
          )}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              ...mono,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "12px 28px",
              borderRadius: "3px",
              background: "#3b1f0a",
              color: "#f5f0e8",
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
              fontSize: "14px",
              padding: "12px 28px",
              borderRadius: "3px",
              background: "transparent",
              color: "#3b1f0a",
              border: "0.5px solid rgba(59,31,10,0.6)",
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
