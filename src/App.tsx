import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Smartphone,
  Sprout,
  Sun,
  Users,
  Utensils,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { profile, projects, skillGroups } from "./content";

const navItems = [
  ["Work", "work"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#101311" : "#f6f7f2");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* Theme still works without storage. */
    }
  }, [theme]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="wordmark"
            href="#home"
            aria-label="Md Ashraful Islam, home"
          >
            ashraful<span>.</span>
            <span className="wordmark-slash">/</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="icon-button theme-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="header-contact" href={`mailto:${profile.email}`}>
              Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <button
              className="icon-button menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav container"
            aria-label="Mobile navigation"
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenuOpen(false);
            }}
          >
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <section
          id="home"
          className="hero container"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">
              <span className="status-dot" /> ANDROID · BACKEND · DATA SCIENCE
            </p>
            <p className="hero-intro">Hello, I’m Md Ashraful Islam.</p>
            <h1 id="hero-title">
              Software engineer.
              <br />
              <span>Android at heart.</span>
            </h1>
            <p className="hero-description">
              I build Android applications with Kotlin and Jetpack Compose,
              connect them to thoughtful backend systems, and explore what comes
              next through Data Science.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a
                className="button button-text"
                href={`mailto:${profile.email}`}
              >
                Get in touch <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-note">
              <span className="tiny-line" /> Seeking junior software
              engineering, Android & backend roles
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Development focus: Android, backend systems, and Data Science"
          >
            <div className="visual-top">
              <span className="mono">ENGINEERING / FOCUS</span>
              <span className="mini-dots" aria-hidden="true">
                ● ● ●
              </span>
            </div>
            <div className="architecture">
              <div className="orbit orbit-one" aria-hidden="true" />
              <div className="orbit orbit-two" aria-hidden="true" />
              <div className="android-tile">
                <Smartphone size={44} strokeWidth={1.25} aria-hidden="true" />
                <span>Android</span>
                <small>Kotlin + Compose</small>
              </div>
              <div className="satellite satellite-backend">
                <Database size={19} aria-hidden="true" />
                <span>Backend</span>
              </div>
              <div className="satellite satellite-data">
                <Layers3 size={19} aria-hidden="true" />
                <span>Data Science</span>
              </div>
              <span className="connector connector-one" aria-hidden="true" />
              <span className="connector connector-two" aria-hidden="true" />
            </div>
            <div className="visual-bottom">
              <span>
                <span className="status-dot" /> From interface to API.
              </span>
              <Code2 size={18} aria-hidden="true" />
            </div>
          </div>
          <div className="hero-footer">
            <span>SOFTWARE ENGINEERING GRADUATE</span>
            <span>
              Currently pursuing MSc Data Science{" "}
              <ArrowDown size={14} aria-hidden="true" />
            </span>
          </div>
        </section>

        <section
          id="work"
          className="section container"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span>01</span> SELECTED WORK
              </p>
              <h2 id="work-title">
                Ideas, turned into applications<span className="accent">.</span>
              </h2>
            </div>
            <ExternalLink href={profile.github} className="text-link">
              All repositories
            </ExternalLink>
          </div>
          <article className="featured-project">
            <div className="featured-copy">
              <p className="project-category">
                <span className="project-number">01</span> FEATURED · BACHELOR’S
                THESIS
              </p>
              <div className="project-title-row">
                <span className="project-icon">
                  <Sprout size={23} aria-hidden="true" />
                </span>
                <h3>FarmGate</h3>
              </div>
              <p className="project-subtitle">
                Connecting local farmers.
                <br />
                Making pickup simpler.
              </p>
              <p>
                A farmer-to-consumer marketplace with an Android client and
                ASP.NET Core backend. Customers discover products and arrange
                pickups; farmers manage inventory, locations, and incoming
                orders.
              </p>
              <ul className="feature-list">
                <li>
                  <Check size={15} aria-hidden="true" /> Role-based customer,
                  farmer & admin workflows
                </li>
                <li>
                  <Check size={15} aria-hidden="true" /> Stock checks, order
                  tracking & pickup verification
                </li>
                <li>
                  <Check size={15} aria-hidden="true" /> REST API integration
                  with JWT authentication
                </li>
              </ul>
              <div className="tags">
                {[
                  "Kotlin",
                  "Jetpack Compose",
                  "ASP.NET Core",
                  "PostgreSQL",
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <ExternalLink
                  className="text-link"
                  href="https://github.com/Emon-Ashraf/FarmGate"
                >
                  Android source
                </ExternalLink>
                <ExternalLink
                  className="text-link muted-link"
                  href="https://github.com/Emon-Ashraf/FarmGate-Backend"
                >
                  Backend source
                </ExternalLink>
              </div>
              <p className="project-status">
                Academic MVP · Product payments take place offline at pickup.
              </p>
            </div>
            <figure className="farmgate-visual">
              <div className="screenshot-label">
                <span className="status-dot" /> ACTUAL APPLICATION SCREENS
              </div>
              <div className="phone-screens">
                <img
                  className="phone-screen screen-back"
                  loading="lazy"
                  decoding="async"
                  src="/images/farmgate-welcome.png"
                  alt="FarmGate welcome screen with create account and login actions"
                  width="450"
                  height="965"
                />
                <img
                  className="phone-screen screen-front"
                  loading="lazy"
                  decoding="async"
                  src="/images/farmgate-marketplace.png"
                  alt="FarmGate customer marketplace with city search and local products"
                  width="317"
                  height="1000"
                />
              </div>
              <figcaption>
                FarmGate / Android client <span>01 — 02</span>
              </figcaption>
            </figure>
          </article>
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.id}`}
                key={project.id}
              >
                <div className="project-placeholder">
                  <div className="placeholder-top">
                    <span className="mono">PROJECT / {project.number}</span>
                    {project.icon === "team" ? (
                      <Users size={20} aria-hidden="true" />
                    ) : (
                      <Utensils size={20} aria-hidden="true" />
                    )}
                  </div>
                  <div className="placeholder-center">
                    <Smartphone size={32} strokeWidth={1} aria-hidden="true" />
                    <span>{project.placeholder}</span>
                    <small>SCREENSHOT PLACEHOLDER · TO BE ADDED</small>
                  </div>
                </div>
                <div className="project-card-body">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <details>
                    <summary>
                      Project notes <ChevronDown size={16} aria-hidden="true" />
                    </summary>
                    <p>{project.details}</p>
                  </details>
                  <ExternalLink className="text-link" href={project.repo}>
                    View source on GitHub
                  </ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="section section-band"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div>
              <p className="eyebrow">
                <span>02</span> A LITTLE ABOUT ME
              </p>
              <h2 id="about-title">
                Curious about the whole system.
                <br />
                <span className="muted-heading">Focused on the details.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I’m Md Ashraful Islam, a Software Engineering graduate from
                National Research Tomsk State University (2022–2026, GPA
                4.78/5.00), currently pursuing an MSc in Data Science at NUST
                MISIS (2026–present).
              </p>
              <p>
                Android development is at the center of my work. My projects
                connect Kotlin and Jetpack Compose interfaces with APIs,
                authentication, and relational databases—giving me a practical
                view of how the pieces of an application fit together.
              </p>
              <p>
                I’m looking to contribute as a junior software engineer, Android
                developer, or backend developer, while continuing to deepen my
                engineering foundations and study of data.
              </p>
              <a className="text-link cv-link" href={profile.cv.href} download>
                {profile.cv.label}
                <ArrowDownToLine size={16} aria-hidden="true" />
              </a>
              {!profile.cv.ready && (
                <small className="cv-note">
                  Placeholder PDF · Full CV to be added.
                </small>
              )}
              <div className="languages" aria-label="Languages">
                <span>
                  <strong>Bengali</strong> · Native
                </span>
                <span>
                  <strong>English</strong> · C1
                </span>
                <span>
                  <strong>Russian</strong> · B2
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <SectionHeading
            number="03"
            label="TECHNICAL TOOLKIT"
            title="The tools behind the work."
          />
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-top">
                  <span className="mono">{group.number}</span>
                  {i === 0 ? (
                    <Smartphone size={21} aria-hidden="true" />
                  ) : i === 1 ? (
                    <Database size={21} aria-hidden="true" />
                  ) : (
                    <Code2 size={21} aria-hidden="true" />
                  )}
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="study-note">
            <GraduationCap size={22} aria-hidden="true" />
            <p>
              <strong>Learning further, through Data Science.</strong> Currently
              pursuing an MSc at NUST MISIS, alongside my software engineering
              background.
            </p>
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionHeading
            number="04"
            label="EXPERIENCE"
            title="Building a foundation in practice."
          />
          <div className="experience-list">
            <article className="experience-row">
              <div className="experience-type">
                <span className="status-dot" /> INTERNSHIP
              </div>
              <div>
                <h3>Android Development Intern</h3>
                <p className="organization">
                  Higher IT School · National Research Tomsk State University
                </p>
                <p>
                  Worked on Android application development using Kotlin,
                  Jetpack Compose, MVVM, REST APIs, and backend integration in
                  Tomsk, Russia.
                </p>
              </div>
              <span className="row-note">July 2025 – April 2026</span>
            </article>
            <article className="experience-row">
              <div className="experience-type">
                <span className="status-dot" /> FREELANCE
              </div>
              <div>
                <h3>Freelance Android Developer & STEM Tutor</h3>
                <p className="organization">Profi.ru · Remote</p>
                <p>
                  Android development and individual tutoring in programming,
                  mathematics, and physics.
                </p>
              </div>
              <span className="row-note">February 2024 – Present</span>
            </article>
          </div>
        </section>

        <section id="education" className="section section-band">
          <div className="container">
            <SectionHeading
              number="05"
              label="EDUCATION & ACHIEVEMENTS"
              title="A foundation. And a next chapter."
            />
            <div className="education-grid">
              <div className="degree-list">
                <article className="degree">
                  <span className="degree-marker" />
                  <div>
                    <p className="eyebrow">CURRENTLY PURSUING</p>
                    <h3>MSc in Data Science</h3>
                    <p>National University of Science and Technology MISIS</p>
                    <small>2026–Present · Moscow, Russia</small>
                  </div>
                  <GraduationCap size={23} aria-hidden="true" />
                </article>
                <article className="degree">
                  <span className="degree-marker secondary-marker" />
                  <div>
                    <p className="eyebrow">BACHELOR’S DEGREE</p>
                    <h3>BSc in Software Engineering</h3>
                    <p>National Research Tomsk State University</p>
                    <small>
                      2022–2026 · Russia
                      <br />
                      GPA: 4.78 / 5.00
                    </small>
                  </div>
                  <GraduationCap size={23} aria-hidden="true" />
                </article>
              </div>
              <div className="recognition">
                <p className="eyebrow">SCHOLARSHIPS & RECOGNITION</p>
                <h3>Beyond the classroom</h3>
                <div>
                  <span>Open Doors Scholarship · 2026</span>
                  <small>
                    Winner · Computer and Data Science track · Ranked 6th
                  </small>
                </div>
                <div>
                  <span>RUDN University Open Olympiad · 2026</span>
                  <small>Winner · Computer Science, Master’s track</small>
                </div>
                <div>
                  <span>Russian Government Scholarship · 2022</span>
                  <small>Recipient for undergraduate studies</small>
                </div>
              </div>
            </div>
            <div className="training-note">
              <p>
                <strong>GCI World 2026</strong>
                <br />
                Data Science and Machine Learning training
                <br />
                Matsuo-Iwasawa Laboratory, University of Tokyo
              </p>
              <small>September 2026 – Present</small>
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact-section">
          <p className="eyebrow">
            <span>06</span> NEXT CONVERSATION
          </p>
          <div className="contact-grid">
            <div>
              <h2>
                Let’s build
                <br />
                <span className="accent">something useful.</span>
              </h2>
              <p>
                Have a junior engineering opportunity or an Android project in
                mind? I’d be glad to hear from you.
              </p>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight size={25} aria-hidden="true" />
              </a>
              <div className="copy-row">
                <button className="copy-button" onClick={copyEmail}>
                  {copied ? (
                    <Check size={14} aria-hidden="true" />
                  ) : (
                    <Mail size={14} aria-hidden="true" />
                  )}
                  {copied ? "Email copied" : "Copy email address"}
                </button>
                <span role="status" className="copy-status">
                  {copied
                    ? "Copied to clipboard."
                    : copyError
                      ? "Please copy the email address above."
                      : ""}
                </span>
              </div>
            </div>
            <div className="contact-links">
              <ExternalLink href={profile.github}>
                <span>
                  <Github size={20} aria-hidden="true" />
                  <span>
                    GitHub<small>Explore the code</small>
                  </span>
                </span>
              </ExternalLink>
              <ExternalLink href={profile.linkedin}>
                <span>
                  <Linkedin size={20} aria-hidden="true" />
                  <span>
                    LinkedIn<small>Connect professionally</small>
                  </span>
                </span>
              </ExternalLink>
              <a href={profile.cv.href} download>
                <span>
                  <ArrowDownToLine size={20} aria-hidden="true" />
                  <span>
                    Curriculum vitae<small>Download PDF</small>
                  </span>
                </span>
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#home">
          ashraful<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Md Ashraful Islam</p>
        <a href="#home">
          Back to top{" "}
          <ArrowRight size={14} className="back-arrow" aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}

export default App;
