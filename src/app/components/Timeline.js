"use client";
import { useState } from "react";

const mono = { fontFamily: "'Courier New', Courier, monospace" };
const serif = { fontFamily: "Georgia, serif" };

function TimelineItem({ date, role, org, detail, badges, accentColor, isLast }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "122px 20px 1fr",
        gap: "18px",
      }}
    >
      {/* Date */}
      <div
        style={{
          ...mono,
          textAlign: "right",
          fontSize: "14px",
          color: "rgba(30,20,8,0.30)",
          lineHeight: 1.5,
          paddingTop: "1px",
        }}
      >
        {date}
      </div>

      {/* Spine: dot + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: accentColor,
            flexShrink: 0,
            marginTop: "3px",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            transform: hovered ? "scale(1.4)" : "scale(1)",
            boxShadow: hovered ? `0 0 8px ${accentColor}` : "none",
          }}
        />
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: "0.5px",
              background: "rgba(30,20,8,0.22)",
              marginTop: "6px",
              minHeight: "40px",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        style={{
          paddingBottom: isLast ? "0" : "40px",
          transform: hovered ? "translateX(3px)" : "translateX(0)",
          transition: "transform 0.2s ease",
        }}
      >
        <div
          style={{
            ...serif,
            fontSize: "14px",
            fontWeight: "bold",
            color: "rgba(30,20,8,0.88)",
            marginBottom: "3px",
          }}
        >
          {role}
        </div>
        <div
          style={{
            ...mono,
            fontSize: "13px",
            color: accentColor,
            marginBottom: "12px",
          }}
        >
          {org}
        </div>
        <p
          style={{
            ...mono,
            fontSize: "13px",
            color: "rgba(30,20,8,0.45)",
            lineHeight: 1.75,
            marginBottom: "14px",
          }}
        >
          {detail}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {badges.map((badge) => (
            <span
              key={badge}
              style={{
                ...mono,
                fontSize: "14px",
                padding: "3px 10px",
                borderRadius: "2px",
                border: `0.5px solid ${accentColor}55`,
                color: accentColor,
                background: `${accentColor}12`,
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Timeline({ items, accentColor, sectionId, title }) {
  return (
    <section
      id={sectionId}
      style={{ padding: "90px clamp(24px, 6vw, 100px)", position: "relative", zIndex: 1 }}
    >
      <h2
        style={{
          ...serif,
          fontSize: "39px",
          color: "rgba(30,20,8,0.85)",
          marginBottom: "48px",
        }}
      >
        {title}
      </h2>

      <div>
        {items.map((item, i) => (
          <TimelineItem
            key={i}
            {...item}
            accentColor={accentColor}
            isLast={i === items.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
