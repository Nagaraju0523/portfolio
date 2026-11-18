export const portfolioData = {
  profile: {
    name: "Nagaraju Gajji",
    role: "Jr. Software Engineer",
    currentCompany: "Tech Tammina LLC",
    currentStatus: "Currently Working at Tech Tammina LLC",
    workingPeriod: "Aug 2026 – Present",
    badge: "Active Jr. Software Engineer at Tech Tammina LLC",
    tagline: "Software Engineer specializing in AI-powered automation, LLM integrations, Python, and FastAPI backend solutions.",
    shortBio: "Junior Software Engineer at Tech Tammina LLC, experienced in building AI-powered applications, intelligent automation workflows, and scalable backend systems using Python and FastAPI. Passionate about developing efficient, reliable, and innovative software solutions.",
    fullSummary:
      "Software Engineer with hands-on experience designing AI-powered automation, LLM-integrated applications, and scalable backend solutions. Skilled in Python, FastAPI, AI agents, API integrations, and intelligent workflow development. Built insurance automation and commercial fleet management solutions involving document comparison, API-based vehicle valuation, and database workflows; currently contributing to a visual AI automation platform with multi-agent capabilities.",
    location: "Hyderabad, Telangana, India",
    email: "nagarajugajji07@gmail.com",
    phone: "+91 9381549620",
    whatsappUrl: "https://wa.me/919381549620?text=Hi%20Nagaraju,%20I'm%20reaching%20out%20regarding%20your%20profile!",
    linkedin: "https://www.linkedin.com/in/nagaraju-yadav-820881315",
    github: "https://github.com/nagarajugajji",
    resumePdfUrl: "/Nagaraju_Gajji_Resume.html",
    avatar: "/profile.jpg"
  },

  skillsCategories: [
    {
      id: "ai-agents",
      title: "AI & Agentic Systems",
      skills: [
        { name: "AI Agents", icon: "agent" },
        { name: "Generative AI", icon: "sparkles" },
        { name: "LLM Integrations", icon: "brain" },
        { name: "RAG & Prompts", icon: "prompt" },
        { name: "Multi-Agent Workflows", icon: "workflow" }
      ]
    },
    {
      id: "llm-apis",
      title: "LLM Platforms & APIs",
      skills: [
        { name: "Google Gemini API", icon: "gemini" },
        { name: "OpenAI API", icon: "openai" },
        { name: "Anthropic Claude API", icon: "claude" },
        { name: "Groq API", icon: "groq" }
      ]
    },
    {
      id: "backend",
      title: "Programming & Backend",
      skills: [
        { name: "Python", icon: "python" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Django", icon: "django" },
        { name: "REST APIs", icon: "api" },
        { name: "Node.js & Express", icon: "node" }
      ]
    },
    {
      id: "frontend-db",
      title: "Frontend & Databases",
      skills: [
        { name: "React.js", icon: "react" },
        { name: "JavaScript (ES6+)", icon: "js" },
        { name: "MySQL", icon: "mysql" },
        { name: "HTML5 & CSS3", icon: "html" },
        { name: "Bootstrap", icon: "css" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Integrations",
      skills: [
        { name: "Git & GitHub", icon: "git" },
       
        { name: "N8N", icon: "N8N" },
        { name: "Wordpress", icon: "wordpress" },
        { name: "VS Code", icon: "code" }
      ]
    }
  ],

  experience: [
    {
      company: "Tech Tammina LLC",
      role: "Jr. Software Engineer",
      period: "Aug 2026 – Present",
      status: "Currently Employed",
      isCurrent: true,
      location: "Hyderabad, India",
      summary:
        "Designing AI-powered automation, LLM-integrated enterprise workflows, and scalable backend solutions using Python, FastAPI, React.js, and MySQL.",
      projects: [
        {
          name: "Smart Agent Platform",
          subtitle: "Visual AI Workflow Automation",
          tech: ["AI Agents", "LLMs", "FastAPI", "React.js", "Telegram API", "IMAP"],
          points: [
            "Developing a visual automation platform with reusable nodes for AI Agent, Chat Trigger, Chat Model, Gmail, IMAP, Code, If, and Telegram Trigger.",
            "Implemented AI Agent capabilities to interpret user requests, choose connected tools, and execute tasks with integrated AI models.",
            "Integrated external services and model APIs to support intelligent, reusable workflows; developing multi-agent task assignment and hierarchical execution."
          ]
        },
        {
          name: "AI-Powered Insurance Endorsement Automation System",
          subtitle: "Email Automation & LLM Document Extraction",
          tech: ["Python", "FastAPI", "LLMs", "Gmail API", "IMAP", "MySQL"],
          points: [
            "Developed automated intake of insurance endorsement requests from shared mailboxes using Gmail and IMAP integrations to process messages and attachments.",
            "Integrated LLM-based email interpretation and extraction of insurance information relevant to endorsement transactions.",
            "Automated database updates and outgoing email responses based on identified requests and extracted transaction details."
          ]
        },
        {
          name: "Commercial Fleet Management & Vehicle Valuation Platform",
          subtitle: "Commercial Auto Insurance Platform",
          tech: ["Python", "FastAPI", "React.js", "MySQL", "KBB API"],
          points: [
            "Developed a fleet management application for commercial auto insurance using Python, FastAPI, React.js, and MySQL.",
            "Implemented comparison of commercial auto insurance documents to support review of vehicle and coverage information across records.",
            "Integrated Kelley Blue Book (KBB) APIs to retrieve vehicle market values within the platform and support fleet valuation workflows."
          ]
        }
      ]
    }
  ],

  projects: [
    {
      id: "smart-agent-platform",
      title: "Smart Agent Platform",
      subtitle: "Visual AI Workflow Automation & Multi-Agent System",
      company: "Tech Tammina LLC",
      category: "AI & Full Stack",
      tagline: "Visual node-based workflow builder with autonomous multi-agent task execution.",
      shortDesc: "Visual automation canvas with reusable nodes (AI Agent, Model, IMAP, Telegram, Code) for intelligent multi-agent orchestration.",
      thumbnail: "/preview-smart-agent.png",
      previewType: "agent",
      metrics: "Multi-Agent • Reusable Nodes",
      overview:
        "A visual automation platform featuring drag-and-drop reusable nodes for AI Agent, Chat Trigger, Chat Model, Gmail, IMAP, Code execution, Conditional (If) logic, and Telegram Trigger. Users can orchestrate multi-agent workflows where agents autonomously interpret instructions, pick tools, and execute hierarchical tasks.",
      problemStatement:
        "Creating custom AI automation pipelines previously required hardcoded scripts and complex error-handling for each service integration.",
      keyFeatures: [
        "Visual node-based workflow canvas with dynamic connector inputs/outputs",
        "Autonomous AI Agent node capable of dynamic tool selection and goal execution",
        "Deep integrations with external model APIs (Gemini, OpenAI, Claude, Groq)",
        "Automated triggers from incoming Gmail, IMAP mailboxes, and Telegram messages",
        "Hierarchical multi-agent task assignment and execution routing"
      ],
      technologies: ["Python", "FastAPI", "React.js", "AI Agents", "LLM APIs", "Telegram API", "IMAP", "MySQL"],
      myContribution:
        "Architected node connection logic, implemented the core AI Agent execution engine with tool-calling capabilities, and integrated model APIs with external triggers.",
      github: "https://github.com/nagarajugajji",
      liveUrl: "#contact"
    },
    {
      id: "insurance-automation",
      title: "AI-Powered Insurance Endorsement System",
      subtitle: "Intelligent Email Intake & LLM Document Extraction",
      company: "Tech Tammina LLC",
      category: "AI & Backend",
      tagline: "Automated ingestion, LLM parsing, and database updates for insurance endorsement transactions.",
      shortDesc: "Autonomous mailbox intake system utilizing LLMs to extract insurance endorsement data and trigger automated database updates.",
      thumbnail: "/preview-insurance.png",
      previewType: "insurance",
      metrics: "LLM Extraction • Zero Manual Data Entry",
      overview:
        "An enterprise automation system developed at Tech Tammina LLC that monitors shared corporate mailboxes, parses unstructured customer endorsement requests and policy attachments using LLMs, and updates relational insurance databases with automated client notification.",
      problemStatement:
        "Manual processing of hundreds of daily endorsement emails leads to processing backlogs, transcription errors, and delayed policy updates.",
      keyFeatures: [
        "Automated email intake from shared mailboxes via Gmail and IMAP protocols",
        "LLM-powered extraction of insured names, policy numbers, effective dates, and endorsement changes",
        "Automated validation against existing policy records in MySQL",
        "Automated transactional outgoing email confirmation and exception handling"
      ],
      technologies: ["Python", "FastAPI", "LLM APIs", "Gmail API", "IMAP", "MySQL", "Prompt Engineering"],
      myContribution:
        "Developed the end-to-end IMAP/Gmail ingestion pipeline, authored prompt templates for extraction of policy endorsements, and built the automated MySQL database update routines.",
      github: "https://github.com/nagarajugajji",
      liveUrl: "#contact"
    },
    {
      id: "fleet-valuation",
      title: "Commercial Fleet Management & Valuation",
      subtitle: "Enterprise Vehicle Valuation & Document Comparison",
      company: "Tech Tammina LLC",
      category: "Full Stack",
      tagline: "Commercial auto insurance fleet tracking with Kelley Blue Book (KBB) API integration.",
      shortDesc: "Fleet management platform supporting automated policy document comparison and live KBB vehicle valuation lookups.",
      thumbnail: "/preview-fleet.png",
      previewType: "fleet",
      metrics: "KBB API • Document Comparison",
      overview:
        "A commercial fleet management application built at Tech Tammina LLC for commercial auto insurance. The platform allows underwriters and fleet managers to upload and cross-compare commercial auto insurance documents, audit vehicle coverage records, and query real-time Kelley Blue Book (KBB) market valuations.",
      problemStatement:
        "Underwriters struggled with manual comparison of multi-vehicle fleet policy schedules across disparate PDF records and determining accurate current market values.",
      keyFeatures: [
        "Interactive fleet inventory dashboard built with React.js and responsive tables",
        "Multi-document side-by-side comparison for vehicle schedules and coverage limits",
        "Live Kelley Blue Book (KBB) API integration for VIN-based vehicle valuation lookups",
        "FastAPI backend microservices with normalized MySQL fleet schemas"
      ],
      technologies: ["Python", "FastAPI", "React.js", "MySQL", "KBB API", "REST APIs"],
      myContribution:
        "Engineered the full-stack architecture, developed the document comparison engine, integrated the external KBB valuation endpoints, and structured the relational database.",
      github: "https://github.com/nagarajugajji",
      liveUrl: "#contact"
    },
    {
      id: "secure-transfer",
      title: "Online Secure File Transfer",
      subtitle: "SecureVault Cryptographic Platform",
      category: "Full Stack",
      tagline: "Bank-grade encrypted file transmission with expiring download access.",
      shortDesc: "End-to-end encrypted file sharing platform with auto-expiring links and role-based access.",
      thumbnail: "/preview-secure.png",
      previewType: "transfer",
      metrics: "SHA-256 Hashing • 100% Secure",
      overview:
        "A secure web platform enabling users and teams to exchange confidential business files with bank-grade encryption.",
      problemStatement:
        "Standard file transfer channels expose sensitive documents to data leaks without access audits.",
      keyFeatures: [
        "Cryptographic SHA-256 file checksum verification",
        "Auto-expiring, password-protected download links",
        "Role-based access control with secure session tokens",
        "Real-time transfer progress and tamper-evident audit logs"
      ],
      technologies: ["React", "Python", "FastAPI", "MySQL", "REST APIs", "Cryptography"],
      myContribution:
        "Designed the complete architecture: modular React frontend, secure FastAPI microservices for chunked encryption, and relational MySQL schemas.",
      github: "https://github.com/nagarajugajji",
      liveUrl: "#contact"
    },
    {
      id: "proctoring-system",
      title: "AI Based Proctoring System",
      subtitle: "ProctorAI Remote Examination Suite",
      category: "Full Stack",
      tagline: "Automated assessment tracking & anomaly alerts.",
      shortDesc: "Comprehensive testing portal with live webcam monitoring and anomaly detection alerts.",
      thumbnail: "/preview-proctor.png",
      previewType: "proctor",
      metrics: "Live Monitoring • Anomaly Alerts",
      overview:
        "A comprehensive testing portal for institutions to conduct tamper-resistant online examinations with automated monitoring.",
      problemStatement:
        "Manual proctoring during simultaneous exams is expensive and prone to human oversight.",
      keyFeatures: [
        "Live student verification and webcam session tracking",
        "Automated alerts on browser tab switching",
        "Educator management portal to create and monitor tests",
        "Instant score computation & downloadable scorecards"
      ],
      technologies: ["React", "Python", "FastAPI", "MySQL", "WebRTC", "REST APIs"],
      myContribution:
        "Built the candidate testing interface with full-screen locks and FastAPI backend endpoints for real-time violation logs.",
      github: "https://github.com/nagarajugajji",
      liveUrl: "#contact"
    }
  ],

  timeline: [
    {
      period: "Aug 2026 – Present",
      type: "Experience",
      title: "Jr. Software Engineer",
      institution: "Tech Tammina LLC",
      isCurrent: true,
      statusBadge: "Currently Working",
      description:
        "Designing AI-powered automation, LLM-integrated applications (Gemini, OpenAI, Claude, Groq), and scalable backend solutions with Python, FastAPI, and MySQL. Building visual multi-agent workflow engines and commercial insurance automation platforms.",
      highlights: [
        "Smart Agent Platform (Visual AI Workflow Automation)",
        "AI-Powered Insurance Endorsement Automation System",
        "Commercial Fleet Management & KBB Valuation Platform"
      ]
    },
    {
      period: "July 2025",
      type: "Education",
      title: "B.Tech in Computer Science & Engineering",
      institution: "Malla Reddy College, Hyderabad, Telangana",
      isCurrent: false,
      statusBadge: "Graduated",
      description:
        "Graduated with a strong foundation in computer science, software engineering principles, algorithms, data structures, relational databases (RDBMS), and web architecture.",
      highlights: [
        "Class of July 2025",
        "Malla Reddy College, Hyderabad",
        "Computer Science & Engineering"
      ]
    }
  ],

  certifications: [
    {
      title: "Full Stack Developer Certification",
      issuer: "iHub Innovative Placement Solutions",
      date: "Certified",
      icon: "code"
    },
    {
      title: "Python Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      date: "Certified",
      icon: "terminal"
    }
  ],

  about: {
    identity: "Jr. Software Engineer at Tech Tammina LLC",
    focus: "AI Agents, LLM Integrations, Python & FastAPI Backend Engineering",
    interests: "Multi-Agent Workflows, Visual Automation Canvas, RAG & Cloud APIs",
    summary:
      "Software Engineer at Tech Tammina LLC with hands-on experience designing AI-powered automation, LLM-integrated applications, and scalable backend solutions. Skilled in Python, FastAPI, AI agents, API integrations, and intelligent workflow development across enterprise insurance and visual AI systems."
  }
};
