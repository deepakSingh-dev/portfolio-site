import Timeline from "./Timeline";

const ITEMS = [
  {
    date: "Sep 2025 – May 2026",
    role: "Vice President",
    org: "Stevens Graduate Technical Association · Hoboken, NJ",
    detail:
      "Organized hackathons, technical workshops, and speaker sessions per semester. Coordinated cross-disciplinary events connecting graduate students with industry professionals.",
    badges: ["Hackathons", "Workshops", "Speaker Sessions"],
  },
  {
    date: "Jan 2025 – May 2025",
    role: "Volunteer",
    org: "Product Management Club · Hoboken, NJ",
    detail:
      "Coordinated 4+ club events per semester on product strategy, roadmap planning, and cross-functional collaboration for 50+ members.",
    badges: ["Product Strategy", "Roadmap Planning", "50+ Members"],
  },
];

export default function Leadership() {
  return (
    <Timeline
      sectionId="leadership"
      title="Leadership"
      items={ITEMS}
      accentColor="#2d6a4f"
    />
  );
}
