const mono = { fontFamily: "'Courier New', Courier, monospace" };

function getLastUpdated() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid rgba(30,20,8,0.22)",
        padding: "20px clamp(20px, 5vw, 80px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <span style={{ ...mono, fontSize: "14px", color: "rgba(30,20,8,0.3)" }}>
        deepaksingh.me · © 2026
      </span>
      <span style={{ ...mono, fontSize: "14px", color: "#2d6a4f" }}>
        Last Updated: {getLastUpdated()}
      </span>
      <span style={{ ...mono, fontSize: "14px", color: "rgba(30,20,8,0.3)" }}>
        Built with intention.
      </span>
    </footer>
  );
}
