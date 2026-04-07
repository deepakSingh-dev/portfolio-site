const mono = { fontFamily: "'Courier New', Courier, monospace" };
const serif = { fontFamily: "Georgia, serif" };

const GROUPS = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "SQL", "PHP"],
    chipClass: "chip-amber",
    chipStyle: {
      color: "#c8b88a",
      background: "rgba(200,184,138,0.08)",
      border: "0.5px solid rgba(200,184,138,0.22)",
    },
  },
  {
    label: "Frontend & Backend",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Redux", "GraphQL", "REST APIs", "Laravel"],
    chipClass: "chip-neutral",
    chipStyle: {
      color: "rgba(255,255,255,0.65)",
      background: "rgba(255,255,255,0.04)",
      border: "0.5px solid rgba(255,255,255,0.10)",
    },
  },
  {
    label: "AI & Machine Learning",
    skills: ["LangChain", "LLMs", "Agentic Workflows", "Hugging Face", "Prompt Engineering", "NLP", "TensorFlow", "PyTorch", "Scikit-learn", "LSTM", "XGBoost"],
    chipClass: "chip-teal",
    chipStyle: {
      color: "#5ec4a0",
      background: "rgba(94,196,160,0.07)",
      border: "0.5px solid rgba(94,196,160,0.20)",
    },
  },
  {
    label: "Data & Cloud Infrastructure",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Airflow", "Apache Spark", "AWS (EC2/S3/Lambda)", "GCP", "Docker", "Kubernetes", "Jenkins", "Terraform", "CI/CD", "Git"],
    chipClass: "chip-blue",
    chipStyle: {
      color: "#85b7eb",
      background: "rgba(133,183,235,0.07)",
      border: "0.5px solid rgba(133,183,235,0.20)",
    },
  },
  {
    label: "Methodology",
    skills: ["Agile / Scrum", "MCP", "Microservices", "System Design"],
    chipClass: "chip-neutral",
    chipStyle: {
      color: "rgba(255,255,255,0.65)",
      background: "rgba(255,255,255,0.04)",
      border: "0.5px solid rgba(255,255,255,0.10)",
    },
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "90px clamp(24px, 6vw, 100px)", position: "relative", zIndex: 1 }}
    >
      <h2
        style={{
          ...serif,
          fontSize: "32px",
          color: "rgba(255,255,255,0.85)",
          marginBottom: "48px",
        }}
      >
        Skills
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
        {GROUPS.map((group) => (
          <div key={group.label}>
            <p
              style={{
                ...mono,
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.28)",
                marginBottom: "14px",
              }}
            >
              {group.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={group.chipClass}
                  style={{
                    ...mono,
                    fontSize: "12px",
                    padding: "5px 13px",
                    borderRadius: "2px",
                    cursor: "default",
                    ...group.chipStyle,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
