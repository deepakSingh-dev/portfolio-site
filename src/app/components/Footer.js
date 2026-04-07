const mono = { fontFamily: "'Courier New', Courier, monospace" };

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
        padding: "20px clamp(20px, 5vw, 80px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <span style={{ ...mono, fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
        deepaksingh.me · © 2026
      </span>
      <span style={{ ...mono, fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
        Built with intention.
      </span>
    </footer>
  );
}
