"use client";
import { useState } from "react";

const mono = { fontFamily: "'Courier New', Courier, monospace" };
const serif = { fontFamily: "Georgia, serif" };

const INFO = [
  { label: "Email", value: "singhdeepak2406@gmail.com", href: "mailto:singhdeepak2406@gmail.com" },
  { label: "Location", value: "Hoboken, NJ · USA", href: null },
  { label: "Web", value: "deepaksingh.me", href: "https://deepaksingh.me" },
];

const inputStyle = {
  ...mono,
  fontSize: "14px",
  width: "100%",
  padding: "10px 14px",
  background: "rgba(30,20,8,0.04)",
  border: "0.5px solid rgba(30,20,8,0.25)",
  borderRadius: "4px",
  color: "rgba(30,20,8,0.8)",
  outline: "none",
};

export default function Contact() {
  const [status, setStatus] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://getform.io/f/axowdrnb", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("Message sent successfully.");
        e.target.reset();
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
    }
  };

  const focusBorder = "0.5px solid rgba(45,106,79,0.4)";
  const normalBorder = "0.5px solid rgba(30,20,8,0.25)";

  return (
    <section
      id="contact"
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
        Contact
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Left: contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {INFO.map(({ label, value, href }) => (
            <div key={label}>
              <p
                style={{
                  ...mono,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "rgba(30,20,8,0.28)",
                  marginBottom: "5px",
                }}
              >
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  style={{
                    ...mono,
                    fontSize: "14px",
                    color: "#2d6a4f",
                    textDecoration: "none",
                  }}
                >
                  {value}
                </a>
              ) : (
                <span style={{ ...mono, fontSize: "14px", color: "#2d6a4f" }}>
                  {value}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Right: form */}
        <div
          style={{
            background: "rgba(255,255,255,0.6)",
            border: "0.5px solid rgba(30,20,8,0.22)",
            borderRadius: "10px",
            padding: "26px",
            backdropFilter: "blur(4px)",
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              style={{
                ...inputStyle,
                border: focusedField === "name" ? focusBorder : normalBorder,
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              style={{
                ...inputStyle,
                border: focusedField === "email" ? focusBorder : normalBorder,
              }}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              required
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              style={{
                ...inputStyle,
                resize: "vertical",
                border: focusedField === "message" ? focusBorder : normalBorder,
              }}
            />
            <button
              type="submit"
              style={{
                ...mono,
                fontSize: "14px",
                fontWeight: "bold",
                padding: "12px",
                borderRadius: "3px",
                background: "#2d6a4f",
                color: "#f5f0e8",
                border: "none",
                cursor: "pointer",
                width: "100%",
                transition: "opacity 0.2s",
              }}
            >
              Send Message
            </button>
            {status && (
              <p style={{ ...mono, fontSize: "13px", color: "rgba(30,20,8,0.45)", textAlign: "center" }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
