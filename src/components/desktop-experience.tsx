"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, ChevronRight,
  Code2, Coffee, Command, Cpu, Database, ExternalLink, Github, Linkedin,
  Rocket, Sparkles, Terminal, X
} from "lucide-react";
import { PixelAvatar } from "@/components/portfolio/pixel-avatar";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { WindowFrame } from "@/components/portfolio/window-frame";

type Project = {
  id: string;
  name: string;
  category: string;
  summary: string;
  challenge: string;
  build: string;
  impact: string;
  stack: string[];
  accent: string;
  featured?: boolean;
  href: string;
};

const projects: Project[] = [
  {
    id: "saas",
    name: "Multi-tenant SaaS Platform",
    category: "BACKEND ENGINEERING / WORK",
    summary: "A multi-tenant application architecture designed to keep customer data isolated while sharing one application codebase.",
    challenge: "Support multiple organizations without mixing tenant data or creating a separate application deployment for every customer.",
    build: "Implemented separate databases per tenant, dynamic Prisma clients, tenant middleware, relational data models, transactions and indexing.",
    impact: "Built and maintained backend workflows across a SaaS application with 1,000+ APIs delivered across 8 applications in the wider product environment.",
    stack: ["Node.js", "TypeScript", "Prisma", "MySQL", "Redis"],
    accent: "mint",
    featured: true,
    href: "https://github.com/Daveram1714"
  },
  {
    id: "hrms",
    name: "HRMS Workflow Engine",
    category: "AUTOMATION / WORK",
    summary: "Employee, attendance, leave and shift workflows with background processing for time-sensitive operations.",
    challenge: "Coordinate attendance and shift rules reliably, including calculations that should happen without a user keeping the app open.",
    build: "Worked on employee and attendance modules, Redis and BullMQ workers, delayed jobs, scheduled tasks and automatic clock-out calculations.",
    impact: "Contributed to a workflow spanning around 26 APIs and 25 database models.",
    stack: ["Node.js", "TypeScript", "Prisma", "Redis", "BullMQ"],
    accent: "lavender",
    featured: true,
    href: "https://github.com/Daveram1714"
  },
  {
    id: "weather",
    name: "Weather Now",
    category: "PERSONAL PROJECT / WEB APP",
    summary: "A focused weather interface that makes current conditions quick to scan.",
    challenge: "Keep the experience simple, responsive and easy to understand at a glance.",
    build: "Built the frontend with React and Tailwind CSS and connected it to a weather data API.",
    impact: "A compact project exploring responsive UI and API-driven frontend state.",
    stack: ["React", "Tailwind CSS", "JavaScript", "API"],
    accent: "peach",
    href: "https://github.com/Daveram1714/weather-now"
  }
];

const skillGroups = [
  { label: "FRONTEND", icon: Code2, skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"] },
  { label: "BACKEND", icon: Braces, skills: ["Node.js", "Express.js", "REST APIs", "Socket APIs", "BullMQ"] },
  { label: "DATA & SYSTEMS", icon: Database, skills: ["MySQL", "MongoDB", "Prisma", "Redis", "Docker", "PM2", "Nginx"] },
  { label: "AI WORKFLOW", icon: Cpu, skills: ["ChatGPT", "Gemini", "Claude", "Antigravity", "Ollama"] }
];

const timeline = [
  { period: "DEC 2024 — NOW", role: "Full Stack Developer", place: "Skyraan Technology", detail: "Building and maintaining production web applications across frontend, backend, database and deployment workflows." },
  { period: "JUL 2024 — AUG 2024", role: "Backend Development Intern", place: "NAF", detail: "Worked on a .NET backend project with layered architecture, SQL Server and scheduled reporting." },
  { period: "JAN 2024 — MAR 2024", role: "WordPress Developer Intern", place: "GAO", detail: "Gained practical experience building and updating web pages with WordPress." }
];

const processSteps = [
  { id: "01", title: "Understand", copy: "Start with the actual problem, users and constraints before choosing a tool.", note: "CLARITY BEFORE CODE", icon: Sparkles },
  { id: "02", title: "Structure", copy: "Shape the data, APIs and component boundaries so the solution can grow.", note: "MAKE IT MAINTAINABLE", icon: Braces },
  { id: "03", title: "Build", copy: "Turn the plan into accessible interfaces and dependable backend workflows.", note: "SMALL STEPS, REAL PROGRESS", icon: Code2 },
  { id: "04", title: "Ship & learn", copy: "Deploy, observe, debug and improve from real usage instead of assumptions.", note: "PRODUCTION IS THE PROOF", icon: Rocket }
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function BootScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <main className="boot-screen">
      <div className="boot-grid" />
      <motion.div className="boot-card" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <div className="boot-symbol">✳</div>
        <p className="boot-kicker">A PERSONAL DIGITAL SPACE</p>
        <h1>DAVERAM<span>.OS</span></h1>
        <p className="boot-copy">Loading curiosity, code &amp; caffeine…</p>
        <div className="boot-progress"><span /></div>
        <button className="enter-button" onClick={onEnter}>BOOT PORTFOLIO <ChevronRight size={15} /></button>
        <span className="boot-foot">PLAYER 01 · SOFTWARE ENGINEER · EST. 2026</span>
      </motion.div>
      <div className="boot-orbit orbit-one" /><div className="boot-orbit orbit-two" />
      <div className="boot-corner boot-corner-left">SYS.INIT / 001</div>
      <div className="boot-corner boot-corner-right">PRESS START ↗</div>
    </main>
  );
}

