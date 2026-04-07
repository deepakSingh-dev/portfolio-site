import Timeline from "./Timeline";

const ITEMS = [
  {
    date: "Sep 2024 – May 2026",
    role: "M.S. Information Systems",
    org: "Stevens Institute of Technology · Hoboken, NJ",
    detail:
      "AI for Software Engineering · Management of AI Technologies · Agile Methods for Software Development · Project Management · Data Analytics and Machine Learning · Big Data Management · Cyber Security Principles · Financial Decision Making · IT Strategies · Digital Innovation · Process Innovation and Management",
    badges: ["AI/ML", "Big Data", "Cyber Security", "Agile", "Project Mgmt", "Financial Decision Making", "IT Strategy", "Digital Innovation"],
  },
  {
    date: "Aug 2018 – Dec 2022",
    role: "B.Tech. Computer Science",
    org: "Siddhartha Institute of Engineering & Technology · Hyderabad, India",
    detail:
      "Operating Systems · Data Structures and Algorithms · Artificial Intelligence · Computer Networks · Distributed Systems · Computer Architecture · SDLC · Software Testing · Agile and Scrum Methodologies · Multi-Threading · Cloud Computing",
    badges: ["DSA", "OS", "AI", "Networks", "Distributed Systems", "Cloud Computing", "Multi-Threading", "Software Testing"],
  },
];

export default function Education() {
  return (
    <Timeline
      sectionId="education"
      title="Education"
      items={ITEMS}
      accentColor="#c8b88a"
    />
  );
}
