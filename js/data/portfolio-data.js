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
    nodeId: "WHOAMI",
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
      email: "arthurcandrade@hotmail.com"
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
      statusColor: "cyan",
      role: "LEAD SOFTWARE ENGINEER",
      formerRole: "Progression: Software Engineer & IT Risk Manager (until May 2026)",
      company: "Court of Justice of the State of Goiás (TJGO)",
      period: "Feb 2025 - Present",
      location: "Goiânia, Brazil (Hybrid)",
      summary: "Leading the systemic migration of the MCA contract management platform (originally Ruby on Rails/Hotwire) and the Kaizen strategic management engine (Node.js/React.js) into a unified Java Spring Boot backend infrastructure, while spearheading generative AI GovTech initiatives.",
      bullets: [
        "Architected AI systems, implementing agents to automate compliance workflows and reduce manual documentation time by over 80%.",
        "Developed Risk Assessment Engine (patented IP BR512026002418-8), converting qualitative audit vectors into quantitative indices.",
        "Serving as focal point for external audits and compliance with ISO 31000, LGPD, Brazilian Procurement Law (14.133/21), and CNJ Resolution 468/22.",
        "Providing technical leadership to development teams, conducting code reviews, defining architectural standards, and optimizing database queries."
      ],
      technologies: ["Java (Spring Boot)", "Ruby (Rails 8+, Hotwire)", "Python (FastAPI)", "TypeScript (React.js)", "PostgreSQL", "Docker", "GitLab", "ISO 31000"]
    },
    {
      id: "ifg-contract",
      statusColor: "magenta",
      role: "SOFTWARE ENGINEER",
      company: "Federal Institute of Education, Science and Technology of Goiás (IFG)",
      period: "Jun 2026 - Present",
      location: "Goiânia, Brazil (Remote)",
      summary: "Engineering contract focused on modernizing institutional public platforms and educational management systems across their full software lifecycle.",
      bullets: [
        "Maintaining scalable software components and digital services, actively participating in team meetings for product planning and prioritization.",
        "Migrating the application from Ruby on Rails 5 to 8, ensuring system stability, dependency compatibility, and adherence to best practices.",
        "Refactoring the frontend by building highly reactive, decoupled interfaces using ViewComponents and Hotwire.",
        "Improving code quality and deployment workflows by optimizing GitLab CI/CD pipelines and systematically resolving legacy technical debt."
      ],
      technologies: ["Ruby (Rails 5/8, Hotwire)", "MySQL", "Docker", "GitLab"]
    },
    {
      id: "cilia",
      statusColor: "green",
      role: "SOFTWARE ENGINEER",
      company: "Cilia Tecnologia S.A.",
      period: "Feb 2023 - Jan 2026",
      location: "Goiânia, Brazil (Hybrid)",
      summary: "Scaled and refactored core backend architectures for one of Brazil's largest insurtech platforms, connecting mission-critical claims workflows with automotive partner ecosystems.",
      bullets: [
        "Designed and maintained resilient RESTful APIs in Ruby on Rails to process high-traffic insurance claims and policy transactions.",
        "Optimized database structures (PostgreSQL), automated tasks, implemented background workers, and built new features with Backbone.js and Vue.js.",
        "Enforced 85%+ testing coverage targets across critical codebases using strict RSpec TDD, promoting best development practices.",
        "Led code reviews and maintained comprehensive technical documentation of implemented features."
      ],
      technologies: ["Ruby (Rails 3+)", "JavaScript (Vue.js, Backbone.js)", "Python", "PostgreSQL", "RSpec", "Bitbucket"]
    },
    {
      id: "cnpq-research",
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
      title: "Award Winner & Incubated Concept",
      issuer: "1st EPT Congress (CETT / UFG)",
      description: "Managed a team of three high school students during a low-code hackathon at the 1st EPT Congress (CETT/UFG), leading the design and development of an integrated mobile IoT water telemetry tracking app (MIT App Inventor) with a prototype reservoir to collect and monitor rainwater runoff. The project received a podium award and was later incubated by CEI/UFG."
    }
  ],

  projects: [
    {
      id: "mca-system",
      badge: "DEPLOYED & ACTIVE",
      badgeType: "green",
      client: "COURT OF JUSTICE OF GOIÁS (TJGO)",
      title: "Contracts and Acquisitions Module (MCA)",
      role: "Software Architect & Engineer",
      description: "Comprehensive planning and management system implemented at TJGO to streamline contract administration and payment workflows. Transitioned the institution away from scattered spreadsheets by automating processes across every procurement stage. Features the Risk Assessment Engine.",
      features: [
        { icon: "fa-solid fa-file-invoice-dollar", text: "Process Automation System" },
        { icon: "fa-solid fa-robot", text: "Integrated Risk Assessment Engine" }
      ],
      technologies: ["Ruby (Rails)", "Hotwire", "PostgreSQL", "AI Agents"],
      date: "April 2026"
    },
    {
      id: "iso31000-engine",
      badge: "PATENTED IP: BR512026002418-8",
      badgeType: "magenta",
      client: "INTELLECTUAL PROPERTY",
      title: "Risk Assessment Engine",
      role: "Software Architect & Code Reviewer",
      description: "Python and FastAPI backend engine combining ISO 31000 methodology with RAG architecture. Utilizes NLP to transform qualitative public sector documents (DOD, ETP, TR) into quantitative metrics for defining risk scenarios, identifying control methods and calculating both inherent and residual risks, serving as a scalable GRC tool and reducing total assessment process time by 80%.",
      features: [
        { icon: "fa-solid fa-bolt", text: "Reduces total risk assessment process time by 80%" },
        { icon: "fa-solid fa-code-branch", text: "FastAPI core + RAG historical knowledge base calibration" }
      ],
      technologies: ["Python", "FastAPI", "RAG Architecture", "ISO 31000", "NLP"],
      date: "Feb 2026"
    }
  ],

  personal: {
    gear: {
      id: "personal-gear",
      title: "Workstation & Hardware",
      badge: "HARDWARE DEPLOYED",
      description: "Curated minimalist and high-mobility workstation focused on compact, portable peripherals with a clean wireless footprint. Running development workflows through Linux via WSL2 on Windows, with plans to introduce a dedicated secondary laptop to physically separate engineering and personal environments.",
      items: [
        {
          label: "Notebook & Environment",
          icon: "fa-solid fa-laptop-code",
          name: "Acer Predator Triton 300 SE (Dark Gray)",
          details: [
            "Display: 14-inch IPS WQXGA (2560 x 1600) · 165Hz",
            "Hardware: Intel Core i7-12700H · 16GB LPDDR5 RAM · 1TB SSD",
            "GPU: NVIDIA GeForce RTX 3060",
            "OS: Windows 11 / Linux (WSL2)"
          ]
        },
        {
          label: "Peripherals & Setup",
          icon: "fa-solid fa-sliders",
          name: "Compact Gear & Display",
          details: [
            "Monitor: TCL 25G64 25\" Fast IPS QD-Mini LED (FHD · 300Hz · 1ms)",
            "Mouse: Logitech G305 LIGHTSPEED (Wireless) & G203 (Wired)",
            "Mousepad: Fallen Pantera V2 Speed++",
            "Keyboard: Logitech K380 Multi-Device Wireless",
            "Gamepads: 2x 8BitDo Ultimate 2C (Mint & Transparent Black)",
            "Audio: JBL Quantum 360 Wireless (Headset) & JBL Wave Buds 2"
          ]
        }
      ]
    },
    gaming: {
      id: "personal-gaming",
      title: "Gaming Telemetry",
      badge: "STEAM NODE",
      steamUrl: "https://steamcommunity.com/id/Kaizenhauer",
      description: "Enthusiast gamer drawn to deep mechanics, high skill ceilings, and tactical discipline in competitive titles, paired with emergent narratives in expansive open worlds. Strong affinity for complex grand strategy systems, calculated turn-based decision making, and high-tempo, atmospheric roguelikes driven by kinetic action and build synergies.",
      recommendedGames: [
        {
          category: "Immersive Adventures",
          icon: "fa-solid fa-khanda",
          badge: "DARK WORLDS & LORE",
          games: [
            { title: "The Elder Scrolls V: Skyrim", tag: "Fantasy RPG", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/72850/capsule_231x87.jpg" },
            { title: "Sleeping Dogs", tag: "Open-World Action-Adventure", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/307690/capsule_231x87.jpg" },
            { title: "Hogwarts Legacy", tag: "Wizarding World RPG", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/capsule_231x87.jpg" },
            { title: "Grand Theft Auto IV", tag: "Open-World Action-Adventure", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/12210/capsule_231x87.jpg" }
          ]
        },
        {
          category: "Strategy & Simulation",
          icon: "fa-solid fa-chess-knight",
          badge: "DEEP SYSTEMS",
          games: [
            { title: "Civilization VI", tag: "World Domination", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289070/capsule_231x87.jpg" },
            { title: "Crusader Kings III", tag: "Medieval Dynasties", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1158310/capsule_231x87.jpg" },
            { title: "XCOM: Enemy Unknown", tag: "Alien Defense", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/268500/capsule_231x87.jpg" },
            { title: "Bloons TD 6", tag: "Tower Defense", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/960090/capsule_231x87.jpg" }
          ]
        },
        {
          category: "Indie Gems & Roguelikes",
          icon: "fa-solid fa-dice-d20",
          badge: "ATMOSPHERIC",
          games: [
            { title: "Katana ZERO", tag: "Stylish Action", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/460950/capsule_231x87.jpg" },
            { title: "Hotline Miami", tag: "Top-down Neo-Noir", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/219150/capsule_231x87.jpg" },
            { title: "Risk of Rain 2", tag: "Sci-Fi Roguelike", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/632360/capsule_231x87.jpg" },
            { title: "Don't Starve Together", tag: "Survival Adventure", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/322330/capsule_231x87.jpg" }
          ]
        },
        {
          category: "Tactical & Competitive",
          icon: "fa-solid fa-crosshairs",
          badge: "HIGH SKILL CEILING",
          games: [
            { title: "eFootball", tag: "Competitive Soccer", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1665460/capsule_231x87.jpg" },
            { title: "Battlefield 1", tag: "WW1 FPS", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238840/capsule_231x87.jpg" },
            { title: "Counter Strike 2", tag: "Tactical FPS", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/capsule_231x87.jpg" },
            { title: "Brawlhalla", tag: "Platform Fighter", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/291550/capsule_231x87.jpg" }
          ]
        }
      ]
    },
    music: {
      id: "personal-music",
      title: "Music & Creation",
      badge: "MUSIC ENTHUSIAST",
      spotifyUrl: "https://open.spotify.com/user/12163317381",
      description: "Music enthusiast who enjoys playing electric guitar, crafting beats, and experimenting in FL Studio across styles like Cloud Rap, R&B, Punk Rock, and Indie Rock as a casual creative hobby.",
      studioGear: [
        {
          name: "Gibson SG Standard Cream",
          edition: "2011 Limited Edition",
          category: "Electric Guitar",
          image: "assets/music/gibson-sg.jpg",
          icon: "fa-solid fa-guitar"
        },
        {
          name: "Focusrite Scarlett Solo (2nd Gen)",
          edition: "Audio Interface",
          category: "Audio Interface",
          image: "assets/music/focusrite-scarlett.jpg",
          icon: "fa-solid fa-sliders"
        },
        {
          name: "BM-800 Condenser",
          edition: "Microphone",
          category: "Recording Mic",
          image: "assets/music/bm800-mic.jpg",
          icon: "fa-solid fa-microphone-lines"
        },
        {
          name: "FL Studio",
          edition: "All Plugins Edition",
          category: "DAW Software",
          image: "assets/music/fl-studio.jpg",
          icon: "fa-solid fa-wave-square"
        }
      ]
    },
    cinema: {
      id: "personal-cinema",
      title: "Cinema & Series",
      badge: "MEDIA STREAM",
      description: "Appreciation for nuanced storytelling, complex character arcs, atmospheric world-building, and moral ambiguity. Drawn to cyberpunk dystopias, neo-noir crime sagas exploring power dynamics, and dark psychological narratives with existential weight across cinema, television, and anime.",
      topMovies: [
        { rank: 1, title: "Blade Runner", image: "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg" },
        { rank: 2, title: "The Matrix", image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg" },
        { rank: 3, title: "The Godfather", image: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UY562_CR8,0,380,562_.jpg" },
        { rank: 4, title: "Mr. Nobody", image: "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_QL75_UX380_CR0,0,380,562_.jpg" },
        { rank: 5, title: "Fight Club", image: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg" },
        { rank: 6, title: "Watchmen", image: "https://m.media-amazon.com/images/M/MV5BYmJiNTUwYWUtZDllNi00ODdjLWFmNTEtOTVlNmYxYTZhNzYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg" },
        { rank: 7, title: "Scarface", image: "https://m.media-amazon.com/images/M/MV5BNDUzYjY0NmUtMDM4OS00Y2Q5LWJiODYtNTk0ZTk0YjZhMTg1XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg" },
        { rank: 8, title: "The Wolf of Wall Street", image: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg" },
        { rank: 9, title: "Taxi Driver", image: "https://m.media-amazon.com/images/M/MV5BZDNhMGYwM2UtMTdlZS00MGQ1LWI2YzAtODY5YWI1MjYyNzRmXkEyXkFqcGc@._V1_QL75_UX380_CR0,7,380,562_.jpg" },
        { rank: 10, title: "Ghost in the Shell", image: "https://m.media-amazon.com/images/M/MV5BNzljMjA3MTQtMjM1OS00OGJjLWJiYzctZDRiMTk1NWI5YzQ5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg" }
      ],
      seriesCategories: [
        {
          category: "Live Action",
          icon: "fa-solid fa-tv",
          badge: "TOP 5 SERIES",
          items: [
            { rank: 1, title: "Mr. Robot", image: "https://m.media-amazon.com/images/M/MV5BOTg4NTBiZDAtZTc0YS00NzZlLTg4Y2ItNGQ3M2ZlMDM5MWQzXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg" },
            { rank: 2, title: "Breaking Bad", image: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg" },
            { rank: 3, title: "Dexter", image: "https://m.media-amazon.com/images/M/MV5BZDY4NjQxMGMtOTQ1Zi00ZGUyLTkyYWQtY2QwZjkyYmJkYjc4XkEyXkFqcGc@._V1_FMjpg_UX854_.jpg" },
            { rank: 4, title: "Peaky Blinders", image: "https://m.media-amazon.com/images/M/MV5BOGM0NGY3ZmItOGE2ZC00OWIxLTk0N2EtZWY4Yzg3ZDlhNGI3XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg" },
            { rank: 5, title: "Barry", image: "https://m.media-amazon.com/images/M/MV5BMmY0NjAzZjYtYmQzOC00ZTYxLWFjNWItOGY0NzYyMTc5NTA5XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg" }
          ]
        },
        {
          category: "Anime",
          icon: "fa-solid fa-dragon",
          badge: "TOP 5 ANIME",
          items: [
            { rank: 1, title: "Hunter x Hunter", image: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg" },
            { rank: 2, title: "Berserk", image: "https://m.media-amazon.com/images/M/MV5BMzEzMzhkNDgtY2Q0YS00MDk0LTg0YzItODY5ZjNjMDc4ODI3XkEyXkFqcGc@._V1_QL75_UY562_CR17,0,380,562_.jpg" },
            { rank: 3, title: "Dragon Ball Sagas", image: "https://m.media-amazon.com/images/M/MV5BN2VlNTdlMzQtYzE5OC00YmYwLTgyZTItYjEzMWY0ZDNjMTJhXkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg" },
            { rank: 4, title: "Death Note", image: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg" },
            { rank: 5, title: "Cowboy Bebop", image: "https://m.media-amazon.com/images/M/MV5BMTU3ZTdiOGQtYmYwYy00OGM5LThmNjMtZGJmNTVlZjk1ZmEyXkEyXkFqcGc@._V1_QL75_UY562_CR16,0,380,562_.jpg" }
          ]
        }
      ]
    }
  }
};
