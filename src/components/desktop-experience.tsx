"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Github, Linkedin, Mail, ExternalLink, Minus, Square, X, Folder,
  Terminal, UserRound, Code2, BriefcaseBusiness, Sparkles, ArrowUpRight,
  Volume2, VolumeX, Command, Monitor, Coffee, Cpu, ChevronRight
} from "lucide-react";

type WindowKey = "about" | "work" | "stack" | "terminal" | "contact";
type Project = { name: string; kind: string; description: string; stack: string[]; href: string; accent: string };

const projects: Project[] = [
  {
    name: "Weather Now", kind: "WEB APP",
    description: "A clean weather experience built with React and Tailwind, focused on quick access to current conditions.",
    stack: ["React", "Tailwind CSS", "API"],
    href: "https://github.com/Daveram1714/weather-now", accent: "mint"
  },
  {
    name: "Treeflow", kind: "DEVELOPER TOOL",
    description: "A project in the developer-tools space. Explore the repository for implementation details and progress.",
    stack: ["TypeScript", "Web"],
    href: "https://github.com/Daveram1714/treeflow", accent: "lavender"
  },
  {
    name: "LunchMate", kind: "FULL STACK PROJECT",
    description: "A meal-ordering workflow with layered application structure, SQL Server, and scheduled weekly reporting.",
    stack: ["C#", ".NET", "SQL Server"],
    href: "https://github.com/Daveram1714/LunchMate", accent: "peach"
  }
];

const windowTitles: Record<WindowKey, string> = {
  about: "about-me.txt", work: "projects / explorer", stack: "toolbox.exe",
  terminal: "terminal — bash", contact: "let's-talk.msg"
};

function WindowBar({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="window-bar">
      <span className="window-mark">✳</span><span className="window-title">{title}</span>
      <div className="window-controls">
        <button aria-label="Minimize" onClick={onClose}><Minus size={13} /></button>
        <button aria-label="Close" onClick={onClose}><X size={13} /></button>
      </div>
    </div>
  );
}

