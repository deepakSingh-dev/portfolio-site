"use client";
import { useState } from "react";

const mono = { fontFamily: "'Courier New', Courier, monospace" };
const serif = { fontFamily: "Georgia, serif" };

const PROJECTS = [
  {
    tag: "NLP · LangChain · HuggingFace · spaCy",
    title: "Financial Data Explorer & Market Intelligence Platform",
    description:
      "End-to-end NLP pipeline for real-time financial document ingestion, entity extraction, and semantic search. Combines LangChain orchestration with custom fine-tuned HuggingFace models for domain-specific financial intelligence.",
    metric: "10K+ queries/day · 94% precision · sub-second latency",
  },
  {
    tag: "XGBoost · LSTM · FastAPI · Docker",
    title: "Fraud Detection & Real-Time Stock Forecasting",
    description:
      "Dual-model system combining gradient boosting for fraud classification with LSTM-based time-series forecasting. Deployed as a containerized FastAPI service with real-time inference endpoints.",
    metric: "96% F1-score · RMSE 17.77 · MAPE 1.91%",
  },
  {
    tag: "Airflow · Spark · AWS S3 · PostgreSQL",
    title: "Automated ETL Data Pipeline with Orchestration",
    description:
      "Production-grade data pipeline orchestrated with Apache Airflow, processing distributed workloads via Spark. Integrates AWS S3 for staging and PostgreSQL for warehouse storage with automated lineage tracking.",
    metric: "70% reduction in manual data wrangling",
  },
  {
    tag: "Redis · Python · Docker · Shell",
    title: "Autonomous Robot Navigation System",
    description:
      "Real-time navigation and coordination system for autonomous material-transport robots using Redis pub/sub messaging. Built with containerized microservices and shell-scripted deployment pipelines for production robotics environments.",
    metric: "Real-time path planning at scale",
  },
  {
    tag: "Claude API · LangChain · Chrome Extension MV3",
    title: "AI Companion Form Filler — Chrome Extension",
    description:
      "Chrome Extension (MV3) with a content script that detects form fields on any webpage and uses Claude API to generate personalized fill suggestions by combining the user's profile data with real-time web research, displayed in a floating sidebar panel. LangChain prompt chains cross-reference user profile context with live search results for one-click DOM injection across job applications, scholarship forms, and university portals.",
    metric: "One-click DOM injection · Job apps · Scholarship forms",
  },
  {
    tag: "Next.js · TypeScript · LangChain · HuggingFace",
    title: "DuckBoard — Stevens Campus AI Dashboard",
    description:
      "Full-stack PWA aggregating real-time data from Canvas LMS (REST API), DuckLink campus events (RSS), and Workday student jobs (Puppeteer + Okta SSO) into a unified dashboard. Integrated a LangChain + HuggingFace (Mistral-7B) AI assistant for coursework Q&A and semantic lecture slide retrieval via vector search. Web Push notifications via Vercel Cron poll all three sources every 5 minutes.",
    metric: "3 data sources · 5-min polling · iOS & Android push",
  },
];

function ProjectCard({ tag, title, description, metric }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(45,106,79,0.03)" : "rgba(255,255,255,0.6)",
        borderRadius: "8px",
        border: hovered
          ? "0.5px solid rgba(45,106,79,0.22)"
          : "0.5px solid rgba(30,20,8,0.22)",
        backdropFilter: "blur(4px)",
        padding: "28px",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
    >
      <p
        style={{
          ...mono,
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#2d6a4f",
          marginBottom: "12px",
        }}
      >
        {tag}
      </p>
      <h3
        style={{
          ...serif,
          fontSize: "21px",
          color: "rgba(30,20,8,0.88)",
          marginBottom: "12px",
          lineHeight: 1.4,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          ...mono,
          fontSize: "13px",
          color: "rgba(30,20,8,0.45)",
          lineHeight: 1.75,
          marginBottom: "20px",
        }}
      >
        {description}
      </p>
      <p
        style={{
          ...mono,
          fontSize: "14px",
          color: "#3b1f0a",
          letterSpacing: "0.04em",
        }}
      >
        → {metric}
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "90px clamp(24px, 6vw, 100px)", position: "relative", zIndex: 1 }}
    >
      <h2
        style={{
          ...serif,
          fontSize: "39px",
          color: "rgba(30,20,8,0.85)",
          marginBottom: "36px",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "18px",
        }}
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
