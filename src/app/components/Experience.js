import Timeline from "./Timeline";

const ITEMS = [
  {
    date: "Oct 2023 – Jul 2024",
    role: "Software Development Engineer",
    org: "Robotspace Robotics & Automation · Hyderabad, India",
    detail:
      "Architected a full-stack ERP system with no-code component dashboard for production monitoring, boosting operational efficiency by 5×. Built a real-time Redis monitoring platform for predictive scheduling and anomaly detection, cutting production downtime by 30%. Engineered navigation system and UI for an autonomous material-transport robot using Redis pub/sub and shell scripting. Deployed containerized microservices via Docker with Jenkins CI/CD pipelines, improving release efficiency by 15%.",
    badges: ["Redis", "Docker", "Jenkins", "Python", "CI/CD", "Shell", "Selenium"],
  },
  {
    date: "Jan 2023 – Sep 2023",
    role: "Associate Software Developer",
    org: "GKB Labs LLP · Hyderabad, India",
    detail:
      "Developed a CRM system using Laravel, PHP, and PostgreSQL automating 8 sales workflows — increasing team performance by 25% and data retrieval speed by 40%. Led CMS database schema design and Agile/Scrum feature delivery across 3 cross-functional sprints, improving user engagement by 30% and cutting operational costs by 20%.",
    badges: ["Laravel", "PHP", "PostgreSQL", "Agile", "Scrum"],
  },
];

export default function Experience() {
  return (
    <Timeline
      sectionId="experience"
      title="Experience"
      items={ITEMS}
      accentColor="#2d6a4f"
    />
  );
}