function DesktopWindow({ id, title, onClose, children, className = "" }: {
  id: WindowKey; title: string; onClose: () => void; children: React.ReactNode; className?: string;
}) {
  return (
    <motion.section
      layout
      initial={{ opacity: 0, y: 18, scale: .97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: .98 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      className={`desktop-window ${className}`}
      aria-label={title}
      data-window={id}
    >
      <WindowBar title={title} onClose={onClose} />
      <div className="window-content">{children}</div>
    </motion.section>
  );
}

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [openWindows, setOpenWindows] = useState<WindowKey[]>(["about", "work"]);
  const [sound, setSound] = useState(false);
  const [command, setCommand] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "daveram@portfolio:~$ welcome",
    "Welcome to my little corner of the internet.",
    "Type help to see available commands."
  ]);

  const open = (key: WindowKey) => setOpenWindows(current => current.includes(key) ? current : [...current, key]);
  const close = (key: WindowKey) => setOpenWindows(current => current.filter(item => item !== key));
  const runCommand = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = command.trim().toLowerCase();
    if (!value) return;
    const responses: Record<string, string> = {
      help: "commands: about · projects · stack · contact · clear",
      about: "Full Stack Developer building thoughtful web experiences with React, Node.js and TypeScript.",
      projects: "Try the Projects icon on the desktop to browse selected work.",
      stack: "React · Next.js · Node.js · Express · TypeScript · Prisma · MySQL · MongoDB · Redis · Docker",
      contact: "Find me on LinkedIn or GitHub using the icons in the taskbar.",
      clear: ""
    };
    setTerminalOutput(value === "clear" ? [] : [...terminalOutput, `daveram@portfolio:~$ ${value}`, responses[value] ?? `command not found: ${value}`]);
    setCommand("");
  };

  if (!booted) return (
    <main className="boot-screen">
      <div className="boot-card">
        <div className="boot-symbol">✳</div>
        <p className="boot-kicker">A PERSONAL DIGITAL SPACE</p>
        <h1>DAVERAM<span>.OS</span></h1>
        <p className="boot-copy">Loading curiosity, code &amp; caffeine…</p>
        <div className="boot-progress"><span /></div>
        <button className="enter-button" onClick={() => setBooted(true)}>ENTER DESKTOP <ChevronRight size={15} /></button>
        <span className="boot-foot">BEST VIEWED WITH CURIOSITY · EST. 2026</span>
      </div>
      <div className="boot-orbit orbit-one" /><div className="boot-orbit orbit-two" />
    </main>
  );

  return (
    <main className="desktop">
      <div className="desktop-grain" />
      <header className="topbar">
        <div className="brand"><span className="brand-icon">✳</span> DAVERAM.OS <span className="brand-divider">/</span> DESKTOP 01</div>
        <div className="topbar-right"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="top-time">IND / IST</span></div>
      </header>

      <div className="desktop-inner">
        <div className="desktop-heading">
          <div><p className="eyebrow">INDEPENDENT DEVELOPER · COIMBATORE, INDIA</p><h1>Hey, I'm <em>Daveram.</em></h1><p className="heading-sub">I turn ideas into useful things on the internet.</p></div>
          <div className="date-stamp">PERSONAL PORTFOLIO<br /><span>VERSION 1.0 — 2026</span></div>
        </div>

        <nav className="icon-dock" aria-label="Desktop applications">
          <button onClick={() => open("about")}><span className="dock-icon coral"><UserRound /></span><span>About me</span></button>
          <button onClick={() => open("work")}><span className="dock-icon yellow"><Folder /></span><span>Projects</span></button>
          <button onClick={() => open("stack")}><span className="dock-icon blue"><Code2 /></span><span>Toolbox</span></button>
          <button onClick={() => open("terminal")}><span className="dock-icon dark"><Terminal /></span><span>Terminal</span></button>
          <button onClick={() => open("contact")}><span className="dock-icon pink"><Mail /></span><span>Contact</span></button>
        </nav>

        <div className="window-stage">
          <AnimatePresence>
            {openWindows.includes("about") && <DesktopWindow id="about" title={windowTitles.about} onClose={() => close("about")} className="about-window">
              <div className="file-label">01 — A LITTLE INTRODUCTION</div>
              <div className="about-layout"><div className="avatar-card"><div className="avatar-face">D<span>.</span></div><span className="avatar-caption">DEV / BUILD / REPEAT</span></div>
                <div className="about-copy"><h2>Building for the<br /><em>real world.</em></h2><p>I'm a Full Stack Developer who enjoys taking an idea from a rough sketch to a working product. I work across frontend interfaces, backend services, databases and deployment.</p><p>Currently exploring better ways to build reliable, useful software — with a little help from AI tools and a lot of curiosity.</p><div className="mini-tags"><span>01+ YEARS</span><span>FULL STACK</span><span>ALWAYS LEARNING</span></div></div></div>
              <div className="window-foot"><span><span className="tiny-dot" /> SYSTEM PROFILE</span><span>COIMBATORE, IN</span></div>
            </DesktopWindow>}

            {openWindows.includes("work") && <DesktopWindow id="work" title={windowTitles.work} onClose={() => close("work")} className="projects-window">
              <div className="file-label">02 — SELECTED FOLDERS <span> / {projects.length} ITEMS</span></div>
              <div className="project-list">{projects.map((project, index) => <article className="project-row" key={project.name}>
                <div className={`project-folder ${project.accent}`}><Folder size={22} /></div>
                <div className="project-info"><div className="project-topline"><span className="project-kind">{project.kind}</span><span className="project-index">0{index + 1}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}><ArrowUpRight size={18} /></a>
              </article>)}</div>
              <a className="all-work-link" href="https://github.com/Daveram1714?tab=repositories" target="_blank" rel="noreferrer">EXPLORE ALL REPOSITORIES <ExternalLink size={13} /></a>
            </DesktopWindow>}

            {openWindows.includes("stack") && <DesktopWindow id="stack" title={windowTitles.stack} onClose={() => close("stack")} className="stack-window">
              <div className="file-label">03 — THINGS I WORK WITH</div><h2 className="section-heading">My <em>toolbox.</em></h2>
              <div className="stack-groups"><div><span className="stack-label">FRONTEND</span><div className="stack-chips"><span>React.js</span><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>JavaScript</span></div></div><div><span className="stack-label">BACKEND</span><div className="stack-chips"><span>Node.js</span><span>Express.js</span><span>REST APIs</span><span>Socket APIs</span></div></div><div><span className="stack-label">DATA &amp; INFRA</span><div className="stack-chips"><span>MySQL</span><span>MongoDB</span><span>Prisma</span><span>Redis</span><span>BullMQ</span><span>Docker</span><span>PM2</span><span>Nginx</span></div></div><div><span className="stack-label">AI WORKFLOW</span><div className="stack-chips"><span>ChatGPT</span><span>Gemini</span><span>Claude</span><span>Ollama</span><span>Antigravity</span></div></div></div>
            </DesktopWindow>}

            {openWindows.includes("terminal") && <DesktopWindow id="terminal" title={windowTitles.terminal} onClose={() => close("terminal")} className="terminal-window">
              <div className="terminal-lines">{terminalOutput.map((line, index) => <p key={index}>{line}</p>)}</div>
              <form className="terminal-form" onSubmit={runCommand}><span>➜</span><input value={command} onChange={event => setCommand(event.target.value)} placeholder="type a command…" aria-label="Terminal command" autoComplete="off" /><button type="submit">RUN</button></form>
            </DesktopWindow>}

            {openWindows.includes("contact") && <DesktopWindow id="contact" title={windowTitles.contact} onClose={() => close("contact")} className="contact-window">
              <div className="file-label">04 — OPEN A CHANNEL</div><h2 className="section-heading">Have a good<br /><em>idea?</em></h2><p className="contact-copy">I'm always happy to connect, talk through an idea, or explore a new opportunity.</p>
              <div className="contact-links"><a href="https://www.linkedin.com/in/daveram-a-a45176265/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LINKEDIN <ArrowUpRight size={14} /></a><a href="https://github.com/Daveram1714" target="_blank" rel="noreferrer"><Github size={17} /> GITHUB <ArrowUpRight size={14} /></a></div>
            </DesktopWindow>}
          </AnimatePresence>
        </div>

        <div className="desktop-note"><span>✳</span> MADE WITH INTENTION, A LITTLE NOSTALGIA &amp; LOTS OF ☕</div>
      </div>

      <footer className="taskbar">
        <button className="start-button" onClick={() => setOpenWindows(["about", "work"])}><Command size={15} /> START</button>
        <div className="taskbar-apps">{(["about", "work", "stack", "terminal", "contact"] as WindowKey[]).map(key => <button key={key} className={openWindows.includes(key) ? "task-active" : ""} onClick={() => open(key)}>{key === "about" ? <UserRound /> : key === "work" ? <Folder /> : key === "stack" ? <Code2 /> : key === "terminal" ? <Terminal /> : <Mail />}<span>{windowTitles[key]}</span></button>)}</div>
        <div className="system-tray"><button onClick={() => setSound(!sound)} aria-label={sound ? "Mute sound" : "Enable sound"}>{sound ? <Volume2 size={15} /> : <VolumeX size={15} />}</button><span>ENG</span><span className="tray-time">11:10 AM<br />10 NOV 2026</span></div>
      </footer>
    </main>
  );
}