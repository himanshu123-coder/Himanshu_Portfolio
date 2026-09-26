import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Sun,
  ExternalLink
} from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const fallbackProjects = [
  {
    _id: "cloud-dashboard",
    title: "AI-Powered Cloud & Website Monitoring Dashboard",
    category: "AI + Cloud",
    description: "AWS monitoring and cost-optimization platform with cloud metrics, website monitoring and AI recommendations.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "CloudWatch", "LangGraph"],
    github: "https://github.com/himanshu123-coder/AWS_DASHBOARD",
    featured: true
  },
  {
    _id: "ppe",
    title: "PPE Detection System",
    category: "Computer Vision",
    description: "YOLO-based PPE compliance detection for images, video and webcam streams.",
    technologies: ["Python", "YOLO11", "OpenCV", "Streamlit", "PyTorch"],
    github: "https://github.com/himanshu123-coder",
    featured: true
  },
  {
    _id: "ecommerce",
    title: "Full-Stack E-Commerce Application",
    category: "Full Stack",
    description: "Full-stack e-commerce application built for modern web development and AWS deployment.",
    technologies: ["Next.js", "React", "Express", "MongoDB", "AWS"],
    github: "https://github.com/himanshu123-coder",
    featured: false
  }
];

const skills = {
  "Languages": ["JavaScript", "Python", "Java", "HTML", "CSS"],
  "Frontend": ["React.js", "Next.js", "Tailwind CSS", "MUI", "Vite"],
  "Backend": ["Node.js", "Express.js", "REST APIs", "Mongoose"],
  "AI / ML": ["Machine Learning", "NLP", "Computer Vision", "LangGraph", "GenAI"],
  "Cloud / DevOps": ["AWS", "CloudWatch", "Docker", "Terraform", "Linux", "Git"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL", "ChromaDB"]
};

function App() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) setDark(saved === "dark");

    fetch(`${API}/projects`)
      .then((res) => res.json())
      .then((json) => setProjects(json.success ? json.data : fallbackProjects))
      .catch(() => setProjects(fallbackProjects));
  }, []);

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects]
  );

  const filteredProjects = useMemo(
    () => filter === "All" ? projects : projects.filter((project) => project.category === filter),
    [projects, filter]
  );

  const submitContact = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.message || "Failed");
      setStatus("Message sent successfully.");
      setContact({ name: "", email: "", message: "" });
    } catch {
      setStatus("Backend unavailable. Please email me directly.");
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="navbar">
        <button className="brand" onClick={() => scrollTo("home")}>
          HC<span>.</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "projects", "experience", "contact"].map((id) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setDark((value) => !value)} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-btn" onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> Available for internships & entry-level roles</div>
            <p className="hello">Hello, I'm</p>
            <h1>Himanshu <span>Chaurasiya</span></h1>
            <h2>Full Stack Developer <span className="muted">|</span> AI/ML & Cloud Enthusiast</h2>
            <p className="hero-text">
              I build practical full-stack applications and AI-powered systems using React, Node.js,
              Python, MongoDB and AWS.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => scrollTo("projects")}>View Projects <ArrowUpRight size={17} /></button>
              <button className="secondary-btn" onClick={() => scrollTo("contact")}>Contact Me <Mail size={17} /></button>
            </div>
            <div className="socials">
              <a href="https://github.com/himanshu123-coder" target="_blank" rel="noreferrer"><Github size={20} /> GitHub</a>
              <a href="https://www.linkedin.com/in/himanshu-chaurasiya-1221352b9/" target="_blank" rel="noreferrer"><Linkedin size={20} /> LinkedIn</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-top"><span></span><span></span><span></span><b>portfolio.js</b></div>
              <pre>{`const developer = {
  name: "Himanshu",
  role: "Full Stack + AI",
  stack: [
    "React", "Node.js",
    "Python", "AWS"
  ],
  focus: "Build. Deploy. Learn.",
  status: "open_to_work"
};`}</pre>
            </div>
            <div className="floating-card cloud-card"><Cloud size={19} /><div><strong>AWS + CloudWatch</strong><small>Monitoring & optimization</small></div></div>
            <div className="floating-card ai-card"><Sparkles size={19} /><div><strong>AI / ML</strong><small>GenAI • CV • NLP</small></div></div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle kicker="ABOUT ME" title="Turning ideas into working products." />
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm a B.Tech Computer Science student at ABES Institute of Technology, focused on
                full-stack development, AI/ML and cloud technologies.
              </p>
              <p>
                My projects combine real-world software engineering with AI and AWS. I enjoy building
                APIs, dashboards, automation workflows and computer-vision applications, then learning
                how to deploy and operate them reliably.
              </p>
              <div className="stats">
                <div><strong>4+</strong><span>Years of CSE study</span></div>
                <div><strong>6+</strong><span>Featured projects</span></div>
                <div><strong>3</strong><span>Core areas: Web • AI • Cloud</span></div>
              </div>
            </div>
            <div className="about-cards">
              <InfoCard icon={<Code2 />} title="Full Stack" text="React, Next.js, Node.js, Express and REST APIs." />
              <InfoCard icon={<Sparkles />} title="AI / ML" text="Python, ML, NLP, Computer Vision and GenAI." />
              <InfoCard icon={<Cloud />} title="Cloud & DevOps" text="AWS, CloudWatch, Linux, Docker and Terraform." />
              <InfoCard icon={<Database />} title="Data" text="MongoDB, MySQL, PostgreSQL and vector databases." />
            </div>
          </div>
        </section>

        <section id="skills" className="section soft">
          <SectionTitle kicker="TECHNICAL SKILLS" title="Tools I use to build." />
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <div className="skill-pills">{items.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle kicker="PROJECTS" title="Things I've built." />
          <div className="filters">
            {categories.map((category) => (
              <button className={filter === category ? "filter active" : "filter"} key={category} onClick={() => setFilter(category)}>
                {category}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project._id}>
                <div className="project-icon"><Terminal size={23} /></div>
                <div className="project-meta"><span>{project.category}</span>{project.featured && <b>Featured</b>}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">{project.technologies?.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section soft">
          <SectionTitle kicker="EXPERIENCE & EDUCATION" title="My current journey." />
          <div className="timeline">
            <TimelineItem icon={<BriefcaseBusiness />} title="AI Trainee — GI Venture" period="Academic Experience" text="Worked on AI/ML learning and experimentation, including exposure to an NVIDIA DGX server environment." />
            <TimelineItem icon={<GraduationCap />} title="B.Tech — Computer Science & Engineering" period="ABES Institute of Technology • 7th Semester / 4th Year" text="Building foundations across software engineering, AI/ML, cloud and data structures while developing practical projects." />
            <TimelineItem icon={<ShieldCheck />} title="Smart India Hackathon Team — MYTHX" period="Project / Hackathon Experience" text="Worked with a team on web-based problem solving and product development; the team cleared an internal round." />
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <SectionTitle kicker="CONTACT" title="Let's build something useful." />
          <div className="contact-grid">
            <div className="contact-copy">
              <p>
                Have an internship opportunity, project idea or technical discussion? Send a message
                and I'll get back to you.
              </p>
              <div className="contact-item"><Mail size={20} /><div><small>Email</small><a href="mailto:himanshuchaurasiya@example.com">himanshuchaurasiya@example.com</a></div></div>
              <div className="contact-item"><Linkedin size={20} /><div><small>LinkedIn</small><a href="https://www.linkedin.com/in/himanshu-chaurasiya-1221352b9/" target="_blank" rel="noreferrer">himanshu-chaurasiya-1221352b9</a></div></div>
              <div className="contact-item"><Github size={20} /><div><small>GitHub</small><a href="https://github.com/himanshu123-coder" target="_blank" rel="noreferrer">himanshu123-coder</a></div></div>
            </div>

            <form className="contact-form" onSubmit={submitContact}>
              <label>Name<input value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})} placeholder="Your name" required /></label>
              <label>Email<input type="email" value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})} placeholder="you@example.com" required /></label>
              <label>Message<textarea rows="5" value={contact.message} onChange={(e) => setContact({...contact, message: e.target.value})} placeholder="Tell me about the opportunity..." required /></label>
              <button className="primary-btn" type="submit"><MessageCircle size={17} /> Send Message</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Himanshu Chaurasiya</span>
        <span>Built with React + Node.js + MongoDB</span>
      </footer>
    </div>
  );
}

function SectionTitle({ kicker, title }) {
  return <div className="section-title"><span>{kicker}</span><h2>{title}</h2></div>;
}

function InfoCard({ icon, title, text }) {
  return <div className="info-card"><div className="info-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>;
}

function TimelineItem({ icon, title, period, text }) {
  return <div className="timeline-item"><div className="timeline-icon">{icon}</div><div><span>{period}</span><h3>{title}</h3><p>{text}</p></div></div>;
}

export default App;
