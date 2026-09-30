/**
 * Arthur Cavalcante de Andrade | Portfolio Data Store
 * Central source of truth for profile metadata, experiences, skills,
 * education, certifications, and key engineering projects.
 * Aligned with official Curriculum Vitae (September 2026).
 */

export const portfolioData = {
  profile: {
    fullName: "Arthur Cavalcante de Andrade",
    displayName: "ARTHUR_DE_ANDRADE",
    nodeId: "RESEARCH_NODE",
    fileId: "ACA_RESEARCH.dat",
    role: "Software Engineer & AI Researcher",
    shortRole: "LEAD_ENG / AI_RES",
    location: "Goiânia, GO, Brazil",
    bio: "Software Engineer with 4+ years of professional experience, currently working with Python, Ruby on Rails, and PostgreSQL. Focused on clean code, performance, and automated testing, with extensive background architecting advanced AI-driven solutions leveraging LLMs, RAG architecture, and autonomous AI agents to automate complex workflows and document generation. Dual postgraduate specializations in Cybersecurity & Data Governance (PUC Minas) and IT Processes & Management (UFG), with hands-on experience in AppSec, ISO 31000 risk management, and enterprise Java Spring Boot.",
    quote: "Building solid, secure, and well-documented systems that bridge cutting-edge AI technologies with robust engineering practices to drive business value.",
    contacts: {
      github: "https://github.com/arthurcandrade",
      githubUser: "arthurcandrade",
      linkedin: "https://linkedin.com/in/arthurdeandrade",
      linkedinUser: "arthurdeandrade",
      lattes: "https://lattes.cnpq.br/3580910644683656",
      lattesUser: "3580910644683656",
      steam: "https://steamcommunity.com/id/Kaizenhauer",
      steamUser: "Kaizenhauer"
    }
  },

  aiResearchTelemetry: {
    primaryWebBackend: { label: "PRIMARY WEB ARCHITECTURE", value: "RUBY ON RAILS (MAIN STACK)" },
    utilityAndAiLang: { label: "PRIMARY UTILITY & AI LANGUAGE", value: "PYTHON (FASTAPI, PYTORCH, NLP)" },
    enterpriseServices: { label: "ENTERPRISE MICROSERVICES", value: "JAVA SPRING BOOT & DOCKER" },
    llmEngine: { label: "LLM & RAG ARCHITECTURE", value: "ACTIVE (HYBRID VECTOR RAG)" },
    diffusionModels: { label: "DIFFUSION & FLOW MATCHING", value: "U-NET / CONTINUOUS FLOWS" },
    governanceStack: { label: "GOVERNANCE & RISK AUDITING", value: "ISO 31000 / LGPD / GDPR" }
  },

  skillsCategories: [
    {
      id: "ai-deep-learning",
      title: "AI, RAG & Deep Learning",
      subtitle: "Neural architectures, generative diffusion & agent workflows",
      color: "magenta",
      skills: [
        { name: "LLMs & Hybrid RAG Pipelines", tag: "Generative AI", icon: "fa-solid fa-brain" },
        { name: "Autonomous AI Agents", tag: "Agentic Systems", icon: "fa-solid fa-robot" },
        { name: "Diffusion Models & Flow Matching", tag: "Deep Learning", icon: "fa-solid fa-wind" },
        { name: "U-Net Architectures & Denoising", tag: "Generative Models", icon: "fa-solid fa-wave-square" },
        { name: "PyTorch & Neural Workflows", tag: "ML Framework", icon: "fa-solid fa-fire" },
        { name: "Vector Databases & Semantic Retrieval", tag: "Embeddings", icon: "fa-solid fa-database" }
      ]
    },
    {
      id: "backend-distributed",
      title: "Web Backend & Systems Engineering",
      subtitle: "Ruby on Rails as primary web stack & Python utility ecosystem",
      color: "cyan",
      skills: [
        { name: "Ruby on Rails (Rails 3+ to Rails 8+)", tag: "Primary Web Stack", icon: "fa-solid fa-gem" },
        { name: "Python (FastAPI, AsyncIO, Scraping)", tag: "Utility & Core AI", icon: "fa-brands fa-python" },
        { name: "Java (Spring Boot / MVC)", tag: "Enterprise Core", icon: "fa-brands fa-java" },
        { name: "PostgreSQL & SQLite", tag: "Databases", icon: "fa-solid fa-database" },
        { name: "Docker & Container Workflows", tag: "DevOps", icon: "fa-brands fa-docker" },
        { name: "Test-Driven Development (TDD / RSpec)", tag: "Quality Assurance", icon: "fa-solid fa-vial-circle-check" }
      ]
    },
    {
      id: "cybersecurity-governance",
      title: "Cybersecurity & Data Governance",
      subtitle: "Postgraduate specialization at PUC Minas: defense, risk & compliance",
      color: "green",
      skills: [
        { name: "ISO 31000 Risk Management", tag: "Risk Methodology", icon: "fa-solid fa-shield-halved" },
        { name: "Data Governance & LGPD / GDPR", tag: "Legal Compliance", icon: "fa-solid fa-scale-balanced" },
        { name: "AppSec & Secure SDLC (SSDLC)", tag: "Defensive Coding", icon: "fa-solid fa-lock" },
        { name: "Penetration Testing & Burp Suite", tag: "Auditing & CTFs", icon: "fa-solid fa-bug-slash" },
        { name: "Security Compliance & Auditing", tag: "Governance", icon: "fa-solid fa-clipboard-check" },
        { name: "Cryptographic Protocols & Hashing", tag: "Applied Security", icon: "fa-solid fa-key" }
      ]
    },
    {
      id: "it-processes-hpc",
      title: "IT Processes, Management & HPC",
      subtitle: "Postgraduate specialization at UFG & High-Performance Computing",
      color: "yellow",
      skills: [
        { name: "IT Processes & Strategy (ITIL / COBIT)", tag: "IT Management", icon: "fa-solid fa-sitemap" },
        { name: "High-Performance Computing (CUDA C/C++)", tag: "Parallel Computing", icon: "fa-solid fa-microchip" },
        { name: "Graph Theory & Combinatorics (CNPq)", tag: "Algorithms", icon: "fa-solid fa-diagram-project" },
        { name: "Cross-Functional Team Guidance", tag: "Technical Leadership", icon: "fa-solid fa-users-gear" },
        { name: "GitLab, GitHub & Bitbucket", tag: "Version Control", icon: "fa-brands fa-git-alt" },
        { name: "Linux & Windows Environments", tag: "Operating Systems", icon: "fa-brands fa-linux" }
      ]
    }
  ],

  experiences: [
    {
      id: "tjgo-unified",
      status: "CURRENT NODE",
      statusColor: "cyan",
      role: "LEAD SOFTWARE ENGINEER",
      formerRole: "Progression: Software Engineer & IT Risk Manager (until May 2026)",
      company: "Court of Justice of the State of Goiás (TJGO)",
      period: "Feb 2025 - Present",
      location: "Goiânia, Brazil (Hybrid)",
      summary: "Leading the systemic migration of the MCA contract management platform (originally Ruby on Rails/Hotwire) and the Kaizen strategic management engine (Node.js/React.js) into a unified Java Spring Boot backend infrastructure, while spearheading generative AI GovTech initiatives.",
      bullets: [
        "Orchestrated the SIMPATIC AI Agentic framework, automating procurement pieces (DOD, ETP, TR) and cutting preparation cycle times by over 80%.",
        "Engineered the ISO 31000 Risk Assessment Platform (patented IP BR512026002418-8), converting qualitative audit vectors into quantitative indices with RAG.",
        "Acting as focal point for external audits and compliance with ISO 31000, LGPD, Brazilian Procurement Law (14.133/21), and CNJ Resolution 468/22.",
        "Providing technical guidance to development teams, conducting code reviews, defining architectural standards, and optimizing database queries."
      ],
      technologies: ["Java (Spring Boot)", "Ruby (Rails 8+, Hotwire)", "Python (FastAPI)", "TypeScript (React.js)", "PostgreSQL", "Docker", "GitLab", "ISO 31000"]
    },
    {
      id: "cilia",
      status: "INSURTECH NODE",
      statusColor: "green",
      role: "SOFTWARE ENGINEER",
      company: "Cilia Tecnologia (Insurtech)",
      period: "Feb 2023 - Jan 2026",
      location: "Goiânia, Brazil (Hybrid)",
      summary: "Scaled and refactored high-traffic RESTful API architectures for one of Brazil's largest insurtech platforms using Ruby on Rails, integrating with external systems and third-party services.",
      bullets: [
        "Designed and developed RESTful APIs in Ruby on Rails for high-traffic usage, integrating external systems and third-party services.",
        "Optimized database structures (PostgreSQL), automated tasks, implemented background workers, and built new features with Backbone.js and Vue.js.",
        "Enforced 85%+ testing coverage targets across critical codebases using strict RSpec TDD, promoting best development practices.",
        "Led code reviews and maintained comprehensive technical documentation of implemented features."
      ],
      technologies: ["Ruby (Rails 3+)", "JavaScript (Vue.js, Backbone.js)", "Python", "PostgreSQL", "RSpec", "Sidekiq", "Bitbucket"]
    },
    {
      id: "cnpq-research",
      status: "ACADEMIC RESEARCH",
      statusColor: "yellow",
      role: "SCIENTIFIC INITIATION RESEARCHER (PIBIC)",
      company: "National Council for Scientific and Technological Development (CNPq / UFG)",
      period: "Sep 2022 - Aug 2023",
      location: "Goiânia, Brazil (Hybrid)",
      summary: "Scholarship holder in the Institutional Scientific Initiation Scholarship Program (PIBIC). Researched specialized graph theory constructs, specifically focused on solving 'induced paired domination parameters' across cubic and bounded maximum-degree graph matrices Δ(G) ≤ 3.",
      bullets: [
        "Conducted in-depth studies in graph theory, exploring fundamental concepts, algorithms, and practical applications.",
        "Engineered analytical web scraping scripts in Python (BeautifulSoup) that represent, analyze, and solve problems in graph structures.",
        "Analyzed data structures and behavioral properties of induced paired domination for cubic graphs.",
        "Formulated mathematical theorems and conjectures for the research domain."
      ],
      technologies: ["Python", "BeautifulSoup", "Graph Theory", "Algorithm Design", "Discrete Mathematics"]
    }
  ],

  education: [
    {
      degreeType: "BACHELOR OF SCIENCE",
      title: "Computer Science",
      institution: "Federal University of Goiás (UFG)",
      period: "2018 - 2024",
      location: "Goiânia, BR",
      statusTag: "COMPLETED",
      focus: "Algorithms, Graph Theory, Operating Systems & Distributed Architectures"
    },
    {
      degreeType: "POSTGRADUATE DEGREE",
      title: "Cybersecurity and Data Governance",
      institution: "PUC Minas",
      period: "2024 - 2025",
      location: "Belo Horizonte, BR",
      statusTag: "COMPLETED",
      focus: "ISO 31000 Risk Auditing, LGPD/GDPR, AppSec, Threat Modeling & Defensive SSDLC"
    },
    {
      degreeType: "POSTGRADUATE DEGREE",
      title: "IT Processes and Management",
      institution: "Federal University of Goiás (UFG)",
      period: "2025 - 2027",
      location: "Goiânia, BR",
      statusTag: "IN PROGRESS",
      focus: "IT Governance (ITIL/COBIT), Public Systems Architecture, Strategic Tech Alignment"
    },
    {
      degreeType: "MASTER OF SCIENCE (M.SC.) CANDIDATE",
      title: "High-Performance Computing (HPC) & AI",
      institution: "Federal University of Goiás (UFG)",
      period: "2027 (Scheduled)",
      location: "Goiânia, BR",
      statusTag: "SCHEDULED",
      focus: "GPU Parallelization, CUDA C/C++, Diffusion Models, Flow Matching & Neural Scaling"
    }
  ],

  certifications: [
    {
      year: "2027 (Scheduled)",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      badgeColor: "magenta",
      icon: "fa-brands fa-aws",
      url: ""
    },
    {
      year: "2026",
      title: "C1 Proficient (English)",
      issuer: "EF-SET",
      badgeColor: "magenta",
      icon: "fa-solid fa-language",
      url: "https://cert.efset.org/BKA6Ty"
    },
    {
      year: "2024",
      title: "Junior Cybersecurity Analyst",
      issuer: "CISCO Networking Academy",
      badgeColor: "green",
      icon: "fa-solid fa-shield-halved",
      url: "https://www.credly.com/badges/638cd988-4154-402e-9d2f-71d0ec01e6cd"
    },
    {
      year: "2024",
      title: "Network Technician",
      issuer: "CISCO Networking Academy",
      badgeColor: "cyan",
      icon: "fa-solid fa-network-wired",
      url: "https://www.credly.com/badges/c875c7a0-22b2-47da-9bb0-7db32add846a"
    },
    {
      year: "2023",
      title: "Fundamentals of Accelerated Computing with CUDA C/C++",
      issuer: "NVIDIA Deep Learning Institute",
      badgeColor: "green",
      icon: "fa-solid fa-microchip",
      url: "https://learn.nvidia.com/certificates?id=68b71eb563a54b5e95edcdeb70ac5e20"
    },
    {
      year: "2022",
      title: "Data Privacy and Protection (LGPD)",
      issuer: "SENAI",
      badgeColor: "yellow",
      icon: "fa-solid fa-user-shield",
      url: "https://www.sp.senai.br/consulta-certificado?qrcode=00015509/7105061"
    }
  ],

  honors: [
    {
      categoryBadge: "HACKATHON PODIUM",
      year: "2023",
      title: "First Place Award Winner & Incubated Concept",
      issuer: "1st EPT Congress (CETT / UFG)",
      description: "Managed a team of three high school students during a low-code hackathon at the 1st EPT Congress (CETT/UFG), leading the design and development of an integrated mobile IoT water telemetry tracking app (MIT App Inventor) with a prototype reservoir to collect and monitor rainwater runoff. The project received a podium award and was later incubated by CEI/UFG.",
      stats: [
        { label: "Incubated by:", value: "CEI / UFG", isHighlight: true },
        { label: "Integration:", value: "IoT Runoff Prototypes" }
      ]
    }
  ],

  projects: [
    {
      id: "mca-system",
      badge: "DEPLOYED & ACTIVE",
      badgeType: "green",
      client: "COURT OF JUSTICE OF GOIÁS (TJGO)",
      title: "Contracts and Acquisitions Module (MCA)",
      role: "Lead Architect & AI Integrator",
      description: "Comprehensive planning and management system implemented at TJGO to streamline contract administration and payment workflows. Transitioned the institution away from scattered spreadsheets by automating processes across every procurement stage. Features the Risk Assessment System (SAR) and SIMPATIC AI agents.",
      features: [
        { icon: "fa-solid fa-robot", text: "SIMPATIC AI Agents (Auto-generating DOD, ETP, and TR artifacts)" },
        { icon: "fa-solid fa-shield-halved", text: "Integrated Risk Assessment System (SAR)" }
      ],
      technologies: ["Ruby (Rails)", "Hotwire", "PostgreSQL", "AI Agents"],
      date: "April 2026"
    },
    {
      id: "iso31000-engine",
      badge: "PATENTED IP: BR512026002418-8",
      badgeType: "magenta",
      client: "COURT OF JUSTICE OF GOIÁS | INTELLECTUAL PROPERTY",
      title: "Risk Assessment Engine (ISO 31000)",
      role: "Lead Creator & Core Developer",
      description: "Python and FastAPI backend engine combining ISO 31000 methodology with RAG architecture. Utilizes NLP to transform qualitative public sector documents (DOD, ETP, TR) into quantitative metrics for calculating inherent and residual risk, serving as a scalable GRC tool and reducing total assessment process time by 80%.",
      features: [
        { icon: "fa-solid fa-bolt", text: "Reduces total assessment process time by 80%" },
        { icon: "fa-solid fa-code-branch", text: "FastAPI core + RAG historical knowledge base calibration" }
      ],
      technologies: ["Python", "FastAPI", "RAG Architecture", "ISO 31000", "NLP"],
      date: "Feb 2026"
    }
  ],

  personal: {
    title: "Personal Mural & Creative Lab",
    subtitle: "A personal portal for music, gaming, hardware gear, audio synthesis, and research thoughts",
    blog: {
      id: "personal-blog",
      title: "Tech Notes & Neural Blog",
      subtitle: "Articles, technical notes & research logs on AI and Systems",
      badge: "FEED IN PREPARATION",
      description: "A forthcoming series of deep-dive articles exploring Flow Matching, Diffusion Models, AI Agents in public procurement, and modern Ruby on Rails architectures.",
      posts: [
        {
          title: "Demystifying Flow Matching & Continuous Normalizing Flows",
          category: "Deep Learning",
          status: "UPCOMING ARTICLE",
          summary: "An intuitive mathematical and engineering guide to Flow Matching as an alternative to classical diffusion models."
        },
        {
          title: "Designing Autonomous AI Agents for Enterprise Document Synthesis",
          category: "AI Architecture",
          status: "UPCOMING ARTICLE",
          summary: "Architectural lessons learned from SIMPATIC: orchestration, deterministic validation, and RAG grounding in production."
        }
      ],
      tags: ["Flow Matching", "AI Research", "Rails Architecture", "Deep Learning"]
    },
    gear: {
      id: "personal-gear",
      title: "Workstation, Lab & Hardware",
      subtitle: "Hardware architecture, developer tooling & local compute",
      badge: "HARDWARE DEPLOYED",
      description: "Curated engineering environment optimized for high-performance computing, clean ergonomics, Linux/Unix toolchains, and multi-monitor telemetry.",
      items: [
        { label: "Compute Node", val: "Multi-core workstation + dedicated NVIDIA CUDA acceleration" },
        { label: "Input Telemetry", val: "Custom mechanical keyboards with tactile switches" },
        { label: "OS & Terminal", val: "Linux / PowerShell / WSL2 with automated dotfiles" }
      ],
      tags: ["NVIDIA CUDA", "Workstation", "Mechanical Keyboards", "Homelab"]
    },
    gaming: {
      id: "personal-gaming",
      title: "Gaming & Rig Telemetry",
      subtitle: "Tactical, RPG, simulations & competitive gaming history",
      badge: "STEAM NODE",
      steamUrl: "https://steamcommunity.com/id/Kaizenhauer",
      description: "Enthusiast gamer focused on deep mechanics, immersive tactical sims, RPG world-building, and high-framerate competitive titles. Steam profile linked with community telemetry.",
      items: [
        { label: "Steam Identity", val: "Kaizenhauer", isLink: true, url: "https://steamcommunity.com/id/Kaizenhauer" },
        { label: "Favorite Genres", val: "Tactical Shooters, Immersive RPGs, Cyberpunk Sci-Fi & Simulators" },
        { label: "Setup Telemetry", val: "Ultra-low latency peripherals, high-refresh rate displays" }
      ],
      tags: ["Steam", "Competitive Gaming", "PC Enthusiast", "Simulation"]
    },
    music: {
      id: "personal-music",
      title: "Audio & Music Synthesis",
      subtitle: "Electric guitars, synthesizer workflows, DSP & Web Audio experiments",
      badge: "ACTIVE AUDIO RX",
      description: "Lifelong passion for music production, digital signal processing, guitar tone modeling, and electronic sound synthesis. Exploring procedural audio synthesis and ambient sound design directly in modern browsers.",
      items: [
        { label: "Instruments & Synths", val: "Electric Guitars, MIDI Controllers, VSTs & Soft Synths" },
        { label: "Soundtrack & Aesthetics", val: "Cyberpunk OSTs, Synthwave, Prog Metal & Dark Synth" },
        { label: "Audio Gear", val: "High-Impedance IEMs & DAC/Amp Stack" }
      ],
      tags: ["Audio Synthesis", "Web Audio API", "DSP", "Music Production"]
    }
  }
};
