const About = () => {
  return (
    <div name="about" className="py-46 px-56 bg-[#0a192f] flex justify-center items-center">
      <div
        className="p-8 bg-[#0a192f] rounded-lg border-4 border-transparent bg-clip-padding"
        style={{
          borderImage: "linear-gradient(to right, #52e0ff, #b0eaff) 1",
          boxShadow:
            "0 10px 20px rgba(0, 0, 0, 0.8), 0 6px 6px rgba(0, 0, 0, 0.6)", // Added 3D shadow effect
        }}
      >
        <h1
          className="text-4xl font-bold mb-4 text-center"
          style={{
            color: "#52e0ff",
            textShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
          }}
        >
          About Me
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{
            color: "#b0eaff",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            lineHeight: "1.6",
            textShadow: "0 0 6px rgba(0, 255, 255, 0.6)",
          }}
        >
          <span className="font-semibold" style={{ color: "#52e0ff" }}>
            * Computer Science + Financial Engineering + Information Systems
            (School of Business) *
          </span>
          <br />
          <br />
          Software Engineering Intern | Data Analyst Intern | Quantitative
          Analyst Intern | Machine Learning Intern | Full-Stack Developer
          Intern | Backend Developer Intern | Financial Data Analyst | FinTech
          Intern | Risk Analyst Intern | Business Intelligence Intern | Data
          Science Intern | Cloud/DevOps Intern | Product Analyst Intern |
          Portfolio Analyst Intern | Technology Analyst Intern | Quant
          Developer Intern.
          <br />
          <br />
          🚀 I’m a super motivated and tech-savvy individual who loves building
          awesome software that makes a real difference. A full-stack developer
          who’s always on the lookout for ways to improve systems, make user
          experiences better, and deliver value through code.
          <br />
          <br />
          💼 I’ve worked as a Software Developer at{" "}
          <span className="font-semibold" style={{ color: "#52e0ff" }}>
            Robotspace Robotics
          </span>{" "}
          and{" "}
          <span className="font-semibold" style={{ color: "#52e0ff" }}>
            GKB Labs
          </span>
          , where I got to build scalable and efficient software in different
          areas.
          <br />
          <br />
          🎓 I’m currently studying for two Master’s degrees: one in
          Information Technology at{" "}
          <span className="font-semibold" style={{ color: "#52e0ff" }}>
            Stevens Institute of Technology
          </span>{" "}
          and another in Financial Engineering from{" "}
          <span className="font-semibold" style={{ color: "#52e0ff" }}>
            WorldQuant University
          </span>
          . I started with a Bachelor’s in Computer Science, which gave me a
          solid foundation in algorithms, systems, and software design.
          <br />
          <br />
          🛠️ I’m proficient in{" "}
          <span className="font-semibold" style={{ color: "#52e0ff" }}>
            Python, Java, React.js, Node.js, MongoDB, SQL, AWS
          </span>
          , and more. I’m excited about the opportunity to join a Software
          Developer Intern role where I can learn, grow, and contribute to
          real-world projects with a great team.
          <br />
          <br />
          Ready to bring energy, fresh perspective, and a strong technical
          foundation to a Software Developer Internship that challenges me to
          grow.
        </p>
      </div>
    </div>
  );
};

export default About;

