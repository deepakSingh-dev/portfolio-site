# Portfolio Site - CLAUDE.md

## Project
Personal portfolio for **Deepak Singh** — single-page Next.js app targeting software engineering internship roles.

## Stack
- **Framework:** Next.js 15.3.1 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS v4
- **Animation:** Framer Motion 12
- **Icons:** react-icons v5
- **Scroll:** react-scroll
- **Timeline:** react-vertical-timeline-component
- **Form backend:** getform.io
- **Work section:** GitHub API (unauthenticated, username: `deepakSingh-dev`)

## Project Structure
```
src/app/
  page.js              # Root page — composes all sections
  layout.js            # Root layout (Geist fonts)
  globals.css          # Global styles
  hoc.js               # SectionWrapper HOC
  utils/motion.js      # Shared Framer Motion variants
  data/
    constants.js       # Experience & education data
    data.js
  components/
    Navbar.js          # Fixed top nav + slide-out social icons + hamburger
    Home.js            # Hero section
    About.js           # About me card
    Experience.js      # Vertical timeline (data from constants.js)
    Skills.js          # Skill grid by category
    Work.js            # Live GitHub repos
    Contact.js         # Contact form → getform.io
public/
  background.png, me.png, logo.png
  stevens.jpeg, worldQuant.jpeg, robotspace.png, gkb.png, jntu.jpeg
  resume.pdf
```

## Color Palette
- Background: `#0a192f`
- Primary accent: `#52e0ff`
- Secondary text: `#b0eaff`
- Card/surface: `#112240`, `#1d1836`
- Pink accent (borders/buttons): `pink-600`

## Known Issues
- RobotSpace & GKB Labs `points` arrays in `constants.js` are empty/commented out
- C++ uses wrong icon (`FaJsSquare`) in `Skills.js:12`
- Apache Spark uses wrong icon (`SiApachekafka`) in `Skills.js:39`
- Next.js listed twice in Skills (Web & Front-End + Frameworks)
- `FaLinkedinIn` imported but unused in `Navbar.js`
- Framer Motion animation in `Experience.js` never triggers (missing `initial`/`animate` props)
- Mobile nav missing "Experience" link
- Fixed `px-56` padding throughout — not responsive on small screens
- GitHub API unauthenticated (60 req/hr rate limit)

## Dev Commands
```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint
```
