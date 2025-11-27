import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Github, Linkedin, Mail, Smartphone, Globe, Code, Layers, Zap, Database, Download, Camera, Upload, Phone, GraduationCap, Award, University, Box, Cpu, Cloud, CheckCircle, ChevronDown, ChevronUp, Briefcase, Building2, Bot, ListTodo, Target, Rocket, PenTool, Lightbulb, TrendingUp, AlertTriangle, KanbanSquare, Compass, MousePointer2, Timer, TestTube, Lock, AlertOctagon, Terminal } from 'lucide-react';

// --- CONFIGURATION ---

// PERMANENT LINKS (Accessible to all visitors)
const PROFILE_PIC_URL: string = "https://raw.githubusercontent.com/ismaelnfilho/ismaelfilho.com/main/profile.jpeg"; 
const CV_FOLDER_URL: string = "/assets/CV_Ismael_Filho.pdf";
const BRANDFETCH_API_KEY: string = "1idqPbOlRjmPHYGorpN";

// --- Types & Data ---

type Language = 'en' | 'fr' | 'pt';

interface Content {
  nav: {
    about: string;
    services: string;
    experience: string;
    projects: string;
    experimentations: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    role: string;
    subrole: string;
    description: string;
    availability: string;
    cta_contact: string;
    cta_cv: string;
    trilingual: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
  };
  services: {
    title: string;
    items: {
      id: string;
      title: string;
      desc: string;
      points: string[];
    }[];
  };
  experience: {
    title: string;
    jobs: {
      period: string;
      role: string;
      company: string;
      location: string;
      description: string[];
      tech?: string[];
    }[];
  };
  projects: {
    title: string;
    intro: string;
    client_label: string;
    labels: {
      challenge: string;
      solution: string;
      impact: string;
    };
    items: {
      name: string;
      client: string;
      role: string;
      type: string;
      summary: string;
      challenge: string;
      solution: string;
      impact: string[];
      tags: string[];
    }[];
  };
  experimentations: {
    title: string;
    subtitle: string;
    message: string;
  };
  education: {
    title: string;
    academic: {
      degree: string;
      school: string;
      year: string;
      desc: string;
      details: string[]; // Competencies acquired
      domain?: string;
    }[];
    certs: {
      name: string;
      issuer: string;
      year: string;
      desc: string; // Added description for certs
      details: string[]; // Competencies acquired
      domain?: string;
    }[];
  };
  skills: {
    title: string;
    categories: {
      name: string;
      icon: any;
      items: string[];
    }[];
  };
  contact: {
    title: string;
    text: string;
    cta_email: string;
    cta_linkedin: string;
    cta_phone: string;
  };
}

