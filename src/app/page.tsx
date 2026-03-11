"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { icon: "🌐", title: "Web Development", tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"] },
  { icon: "💻", title: "Programming", tags: ["Python", "C", "Logic Building", "Algorithms"] },
  { icon: "🎨", title: "Design & Tools", tags: ["Figma", "Canva", "VS Code", "Git"] },
  { icon: "☁️", title: "Deployment", tags: ["Netlify", "GitHub", "Domain Setup"] },
];

const projects = [
  {
    num: "01",
    tags: "HTML · CSS · JS",
    title: "Personal Portfolio Website",
    desc: "This very site — a dark-themed personal portfolio built with Next.js and Tailwind CSS. Hosted on Netlify with a custom domain.",
  },
  {
    num: "02",
    tags: "JavaScript",
    title: "Add Your Project Here",
    desc: "Describe your project — what it does, what technologies you used, and what you learned building it.",
  },
  {
    num: "03",
    tags: "Python",
    title: "Add Your Project Here",
    desc: "Describe your project — what it does, what technologies you used, and what you learned building it.",
  },
];

const certs = [
  { name: "Add Your Certification", issuer: "e.g. Coursera, Google, freeCodeCamp", year: "2024" },
  { name: "Add Your Certification", issuer: "e.g. Udemy, Meta, Microsoft", year: "2024" },
  { name: "Add Your Certification", issuer: "e.g. LinkedIn Learning, AWS", year: "2025" },
];

const tickerItems = [
  "Web Development", "HTML & CSS", "JavaScript", "Problem Solving",
  "UI Design", "Always Learning", "Web Development", "HTML & CSS",
  "JavaScript", "Problem Solving", "UI Design", "Always Learning",
];

function useCounter(target: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let current = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); return; }
      setCount(Math.floor(current));
    }, 40);
    return () => clearInterval(timer);
  }, [trigger, target]);
  return count;
}

