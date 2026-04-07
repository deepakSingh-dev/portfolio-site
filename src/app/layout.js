import "./globals.css";

export const metadata = {
  title: "Deepak Singh | Software Engineer",
  description: "Software Engineer · AI/ML · Data Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