const DATA: Record<Language, Content> = {
  en: {
    nav: {
      about: "01 // About",
      services: "02 // Expertise",
      experience: "03 // Experience",
      projects: "04 // Case Studies",
      experimentations: "05 // Experimentations",
      education: "06 // Education",
      skills: "07 // Skills",
      contact: "08 // Contact"
    },
    hero: {
      role: "DIGITAL PRODUCT SPECIALIST",
      subrole: "AI, AUTOMATION & NO-CODE ENTHUSIAST",
      description: "Building digital products where usability, structure and intelligence converge. I combine user-centric thinking, functional design and AI-powered automation to create experiences that work — beautifully and efficiently.",
      availability: "Available for new opportunities",
      cta_contact: "Start a conversation",
      cta_cv: "Download CV",
      trilingual: "TRILINGUAL"
    },
    about: {
      title: "About Me",
      p1: "With 6 years of experience designing and structuring digital products, I specialize in turning complex requirements into clear, usable and intelligent solutions. My work blends user-centric thinking, functional design and solid agile practices to create products that scale and deliver real value.",
      p2: "I’ve led discovery, specification and delivery across accessibility projects, multi-profile platforms and enterprise-level systems — always with a focus on rigor, coherence and real user needs. Today, I also integrate automation and AI into product workflows to accelerate teams and enhance product capabilities. I believe that clarity, empathy and collaboration are what make great products possible — and I bring these principles into every environment I work in."
    },
    services: {
      title: "What Do I Do",
      items: [
        {
          id: "automation",
          title: "I build AI-powered automations",
          desc: "I create intelligent automations that reduce manual work and increase operational efficiency using AI.",
          points: [
            "Orchestrating AI agents & complex flows (Agentic AI + n8n)",
            "Integrating LLMs (OpenAI/Gemini) into products & processes",
            "Creating embeddings & architectures with Vector DB",
            "Developing end-to-end automations via APIs & webhooks",
            "Designing hybrid (Human + AI) impact-driven systems"
          ]
        },
        {
          id: "po",
          title: "I structure and own digital products",
          desc: "I transform business goals into clear, well-defined products ready to be built.",
          points: [
            "Structuring backlogs & defining solid acceptance criteria",
            "Writing user stories, epics & functional specs",
            "Applying Behavior-Driven Development (Gherkin)",
            "Aligning user needs, business rules & tech capabilities",
            "Keeping vision, scope & roadmap organized"
          ]
        },
        {
          id: "pm",
          title: "I shape product strategy",
          desc: "I define direction, prioritize value, and help teams make better decisions.",
          points: [
            "Conducting discovery, mapping, interviews & opportunity analysis",
            "Structuring roadmaps, vision, KPIs & measurable outcomes",
            "Aligning stakeholders in complex contexts",
            "Benchmarking, market study & competitive analysis",
            "Transforming unstructured problems into actionable plans"
          ]
        },
        {
          id: "delivery",
          title: "I lead delivery and execution",
          desc: "I ensure continuous and predictable execution in agile, cross-functional environments.",
          points: [
            "Facilitating SCRUM ceremonies (planning, daily, reviews, retros)",
            "Orchestrating DEV, QA, UX & stakeholders for consistent delivery",
            "Managing releases (Web + iOS + Android) & publishing flows",
            "Tracking post-launch performance & adjusting delivery",
            "Balancing speed, quality & technical dependencies"
          ]
        },
        {
          id: "ux",
          title: "I design and prototype experiences",
          desc: "I shape ideas by creating testable, user-centric experiences.",
          points: [
            "Developing wireframes, flows & navigable prototypes",
            "Testing & validating hypotheses quickly with users",
            "Conducting co-creation, light UX research & rapid iterations",
            "Designing efficient, accessible & cross-platform experiences",
            "Using Figma, Framer, Webflow & Miro to speed up cycles"
          ]
        }
      ]
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          period: "July 2024 - Mar 2025",
          role: "Product Owner",
          company: "Eleven Labs",
          location: "Paris",
          description: [
            "Backlog management, writing user stories and functional specs in coordination with SEO and marketing teams.",
            "Release preparation for mobile apps (iOS, Android), performance monitoring, production rollout management.",
            "Facilitating SCRUM ceremonies, organizing demos and communication materials.",
            "Supporting continuous product improvement, process optimization, and documentation.",
            "Designing applications integrating AI."
          ],
          tech: ["AI", "Mobile", "SCRUM"]
        },
        {
          period: "Aug 2021 - July 2024",
          role: "Product Owner",
          company: "Akkodis",
          location: "Paris",
          description: [
            "Steering multiple parallel projects from discovery to delivery for web, desktop (Windows/macOS) and mobile (iOS/Android).",
            "Transverse coordination of DEV/QA/UX teams, synchronizing tasks and managing dependencies to secure deliveries.",
            "Co-creation workshops, benchmarks, and story mapping to frame value and align stakeholders.",
            "Prototyping design and validation: wireframes/mockups, targeted user tests, and rapid iterations.",
            "Gathering, formalizing, and challenging requirements; writing functional specs and BDD user stories.",
            "Implemented agile framework: value-based backlog prioritization, sprints (planning, reviews, retros), and regular demos."
          ],
          tech: ["Cross-platform", "Discovery", "BDD"]
        },
        {
          period: "Jan 2021 - Aug 2021",
          role: "Digital Consultant",
          company: "Actency",
          location: "Paris",
          description: [
            "Application Manager: Steering multi-account RUN with prioritization and budget tracking to ensure service continuity.",
            "Planning batches and daily coordination with tech/design teams to secure production releases.",
            "Proxy PO: Pre-sales interventions, product scoping, and structuring initial backlogs.",
            "Conducting story mapping, wireframing, and UX research (interviews, insights) to align product-user needs."
          ],
          tech: ["Consulting", "UX Research", "Pre-sales"]
        },
        {
          period: "Sep 2018 - July 2019",
          role: "Junior Digital Project Manager / PO",
          company: "Catalina Marketing",
          location: "Boulogne-Billancourt",
          description: [
            "Evolutionary maintenance and delivery of new features per product roadmap, ensuring service continuity.",
            "Co-creation workshops and competitive benchmarking to identify UX opportunities and prioritize high-value improvements.",
            "Prototyping design and validation: wireframes/mockups tested with stakeholders before development.",
            "Backlog management: writing Epics and User Stories, prioritization, and daily coordination with tech teams (France/Offshore).",
            "Quality Assurance: preparing and executing non-regression tests and tracking fixes until production.",
            "Documentation & Communication: functional specs, sprint reports, and regular stakeholder demos."
          ],
          tech: ["Offshore Mgmt", "UX Design", "QA"]
        },
        {
          period: "Sep 2016 - Aug 2018",
          role: "Digital Project Manager / PO",
          company: "Valeo",
          location: "Saint Denis",
          description: [
            "Steering the Tech'Assist redesign (Valeo technical support platform) using a user-centered Design Thinking approach.",
            "Business needs analysis and competitive benchmarking; scoping via project charter, functional specs, and technical schemas.",
            "Transforming requirements into a structured backlog (Epics, Features, User Stories) with prioritization and tracking.",
            "Setting up steering and performance dashboards on Google Data Studio.",
            "Optimizing incident processing for Valeo Service sites, with formal procedure documentation.",
            "Designing and deploying an XML documentary export to accelerate migration from XWiki to Drupal.",
            "Quality Assurance: preparing/executing non-regression tests, internal training, and Back Office evangelization."
          ],
          tech: ["Design Thinking", "Data Studio", "Migration"]
        }
      ]
    },
    projects: {
      title: "Case Studies",
      intro: "Selected works highlighting strategic vision and delivery excellence.",
      client_label: "Client",
      labels: {
        challenge: "Context / Challenge",
        solution: "Intervention",
        impact: "Impact"
      },
      items: [
        {
          name: "DERi",
          client: "Université Paul Sabatier",
          role: "Product Owner (2022-2024)",
          type: "R&D / Accessibility",
          summary: "A complete solution for creating and consuming tactile and auditory educational content, consisting of a desktop editor and a mobile app tailored for blind students. The project demanded a robust functional structure, advanced interaction rules, and an agile strategy to organize a brand-new ecosystem.",
          challenge: "Researchers at Paul Sabatier University sought to modernize learning access for visually impaired people. The limitations of Braille, scarcity of materials, and lack of accessible digital resources created deep barriers. It was necessary to design two interconnected applications—one for creating multimodal interactions (tactile, relief, gesture, audio) and another for student exploration—while maintaining coherence, accessibility, and functional rigor.",
          solution: "I structured the entire ecosystem's operation by conducting interviews, defining scope, and installing a full agile framework with workflows and criticality rules. We modeled complex journeys, story maps, and roadmaps, alongside creating all tactile and audio interaction rules. The backlog was written entirely in BDD/Gherkin to ensure technical precision. Documentation was adapted for screen readers to involve blind users. Following the designer's departure, I took over interface conception, ensuring continuity and validation with the tech team and researchers.",
          impact: [
             "Complete functional ecosystem: detailed specs for desktop editor and mobile app.",
             "Implemented Agile Framework: workflows, DoR, story mapping, and operational roadmap.",
             "Structured Backlog in BDD, eliminating ambiguity and reducing rework.",
             "Interfaces designed and delivered without a designer, maintaining visual and functional coherence.",
             "Predictable sprints with strong alignment between UX, accessibility, and development.",
             "Simplified collaboration process, inclusive of blind users and technical researchers."
          ],
          tags: ["FunctionalDesign", "Accessibility", "ProductDiscovery", "UXThinking", "AgileFrameworks", "BacklogStrategy", "BDD", "Prototyping"]
        },
        {
          name: "CASP",
          client: "LHH",
          role: "Proxy PO (2021-2022)",
          type: "B2B SaaS Platform",
          summary: "An integrated portal for employees, consultants, and supervisors, created to structure and centralize the career transition process following economic layoffs. The project required functional clarity, complex journey modeling, and an agile organization capable of enabling critical interactions between multiple profiles.",
          challenge: "LHH needed to modernize the management of economic layoff processes, traditionally conducted via phone, email, and visits. There was no single platform for employees to access info, send documents, or contact consultants, while supervisors lacked tools to pilot cases. The challenge included multiple profiles, limited digital literacy, and strong pressure for clarity and predictability.",
          solution: "I analyzed existing processes and structured three main flows (employee, consultant, supervisor). I conducted interviews, journey mapping, story mapping, and functional requirements definition. I installed an agile framework from scratch to ensure predictability. With the unexpected departure of the designer, I assumed all functional design and conception workshops, aligning technical vision, business rules, and UX. I also led stakeholder evangelization with specific training on project dynamics.",
          impact: [
             "Complete functional model for three profiles (employee, consultant, supervisor).",
             "Clear and prioritized backlog, allowing predictability and continuous development.",
             "Redesigned interface after designer departure, ensuring continuity without tempo loss.",
             "Structured story mapping and journeys, enabling faster and more assertive decisions.",
             "Aligned stakeholders thanks to training and applied pedagogy.",
             "Stabilized project, avoiding cancellation risk and ensuring consistent delivery."
          ],
          tags: ["FunctionalDesign", "AgileFrameworks", "ProductDiscovery", "UXThinking", "BacklogStrategy", "ServiceDesign", "ProcessMapping", "Prototyping"]
        },
        {
          name: "Coupon Network",
          client: "Catalina",
          role: "Product Owner (2018-2019)",
          type: "B2C Mobile & Web App",
          summary: "Continuous evolution of Catalina's cashback app and site, focused on improving engagement, usability, and campaign performance. Includes the creation of a raffles module that transformed user participation and elevated activation efficiency.",
          challenge: "The Coupon Network app had a large user base, but promotional actions had low visibility, and raffles were conducted disconnectedly: users were selected without knowing they were participating. This caused wasted opportunity, low base qualification, and complaints. The challenge was to create a clear, visual, motivating, and operationally efficient experience.",
          solution: "I started with problem diagnosis, data analysis, and internal interviews. I conducted ideation workshops and a live wireframing co-construction session—an unusual but effective approach to align marketing, stakeholders, and tech. The module was conceived end-to-end: hypotheses, benchmark, prototype, functional definitions, eligibility criteria, ticket logic, and participation flows. I monitored development through to delivery and post-launch impact analysis.",
          impact: [
             "New raffles module integrated into app/site with explicit user participation.",
             "Gamified experience with clear eligibility criteria (e.g., validating coupons).",
             "More qualified base, with participants fully aware of the campaign.",
             "Reduced conversion cost with significant improvement in activation performance.",
             "Stabilized engagement flow, reducing ambiguities and complaints.",
             "Fluid integration with marketing, facilitating new campaigns and A/B tests."
          ],
          tags: ["ProductDiscovery", "FunctionalDesign", "UXIdeation", "Prototyping", "EngagementDesign", "DataInformedDecisions", "BacklogDelivery", "MobileProduct"]
        },
        {
          name: "Tech'Assist",
          client: "Valeo",
          role: "PO / Project Manager (2016-2018)",
          type: "Internal Tool / Data",
          summary: "Complete redefinition of Valeo's global technical support tool, responsible for sustaining operations in dozens of countries. The project required large-scale functional conception, robust technical documentation, and international standardization of flows and data.",
          challenge: "TechAssist was a strategic tool used by thousands of technicians globally but suffered from obsolete technology, weak usability, and an engineer-centric structure distant from end-user needs. Valeo needed to renew the entire system, including functional architecture, technical content, navigation, and export mechanisms for different markets and languages.",
          solution: "I conducted benchmarks, deep usage analysis, and identification of critical failures to structure the new functional version. Over 90 pages of specs were produced, including technical schemas, detailed flows, documentation rules, interface behaviors, and navigation patterns. Multi-language and multi-instance management (up to 16 environments) was organized with reproducible processes. I also designed and implemented the XML export mechanism essential for feeding local markets.",
          impact: [
             "Complete functional base, replacing the old version with clear, scalable architecture.",
             "Robust documentation (+90 pages) to sustain technical teams and internationalization.",
             "XML export process implemented and standardized for multiple markets.",
             "Structured backlog with epics, features, and US ready for development.",
             "Improved usability and consistency, fixing historical product issues.",
             "Reduced technical dependency thanks to reusable patterns and processes."
          ],
          tags: ["FunctionalDesign", "TechnicalDocumentation", "ProcessEngineering", "BacklogDefinition", "Globalization", "XMLIntegration", "ProductDelivery", "UXStructure"]
        }
      ]
    },
    experimentations: {
      title: "My Experimentations",
      subtitle: "EXPERIMENTAL LAB",
      message: "Early-stage ideas and AI prototypes under reconstruction."
    },
    education: {
      title: "Education & Certifications",
      academic: [
        {
          degree: "No-code Developer & AI Automations (Agentic AI)",
          school: "No-Code StartUp",
          year: "2025 - 2026",
          desc: "Empower to create automations and AI agents in a no-code environment.",
          details: ["workflow automation", "AI agents design", "API integration", "no-code systems", "rapid prototyping", "data structuring for automation"],
          domain: "nocodestartup.io"
        },
        {
          degree: "Salesforce CRM Consultant",
          school: "FITEC",
          year: "2020",
          desc: "Train functional Salesforce consultants for CRM configuration and support.",
          details: ["sales process modeling", "object configuration", "flow automation", "CRM integration", "reporting", "functional consulting"],
          domain: "salesforce.com"
        },
        {
          degree: "Innovation Management Specialization",
          school: "HEC Paris",
          year: "2019",
          desc: "Develop competencies to lead corporate innovation.",
          details: ["innovation strategy", "design thinking", "MVP creation", "prototyping methods", "opportunity assessment", "market analysis"],
          domain: "hec.edu"
        },
        {
          degree: "Master in Information Systems & Digital Management",
          school: "Grenoble Ecole de Management",
          year: "2017 - 2019",
          desc: "Empower to manage information systems and strategic digital projects.",
          details: ["digital strategy", "IT governance", "systems architecture", "project management", "data-driven decision making", "transformation frameworks"],
          domain: "grenoble-em.com"
        },
        {
          degree: "Bachelor in Webdesign UX/UI",
          school: "Supdeweb Paris",
          year: "2016 - 2017",
          desc: "Train UX/UI professionals for web and mobile.",
          details: ["interface design", "wireframing", "user flows", "visual systems", "prototyping", "usability principles", "responsive design"],
          domain: "supdeweb.com"
        }
      ],
      certs: [
        { 
          name: "AI Product Manager", 
          issuer: "IBM Professional Certification", 
          year: "2025", 
          desc: "Certify professionals in strategic AI product management.",
          details: ["AI product strategy", "ML fundamentals", "evaluation metrics", "AI governance", "ethical considerations", "roadmap definition"],
          domain: "ibm.com" 
        },
        { 
          name: "Professional Scrum Product Owner (PSPO)", 
          issuer: "Scrum.org", 
          year: "2020", 
          desc: "Validate mastery of the Product Owner role within the Scrum framework.",
          details: ["backlog management", "value definition", "user stories", "sprint planning", "stakeholder alignment", "product metrics"],
          domain: "scrum.org" 
        },
        { 
          name: "Salesforce Administrator", 
          issuer: "Salesforce", 
          year: "2020", 
          desc: "Qualify administrators to configure and maintain Salesforce environments.",
          details: ["user and security model", "automation (Flows)", "objects & fields", "dashboards & reports", "platform configuration", "process optimization"],
          domain: "salesforce.com" 
        }
      ]
    },
    skills: {
      title: "The tools I use",
      categories: [
        {
          name: "AI & Automation",
          icon: Zap,
          items: ["LLM Integration", "Prompt Engineering", "Embeddings & Vector DB", "n8n Workflows", "Agentic AI Orchestration", "OpenAI / Gemini APIs", "No-code / Low-code Automation", "Supabase Functions & Webhooks"]
        },
        {
          name: "Product Foundations",
          icon: Layers,
          items: ["Product Discovery", "Agile Delivery", "SCRUM", "Roadmapping", "User Stories & Functional Specs", "Backlog Strategy & Prioritization", "Story Mapping", "Behavior Driven Development", "Gherkin", "Service Design Tools"]
        },
        {
          name: "Design & Prototyping",
          icon: PenTool,
          items: ["Figma", "Adobe XD", "Miro", "Framer", "Webflow", "Wireframing", "Rapid Prototyping", "Interaction Mapping", "Interface Architecture"]
        },
        {
          name: "Technical",
          icon: Code,
          items: ["HTML / CSS", "Databases (MySQL, Supabase, pgvector)", "XML / JSON", "API Consumption & Webhooks", "Analytics (GA, Looker Studio)", "Data Modeling (basic)"]
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      text: "I’m open to new opportunities and conversations. If you’d like to connect or discuss a project, feel free to reach out — I’ll get back to you soon.",
      cta_email: "Send Email",
      cta_linkedin: "LinkedIn Profile",
      cta_phone: "Call Me"
    }
  },
  fr: {
    nav: {
      about: "01 // À Propos",
      services: "02 // Expertise",
      experience: "03 // Expérience",
      projects: "04 // Études de Cas",
      experimentations: "05 // Expérimentations",
      education: "06 // Formation",
      skills: "07 // Compétences",
      contact: "08 // Contact"
    },
    hero: {
      role: "SPÉCIALISTE PRODUIT DIGITAL",
      subrole: "ENTHOUSIASTE IA, AUTOMATION & NO-CODE",
      description: "Concevoir des produits digitaux où convergent utilisabilité, structure et intelligence. J'allie pensée centrée utilisateur, design fonctionnel et automatisation IA pour créer des expériences performantes — à la fois belles et efficaces.",
      availability: "Disponible pour de nouvelles opportunités",
      cta_contact: "Me contacter",
      cta_cv: "Télécharger CV",
      trilingual: "TRILINGUE"
    },
    about: {
      title: "À Propos",
      p1: "Avec 6 ans d'expérience dans la conception et la structuration de produits numériques, je transforme des exigences complexes en solutions claires, utilisables et intelligentes. Mon travail allie pensée centrée utilisateur, design fonctionnel et pratiques agiles solides pour créer des produits scalables et à forte valeur.",
      p2: "J'ai piloté discovery, spécification et delivery pour des projets d'accessibilité, des plateformes multi-profils et des systèmes d'entreprise — toujours avec rigueur, cohérence et un focus sur les besoins réels. Aujourd'hui, j'intègre l'automatisation et l'IA dans les workflows pour accélérer les équipes et enrichir les produits. Je crois que la clarté, l'empathie et la collaboration sont la clé des grands produits — et j'apporte ces principes dans chaque environnement où je travaille."
    },
    services: {
      title: "Ce Que Je Fais",
      items: [
        {
          id: "automation",
          title: "Je crée des automatisations intelligentes",
          desc: "Je conçois des automatisations qui réduisent le travail manuel et augmentent l'efficacité opérationnelle grâce à l'IA.",
          points: [
            "Orchestration d'agents IA & flux complexes (Agentic AI + n8n)",
            "Intégration de LLMs (OpenAI/Gemini) dans les produits & processus",
            "Création d'embeddings & architectures Vector DB",
            "Automatisations de bout en bout via API & webhooks",
            "Conception de systèmes hybrides (Humain + IA) axés sur l'impact"
          ]
        },
        {
          id: "po",
          title: "Je structure et porte les produits digitaux",
          desc: "Je transforme les objectifs commerciaux en produits clairs, bien définis et prêts à être construits.",
          points: [
            "Structuration de backlogs & critères d'acceptation solides",
            "Rédaction de user stories, epics & spécifications fonctionnelles",
            "Application du Behavior-Driven Development (Gherkin)",
            "Alignement besoins utilisateurs, règles métier & capacités techniques",
            "Organisation constante de la vision, du périmètre & de la roadmap"
          ]
        },
        {
          id: "pm",
          title: "Je façonne la stratégie produit",
          desc: "Je définis la direction, priorise la valeur et aide les équipes à prendre de meilleures décisions.",
          points: [
            "Conduite de discovery, mapping, interviews & analyse d'opportunités",
            "Structuration de roadmaps, vision, KPIs & résultats mesurables",
            "Alignement des parties prenantes dans des contextes complexes",
            "Benchmark, étude de marché & analyse concurrentielle",
            "Transformation de problèmes non structurés en plans actionnables"
          ]
        },
        {
          id: "delivery",
          title: "Je pilote le delivery et l'exécution",
          desc: "Je garantis une exécution continue et prévisible dans des environnements agiles et multifonctionnels.",
          points: [
            "Facilitation des cérémonies SCRUM (planning, daily, reviews, retros)",
            "Orchestration DEV, QA, UX & stakeholders pour une livraison constante",
            "Gestion des releases (Web + iOS + Android) & flux de publication",
            "Suivi de la performance post-lancement & ajustement",
            "Équilibre entre vitesse, qualité & dépendances techniques"
          ]
        },
        {
          id: "ux",
          title: "Je conçois et prototype des expériences",
          desc: "Je donne forme aux idées en créant des expériences testables et centrées sur l'utilisateur.",
          points: [
            "Développement de wireframes, flux & prototypes navigables",
            "Test & validation rapide d'hypothèses avec utilisateurs",
            "Co-création, recherche UX légère & itérations rapides",
            "Design d'expériences efficaces, accessibles & cross-platform",
            "Utilisation de Figma, Framer, Webflow & Miro pour accélérer les cycles"
          ]
        }
      ]
    },
    experience: {
      title: "Parcours Professionnel",
      jobs: [
        {
          period: "Juillet 2024 - Mars 2025",
          role: "Product Owner",
          company: "Eleven Labs",
          location: "Paris",
          description: [
            "Gestion du backlog, rédaction d'histoires utilisateur et spécifications fonctionnelles, en coordination avec équipes SEO et marketing.",
            "Préparation des releases d'une application mobile (iOS, Android), suivi des performances, gestion de la mise en production.",
            "Animation des cérémonies SCRUM, organisation des démonstrations et supports pour faciliter la communication.",
            "Accompagnement dans l’amélioration continue du produit, optimisation des processus et documentation.",
            "Conception d’applications intégrant l’IA."
          ],
          tech: ["IA", "Mobile", "SCRUM"]
        },
        {
          period: "Août 2021 - Juillet 2024",
          role: "Product Owner",
          company: "Akkodis",
          location: "Paris",
          description: [
            "Pilotage de plusieurs projets en parallèle, du discovery au delivery, pour des applications web, desktop (Windows/macOS) et mobile (iOS/Android).",
            "Coordination transverse des équipes DEV/QA/UX, synchronisation des travaux et gestion des dépendances pour sécuriser les livraisons.",
            "Ateliers de co‑création, benchmarks et story mapping pour cadrer la valeur et aligner les parties prenantes.",
            "Conception et validation de prototypes: wireframes/maquettes, tests utilisateurs ciblés et itérations rapides.",
            "Recueil, formalisation et challenge des besoins; rédaction de spécifications fonctionnelles et user stories en BDD.",
            "Cadre agile mis en place: priorisation du backlog par valeur, sprints (planning, reviews, rétros) et démonstrations régulières."
          ],
          tech: ["Cross-platform", "Discovery", "BDD"]
        },
        {
          period: "Jan 2021 - Août 2021",
          role: "Consultant Digital",
          company: "Actency",
          location: "Paris",
          description: [
            "Responsable applications : Pilotage du RUN multi‑comptes avec priorisation et suivi budgétaire, assurant la continuité de service.",
            "Planification des lots et coordination quotidienne avec les équipes techniques et design pour sécuriser les mises en production.",
            "Proxy PO : Interventions d’avant‑vente et cadrage produit, structuration des backlogs initiaux.",
            "Conduite de story mapping, wireframing et recherche UX (entretiens, synthèse d’insights) pour aligner produit‑utilisateur."
          ],
          tech: ["Conseil", "UX Research", "Avant-vente"]
        },
        {
          period: "Sep 2018 - Juillet 2019",
          role: "Junior Digital Project Manager / PO",
          company: "Catalina Marketing",
          location: "Boulogne-Billancourt",
          description: [
            "Maintenance évolutive et livraison de nouvelles fonctionnalités conformément à la roadmap produit, avec continuité de service assurée.",
            "Ateliers de co‑création et benchmark concurrentiel pour identifier des opportunités UX et prioriser les améliorations à plus forte valeur.",
            "Conception et validation de prototypes: wireframes/maquettes testés auprès des stakeholders avant développement.",
            "Gestion du backlog: rédaction d’Epics et User Stories, priorisation et coordination quotidienne avec des équipes techniques (France/Offshore).",
            "Garantie qualité: préparation et exécution de tests de non‑régression et suivi des corrections jusqu’à la mise en production.",
            "Documentation et communication: spécifications fonctionnelles, comptes‑rendus de sprint et démonstrations régulières."
          ],
          tech: ["Offshore Mgmt", "UX Design", "QA"]
        },
        {
          period: "Sep 2016 - Août 2018",
          role: "Chef de Projet Digital / PO",
          company: "Valeo",
          location: "Saint Denis",
          description: [
            "Pilotage de la refonte de Tech’Assist (plateforme support technique Valeo), selon une approche Design Thinking centrée utilisateur.",
            "Analyse des besoins métier et benchmark; cadrage via charte projet, spécifications fonctionnelles et schémas techniques.",
            "Transformação des exigences en backlog structuré (Epics, Features, User Stories) avec priorisation et suivi.",
            "Mise en place de tableaux de bord de pilotage et de performance sur Google Data Studio.",
            "Optimisation du traitement des incidents sur les sites Valeo Service, avec formalisation de procédures.",
            "Conception et déploiement d’un export documentaire XML pour accélérer la migration de l’ancienne plateforme XWiki vers Drupal.",
            "Garantie qualité: tests de non‑régression, formations internes et évangélisation du Back Office."
          ],
          tech: ["Design Thinking", "Data Studio", "Migration"]
        }
      ]
    },
    projects: {
      title: "Études de Cas",
      intro: "Une sélection de projets mettant en avant vision stratégique et excellence opérationnelle.",
      client_label: "Client",
      labels: {
        challenge: "Contexte / Défi",
        solution: "Intervention",
        impact: "Impact"
      },
      items: [
        {
          name: "DERi",
          client: "Université Paul Sabatier",
          role: "Product Owner (2022-2024)",
          type: "R&D / Accessibilité",
          summary: "Solution complète pour la création et la consommation de contenus éducatifs tactiles et sonores, composée d'un éditeur desktop et d'une app mobile orientée vers les étudiants aveugles. Le projet exigeait une structure fonctionnelle robuste, des règles d'interaction avancées et une stratégie agile capable d'organiser un écosystème entièrement nouveau.",
          challenge: "Les chercheurs de l'Université Paul Sabatier cherchaient à moderniser l'accès à l'apprentissage pour les personnes déficientes visuelles. La limitation du matériel braille, la rareté des exemplaires et le manque de ressources numériques accessibles créaient des barrières profondes. Il était nécessaire de concevoir deux applications interconnectées — l'une pour la création d'interactions multimodales (tactile, relief, gesture et audio) et l'autre pour permettre leur exploration par les étudiants — tout en maintenant cohérence, accessibilité et rigueur fonctionnelle.",
          solution: "L'intervention a impliqué de structurer tout le fonctionnement de l'écosystème, en menant des entretiens, en définissant le périmètre et en installant un cadre agile complet avec workflows et règles de criticité. Des parcours complexes, story mapping et roadmap ont été modélisés, ainsi que la création de toutes les règles d'interaction tactile et sonore. Le backlog a été rédigé intégralement en BDD/Gherkin pour garantir la précision technique. La documentation a été adaptée pour les lecteurs d'écran. Avec le départ du designer, j'ai assumé la conception des interfaces — assurant continuité et validation auprès de l'équipe technique et des chercheurs.",
          impact: [
             "Écosystème fonctionnel complet : spécifications détaillées pour éditeur desktop e app mobile.",
             "Cadre agile implémenté : workflows, DoR, story mapping et roadmap opérationnel.",
             "Backlog structuré en BDD, éliminant l'ambiguïté et réduisant le retravail.",
             "Interfaces conçues et livrées sans designer, maintenant la cohérence visuelle et fonctionnelle.",
             "Sprints plus prévisibles, avec un alignement fort entre UX, accessibilité et développement.",
             "Processus de collaboration simplifié, y compris pour les utilisateurs aveugles et les chercheurs techniques."
          ],
          tags: ["FunctionalDesign", "Accessibility", "ProductDiscovery", "UXThinking", "AgileFrameworks", "BacklogStrategy", "BDD", "Prototyping"]
        },
        {
          name: "CASP",
          client: "LHH",
          role: "Proxy PO (2021-2022)",
          type: "Plateforme SaaS B2B",
          summary: "Portail intégré pour employés, consultants et superviseurs, créé pour structurer et centraliser tout le processus de transition professionnelle après des licenciements économiques. Le projet exigeait une clarté fonctionnelle, une modélisation de parcours complexes et une organisation agile capable de donner vie à des interactions critiques entre multiples profils.",
          challenge: "LHH devait moderniser la gestion des processus de licenciement économique, traditionnellement menés par téléphone, e-mails et visites. Il manquait une plateforme unique permettant aux employés d'accéder aux infos, d'envoyer des documents ou de contacter des consultants. Le défi incluait de multiples profils, une littératie numérique limitée et une forte pression pour la clarté et la prévisibilité.",
          solution: "L'intervention a impliqué l'analyse profonde du processus existant et la structuration des trois flux principaux (employé, consultant, superviseur). Des entretiens, cartographie de parcours, story mapping et définition de requis fonctionnels ont été menés. Le cadre agile a été installé de zéro. Avec le départ inattendu du designer, tout le design fonctionnel et les ateliers de conception ont été assumés directement, permettant d'aligner vision technique, règles métier et UX. Le travail a aussi inclus l'évangélisation des parties prenantes avec des formations spécifiques.",
          impact: [
             "Modèle fonctionnel complet pour trois profils (employé, consultant, superviseur).",
             "Backlog clair et priorisé, permettant prévisibilité et développement continu.",
             "Interface redesignée après départ du designer, assurant la continuité sans perte de rythme.",
             "Story mapping et parcours structurés, permettant des décisions plus rapides et assertives.",
             "Parties prenantes alignées, grâce à la formation et à la pédagogie appliquée.",
             "Projet stabilisé, évitant le risque d'annulation et assurant une livraison constante."
          ],
          tags: ["FunctionalDesign", "AgileFrameworks", "ProductDiscovery", "UXThinking", "BacklogStrategy", "ServiceDesign", "ProcessMapping", "Prototyping"]
        },
        {
          name: "Coupon Network",
          client: "Catalina",
          role: "Product Owner (2018-2019)",
          type: "App Mobile & Web B2C",
          summary: "Évolution continue de l'application et du site de cashback de Catalina, avec un focus sur l'amélioration de l'engagement, de l'utilisabilité et de la performance des campagnes. Inclut la création d'un module de tirages au sort qui a transformé la participation des utilisateurs et élevé l'efficacité des activations.",
          challenge: "L'application Coupon Network avait une grande base d'utilisateurs, mais les actions promotionnelles avaient une faible visibilité et les tirages au sort étaient menés de façon déconnectée : les utilisateurs étaient sélectionnés sans savoir qu'ils participaient. Cela générait un gaspillage d'opportunité et des réclamations. Le défi était de créer une expérience claire, visuelle, motivante et opérationnellement efficace.",
          solution: "L'action a commencé par un diagnostic, analyse de données et entretiens. Des ateliers d'idéation et une session de co-construction de wireframes en direct ont été menés — une approche efficace pour aligner marketing, parties prenantes et tech. Le module a été conçu de bout en bout : hypothèses, benchmark, prototype, définitions fonctionnelles, critères d'éligibilité, logique de tickets et flux de participation. Le développement a été suivi jusqu'à la livraison et l'analyse d'impact.",
          impact: [
             "Nouveau module de tirages intégré à l'app et au site, avec participation explicite.",
             "Expérience gamifiée, avec critères clairs d'éligibilité (ex.: valider des coupons).",
             "Base mais qualifiée, avec des participants pleinement conscients de la campagne.",
             "Réduction du coût de conversion, avec amélioration expressive de la performance.",
             "Flux d'engagement stabilisé, réduisant ambiguïtés et réclamations.",
             "Intégration fluide avec le marketing, facilitant de nouvelles campagnes et A/B tests."
          ],
          tags: ["ProductDiscovery", "FunctionalDesign", "UXIdeation", "Prototyping", "EngagementDesign", "DataInformedDecisions", "BacklogDelivery", "MobileProduct"]
        },
        {
          name: "Tech'Assist",
          client: "Valeo",
          role: "PO / Chef de Projet (2016-2018)",
          type: "Outil Interne / Data",
          summary: "Redéfinition complète de l'outil mondial d'assistance technique de Valeo, responsable de soutenir les opérations dans des dizaines de pays. Le projet exigeait une conception fonctionnelle à grande échelle, une documentation technique robuste et une standardisation internationale des flux et des données.",
          challenge: "TechAssist était un outil stratégique utilisé par des milliers de techniciens, mais souffrait d'une technologie obsolète, d'une usabilité faible et d'une structure centrée ingénieur — loin des besoins réels. Valeo devait renouveler tout le système, incluant architecture fonctionnelle, contenu technique, navigation et mécanismes d'export pour différents marchés et langues.",
          solution: "Des études de benchmark et une analyse profonde de l'usage ont été menées pour identifier les failles critiques et structurer la nouvelle version. Plus de 90 pages de spécifications ont été produites, incluant schémas techniques, flux détaillés, règles de documentation et modèles de navigation. La gestion multi-langue et multi-instance a été organisée. L'intervention a inclus le dessin et l'implémentation du mécanisme d'export XML, essentiel pour alimenter les marchés locaux.",
          impact: [
             "Base fonctionnelle complète, remplaçant l'ancienne version par une architecture claire et scalable.",
             "Documentation robuste (+90 pages) pour soutenir l'équipe technique et l'internationalisation.",
             "Processus d'export XML implémenté et standardisé pour multiples marchés.",
             "Backlog structuré, avec epics, features et US prêtes pour développement.",
             "Meilleure usabilité et consistance, corrigeant des problèmes historiques.",
             "Réduction de dépendance technique, grâce à des standards et processus réutilisables."
          ],
          tags: ["FunctionalDesign", "TechnicalDocumentation", "ProcessEngineering", "BacklogDefinition", "Globalization", "XMLIntegration", "ProductDelivery", "UXStructure"]
        }
      ]
    },
    experimentations: {
      title: "Mes Expérimentations",
      subtitle: "LABORATOIRE EXPÉRIMENTAL",
      message: "Idées préliminaires et prototypes IA en cours de reconstruction."
    },
    education: {
      title: "Formation & Certifications",
      academic: [
        {
          degree: "Développeur No-code & Automatisations IA (Agentic AI)",
          school: "No-Code StartUp",
          year: "2025 - 2026",
          desc: "Former à la création d'automatisations et d'agents IA dans un environnement no-code.",
          details: ["workflow automation", "AI agents design", "API integration", "no-code systems", "rapid prototyping", "data structuring for automation"],
          domain: "nocodestartup.io"
        },
        {
          degree: "Consultant Technico Fonctionnel CRM Salesforce",
          school: "FITEC",
          year: "2020",
          desc: "Former des consultants fonctionnels Salesforce pour la configuration et le support CRM.",
          details: ["sales process modeling", "object configuration", "flow automation", "CRM integration", "reporting", "functional consulting"],
          domain: "salesforce.com"
        },
        {
          degree: "Master Manager des Systèmes d’Information et du Numérique",
          school: "Grenoble Ecole de Management",
          year: "2017 - 2019",
          desc: "Former à la gestion des systèmes d'information et des projets numériques stratégiques.",
          details: ["digital strategy", "IT governance", "systems architecture", "project management", "data-driven decision making", "transformation frameworks"],
          domain: "grenoble-em.com"
        },
        {
          degree: "Spécialisation Management de l’innovation",
          school: "HEC Paris",
          year: "2019",
          desc: "Développer des compétences pour mener l'innovation en entreprise.",
          details: ["innovation strategy", "design thinking", "MVP creation", "prototyping methods", "opportunity assessment", "market analysis"],
          domain: "hec.edu"
        },
        {
          degree: "Bachelor Webdesign UX/UI",
          school: "Supdeweb Paris",
          year: "2016 - 2017",
          desc: "Former des professionnels UX/UI pour le web et le mobile.",
          details: ["interface design", "wireframing", "user flows", "visual systems", "prototyping", "usability principles", "responsive design"],
          domain: "supdeweb.com"
        }
      ],
      certs: [
        { 
          name: "AI Product Manager", 
          issuer: "IBM Professional Certification", 
          year: "2025", 
          desc: "Certifier les professionnels à la gestion stratégique de produits IA.",
          details: ["AI product strategy", "ML fundamentals", "evaluation metrics", "AI governance", "ethical considerations", "roadmap definition"],
          domain: "ibm.com" 
        },
        { 
          name: "Professional Scrum Product Owner (PSPO)", 
          issuer: "Scrum.org", 
          year: "2020", 
          desc: "Valider la maîtrise du rôle de Product Owner dans le cadre Scrum.",
          details: ["backlog management", "value definition", "user stories", "sprint planning", "stakeholder alignment", "product metrics"],
          domain: "scrum.org" 
        },
        { 
          name: "Salesforce Administrator", 
          issuer: "Salesforce", 
          year: "2020", 
          desc: "Qualifier les administrateurs pour configurer et maintenir les environnements Salesforce.",
          details: ["user and security model", "automation (Flows)", "objects & fields", "dashboards & reports", "platform configuration", "process optimization"],
          domain: "salesforce.com" 
        }
      ]
    },
    skills: {
      title: "Les outils que j'utilise",
      categories: [
        {
          name: "IA & Automatisation",
          icon: Zap,
          items: ["Intégration LLM", "Prompt Engineering", "Embeddings & Vector DB", "Workflows n8n", "Orchestration IA Agentique", "APIs OpenAI / Gemini", "Automatisation No-code / Low-code", "Fonctions Supabase & Webhooks"]
        },
        {
          name: "Fondamentaux Produit",
          icon: Layers,
          items: ["Product Discovery", "Agile Delivery", "SCRUM", "Roadmapping", "User Stories & Spécs Fonctionnelles", "Stratégie Backlog & Priorisation", "Story Mapping", "Behavior Driven Development", "Gherkin", "Outils Service Design"]
        },
        {
          name: "Design & Prototypage",
          icon: PenTool,
          items: ["Figma", "Adobe XD", "Miro", "Framer", "Webflow", "Wireframing", "Prototypage Rapide", "Mapping d'Interaction", "Architecture d'Interface"]
        },
        {
          name: "Technique",
          icon: Code,
          items: ["HTML/CSS", "Bases de données (MySQL, Supabase, pgvector)", "XML/JSON", "Consommation API & Webhooks", "Analytics (GA, Looker Studio)", "Modélisation de Données (basique)"]
        }
      ]
    },
    contact: {
      title: "Contactez-moi",
      text: "Je suis ouvert aux nouvelles opportunités et aux échanges. Si vous souhaitez entrer en contact ou discuter d'un projet, n'hésitez pas — je reviendrai vers vous rapidement.",
      cta_email: "Envoyer un email",
      cta_linkedin: "Profil LinkedIn",
      cta_phone: "M'appeler"
    }
  },
  pt: {
    nav: {
      about: "01 // Sobre",
      services: "02 // O Que Faço",
      experience: "03 // Experiência",
      projects: "04 // Estudos de Caso",
      experimentations: "05 // Experimentações",
      education: "06 // Formação",
      skills: "07 // Habilidades",
      contact: "08 // Contato"
    },
    hero: {
      role: "ESPECIALISTA EM PRODUTO DIGITAL",
      subrole: "ENTUSIASTA IA, AUTOMAÇÃO & NO-CODE",
      description: "Construindo produtos digitais onde usabilidade, estrutura e inteligência convergem. Combino pensamento centrado no usuário, design funcional e automação via IA para criar experiências que funcionam — com beleza e eficiência.",
      availability: "Disponível para novas oportunidades",
      cta_contact: "Entrar em contato",
      cta_cv: "Baixar CV",
      trilingual: "TRILÍNGUE"
    },
    about: {
      title: "Sobre Mim",
      p1: "Com 6 anos de experiência projetando e estruturando produtos digitais, sou especialista em transformar requisitos complexos em soluções claras, usáveis e inteligentes. Meu trabalho une pensamento centrado no usuário, design funcional e práticas ágeis sólidas para criar produtos escaláveis e de alto valor.",
      p2: "Já liderei discovery, especificação e entrega em projetos de acessibilidade, plataformas multiperfil e sistemas corporativos — sempre com foco em rigor, coerência e necessidades reais. Hoje, também integro automação e IA nos fluxos de produto para acelerar equipes e potencializar soluções. Acredito que clareza, empatia e colaboração são o que tornam grandes produtos possíveis — e trago esses princípios para todo ambiente em que atuo."
    },
    services: {
      title: "O Que Eu Faço",
      items: [
        {
          id: "automation",
          title: "Eu crio automações inteligentes",
          desc: "Eu crio automações inteligentes que reduzem trabalho manual e aumentam eficiência operacional usando IA.",
          points: [
            "Orchestro agentes de IA e fluxos complexos (Agentic AI + n8n)",
            "Integro LLMs (OpenAI/Gemini) em produtos e processos",
            "Crio embeddings e arquiteturas com Vector DB",
            "Desenvolvo automações ponta a ponta via APIs e webhooks",
            "Desenho sistemas híbridos (humano + IA) orientados a impacto"
          ]
        },
        {
          id: "po",
          title: "Eu estruturo e lidero produtos digitais",
          desc: "Eu transformo objetivos de negócio em produtos claros, bem definidos e prontos para serem construídos.",
          points: [
            "Estruturo backlogs e defino critérios de aceitação sólidos",
            "Escrevo user stories, epics e specs completas",
            "Aplico Behavior-Driven Development (Gherkin)",
            "Garanto alinhamento entre usuário, negócio e tecnologia",
            "Mantenho visão, escopo e roadmap sempre organizados"
          ]
        },
        {
          id: "pm",
          title: "Eu moldo a estratégia de produto",
          desc: "Eu defino direção, priorizo valor e ajudo equipes a tomarem decisões melhores.",
          points: [
            "Conduzo discovery, mapping, entrevistas e análise de oportunidades",
            "Estruturo roadmaps, visão, KPIs e outcomes mensuráveis",
            "Alinho stakeholders em contextos complexos",
            "Realizo benchmark e análise competitiva",
            "Transformo problemas não estruturados em planos acionáveis"
          ]
        },
        {
          id: "delivery",
          title: "Eu lidero entrega e execução",
          desc: "Eu garanto execução contínua e previsível em ambientes ágeis e multifuncionais.",
          points: [
            "Facilitating SCRUM ceremonies (planning, daily, reviews, retros)",
            "Orchestro DEV, QA, UX e stakeholders para entregar com consistência",
            "Gerencio releases (web + iOS + Android) e fluxo de publicação",
            "Acompanho performance pós-lançamento e ajusto entregas",
            "Equilibro velocidade, qualidade e dependências técnicas"
          ]
        },
        {
          id: "ux",
          title: "Eu desenho e prototipo experiências",
          desc: "Eu dou forma às ideias criando experiências testáveis e centradas no usuário.",
          points: [
            "Desenvolvo wireframes, fluxos e protótipos navegáveis",
            "Testo e valido hipóteses rapidamente com usuários",
            "Conduzo co-criação, UX research leve e iterações rápidas",
            "Desenho experiências eficientes, acessíveis e cross-platform",
            "Uso Figma, Framer, Webflow e Miro para acelerar ciclos"
          ]
        }
      ]
    },
    experience: {
      title: "Trajetória Profissional",
      jobs: [
        {
          period: "Julho 2024 - Mar 2025",
          role: "Product Owner",
          company: "Eleven Labs",
          location: "Paris",
          description: [
            "Gestão do backlog, redação de histórias de usuário e especificações funcionais, em coordenação com equipes SEO e marketing.",
            "Preparação de releases de aplicativo móvel (iOS, Android), monitoramento de desempenho, gestão de entrada em produção.",
            "Animação de cerimônias SCRUM, organização de demonstrações e materiais para facilitar a comunicação.",
            "Apoio na melhoria contínua do produto, otimização de processos e documentação.",
            "Concepção de aplicações integrando IA."
          ],
          tech: ["IA", "Mobile", "SCRUM"]
        },
        {
          period: "Ago 2021 - Jul 2024",
          role: "Product Owner",
          company: "Akkodis",
          location: "Paris",
          description: [
            "Pilotage de múltiplos projetos paralelos, do discovery ao delivery, para aplicações web, desktop (Windows/macOS) e mobile (iOS/Android).",
            "Coordenação transversal de equipes DEV/QA/UX, sincronização de trabalhos e gestão de dependências para garantir entregas.",
            "Workshops de co-criação, benchmarks e story mapping para enquadrar valor e alinhar stakeholders.",
            "Concepção e validação de protótipos: wireframes/maquetes, testes de usuário focados e itérations rápidas.",
            "Levantamento, formalização e desafio de requisitos; redação de especificações funcionais e user stories em BDD.",
            "Framework ágil implementado: priorização de backlog por valor, sprints (planning, reviews, retros) e demonstrações regulares."
          ],
          tech: ["Multiplataforma", "Discovery", "BDD"]
        },
        {
          period: "Jan 2021 - Ago 2021",
          role: "Consultor Digital",
          company: "Actency",
          location: "Paris",
          description: [
            "Gerente de Aplicações: Pilotagem de RUN multi-contas com priorização e acompanhamento orçamentário para garantir continuidade de serviço.",
            "Planejamento de lotes e coordenação diária com equipes técnicas/design para garantir releases em produção.",
            "Proxy PO: Intervenções de pré-venda, enquadramento de produto e estruturação de backlogs iniciais.",
            "Condução de story mapping, wireframing e pesquisa UX (entrevistas, insights) para alinhar produto-usuário."
          ],
          tech: ["Consultoria", "Pesquisa UX", "Pré-venda"]
        },
        {
          period: "Set 2018 - Jul 2019",
          role: "Gerente de Projeto Digital Jr / PO",
          company: "Catalina Marketing",
          location: "Boulogne-Billancourt",
          description: [
            "Manutenção evolutiva e entrega de novas funcionalidades conforme roadmap do produto, garantindo continuidade de serviço.",
            "Workshops de co-criação e benchmark competitivo para identificar oportunidades UX e priorizar melhorias de alto valor.",
            "Concepção e validação de protótipos: wireframes/maquetes testados com stakeholders antes do desenvolvimento.",
            "Gestão de backlog: redação de Epics e User Stories, priorização e coordenação diária com equipes técnicas (França/Offshore).",
            "Garantia de qualidade: preparação e execução de testes de não-regressão e acompanhamento de correções até produção.",
            "Documentação e comunicação: especificações funcionais, relatórios de sprint e demonstrações regulares."
          ],
          tech: ["Gestão Offshore", "UX Design", "QA"]
        },
        {
          period: "Set 2016 - Ago 2018",
          role: "Gerente de Projeto Digital / PO",
          company: "Valeo",
          location: "Saint Denis",
          description: [
            "Pilotagem da reformulação do Tech’Assist (plataforma de suporte técnico Valeo), usando abordagem Design Thinking centrada no usuário.",
            "Análise de necessidades e benchmark; enquadramento via carta de projeto, especificações funcionais e esquemas técnicos.",
            "Transformação de requisitos em backlog estruturado (Epics, Features, User Stories) com priorização e acompanhamento.",
            "Criação de dashboards de pilotagem e desempenho no Google Data Studio.",
            "Otimização do tratamento de incidentes nos sites Valeo Service, com formalização de procedimentos.",
            "Concepção e implantação de exportação documental XML para acelerar migração da plataforma XWiki para Drupal.",
            "Garantia de qualidade: testes de não-regressão, treinamentos internos e evangelização do Back Office."
          ],
          tech: ["Design Thinking", "Data Studio", "Migração"]
        }
      ]
    },
    projects: {
      title: "Estudos de Caso",
      intro: "Projetos selecionados destacando visão estratégica e excelência na entrega.",
      client_label: "Cliente",
      labels: {
        challenge: "Contexto / Desafio",
        solution: "Solução / Intervenção",
        impact: "Impacto"
      },
      items: [
        {
          name: "DERi",
          client: "Université Paul Sabatier",
          role: "Product Owner (2022-2024)",
          type: "P&D / Acessibilidade",
          summary: "Solução completa para criação e consumo de conteúdos educativos táteis e sonoros, composta por um editor desktop e um app mobile orientado a estudantes cegos. O projeto exigiu estrutura funcional robusta, regras avançadas de interação e uma estratégia ágil capaz de organizar um ecossistema totalmente novo.",
          challenge: "Pesquisadores da Universidade Paul Sabatier buscavam modernizar o acesso ao aprendizado para pessoas com deficiência visual. A limitação do material braile, a escassez de exemplares e a falta de recursos digitais acessíveis criavam barreiras profundas no contexto educacional. Era necessário conceber duas aplicações interligadas — uma para criação de interações multimodais (tátil, relevo, gesto e áudio) e outra para permitir sua exploração pelos estudantes — mantendo coerência, acessibilidade e rigor funcional.",
          solution: "A atuação envolveu estruturar todo o funcionamento do ecossistema, conduzindo entrevistas, definindo o escopo e instalando um framework ágil completo com workflows, maturidade funcional e regras de criticidade. Foram modeladas jornadas complexas, story mapping e roadmap, além da criação de todas as regras de interação tátil e sonora. O backlog foi redigido integralmente em BDD/Gherkin para garantir precisão técnica e evitar perda de contexto. A documentação foi adaptada para ferramentas de leitura de tela, facilitando o envolvimento de usuários cegos. Com a saída do designer, a concepção das interfaces também foi assumida — garantindo continuidade, consistência e capacidade de validação junto à equipe técnica, pesquisadores e especialistas em acessibilidade.",
          impact: [
             "Ecossistema funcional completo: especificações detalhadas para editor desktop e app mobile.",
             "Framework ágil implementado: workflows, DoR, story mapping e roadmap operacional.",
             "Backlog estruturado em BDD, eliminando ambiguidade e reduzindo retrabalho.",
             "Interfaces concebidas e entregues sem designer, mantendo coerência visual e funcional.",
             "Sprints mais previsíveis, com alinhamento forte entre UX, acessibilidade e desenvolvimento.",
             "Processo de colaboração simplificado, inclusive para usuários cegos e pesquisadores técnicos."
          ],
          tags: ["FunctionalDesign", "Accessibility", "ProductDiscovery", "UXThinking", "AgileFrameworks", "BacklogStrategy", "BDD", "Prototyping"]
        },
        {
          name: "CASP",
          client: "LHH",
          role: "Proxy PO (2021-2022)",
          type: "Plataforma SaaS B2B",
          summary: "Portal integrado para empregados, consultores e supervisores, criado para estruturar e centralizar todo o processo de transição profissional após desligamentos econômicos. O projeto exigiu clareza funcional, modelagem de jornadas complexas e uma organização ágil capaz de dar vida a interações críticas entre múltiplos perfis.",
          challenge: "A LHH precisava modernizar a gestão de processos de desligamento econômico, tradicionalmente conduzidos por telefone, e-mails e visitas presenciais. Faltava uma plataforma única que permitisse aos empregados acessar informações, enviar documentos, contactar consultores e marcar reuniões — enquanto consultores e supervisores necessitavam de ferramentas para pilotar cada caso. O desafio incluía múltiplos perfis, alfabetização digital limitada e forte pressão por clareza e previsibilidade.",
          solution: "A intervenção envolveu a análise profunda do processo existente e a estruturação dos três fluxos principais (empregado, consultor e supervisor). Foram conduzidas entrevistas, mapeamento de jornadas, story mapping e definição de requisitos funcionais para toda a cadeia. O framework ágil foi instalado do zero, garantindo previsibilidade e uma gestão clara do backlog. Com a saída inesperada do designer, todo o design funcional e os workshops de concepção foram assumidos diretamente, permitindo alinhar visão técnica, regras de negócio e UX em paralelo. O trabalho incluiu também evangelização dos stakeholders, com formações específicas para explicar o funcionamento do projeto, limites, responsabilidades e dinâmica das sprints.",
          impact: [
             "Modelo funcional completo para três perfis (empregado, consultor, supervisor).",
             "Backlog claro e priorizado, permitindo previsibilidade e desenvolvimento contínuo.",
             "Interface redesenhada após saída do designer, garantindo continuidade sem perda de ritmo.",
             "Story mapping e jornadas estruturadas, permitindo decisões mais rápidas e assertivas.",
             "Stakeholders alinhados, graças à formação e à pedagogia aplicada ao processo.",
             "Projeto estabilizado, evitando risco de cancelamento e assegurando entrega consistente."
          ],
          tags: ["FunctionalDesign", "AgileFrameworks", "ProductDiscovery", "UXThinking", "BacklogStrategy", "ServiceDesign", "ProcessMapping", "Prototyping"]
        },
        {
          name: "Coupon Network",
          client: "Catalina",
          role: "Product Owner (2018-2019)",
          type: "App Mobile & Web B2C",
          summary: "Evolução contínua do aplicativo e do site de cashback da Catalina, com foco em melhorar engajamento, usabilidade e performance das campanhas. Inclui criação de um módulo de sorteios que transformou a participação dos usuários e elevou a eficiência das ativações.",
          challenge: "O aplicativo da Coupon Network já possuía grande base de usuários, mas as ações promocionais tinham baixa visibilidade e os sorteios eram conduzidos de forma desconexa: usuários eram selecionados sem nunca ter percebido que estavam participando. Isso gerava desperdício de oportunidade, baixa qualificação da base e reclamações recorrentes. O desafio era criar uma experiência clara, visual, motivadora e operacionalmente eficiente.",
          solution: "A atuação começou com diagnóstico do problema, análise de dados, entrevistas internas e revisão de práticas de engajamento. Foram conduzidos workshops de ideação e, posteriormente, uma sessão de co-construção de wireframes ao vivo — uma abordagem incomum e extremamente eficaz para alinhar equipes de marketing, stakeholders e tecnologia. O módulo foi concebido end-to-end: hipóteses, benchmark, protótipo, definições funcionais, critérios de elegibilidade, lógica de tickets e fluxos de participação. Após validação, todo o desenvolvimento foi acompanhado até a entrega, com testes, ajustes e análise de impacto pós-lançamento.",
          impact: [
             "Novo módulo de sorteios integrado ao app e ao site, com participação explícita do usuário.",
             "Experiência gamificada, com critérios claros de elegibilidade (ex.: validar cupons).",
             "Base mais qualificada, com participantes plenamente conscientes da campanha.",
             "Redução do custo de conversão, com melhora expressiva na performance das ativações.",
             "Fluxo de engajamento estabilizado, reduzindo ambiguidades e reclamações.",
             "Integração fluida com marketing, facilitantdo novas campanhas e A/B tests."
          ],
          tags: ["ProductDiscovery", "FunctionalDesign", "UXIdeation", "Prototyping", "EngagementDesign", "DataInformedDecisions", "BacklogDelivery", "MobileProduct"]
        },
        {
          name: "Tech'Assist",
          client: "Valeo",
          role: "PO / Gerente de Projeto (2016-2018)",
          type: "Ferramenta Interna / Dados",
          summary: "Redefinição completa da ferramenta global de assistência técnica da Valeo, responsável por sustentar operações em dezenas de países. O projeto exigiu concepção funcional em grande escala, documentação técnica robusta e padronização internacional de fluxos e dados.",
          challenge: "O TechAssist era uma ferramenta estratégica usada por milhares de técnicos e oficinas no mundo inteiro, mas sofria com tecnologia obsoleta, usabilidade fraca e estrutura funcional criada originalmente por engenheiros — distante das necessidades reais do usuário final. A Valeo precisava renovar todo o sistema, incluindo arquitetura funcional, conteúdo técnico, navegação e mecanismos de exportação para diferentes mercados e idiomas.",
          solution: "Foram conduzidos estudos de benchmark, análise profunda do uso atual, identificação de falhas críticas e estruturação completa da nova versão funcional. Mais de 90 páginas de especificações foram produzidas, incluindo schémas techniques, fluxos detalhados, regras de documentação, comportamentos de interface e padrões de navegação. A gestão multi-idioma e multi-instância (até 16 ambientes) foi organizada com processos reprodutíveis. A intervenção incluiu ainda o desenho e implementação do mecanismo de exportação XML, essencial para alimentar mercados locais. Todo o material foi transformado posteriormente em backlog estruturado, permitindo um ciclo de desenvolvimento mais previsível e ágil.",
          impact: [
             "Base funcional completa, substituindo a versão antiga por uma arquitetura clara e escalável.",
             "Documentação robuste (+90 páginas) para sustentar equipe técnica e internacionalização.",
             "Processus de exportação XML implementado e padronizado para múltiplos mercados.",
             "Backlog estruturado, com epics, features e US prontas para desenvolvimento.",
             "Melhor usabilidade e conscistência, corrigeindo problemas históricos do produto.",
             "Redução de dependência técnica, graças a padrões e processos reutilizáveis."
          ],
          tags: ["FunctionalDesign", "TechnicalDocumentation", "ProcessEngineering", "BacklogDefinition", "Globalization", "XMLIntegration", "ProductDelivery", "UXStructure"]
        }
      ]
    },
    experimentations: {
      title: "Minhas Experimentações",
      subtitle: "LABORATÓRIO EXPERIMENTAL",
      message: "Ideias preliminares e protótipos de IA em reconstrução."
    },
    education: {
      title: "Formação & Certificações",
      academic: [
        {
          degree: "Desenvolvedor No-code & Automações IA (Agentic AI)",
          school: "No-Code StartUp",
          year: "2025 - 2026",
          desc: "Capacitar para criar automações e agentes de IA em ambiente no-code.",
          details: ["workflow automation", "AI agents design", "API integration", "no-code systems", "rapid prototyping", "data structuring for automation"],
          domain: "nocodestartup.io"
        },
        {
          degree: "Consultor Técnico Funcional CRM Salesforce",
          school: "FITEC",
          year: "2020",
          desc: "Formar consultores funcionais Salesforce para configuração e suporte ao CRM.",
          details: ["sales process modeling", "object configuration", "flow automation", "CRM integration", "reporting", "functional consulting"],
          domain: "salesforce.com"
        },
        {
          degree: "Master em Gestão de Sistemas de Informação e Digital",
          school: "Grenoble Ecole de Management",
          year: "2017 - 2019",
          desc: "Capacitar para gerir sistemas de informação e projetos digitais estratégicos.",
          details: ["digital strategy", "IT governance", "systems architecture", "project management", "data-driven decision making", "transformation frameworks"],
          domain: "grenoble-em.com"
        },
        {
          degree: "Especialização em Gestão da Inovação",
          school: "HEC Paris",
          year: "2019",
          desc: "Desenvolver competências para liderar inovação corporativa.",
          details: ["innovation strategy", "design thinking", "MVP creation", "prototyping methods", "opportunity assessment", "market analysis"],
          domain: "hec.edu"
        },
        {
          degree: "Bachelor em Webdesign UX/UI",
          school: "Supdeweb Paris",
          year: "2016 - 2017",
          desc: "Formar profissionais em UX/UI para web e mobile.",
          details: ["interface design", "wireframing", "user flows", "visual systems", "prototyping", "usability principles", "responsive design"],
          domain: "supdeweb.com"
        }
      ],
      certs: [
        { 
          name: "AI Product Manager", 
          issuer: "IBM Professional Certification", 
          year: "2025", 
          desc: "Certificar profissionais na gestão estratégica de produtos com IA.",
          details: ["AI product strategy", "ML fundamentals", "evaluation metrics", "AI governance", "ethical considerations", "roadmap definition"],
          domain: "ibm.com" 
        },
        { 
          name: "Professional Scrum Product Owner (PSPO)", 
          issuer: "Scrum.org", 
          year: "2020", 
          desc: "Validar domínio do papel de Product Owner no framework Scrum.",
          details: ["backlog management", "value definition", "user stories", "sprint planning", "stakeholder alignment", "product metrics"],
          domain: "scrum.org" 
        },
        { 
          name: "Salesforce Administrator", 
          issuer: "Salesforce", 
          year: "2020", 
          desc: "Qualificar administradores para configurar e manter ambientes Salesforce.",
          details: ["user and security model", "automation (Flows)", "objects & fields", "dashboards & reports", "platform configuration", "process optimization"],
          domain: "salesforce.com" 
        }
      ]
    },
    skills: {
      title: "As ferramentas que uso",
      categories: [
        {
          name: "IA & Automação",
          icon: Zap,
          items: ["Integração LLM", "Engenharia de Prompt", "Embeddings & Vector DB", "Workflows n8n", "Orquestração de IA Agêntica", "APIs OpenAI / Gemini", "Automação No-code / Low-code", "Funções Supabase & Webhooks"]
        },
        {
          name: "Fundamentos de Produto",
          icon: Layers,
          items: ["Product Discovery", "Entrega Ágil", "SCRUM", "Roadmapping", "User Stories & Specs Funcionais", "Estratégia de Backlog & Priorização", "Story Mapping", "Behavior Driven Development", "Gherkin", "Ferramentas de Design de Serviço"]
        },
        {
          name: "Design & Prototipagem",
          icon: PenTool,
          items: ["Figma", "Adobe XD", "Miro", "Framer", "Webflow", "Wireframing", "Prototipagem Rápida", "Mapeamento de Interação", "Arquitetura de Interface"]
        },
        {
          name: "Técnico",
          icon: Code,
          items: ["HTML/CSS", "Bancos de Dados (MySQL, Supabase, pgvector)", "XML/JSON", "Consumo de API & Webhooks", "Analytics (GA, Looker Studio)", "Modelagem de Dados (básica)"]
        }
      ]
    },
    contact: {
      title: "Vamos Conversar",
      text: "Estou aberto a novas oportunidades e conversas. Se você quiser se conectar ou discutir um projeto, fique à vontade para entrar em contato — retornarei em breve.",
      cta_email: "Enviar Email",
      cta_linkedin: "Perfil LinkedIn",
      cta_phone: "Me Ligar"
    }
  }
};