export default function DesktopExperience() {
  const [booted, setBooted] = useState(false);
  const [activeProcess, setActiveProcess] = useState("01");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [launchDialog, setLaunchDialog] = useState(false);
  const [launched, setLaunched] = useState(false);
  const [terminalCommand, setTerminalCommand] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "daveram@portfolio:~$ whoami",
    "Daveram A — Full Stack Developer",
    "Type 'help' to explore this machine."
  ]);
  const [clock, setClock] = useState("IND / IST");

  useEffect(() => {
    const updateClock = () => setClock(new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: true }).format(new Date()));
    updateClock();
    const interval = window.setInterval(updateClock, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const process = useMemo(
    () => processSteps.find((step) => step.id === activeProcess) ?? processSteps[0],
    [activeProcess]
  );

  const runTerminal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = terminalCommand.trim().toLowerCase();
    if (!value) return;
    const commands: Record<string, string> = {
      help: "available: about · skills · projects · experience · contact · clear",
      about: "A Full Stack Developer building production web apps with React, Node.js and TypeScript.",
      skills: "React · Next.js · TypeScript · Node.js · Express · Prisma · MySQL · MongoDB · Redis · Docker",
      projects: "3 featured case files are available in the Projects section.",
      experience: "Full Stack Developer @ Skyraan Technology — Dec 2024 to present.",
      contact: "LinkedIn: linkedin.com/in/daveram-a-a45176265 · GitHub: github.com/Daveram1714",
      clear: ""
    };
    setTerminalHistory((history) => value === "clear" ? [] : [...history, `daveram@portfolio:~$ ${value}`, commands[value] ?? `command not found: ${value}`]);
    setTerminalCommand("");
  };

  if (!booted) return <BootScreen onEnter={() => setBooted(true)} />;

  return (
    <main className="story-desktop">
      <div className="story-grain" />
      <header className="story-topbar">
        <a className="story-brand" href="#home"><span>✳</span> DAVERAM.OS <small>/ PORTFOLIO.EXE</small></a>
        <nav className="story-nav" aria-label="Main navigation">
          <a href="#about">ABOUT</a><a href="#journey">JOURNEY</a><a href="#projects">PROJECTS</a><a href="#contact">CONTACT</a>
        </nav>
        <div className="story-status"><i /> AVAILABLE FOR OPPORTUNITIES</div>
      </header>

      <section id="home" className="story-hero">
        <div className="hero-scanlines" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="pixel-label"><span /> SYSTEM ONLINE · PLAYER 01</div>
            <p className="hero-pretitle">HELLO, WORLD! I'M</p>
            <h1>Daveram<span>.</span><br /><em>Developer</em></h1>
            <p className="hero-description">I build digital things that solve real problems — from thoughtful interfaces to backend systems that do the heavy lifting.</p>
            <div className="hero-actions">
              <button className="pixel-button primary" onClick={() => scrollToSection("projects")}>EXPLORE MY WORK <ArrowUpRight size={15} /></button>
              <button className="pixel-button secondary" onClick={() => scrollToSection("about")}>MEET THE DEVELOPER <ArrowDown size={14} /></button>
            </div>
            <div className="hero-stackline"><span>FOCUS:</span> REACT / NODE.JS / TYPESCRIPT / DATABASES</div>
          </div>
          <div className="hero-character">
            <div className="character-orbit orbit-a" /><div className="character-orbit orbit-b" />
            <PixelAvatar />
            <div className="character-card"><span>PLAYER PROFILE</span><strong>DEV RAM</strong><small>CLASS: FULL STACK</small><small>STATUS: BUILDING...</small></div>
            <span className="hero-coordinate">11°00' N · 76°58' E</span>
          </div>
          <div className="hero-side-note">SCROLL TO START YOUR JOURNEY <ArrowDown size={13} /></div>
        </div>
        <div className="hero-bottom-strip"><span>✳ CURIOSITY</span><span>✳ ENGINEERING</span><span>✳ CONTINUOUS LEARNING</span><span>✳ GOOD COFFEE</span></div>
      </section>

      <section id="about" className="story-section about-section">
        <div className="story-container">
          <SectionHeading number="01" eyebrow="THE PERSON BEHIND THE PIXELS" title="A little about" accent="me." description="Not just the tools I use — the way I think, build and learn." />
          <div className="about-story-grid">
            <WindowFrame title="developer-profile.exe" index="PROFILE / 001" className="profile-window">
              <div className="profile-main"><PixelAvatar /><div><span className="profile-kicker">FULL STACK DEVELOPER</span><h3>Building for the<br /><em>real world.</em></h3><p>I'm a developer who enjoys taking an idea from a rough sketch to a working product. I move between frontend interfaces, backend services, databases and deployment.</p></div></div>
              <div className="profile-footer"><span><i /> SYSTEM PROFILE VERIFIED</span><span>COIMBATORE, INDIA</span></div>
            </WindowFrame>
            <div className="about-aside">
              <div className="about-quote">“Good software is not only code that works. It's a solution people can rely on.”</div>
              <p>I enjoy solving practical engineering problems: designing data models, building APIs, making async workflows dependable and polishing the UI that connects everything.</p>
              <p>Outside the feature itself, I like understanding why something works — and how to make it simpler, clearer and more maintainable.</p>
              <div className="stat-grid">
                <div><strong>1,000<span>+</span></strong><small>APIs ACROSS PROJECTS</small></div>
                <div><strong>08</strong><small>APPLICATIONS CONTRIBUTED TO</small></div>
                <div><strong>07</strong><small>APPLICATIONS DEPLOYED</small></div>
                <div><strong>01<span>+</span></strong><small>YEARS BUILDING SOFTWARE</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="story-section journey-section">
        <div className="story-container">
          <SectionHeading number="02" eyebrow="LEVEL UP / EXPERIENCE LOG" title="The development" accent="journey." description="Every project added a new skill, a new problem and a new reason to keep building." />
          <div className="journey-grid">
            <WindowFrame title="career-save-file.dat" index="3 ENTRIES" className="timeline-window">
              <div className="timeline-list">
                {timeline.map((item, index) => <article className="timeline-item" key={item.role}>
                  <span className="timeline-marker">{String(index + 1).padStart(2, "0")}</span>
                  <div><small>{item.period}</small><h3>{item.role}</h3><strong>{item.place}</strong><p>{item.detail}</p></div>
                  {index === 0 ? <span className="current-tag">CURRENT</span> : null}
                </article>)}
              </div>
            </WindowFrame>
            <div className="level-card">
              <div className="level-card-top"><span>PLAYER STATS</span><span>LVL. 02</span></div>
              <div className="level-avatar"><PixelAvatar /></div>
              <h3>DEV RAM</h3><p>SOFTWARE ENGINEER</p>
              <div className="xp-label"><span>EXPERIENCE POINTS</span><span>GROWING</span></div>
              <div className="xp-track"><span /></div>
              <div className="level-traits"><span>PROBLEM SOLVING</span><span>FULL STACK</span><span>BUILDER MINDSET</span></div>
              <div className="level-card-foot">NEXT LEVEL: ALWAYS LEARNING ↗</div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="story-section process-section">
        <div className="story-container">
          <SectionHeading number="03" eyebrow="HOW IDEAS BECOME SOFTWARE" title="My creative" accent="process." description="A repeatable loop — understand the problem, shape the solution, then make it real." />
          <div className="process-layout">
            <div className="process-tabs">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return <button key={step.id} className={activeProcess === step.id ? "process-tab active" : "process-tab"} onClick={() => setActiveProcess(step.id)}>
                  <span>{step.id}</span><Icon size={18} /><strong>{step.title}</strong><ArrowRight size={14} />
                </button>;
              })}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={process.id} className="process-detail" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                <span className="process-big-number">{process.id}</span>
                <span className="process-note">{process.note}</span>
                <h3>{process.title}<em>.</em></h3>
                <p>{process.copy}</p>
                <div className="process-progress"><span style={{ width: `${Number(process.id) * 25}%` }} /></div>
                <small>STEP {process.id} / 04</small>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="skills" className="story-section skills-section">
        <div className="story-container">
          <SectionHeading number="04" eyebrow="TOOLS IN THE INVENTORY" title="The developer" accent="toolbox." description="The technologies I use to move from interface to infrastructure." />
          <div className="skill-inventory">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return <motion.article className="skill-card" key={group.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }}>
                <div className="skill-card-head"><span>INVENTORY SLOT 0{index + 1}</span><Icon size={19} /></div>
                <h3>{group.label}</h3>
                <div className="skill-chips">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </motion.article>;
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="story-section projects-section">
        <div className="story-container">
          <SectionHeading number="05" eyebrow="SELECTED BUILDS / CASE FILES" title="Things I've" accent="built." description="A closer look at real application work and the engineering decisions behind it. Select a case file to inspect." />
          <div className="project-explorer">
            <div className="explorer-toolbar"><span><Folder size={14} /> / ROOT / PROJECTS</span><span>{projects.length} CASE FILES <i /></span></div>
            <div className="project-cards">
              {projects.map((project, index) => <motion.button type="button" className={`project-card ${project.accent}`} key={project.id} onClick={() => setSelectedProject(project)} whileHover={{ y: -7 }} whileTap={{ scale: 0.985 }}>
                <div className="project-card-top"><span>CASE FILE / 0{index + 1}</span><ArrowUpRight size={17} /></div>
                <div className="project-art"><div className="project-art-window"><span /><span /><span /><div>{project.id === "saas" ? <Database size={42} /> : project.id === "hrms" ? <Cpu size={42} /> : <Sparkles size={42} />}</div></div></div>
                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3><p>{project.summary}</p>
                <div className="project-card-bottom"><span>OPEN CASE FILE</span><ArrowRight size={15} /></div>
              </motion.button>)}
            </div>
          </div>
          <p className="project-disclaimer">Some case studies describe work completed as part of a team. Private production source code is not published here.</p>
        </div>
      </section>

      <section id="launch" className="story-section launch-section">
        <div className="story-container">
          <SectionHeading number="06" eyebrow="ONE MORE THING..." title="Ready to launch" accent="the portfolio?" description="You made it through the files. Want to open the final connection?" />
          <div className="launch-console">
            <div className="launch-screen">
              <div className="launch-screen-top"><span>PORTFOLIO.EXE</span><span>BUILD 2026.11</span></div>
              <div className="launch-screen-center"><div className="launch-logo">D<span>.</span></div><h3>THE NEXT LEVEL<br /><em>STARTS WITH A HELLO.</em></h3><p>CONNECTION REQUEST READY</p></div>
              <div className="launch-screen-bottom"><span>MEMORY CHECK: OK</span><span>ALL SYSTEMS NOMINAL</span></div>
            </div>
            <div className="launch-actions"><p>Do you want to establish a connection with this developer?</p><div><button className="pixel-button primary" onClick={() => { setLaunchDialog(true); setLaunched(false); }}>YES, LET'S GO <ChevronRight size={14} /></button><button className="pixel-button secondary" onClick={() => setLaunchDialog(true)}>MAYBE LATER</button></div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="story-section contact-section">
        <div className="story-container">
          <SectionHeading number="07" eyebrow="END OF LEVEL / START OF SOMETHING" title="Let's make something" accent="meaningful." description="Have an opportunity, an interesting problem or just want to connect? My inbox is open." />
          <div className="contact-layout">
            <WindowFrame title="connection-request.msg" index="ONLINE" className="contact-window">
              <div className="contact-window-content"><span className="contact-status"><i /> AVAILABLE FOR OPPORTUNITIES</span><h3>Have a good<br /><em>idea?</em></h3><p>I'm interested in building useful products, solving backend challenges and working with people who care about quality.</p>
                <a className="contact-email-link" href="https://www.linkedin.com/in/daveram-a-a45176265/" target="_blank" rel="noreferrer"><Linkedin size={16} /> CONNECT ON LINKEDIN <ArrowUpRight size={15} /></a>
                <a className="contact-email-link" href="https://github.com/Daveram1714" target="_blank" rel="noreferrer"><Github size={16} /> EXPLORE GITHUB <ArrowUpRight size={15} /></a>
              </div>
            </WindowFrame>
            <div className="contact-terminal">
              <div className="terminal-title"><Terminal size={14} /> daveram@portfolio:~ <span>● ● ●</span></div>
              <div className="terminal-history" aria-live="polite">{terminalHistory.map((line, index) => <p key={index}>{line}</p>)}</div>
              <form className="terminal-input-row" onSubmit={runTerminal}><span>➜</span><input value={terminalCommand} onChange={(event) => setTerminalCommand(event.target.value)} placeholder="type help and press enter..." aria-label="Terminal command" autoComplete="off" /><button type="submit">RUN</button></form>
              <div className="terminal-hint">TRY: help / about / skills / projects / experience / contact</div>
            </div>
          </div>
          <footer className="story-footer"><a href="#home">✳ DAVERAM.OS</a><span>DESIGNED WITH CURIOSITY · BUILT WITH CODE</span><a href="#home">BACK TO TOP ↑</a></footer>
        </div>
      </section>

      <nav className="story-taskbar" aria-label="Quick navigation">
        <button onClick={() => scrollToSection("home")}><Command size={15} /><span>START</span></button>
        <a href="#about">ABOUT.EXE</a><a href="#journey">JOURNEY.DAT</a><a href="#projects">PROJECTS</a><a href="#contact">CONTACT.MSG</a>
        <span className="taskbar-clock">● ONLINE <b>{clock}</b></span>
      </nav>

      <AnimatePresence>
        {selectedProject ? <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
          <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }}>
            <div className="story-window-bar"><span className="story-window-symbol">✳</span><span className="story-window-title">case-file / {selectedProject.id}.exe</span><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case file"><X size={16} /></button></div>
            <div className="project-modal-content"><span className="project-category">{selectedProject.category}</span><h2 id="project-modal-title">{selectedProject.name}</h2><p className="modal-summary">{selectedProject.summary}</p>
              <div className="case-study-grid"><div><small>THE CHALLENGE</small><p>{selectedProject.challenge}</p></div><div><small>WHAT I BUILT</small><p>{selectedProject.build}</p></div><div><small>OUTCOME / SCOPE</small><p>{selectedProject.impact}</p></div></div>
              <div className="project-tags">{selectedProject.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <a className="case-link" href={selectedProject.href} target="_blank" rel="noreferrer">VIEW GITHUB PROFILE <ExternalLink size={14} /></a>
            </div>
          </motion.div>
        </motion.div> : null}
        {launchDialog ? <motion.div className="launch-dialog-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.div className="launch-dialog" initial={{ scale: 0.9, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }}>
          <div className="launch-dialog-bar"><span>✳ SYSTEM MESSAGE</span><button onClick={() => setLaunchDialog(false)} aria-label="Close message"><X size={15} /></button></div>
          <div className="launch-dialog-body"><div className="launch-dialog-icon">{launched ? <Check size={25} /> : <Coffee size={25} />}</div><h3>{launched ? "CONNECTION INITIATED!" : "GOOD CHOICE."}</h3><p>{launched ? "Let's turn a good conversation into something useful. Choose a channel below." : "No pressure. The door stays open whenever you're ready."}</p>
            {launched ? <div className="launch-dialog-links"><a href="https://www.linkedin.com/in/daveram-a-a45176265/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={13} /></a><a href="https://github.com/Daveram1714" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13} /></a></div> : null}
            <div className="launch-dialog-actions">{!launched ? <button onClick={() => setLaunched(true)}>CONTINUE <ChevronRight size={14} /></button> : null}<button className="quiet" onClick={() => setLaunchDialog(false)}>CLOSE</button></div>
          </div>
        </motion.div></motion.div> : null}
      </AnimatePresence>
    </main>
  );
}