export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const c1 = useCounter(5, statsVisible);
  const c2 = useCounter(3, statsVisible);
  const c3 = useCounter(2, statsVisible);
  const c4 = useCounter(10, statsVisible);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "'DM Sans', sans-serif" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.4rem 3rem",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(16px)",
        background: "rgba(8,8,8,0.85)"
      }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "var(--accent)" }}>FM</span>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {["about", "skills", "projects", "certifications"].map(s => (
            <a key={s} href={`#${s}`} style={{
              color: "var(--muted2)", textDecoration: "none",
              fontSize: "0.85rem", fontWeight: 500,
              letterSpacing: "0.05em", textTransform: "uppercase"
            }}>{s}</a>
          ))}
        </div>
        <a href="mailto:firoze747@gmail.com" style={{
          background: "var(--accent)", color: "#000",
          padding: "0.55rem 1.3rem", borderRadius: "100px",
          fontSize: "0.82rem", fontWeight: 700, textDecoration: "none"
        }}>Get in Touch</a>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "0 3rem 5rem",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(180px, 30vw, 400px)",
          fontWeight: 800, color: "rgba(255,255,255,0.018)",
          pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap"
        }}>FM</div>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(200,245,66,0.08)", border: "1px solid rgba(200,245,66,0.2)",
          color: "var(--accent)", padding: "0.35rem 0.9rem", borderRadius: "100px",
          fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.06em",
          textTransform: "uppercase", marginBottom: "1.8rem", width: "fit-content"
        }}>
          <span style={{ width: 6, height: 6, background: "var(--accent)", borderRadius: "50%", display: "inline-block" }} className="animate-pulse-dot" />
          Available for Opportunities
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(3.5rem, 9vw, 9rem)",
          fontWeight: 800, lineHeight: 0.92,
          letterSpacing: "-0.04em", marginBottom: "2rem"
        }}>
          Md Firoze<br />
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--muted)" }}>Mehedi</em><br />
          <span style={{ color: "var(--accent)" }}>—Student</span>
        </h1>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem" }}>
          <p style={{ maxWidth: 380, color: "var(--muted2)", fontSize: "1rem", lineHeight: 1.7 }}>
            A passionate <strong style={{ color: "var(--text)" }}>student & aspiring developer</strong> building real-world projects, learning modern technologies, and creating a digital future.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="#projects" style={{
              background: "var(--accent)", color: "#000",
              padding: "0.85rem 2rem", borderRadius: "100px",
              fontSize: "0.9rem", fontWeight: 700, textDecoration: "none"
            }}>View Projects</a>
            <a href="#about" style={{
              color: "var(--muted2)", border: "1px solid var(--border)",
              padding: "0.85rem 2rem", borderRadius: "100px",
              fontSize: "0.9rem", textDecoration: "none"
            }}>About Me</a>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "0.9rem 0", overflow: "hidden", background: "var(--bg2)" }}>
        <div className="animate-ticker" style={{ display: "flex", gap: "3rem", whiteSpace: "nowrap", width: "max-content" }}>
          {tickerItems.map((item, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.7rem", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>
              <span style={{ color: "var(--accent)" }}>✦</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: "6rem 3rem", background: "var(--bg2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em" }}>001</span>
          <div style={{ width: 40, height: 1, background: "var(--border)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>About Me</h2>
            <p style={{ color: "var(--muted2)", lineHeight: 1.8, marginBottom: "1.2rem" }}>Hi, I&apos;m <strong style={{ color: "var(--text)" }}>Md Firoze Mehedi</strong> — a motivated student with a passion for technology, web development, and building things that matter.</p>
            <p style={{ color: "var(--muted2)", lineHeight: 1.8, marginBottom: "1.2rem" }}>I enjoy turning ideas into reality through code. Whether it&apos;s building a clean website, solving a tricky problem, or learning a new framework — I&apos;m always up for the challenge.</p>
            <p style={{ color: "var(--muted2)", lineHeight: 1.8 }}>Currently focused on expanding my skills in <strong style={{ color: "var(--text)" }}>web development and programming</strong>, with the goal of building impactful digital products.</p>
            <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "2.5rem" }}>
              {[{ num: c1, label: "Projects Built" }, { num: c2, label: "Certifications" }, { num: c3, label: "Years Coding" }, { num: c4, label: "Skills Learned" }].map((s, i) => (
                <div key={i} style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: "0.3rem" }}>{s.num}+</div>
                  <div style={{ color: "var(--muted2)", fontSize: "0.85rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 24, aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "5rem", fontWeight: 800, color: "rgba(200,245,66,0.15)" }}>FM</span>
            <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "var(--accent)", color: "#000", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700 }}>📍 Bangladesh</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "6rem 3rem", background: "var(--bg)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em" }}>002</span>
          <div style={{ width: 40, height: 1, background: "var(--border)" }} />
        </div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>Skills & Tools</h2>
        <p style={{ color: "var(--muted2)", marginBottom: "2.5rem" }}>Technologies and tools I work with and continue to learn.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {skills.map((s, i) => (
            <div key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "2rem" }}>
              <div style={{ fontSize: "1.3rem", marginBottom: "1.2rem" }}>{s.icon}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "1rem" }}>{s.title}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {s.tags.map((tag, j) => (
                  <span key={j} style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--muted2)", padding: "0.3rem 0.8rem", borderRadius: "100px", fontSize: "0.78rem" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "6rem 3rem", background: "var(--bg2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em" }}>003</span>
          <div style={{ width: 40, height: 1, background: "var(--border)" }} />
        </div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>Projects</h2>
        <p style={{ color: "var(--muted2)", marginBottom: "2.5rem" }}>Things I&apos;ve built while learning and growing as a developer.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p, i) => (
            <div key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
              <div style={{ height: 200, background: "linear-gradient(135deg, var(--bg3), #1a1a1a)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "3rem", fontWeight: 800, color: "rgba(200,245,66,0.12)" }}>{p.num}</span>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.9rem" }}>{p.tags}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.6rem" }}>{p.title}</div>
                <div style={{ color: "var(--muted2)", fontSize: "0.88rem", lineHeight: 1.6 }}>{p.desc}</div>
                <a href="#" style={{ display: "inline-block", marginTop: "1.2rem", color: "var(--accent)", fontSize: "0.82rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase" }}>View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" style={{ padding: "6rem 3rem", background: "var(--bg)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em" }}>004</span>
          <div style={{ width: 40, height: 1, background: "var(--border)" }} />
        </div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>Certifications</h2>
        <p style={{ color: "var(--muted2)", marginBottom: "2.5rem" }}>Courses and certifications I&apos;ve completed.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {certs.map((c, i) => (
            <div key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem 2rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ width: 48, height: 48, background: "rgba(200,245,66,0.06)", border: "1px solid rgba(200,245,66,0.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>🏅</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "0.2rem" }}>{c.name}</div>
                <div style={{ color: "var(--muted2)", fontSize: "0.85rem" }}>{c.issuer}</div>
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)" }}>{c.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <div style={{ background: "var(--bg2)", padding: "6rem 3rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "1rem" }}>
          Let&apos;s <span style={{ color: "var(--accent)" }}>Connect</span>
        </h2>
        <p style={{ color: "var(--muted2)", maxWidth: 420, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>Open to collaborations, internships, and new opportunities. Feel free to reach out!</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:firoze747@gmail.com" style={{ background: "var(--accent)", color: "#000", padding: "0.85rem 2rem", borderRadius: "100px", fontWeight: 700, textDecoration: "none" }}>✉ Send Email</a>
          <a href="https://github.com/firoze747" target="_blank" style={{ color: "var(--muted2)", border: "1px solid var(--border)", padding: "0.85rem 2rem", borderRadius: "100px", textDecoration: "none" }}>GitHub</a>
          <a href="https://linkedin.com" target="_blank" style={{ color: "var(--muted2)", border: "1px solid var(--border)", padding: "0.85rem 2rem", borderRadius: "100px", textDecoration: "none" }}>LinkedIn</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "2rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "var(--accent)" }}>FM</span>
        <span style={{ color: "var(--muted)", fontSize: "0.82rem" }}>© 2026 Md Firoze Mehedi — firozemehedi.com</span>
      </footer>

    </div>
  );
}