// --- Components ---

const LanguageSwitcher = ({ current, setLang }: { current: Language; setLang: (l: Language) => void }) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 font-mono text-sm">
      {(['en', 'fr', 'pt'] as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLang(lang)}
          className={`px-3 py-1 transition-all duration-300 relative cyber-glitch-box rounded-sm ${
            current === lang
              ? 'text-cyber-black bg-cyber-lime font-bold shadow-[0_0_15px_rgba(163,230,53,0.6)]'
              : 'text-gray-200 bg-cyber-black/80 hover:text-cyber-lime border border-transparent hover:border-cyber-lime/30'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

// Replaces static focus with Glitch Text effect using data-text attribute
const GlitchText = ({ text, className = "", as: Component = "span" }: { text: string, className?: string, as?: any }) => {
  return (
    <Component 
      className={`cyber-glitch-text ${className}`}
      data-text={text}
    >
      {text}
    </Component>
  );
};

const SectionHeading: React.FC<{ children?: string }> = ({ children }) => (
  <div className="flex items-center gap-4 mb-12 group">
    <div className="h-[1px] w-8 bg-cyber-lime cyber-glitch-box"></div>
    {children && (
      <GlitchText 
        as="h2" 
        text={children} 
        className="text-3xl md:text-4xl font-bold text-cyber-text tracking-tight uppercase" 
      />
    )}
  </div>
);

// EXPERIMENTATION VAULT - SECURE HUD CONCEPT (CYBER-BLUE REVISION)
const ExperimentationVault: React.FC<{ t: Content['experimentations'] }> = ({ t }) => {
  return (
    <div className="relative w-full h-[400px] border border-cyber-blue/30 bg-cyber-blue/5 overflow-hidden flex flex-col items-center justify-center group/vault">
        {/* Warning Stripes Background */}
        <div className="absolute inset-0 bg-warning-stripes opacity-30 pointer-events-none"></div>
        
        {/* Terminal Header Bar */}
        <div className="absolute top-0 left-0 w-full h-8 bg-cyber-blue/10 border-b border-cyber-blue/30 flex items-center px-4 justify-between">
           <div className="flex items-center gap-2">
              <Terminal size={14} className="text-cyber-blue animate-pulse" />
              <span className="font-mono text-[10px] text-cyber-blue tracking-widest">VAULT_V1.0</span>
           </div>
           <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-cyber-blue/50"></span>
              <span className="w-2 h-2 rounded-full bg-cyber-blue/30"></span>
           </div>
        </div>

        {/* Vertical Scanner Laser - Blue */}
        <div className="absolute left-0 w-full h-[2px] bg-cyber-blue/50 shadow-[0_0_15px_#3b82f6] animate-scan-vertical pointer-events-none z-10"></div>
        
        {/* HUD Overlay Text */}
        <div className="absolute top-12 left-4 font-mono text-xs text-cyber-blue/70 flex flex-col gap-1">
           <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyber-blue rounded-full animate-ping"></span>
              SECURE_CONNECTION: ESTABLISHED
           </span>
           <span className="animate-glitch-flicker">ENCRYPTION: AES-256-GCM</span>
           <span className="opacity-50">SYSTEM_ID: #8X-99</span>
        </div>
        
        {/* Status Warning */}
        <div className="absolute bottom-4 right-4 font-mono text-xs text-cyber-magenta/70 flex items-center gap-2 animate-pulse">
           <AlertOctagon size={12} />
           <span>ACCESS_LEVEL: RESTRICTED</span>
        </div>

        {/* Central Element */}
        <div className="z-20 text-center space-y-4 relative p-12 border border-cyber-blue/20 bg-black/80 backdrop-blur-md rounded-sm cyber-glitch-box-blue hover:border-cyber-blue/50 transition-colors duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
           {/* Icon */}
           <div className="flex justify-center mb-4 relative">
              <div className="relative">
                 <TestTube size={48} className="text-cyber-blue opacity-90 relative z-10" />
                 {/* Floating Particles */}
                 <div className="absolute -top-4 -right-4 w-1 h-1 bg-cyber-blue rounded-full animate-ping"></div>
                 <div className="absolute bottom-0 -left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              </div>
              <Lock size={16} className="absolute -bottom-1 -right-1 text-cyber-magenta animate-bounce" />
           </div>

           {/* Text */}
           <div className="space-y-2">
             <h3 className="text-2xl font-bold font-mono tracking-widest text-white group-hover/vault:text-cyber-blue transition-colors">
               {/* Fixed Lab title inside vault */}
               {t.subtitle} 
             </h3>
             <p className="font-mono text-xs text-cyber-blue tracking-[0.2em] uppercase bg-cyber-blue/10 py-1 px-2 rounded-sm inline-block">
               {/* Fixed Restricted Area subtitle inside vault */}
               RESTRICTED AREA
             </p>
             <p className="font-mono text-sm text-gray-200 mt-4 max-w-sm mx-auto border-t border-cyber-blue/20 pt-4">
               {t.message}
             </p>
             
             {/* Blinking Standby Light */}
             <div className="mt-4 flex justify-center items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_5px_red]"></div>
                <span className="text-[10px] font-mono text-red-500/80 tracking-widest">SYSTEM STANDBY</span>
             </div>
           </div>
           
           {/* Interaction Glitch Overlay */}
           <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover/vault:opacity-100 group-hover/vault:animate-pulse pointer-events-none"></div>
        </div>

        {/* Blinking Corner Brackets - Blue */}
        <div className="absolute top-10 left-4 w-8 h-8 border-l-2 border-t-2 border-cyber-blue/40 rounded-tl-lg animate-pulse"></div>
        <div className="absolute top-10 right-4 w-8 h-8 border-r-2 border-t-2 border-cyber-blue/40 rounded-tr-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyber-blue/40 rounded-bl-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyber-blue/40 rounded-br-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Binary Rain Decoration */}
        <div className="absolute top-1/2 left-10 font-mono text-[10px] text-cyber-blue/20 flex flex-col leading-none select-none pointer-events-none">
           <span className="animate-glitch-flicker">10110</span>
           <span className="animate-glitch-flicker" style={{ animationDelay: '0.2s' }}>01001</span>
           <span className="animate-glitch-flicker" style={{ animationDelay: '0.4s' }}>11100</span>
        </div>
        <div className="absolute top-1/2 right-10 font-mono text-[10px] text-cyber-blue/20 flex flex-col leading-none select-none pointer-events-none text-right">
           <span className="animate-glitch-flicker" style={{ animationDelay: '0.1s' }}>00101</span>
           <span className="animate-glitch-flicker" style={{ animationDelay: '0.3s' }}>11010</span>
           <span className="animate-glitch-flicker" style={{ animationDelay: '0.5s' }}>01111</span>
        </div>
    </div>
  );
};

// Advanced Service Card with Unique Identities
const ServiceCard: React.FC<{ title: string; desc: string; items: string[]; iconId: string }> = ({ title, desc, items, iconId }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    if (iconId === 'po' && hovered) {
      // Typewriter Effect for PO
      let i = 0;
      setTypedTitle("");
      const interval = setInterval(() => {
        if (i < title.length) {
          setTypedTitle(title.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    } else {
       setTypedTitle(title);
    }
  }, [hovered, title, iconId]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Render Visuals based on Identity
  const getVisualIdentity = () => {
    switch(iconId) {
      case 'automation': // Brain / Neural
        return {
           icon: <Bot size={32} className="text-cyber-magenta animate-pulse" />,
           borderColor: 'hover:border-cyber-magenta/80',
           glowColor: 'group-hover/service:shadow-[0_0_30px_rgba(255,0,255,0.15)]',
           bgPattern: 'bg-neural-dots-magenta',
           bgOpacity: 'opacity-20', // Reduced opacity as requested
           accent: 'bg-cyber-magenta',
           extra: hovered && (
             <>
                {/* Proximity Glow */}
                <div 
                  className="absolute w-64 h-64 bg-cyber-magenta/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-300"
                  style={{ top: mousePos.y - 128, left: mousePos.x - 128 }}
                ></div>
                {/* Data Stream Border */}
                <div className="absolute inset-0 border border-cyber-magenta/50 opacity-50 animate-border-flow pointer-events-none"></div>
                {/* Glitch Entry */}
                <div className="absolute inset-0 bg-cyber-magenta/5 animate-ai-render pointer-events-none mix-blend-overlay"></div>
             </>
           )
        };
      case 'po': // Structure / Blocks
        return {
           icon: <KanbanSquare size={32} className="text-cyber-yellow" />,
           borderColor: 'hover:border-cyber-yellow/80',
           glowColor: 'group-hover/service:shadow-[0_0_30px_rgba(250,204,21,0.15)]',
           bgPattern: 'bg-circuit', // NEW: Circuit Pattern
           bgOpacity: 'opacity-30',
           accent: 'bg-cyber-yellow',
           titleOverride: <span className="font-mono">{typedTitle}<span className="animate-pulse">_</span></span>,
           extra: hovered && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-cyber-yellow animate-slide-up-fade"></div>
           )
        };
      case 'pm': // Strategy / Radar
        return {
           icon: <Compass size={32} className={`text-cyber-orange ${hovered ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />,
           borderColor: 'hover:border-cyber-orange/80',
           glowColor: 'group-hover/service:shadow-[0_0_30px_rgba(251,146,60,0.15)]',
           bgPattern: 'bg-hex', // NEW: Hex Pattern
           bgOpacity: 'opacity-30',
           accent: 'bg-cyber-orange',
           extra: hovered && (
             <>
               {/* Radar Scan */}
               <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-orange/50 shadow-[0_0_10px_#fb923c] animate-scan-line pointer-events-none"></div>
               <div className="absolute top-4 right-4 text-cyber-orange text-[10px] font-mono animate-pulse">TARGET_LOCKED</div>
             </>
           )
        };
      case 'delivery': // Engine / Speed
        return {
           icon: <Rocket size={32} className={`text-cyber-blue ${hovered ? 'animate-shake-tiny' : ''}`} />,
           borderColor: 'hover:border-cyber-blue/80',
           glowColor: 'group-hover/service:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
           bgPattern: 'bg-speed', // NEW: Speed Lines
           bgOpacity: 'opacity-30',
           accent: 'bg-cyber-blue',
           extra: hovered && (
              <>
                {/* Snake Border Animation */}
                <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-snake-1 shadow-[0_0_8px_#3b82f6]"></span>
                <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-transparent via-cyber-blue to-transparent animate-snake-2 shadow-[0_0_8px_#3b82f6]"></span>
                <span className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-transparent via-cyber-blue to-transparent animate-snake-3 shadow-[0_0_8px_#3b82f6]"></span>
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-t from-transparent via-cyber-blue to-transparent animate-snake-4 shadow-[0_0_8px_#3b82f6]"></span>
              </>
           )
        };
      case 'ux': // Design / Pen
        return {
           icon: <PenTool size={32} className="text-cyber-pink" />,
           borderColor: 'hover:border-cyber-pink/80',
           glowColor: 'group-hover/service:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
           bgPattern: 'bg-isometric', // NEW: Isometric Grid
           bgOpacity: 'opacity-30',
           accent: 'bg-cyber-pink',
           extra: hovered && (
             <>
                {/* Mouse Trail Grid Highlight */}
                <div 
                  className="absolute w-32 h-32 border border-cyber-pink/30 rounded-full blur-md pointer-events-none transition-opacity duration-75"
                  style={{ top: mousePos.y - 64, left: mousePos.x - 64 }}
                ></div>
                <div 
                   className="absolute pointer-events-none text-cyber-pink/50"
                   style={{ top: mousePos.y + 10, left: mousePos.x + 10 }}
                >
                   <MousePointer2 size={12} fill="currentColor" />
                </div>
             </>
           )
        };
      default:
        return {
           icon: <Cpu size={32} className="text-white" />,
           borderColor: 'hover:border-white',
           glowColor: '',
           bgPattern: '',
           bgOpacity: 'opacity-30',
           accent: 'bg-white',
           extra: null
        };
    }
  };

  const visuals = getVisualIdentity();

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={`group/service relative p-8 h-full rounded-sm border border-white/5 bg-cyber-black overflow-hidden transition-all duration-300 ${visuals.borderColor} ${visuals.glowColor}`}
    >
      {/* Background Pattern - Variable Opacity */}
      <div className={`absolute inset-0 ${visuals.bgPattern} pointer-events-none transition-opacity duration-500 ${hovered ? 'opacity-60' : visuals.bgOpacity}`}></div>
      
      {/* Dynamic Extras */}
      {visuals.extra}

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-6">
         <div className="p-3 bg-white/5 rounded-sm border border-white/10 backdrop-blur-sm group-hover/service:bg-black/40 transition-colors">
            {visuals.icon}
         </div>
         {/* ID Number decoration */}
         <div className="text-xs font-mono text-gray-400 group-hover/service:text-white transition-colors">
            ID_0{['automation','po','pm','delivery','ux'].indexOf(iconId) + 1}
         </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 min-h-[56px] flex items-center">
          {/* Use override title for typewriter effect, else normal */}
          {visuals.titleOverride || title}
        </h3>
        
        <p className="text-sm text-gray-200 italic mb-6 leading-relaxed font-mono border-l-2 border-gray-800 pl-3 group-hover/service:border-white/20 transition-colors">
          "{desc}"
        </p>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="text-sm text-gray-300 flex items-start gap-3 group-hover/service:text-gray-200 transition-colors">
              <span className={`w-1.5 h-1.5 ${visuals.accent} rounded-full mt-1.5 shrink-0 opacity-40 group-hover/service:opacity-100 group-hover/service:shadow-[0_0_5px_currentColor] transition-all`}></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Visual Badge Component for Education/Certs
const InstitutionBadge: React.FC<{ name: string, type?: string, domain?: string }> = ({ name, type = "school", domain }) => {
  const [imgError, setImgError] = useState(false);
  
  // Generate initials (fallback)
  let initials = name.substring(0, 2).toUpperCase();
  
  // Custom overrides for better visuals on fallback
  if (name.includes("Grenoble")) initials = "GEM";
  if (name.includes("HEC")) initials = "HEC";
  if (name.includes("Supdeweb")) initials = "SDW";
  if (name.includes("No-Code")) initials = "NCS";
  if (name.includes("IBM")) initials = "IBM";
  if (name.includes("Scrum")) initials = "PSPO";
  if (name.includes("Salesforce")) initials = "SFC";
  if (name.includes("La Française")) initials = "FDJ";

  // Icon fallback logic
  const Icon = type === 'cert' ? Award : University;
  
  return (
    <div className="w-16 h-16 shrink-0 border border-gray-700 bg-white flex items-center justify-center relative group-hover:border-cyber-lime transition-colors duration-300 cyber-glitch-box overflow-hidden rounded-sm">
       {/* Decorative corner */}
       <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-lime/50 opacity-50 z-20"></div>
       
       {domain && !imgError ? (
         <img 
           src={`https://cdn.brandfetch.io/${domain}?c=${BRANDFETCH_API_KEY}`} 
           alt={name}
           className="w-12 h-12 object-contain relative z-10 transition-all duration-300 opacity-100 group-hover:scale-110"
           onError={() => setImgError(true)}
         />
       ) : (
         /* Text/Icon Fallback */
         <div className="flex flex-col items-center gap-1 z-10 bg-cyber-dark w-full h-full justify-center">
           <span className="font-mono font-bold text-lg tracking-wider text-gray-200 group-hover:text-cyber-lime transition-colors">
             {initials}
           </span>
         </div>
       )}
       
       {/* Background glow on hover */}
       <div className="absolute inset-0 bg-cyber-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
    </div>
  );
};

// Expandable Education Item
const ExpandableEduItem: React.FC<{ item: any, type?: string }> = ({ item, type = "school" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group/${type} border-b border-gray-800 last:border-0 pb-6 mb-6 last:mb-0`}>
       <div 
         className="flex gap-4 cursor-pointer" 
         onClick={() => setIsOpen(!isOpen)}
       >
         <InstitutionBadge name={type === "school" ? item.school : item.issuer} type={type} domain={item.domain} />
         <div className="flex-1">
           <div className="flex justify-between items-start">
             <div className="text-lg font-bold text-white group-hover/edu:text-cyber-lime transition-colors leading-tight mb-1">
               {type === "school" ? item.degree : item.name}
             </div>
             {isOpen ? <ChevronUp size={16} className="text-cyber-lime" /> : <ChevronDown size={16} className="text-gray-400" />}
           </div>
           
           <div className="text-gray-200 font-mono text-sm mb-2">
             {type === "school" ? item.school : item.issuer} | {item.year}
           </div>
           
           {!isOpen && <div className="text-gray-300 text-sm line-clamp-1">{type === "school" ? item.desc : "Click to see details"}</div>}
         </div>
       </div>
       
       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="pl-20 pr-4">
             {/* Description */}
             <p className="text-gray-200 text-sm mb-3 italic border-l-2 border-gray-700 pl-3">
               {item.desc}
             </p>
             
             {/* Competencies */}
             <h4 className="text-xs font-mono text-cyber-lime uppercase tracking-widest mb-2 flex items-center gap-2 mt-4">
               <CheckCircle size={12} /> Key Competencies
             </h4>
             <ul className="grid grid-cols-1 gap-y-2">
               {item.details.map((detail: string, i: number) => (
                 <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                   <span className="text-cyber-lime/50 mt-1.5 text-[8px]">▶</span> {detail}
                 </li>
               ))}
             </ul>
          </div>
       </div>
    </div>
  );
};

// Redesigned Case Study Card
const CaseStudyCard: React.FC<{ project: any, labels: any }> = ({ project, labels }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group/project relative border border-white/5 hover:border-cyber-lime/50 bg-white/[0.02] transition-all duration-300 cyber-glitch-box flex flex-col ${isExpanded ? 'bg-white/[0.04]' : ''}`}>
      
      {/* Header Section (Always Visible) */}
      <div className="p-8 pb-4">
         {/* Badges Container */}
         <div className="flex flex-wrap gap-2 mb-4">
            {/* Type Badge */}
            <span className="px-3 py-1 bg-white/5 text-xs font-mono text-gray-300 uppercase tracking-wider border border-white/10 group-hover/project:bg-cyber-lime/10 group-hover/project:text-cyber-lime transition-colors rounded-sm">
              {project.type}
            </span>
            {/* Client Badge - Cyberpunk Style */}
            <span className="px-3 py-1 bg-cyber-lime/5 text-xs font-mono text-cyber-lime/80 tracking-wider border border-cyber-lime/20 rounded-sm flex items-center gap-2">
               <Building2 size={12} /> 
               <span className="font-bold">{labels.client_label}:</span> 
               <span className="uppercase">{project.client}</span>
            </span>
            {isExpanded && <span className="text-cyber-lime text-xs font-mono animate-pulse ml-auto self-center">● ACTIVE</span>}
         </div>

         <h3 className="text-4xl font-bold text-white group-hover/project:text-cyber-lime transition-colors mb-2">
           {project.name}
         </h3>
         <span className="text-sm font-mono text-gray-400 block mb-4 border-b border-gray-800 pb-4">{project.role}</span>

         {/* Teaser Summary (Persistent) */}
         <p className="text-lg text-gray-200 leading-relaxed mb-6">
           {project.summary}
         </p>
         
         <button 
           onClick={() => setIsExpanded(!isExpanded)}
           className="flex items-center gap-2 text-sm font-mono text-cyber-lime uppercase tracking-widest hover:text-white transition-colors group/btn"
         >
           {isExpanded ? 'Close Mission File' : 'Explore Mission'}
           {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
         </button>
      </div>

      {/* Expanded Details Section */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out border-t border-white/5 bg-black/20 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 pt-6 space-y-8">
           
           {/* CHALLENGE */}
           <div className="relative pl-6 border-l-2 border-red-500/50">
             <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
               <AlertTriangle size={14} /> {labels.challenge}
             </h4>
             <p className="text-gray-200 text-sm leading-relaxed">
               {project.challenge}
             </p>
           </div>

           {/* SOLUTION */}
           <div className="relative pl-6 border-l-2 border-blue-500/50">
             <h4 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
               <Lightbulb size={14} /> {labels.solution}
             </h4>
             <p className="text-gray-200 text-sm leading-relaxed">
               {project.solution}
             </p>
           </div>

           {/* IMPACTS */}
           <div className="relative pl-6 border-l-2 border-cyber-lime/50">
             <h4 className="text-xs font-mono text-cyber-lime uppercase tracking-widest mb-3 flex items-center gap-2">
               <TrendingUp size={14} /> {labels.impact}
             </h4>
             <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
               {project.impact.map((item: string, i: number) => (
                 <li key={i} className="text-sm text-gray-200 flex items-start gap-3">
                   <span className="w-1.5 h-1.5 bg-cyber-lime rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_#a3e635]"></span>
                   {item}
                 </li>
               ))}
             </ul>
           </div>

           {/* Tech Stack */}
           <div className="pt-6 border-t border-white/5 mt-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-xs font-mono text-gray-400 bg-black border border-gray-800 px-2 py-1">
                    #{tag}
                  </span>
                ))}
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};


// --- Static Cyberpunk Profile Image (Cleaned Up) ---
const CyberpunkProfileImage = () => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] group">

        {/* Decorative background grid */}
        <div className="absolute inset-0 bg-cyber-lime/5 rounded-2xl transform rotate-3 cyber-glitch-box transition-transform duration-500 group-hover:rotate-6"></div>
        <div className="absolute inset-0 border border-white/5 rounded-2xl transform -rotate-3 cyber-glitch-box transition-transform duration-500 group-hover:-rotate-6"></div>

        {/* Container */}
        <div className="w-full h-full relative rounded-2xl overflow-hidden border border-cyber-lime/30 bg-cyber-dark z-10 transition-colors duration-300 group-hover:border-cyber-lime">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-lime z-20 cyber-glitch-box"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-lime z-20 cyber-glitch-box"></div>
          
          <img 
              src={PROFILE_PIC_URL}
              alt="Ismael Filho" 
              className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500 relative z-10"
          />

          {/* Holographic Scanline */}
          <div className="profile-scanline"></div>
          
          {/* CRT Noise Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-40"></div>
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-6 -left-6 bg-cyber-black border border-cyber-lime/30 p-4 z-30 shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center gap-3 cyber-glitch-box">
            <div className="bg-cyber-lime/10 p-2 rounded-sm">
              <Layers className="text-cyber-lime" size={24} />
            </div>
            <div>
              <div className="text-cyber-lime font-mono text-xs uppercase tracking-wider">Experience</div>
              <div className="text-2xl font-bold text-white leading-none">6+ Years</div>
            </div>
        </div>
    </div>
  );
};

// --- CYBERPUNK PRELOADER ---
const CyberPreloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const logs = [
    "INITIALIZING KERNEL...",
    "DECRYPTING SECURE ASSETS...",
    "ESTABLISHING NEURAL LINK...",
    "LOADING INTERFACE MODULES...",
    "SYSTEM INTEGRITY CHECK: PASS",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    const logInterval = setInterval(() => {
      setLogIndex(prev => (prev + 1) % logs.length);
    }, 450);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const advanceProgress = () => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        
        const remaining = 100 - prev;
        const jump = Math.min(remaining, Math.floor(Math.random() * 15) + 1);
        const next = prev + jump;

        if (next >= 100) {
            setTimeout(() => {
                setIsExiting(true);
                setTimeout(onComplete, 350); 
            }, 500);
            return 100;
        }

        timeoutId = setTimeout(advanceProgress, 500);
        return next;
      });
    };

    timeoutId = setTimeout(advanceProgress, 500);

    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-cyber-black flex flex-col items-center justify-center font-mono overflow-hidden ${isExiting ? 'animate-flash-shock' : ''}`}>
      <div className="noise-bg opacity-20"></div>
      <div className="scanlines opacity-10"></div>
      
      <div className="relative z-10 flex flex-col items-center w-80">
         <h1 className="text-4xl font-bold text-white mb-2 tracking-widest animate-glitch-flicker">
           LOADING...
         </h1>
         
         <div className="h-6 text-cyber-lime text-xs mb-8 w-full text-center">
            {logs[logIndex]}
         </div>

         <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-cyber-lime shadow-[0_0_10px_#a3e635] transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
         </div>
         
         <div className="mt-2 w-full flex justify-between text-xs text-gray-500">
            <span>SYSTEM_BOOT_V2.4</span>
            <span>{progress}%</span>
         </div>
      </div>
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);
  const t = DATA[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `Ismael Filho | ${t.hero.role}`;
  }, [lang]);

  if (isLoading) {
    return <CyberPreloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen relative font-sans text-cyber-text bg-grid pb-20 animate-in fade-in duration-700">
      <LanguageSwitcher current={lang} setLang={setLang} />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-12 xl:px-24 pt-32 lg:pt-0 gap-12 lg:gap-20 group hover-trigger">
    
        <div className="flex-1 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="font-mono text-cyber-lime mb-6 flex items-center gap-2 text-sm md:text-base bg-cyber-lime/10 px-3 py-1 rounded-full w-fit cyber-glitch-box">
              <span className="w-2 h-2 bg-cyber-lime rounded-full animate-pulse"></span>
              {t.hero.availability}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 text-white tracking-tight flex flex-col items-center lg:items-start">
              <GlitchText text="ISMAEL" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                <GlitchText text="FILHO" className="text-white" />
              </span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mb-8">
              <span className="text-lg md:text-xl font-mono text-cyber-lime font-bold tracking-widest uppercase border border-cyber-lime px-4 py-1.5 rounded-sm shadow-[0_0_15px_rgba(163,230,53,0.2)] cyber-glitch-box">
                {t.hero.role}
              </span>
              <span className="hidden md:inline-block h-[1px] w-12 bg-white/50"></span>
              <GlitchText text={t.hero.subrole} className="text-white font-mono text-sm md:text-base tracking-wide" />
            </div>

             <div className="flex items-center gap-4 mb-8 text-sm font-mono text-gray-400">
              <div className="flex items-center gap-2">
                 <Globe size={16} className="text-cyber-lime" />
                 <span className="tracking-widest">{t.hero.trilingual}</span>
              </div>
              <div className="h-4 w-[1px] bg-gray-700"></div>
              <div className="flex gap-3">
                <span className="text-white hover:text-cyber-lime transition-colors cursor-default" title="English">EN</span>
                <span className="text-gray-600">/</span>
                <span className="text-white hover:text-cyber-lime transition-colors cursor-default" title="French">FR</span>
                <span className="text-gray-600">/</span>
                <span className="text-white hover:text-cyber-lime transition-colors cursor-default" title="Portuguese">PT-BR</span>
              </div>
            </div>

            <p className="max-w-2xl text-lg md:text-xl text-white leading-relaxed mb-10 lg:pr-10 opacity-100">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 font-mono w-full">
              <a href="#contact" className="cyber-glitch-box group/btn relative px-8 py-3 bg-cyber-lime text-cyber-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex-1 sm:flex-none text-center min-w-[160px]">
                {t.hero.cta_contact}
                <div className="absolute inset-0 border border-cyber-lime translate-x-1 translate-y-1 -z-10 group-hover/btn:translate-x-1.5 group-hover/btn:translate-y-1.5 transition-transform duration-300"></div>
              </a>
              <a href={CV_FOLDER_URL} download="CV_Ismael_Filho.pdf" target="_blank" rel="noopener noreferrer" className="cyber-glitch-box group/btn flex items-center justify-center gap-2 px-8 py-3 border border-gray-500 text-white hover:border-cyber-lime hover:text-cyber-lime hover:bg-cyber-lime/5 transition-all duration-300 uppercase tracking-wider flex-1 sm:flex-none min-w-[160px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-lime opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-lime opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                <Download size={18} />
                {t.hero.cta_cv}
              </a>
            </div>
        </div>

        <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <CyberpunkProfileImage />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="relative z-10 px-6 md:px-12 lg:px-12 xl:px-24 py-24 border-t border-white/5 group hover-trigger">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm sticky top-24 h-fit">
            <GlitchText text={t.nav.about} />
          </div>
          <div className="md:col-span-3">
            <SectionHeading>{t.about.title}</SectionHeading>
            <div className="space-y-6 text-lg text-gray-200 leading-relaxed max-w-3xl">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT DO I DO SECTION --- */}
      <section id="services" className="relative z-10 px-6 md:px-12 lg:px-12 xl:px-24 py-24 border-t border-white/5 bg-cyber-dark/30 group hover-trigger">
         <div className="grid md:grid-cols-5 gap-12">
           <div className="md:col-span-1 font-mono text-gray-400 text-sm sticky top-24 h-fit">
             <GlitchText text={t.nav.services} />
           </div>
           <div className="md:col-span-3">
             <SectionHeading>{t.services.title}</SectionHeading>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {t.services.items.map((item, idx) => (
                 <div key={item.id} className={idx >= 3 ? "md:col-span-1" : ""}>
                    <ServiceCard title={item.title} desc={item.desc} items={item.points} iconId={item.id} />
                 </div>
               ))}
             </div>
           </div>
         </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="relative z-10 px-6 md:px-12 lg:px-12 xl:px-24 py-24 border-t border-white/5 group hover-trigger">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm sticky top-24 h-fit">
            <GlitchText text={t.nav.experience} />
          </div>
          <div className="md:col-span-3">
            <SectionHeading>{t.experience.title}</SectionHeading>
            <div className="relative border-l border-gray-800 ml-3 space-y-12">
              {t.experience.jobs.map((job, idx) => (
                <div key={idx} className="relative pl-8 group/job">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-800 rounded-full border border-gray-600 group-hover/job:bg-cyber-lime group-hover/job:border-cyber-lime transition-colors duration-300"></div>
                  
                  <div className="mb-1 font-mono text-xs text-cyber-lime mb-2 tracking-wide">
                    {job.period}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover/job:text-cyber-lime transition-colors duration-300">
                    <GlitchText text={job.role} />
                  </h3>
                  <div className="text-lg text-gray-200 mb-4 font-medium">
                    {job.company} — <span className="text-sm font-normal text-gray-400">{job.location}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6 text-gray-300">
                    {job.description.map((desc, i) => (
                      <li key={i} className="leading-relaxed flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 bg-gray-600 rounded-full shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {job.tech && (
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs font-mono text-gray-400 border border-gray-800 rounded-sm hover:border-cyber-lime/50 transition-colors cyber-glitch-box">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES --- */}
      <section id="projects" className="relative z-10 px-6 md:px-12 lg:px-12 xl:px-24 py-24 border-t border-white/5 bg-cyber-dark/30 group hover-trigger">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm sticky top-24 h-fit">
            <GlitchText text={t.nav.projects} />
          </div>
          <div className="md:col-span-3">
            <SectionHeading>{t.projects.title}</SectionHeading>
            <p className="text-gray-300 mb-12">{t.projects.intro}</p>
            
            <div className="grid gap-6">
              {t.projects.items.map((project, idx) => (
                <CaseStudyCard 
                  key={idx} 
                  project={project} 
                  labels={{ ...t.projects.labels, client_label: t.projects.client_label }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIMENTATIONS VAULT --- */}
      <section id="experimentations" className="relative z-10 px-6 md:px-12 lg:px-12 xl:px-24 py-24 border-t border-white/5 group hover-trigger">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm sticky top-24 h-fit">
            <GlitchText text={t.nav.experimentations} />
          </div>
          <div className="md:col-span-3">
             <SectionHeading>{t.experimentations.title}</SectionHeading>
             <ExperimentationVault t={t.experimentations} />
          </div>
        </div>
      </section>

      {/* --- EDUCATION & CERTIFICATIONS (EXPANDABLE) --- */}
      <section id="education" className="relative z-10 px-6 md:px-12 lg:px-12 xl:px-24 py-24 border-t border-white/5 group hover-trigger">
         <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm sticky top-24 h-fit">
            <GlitchText text={t.nav.education} />
          </div>
          <div className="md:col-span-3">
             <SectionHeading>{t.education.title}</SectionHeading>
             
             <div className="grid lg:grid-cols-2 gap-12">
                <div>
                   <h3 className="flex items-center gap-2 text-cyber-lime font-mono text-sm uppercase tracking-widest mb-8">
                      <GraduationCap size={16} /> Academic
                   </h3>
                   <div>
                      {t.education.academic.map((edu, idx) => (
                        <ExpandableEduItem key={idx} item={edu} type="school" />
                      ))}
                   </div>
                </div>

                <div>
                   <h3 className="flex items-center gap-2 text-cyber-lime font-mono text-sm uppercase tracking-widest mb-8">
                      <Award size={16} /> Certifications
                   </h3>
                   <div>
                      {t.education.certs.map((cert, idx) => (
                        <ExpandableEduItem key={idx} item={cert} type="cert" />
                      ))}
                   </div>
                </div>
             </div>
          </div>
         </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="skills" className="relative z-10 px-6 md:px-12 lg:px-12 xl:px-24 py-24 border-t border-white/5 bg-cyber-dark/30 group hover-trigger">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm sticky top-24 h-fit">
            <GlitchText text={t.nav.skills} />
          </div>
          <div className="md:col-span-3">
            <SectionHeading>{t.skills.title}</SectionHeading>
            <div className="grid sm:grid-cols-2 gap-8">
              {t.skills.categories.map((cat, idx) => (
                <div key={idx} className={`border-t border-gray-800 pt-6 group/cat`}>
                  <div className="flex items-center gap-3 mb-4 text-cyber-lime">
                    <cat.icon size={20} className="cyber-glitch-box" />
                    <h3 className="font-bold text-lg text-white">
                        <GlitchText text={cat.name} />
                    </h3>
                  </div>
                  <ul className={`space-y-2`}>
                    {cat.items.map(skill => (
                      <li key={skill} className="text-gray-300 hover:text-white transition-colors cursor-default">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="relative z-10 px-6 md:px-12 lg:px-12 xl:px-24 py-32 border-t border-white/5 group hover-trigger">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading>{t.contact.title}</SectionHeading>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {t.contact.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:ismaelnfilho@gmail.com" className="px-8 py-4 bg-transparent border border-cyber-lime text-cyber-lime font-mono text-lg hover:bg-cyber-lime hover:text-black transition-all duration-300 flex items-center gap-3 cyber-glitch-box">
              <Mail size={20} />
              {t.contact.cta_email}
            </a>
            <a href="https://linkedin.com/in/ismaelnfilho/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gray-900 border border-gray-800 text-white font-mono text-lg hover:border-gray-600 transition-all duration-300 flex items-center gap-3 cyber-glitch-box">
              <Linkedin size={20} />
              {t.contact.cta_linkedin}
            </a>
            <a href="tel:+33666324997" className="px-8 py-4 bg-transparent border border-gray-700 text-gray-300 font-mono text-lg hover:border-cyber-lime hover:text-cyber-lime transition-all duration-300 flex items-center gap-3 cyber-glitch-box">
              <Phone size={20} />
              {t.contact.cta_phone}
            </a>
          </div>
          
          <div className="mt-24 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-500 font-mono text-xs">
            <p>&copy; {new Date().getFullYear()} Ismael Nascimento Filho</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>Paris, France</span>
              <span>06 66 32 49 97</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);