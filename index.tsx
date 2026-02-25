
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Linkedin, Mail, Globe, Code, Layers, Zap, Download, Phone, GraduationCap, Award, CheckCircle, ChevronDown, ChevronUp, Building2, Bot, KanbanSquare, Compass, Rocket, PenTool, Lightbulb, TrendingUp, AlertTriangle, MousePointer2, Lock, AlertOctagon, Terminal, TestTube, Cpu, School } from 'lucide-react';

// --- CONFIGURATION ---

const PROFILE_PIC_URL: string = "https://raw.githubusercontent.com/ismaelnfilho/ismaelfilho.com/main/profile.jpeg"; 
const CV_FOLDER_URL: string = "https://raw.githubusercontent.com/ismaelnfilho/ismaelfilho.com/main/CV%20Ismael%20N%20FILHO%202025%20V3%20FR.pdf";
const BRANDFETCH_API_KEY: string = "1idqPbOlRjmPHYGorpN";
const PHONE_NUMBER: string = "+33 6 66 32 49 97"; // Updated with user's real number

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
      details: string[];
      domain?: string;
    }[];
    certs: {
      name: string;
      issuer: string;
      year: string;
      desc: string;
      details: string[];
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
          role: "Product Owner",
          type: "R&D / Accessibility",
          summary: "Complete solution for the creation and consumption of tactile and auditory educational content, consisting of a desktop editor and a mobile app oriented towards blind students. The project required a robust functional structure, advanced interaction rules and an agile strategy capable of organizing a completely new ecosystem.",
          challenge: "Researchers at Paul Sabatier University sought to modernize access to learning for visually impaired people. The limitation of Braille material, the scarcity of copies and the lack of accessible digital resources created deep barriers. It was necessary to design two interconnected applications — one for creating multimodal interactions (tactile, relief, gesture and audio) and another to allow their exploration by students — while maintaining consistency, accessibility and functional rigor.",
          solution: "The intervention involved structuring the entire functioning of the ecosystem, conducting interviews, defining the scope and installing a complete agile framework with workflows and criticality rules. Complex paths, story mapping and roadmaps were modeled, as well as the creation of all tactile and sound interaction rules. The backlog was written entirely in BDD/Gherkin to guarantee technical precision. Documentation was adapted for screen readers. With the departure of the designer, I assumed the design of the interfaces — ensuring continuity and validation with the technical team and researchers.",
          impact: [
             "Complete functional ecosystem: detailed specs for desktop editor and mobile app.",
             "Agile framework implemented: workflows, DoR, story mapping and operational roadmap.",
             "Backlog structured in BDD, eliminating ambiguity and reducing rework.",
             "Interfaces designed and delivered without a dedicated designer, maintaining consistency.",
             "Sprints more predictable, with strong alignment between UX, accessibility and development.",
             "Simplified collaboration process, including for blind users and technical researchers."
          ],
          tags: ["FunctionalDesign", "Accessibility", "ProductDiscovery", "UXThinking", "AgileFrameworks", "BDD", "Prototyping"]
        },
        {
          name: "CASP",
          client: "LHH",
          role: "Proxy PO",
          type: "B2B SaaS Platform",
          summary: "Integrated portal for employees, consultants and supervisors, created to structure and centralize the entire professional transition process after economic layoffs. The project required functional clarity, modeling of complex journeys and an agile organization capable of giving life to critical interactions between multiple profiles.",
          challenge: "LHH needed to modernize the management of economic layoff processes, traditionally conducted by telephone, emails and visits. A single platform was missing that allowed employees to access info, send documents or contact consultants. The challenge included multiple profiles, limited digital literacy and strong pressure for clarity and predictability.",
          solution: "The intervention involved the deep analysis of the existing process and the structuring of the three main flows (employee, consultant, supervisor). Interviews, journey mapping, story mapping and definition of functional requirements were conducted. The agile framework was installed from zero. With the unexpected departure of the designer, all functional design and conception workshops were assumed directly, allowing to align technical vision, business rules and UX. The work also included the evangelization of stakeholders with specific training.",
          impact: [
             "Complete functional model for three profiles (employee, consultant, supervisor).",
             "Backlog clear and prioritized, allowing predictability and continuous development.",
             "Interface redesigned after designer departure, ensuring continuity without loss of rhythm.",
             "Structured story mapping and journeys, allowing faster and more assertive decisions.",
             "Stakeholders aligned, thanks to specific training and applied pedagogy.",
             "Project stabilized, avoiding the risk of cancellation and ensuring constant delivery."
          ],
          tags: ["FunctionalDesign", "AgileFrameworks", "ProductDiscovery", "UXThinking", "BacklogStrategy", "ServiceDesign", "ProcessMapping", "Prototyping"]
        },
        {
          name: "Coupon Network",
          client: "CATALINA",
          role: "Product Owner",
          type: "B2C Mobile & Web App",
          summary: "Continuous evolution of Catalina's cashback app and site, with a focus on improving engagement, usability and campaign performance. Includes the creation of a raffles module that transformed user participation and elevated activation efficiency.",
          challenge: "The Coupon Network app had a large user base, but promotional actions had low visibility and raffles were conducted disconnectedly: users were selected without knowing they were participating. This generated wasted opportunity and complaints. The challenge was to create a clear, visual, motivating and operationally efficient experience.",
          solution: "The action started with a diagnosis, data analysis and interviews. Ideation workshops and a live wireframe co-construction session were conducted — an effective approach to align marketing, stakeholders and tech. The module was designed from end to end: hypotheses, benchmark, prototype, functional definitions, eligibility criteria, ticket logic and participation flow. The development was followed until delivery and impact analysis.",
          impact: [
             "New raffle module integrated into the app and site, with explicit participation.",
             "Gamified experience, with clear eligibility criteria (e.g., validate coupons).",
             "Base but qualified, with participants fully aware of the campaign.",
             "Reduction in conversion cost, with expressive improvement in activation performance.",
             "Engagement flow stabilized, reducing ambiguities and complaints.",
             "Fluid integration with marketing, facilitating new campaigns and A/B tests."
          ],
          tags: ["ProductDiscovery", "FunctionalDesign", "UXIdeation", "Prototyping", "EngagementDesign", "DataInformedDecisions", "BacklogDelivery", "MobileProduct"]
        },
        {
          name: "Tech'Assist",
          client: "VALEO",
          role: "PO / Project Manager",
          type: "Internal Tool / Data",
          summary: "Complete redefinition of Valeo's global technical support tool, responsible for supporting operations in dozens of countries. The project required large-scale functional design, robust technical documentation and international standardization of flows and data.",
          challenge: "TechAssist was a strategic tool used by thousands of technicians, but suffered from obsolete technology, weak usability and an engineer-centric structure — far from real needs. Valeo had to renew the entire system, including functional architecture, technical content, navigation and export mechanisms for different markets and languages.",
          solution: "Benchmark studies and deep usage analysis were conducted to identify critical failures and structure the new version. More than 90 pages of specifications were produced, including technical diagrams, detailed flows, documentation rules and navigation models. Multi-language and multi-instance management was organized. The intervention included the design and implementation of the XML export mechanism, essential for feeding local markets.",
          impact: [
             "Complete functional base, replacing the old version with a clear and scalable architecture.",
             "Robust documentation (+90 pages) to support the technical team and internationalization.",
             "XML export process implemented and standardized for multiple markets.",
             "Structured backlog, with epics, features and US ready for development.",
             "Better usability and consistency, correcting historical issues.",
             "Reduced technical dependence, thanks to standards and reusable processes."
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
          domain: "fitec.fr"
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
          items: ["LLM Integration", "Prompt Engineering", "n8n Workflows", "Agentic AI Orchestration"]
        },
        {
          name: "Product Foundations",
          icon: Layers,
          items: ["Product Discovery", "Agile Delivery", "SCRUM", "Backlog Strategy", "User Stories", "BDD"]
        },
        {
          name: "Design & Prototyping",
          icon: PenTool,
          items: ["Figma", "Adobe XD", "Miro", "Framer", "Webflow", "Wireframing"]
        },
        {
          name: "Technical",
          icon: Code,
          items: ["HTML / CSS", "Databases (MySQL, Supabase)", "XML / JSON", "APIs & Webhooks"]
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      text: "If you’d like to connect or discuss a project, feel free to reach out — I’ll get back to you soon.",
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
      description: "Concevoir des produits digitaux où convergent utilisabilité, structure et intelligence. J'allie pensée centrée utilisateur, design fonctionnel et automatisation IA pour créer des expériences performantes.",
      cta_contact: "Me contacter",
      cta_cv: "Télécharger CV",
      trilingual: "TRILINGUE"
    },
    about: {
      title: "À Propos",
      p1: "Avec 6 ans d'expérience dans la conception et la structuration de produits numériques, je transforme des exigences complexes en solutions claires, utilisables et intelligentes.",
      p2: "J'ai piloté discovery, spécification et delivery pour des projets d'accessibilité, des plateformes multi-profils et des systèmes d'entreprise — toujours avec rigueur et cohérence."
    },
    services: {
      title: "Ce Que Je Fais",
      items: [
        {
          id: "automation",
          title: "Je crée des automatisations intelligentes",
          desc: "Je conçois des automatisations qui réduisent le travail manuel et augmentent l'efficacité opérationnelle grâce à l'IA.",
          points: [
            "Orchestration d'agents IA (Agentic AI + n8n)",
            "Intégration de LLMs dans les produits & processus",
            "Création d'embeddings & architectures Vector DB",
            "Automatisations via API & webhooks"
          ]
        },
        {
          id: "po",
          title: "Je structure les produits digitaux",
          desc: "Je transforme les objectifs commerciaux en produits clairs, bien définis et prêts à être construits.",
          points: [
            "Structuration de backlogs & critères d'acceptation",
            "Rédaction de user stories & spécifications",
            "Application du BDD (Gherkin)",
            "Alignement métier & capacités techniques"
          ]
        },
        {
          id: "pm",
          title: "Je façonne la stratégie produit",
          desc: "Je définis la direction, priorise la valeur et aide les équipes à prendre de meilleures décisions.",
          points: [
            "Conduite de discovery & analyse d'opportunités",
            "Structuration de roadmaps & KPIs",
            "Alignement des parties prenantes complexes",
            "Transformation de problèmes en plans actionnables"
          ]
        },
        {
          id: "delivery",
          title: "Je pilote le delivery",
          desc: "Je garantis une exécution continue et prévisible dans des environnements agiles.",
          points: [
            "Facilitation des cérémonies SCRUM",
            "Orchestration DEV, QA, UX & stakeholders",
            "Gestion des releases & flux de publication",
            "Suivi de la performance post-lancement"
          ]
        },
        {
          id: "ux",
          title: "Je prototype des expériences",
          desc: "Je donne forme aux idées en créant des expériences testables et centrées sur l'utilisateur.",
          points: [
            "Développement de wireframes & flux",
            "Test & validation rapide d'hypothèses",
            "Design d'expériences accessibles & cross-platform",
            "Utilisation de Figma & Framer"
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
            "Gestion du backlog, rédaction d'histoires utilisateur et spécifications fonctionnelles en coordination avec les équipes SEO et marketing.",
            "Préparation des releases d'applications mobiles (iOS, Android), suivi des performances, gestion de la mise en production.",
            "Animation des cérémonies SCRUM, organisation des démos et supports de communication.",
            "Accompagnement de l'amélioration continue du produit, optimisation des process et documentation.",
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
            "Pilotage de plusieurs projets parallèles du discovery au delivery (Web, Windows/macOS, iOS/Android).",
            "Coordination transverse des équipes DEV/QA/UX et gestion des dépendances.",
            "Ateliers de co-création, benchmarks et story mapping pour cadrer la valeur.",
            "Conception et validation de prototypes : wireframes/maquettes, tests utilisateurs ciblés.",
            "Recueil, formalisation et challenge des besoins ; rédaction de spécifications fonctionnelles et user stories BDD.",
            "Cadre agile mis en place : priorisation par la valeur, sprints (planning, reviews, retros) et démos régulières."
          ],
          tech: ["Cross-platform", "Discovery", "BDD"]
        },
        {
          period: "Jan 2021 - Août 2021",
          role: "Consultant Digital",
          company: "Actency",
          location: "Paris",
          description: [
            "Application Manager : Pilotage du RUN multi-comptes avec priorisation et suivi budgétaire pour assurer la continuité de service.",
            "Planification des batches et coordination quotidienne avec les équipes tech/design pour sécuriser les mises en production.",
            "Proxy PO : Interventions avant-vente, cadrage produit et structuration des backlogs initiaux.",
            "Conduite de story mapping, wireframing et recherche UX (entretiens, insights) pour aligner besoins produit-utilisateur."
          ],
          tech: ["Conseil", "UX Research", "Pre-sales"]
        },
        {
          period: "Sept 2018 - Juil 2019",
          role: "Chef de Projet Digital Junior / PO",
          company: "Catalina Marketing",
          location: "Boulogne-Billancourt",
          description: [
            "Maintenance évolutive et livraison de nouvelles fonctionnalités selon la roadmap produit, garantissant la continuité du service.",
            "Ateliers de co-création et benchmark concurrentiel pour identifier les opportunités UX et prioriser les améliorations à forte valeur.",
            "Conception et validation de prototypes : wireframes/maquettes testés auprès des stakeholders avant développement.",
            "Gestion du backlog : rédaction d'Epics et User Stories, priorisation et coordination quotidienne avec les équipes tech (France/Offshore).",
            "Assurance Qualité : préparation et exécution des tests de non-régression et suivi des correctifs jusqu'en production.",
            "Documentation & Communication : spécifications fonctionnelles, rapports de sprint et démos régulières aux parties prenantes."
          ],
          tech: ["Gestion Offshore", "UX Design", "QA"]
        },
        {
          period: "Sept 2016 - Août 2018",
          role: "Chef de Projet Digital / PO",
          company: "Valeo",
          location: "Saint Denis",
          description: [
            "Pilotage de la refonte Tech'Assist (plateforme de support technique Valeo) selon une approche Design Thinking centrée utilisateur.",
            "Analyse des besoins métier et benchmark concurrentiel ; cadrage via charte projet, spécifications fonctionnelles et schémas techniques.",
            "Transformation des besoins en backlog structuré (Epics, Features, User Stories) avec priorisation et suivi.",
            "Mise en place de dashboards de pilotage et de performance sur Google Data Studio.",
            "Optimisation du traitement des incidents pour les sites Valeo Service, avec formalisation des procédures.",
            "Conception et déploiement d'un export documentaire XML pour accélérer la migration de XWiki vers Drupal.",
            "Assurance Qualité : préparation/exécution des tests de non-régression, formation interne et évangélisation Back Office."
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
          role: "Product Owner",
          type: "R&D / Accessibilité",
          summary: "Solution complète pour la création et la consommation de contenus éducatifs tactiles et sonores, composée d'un éditeur desktop et d'une app mobile orientée vers les étudiants aveugles. Le projet exigeait une structure fonctionnelle robuste, des règles d'interaction avancées et une stratégie agile capable d'organiser un écosystème entièrement nouveau.",
          challenge: "Les chercheurs de l'Université Paul Sabatier cherchaient à moderniser l'accès à l'apprentissage pour les personnes déficientes visuelles. La limitation du matériel braille, la rareté des exemplaires et le manque de ressources numériques accessibles créaient des barrières profondes. Il était nécessaire de concevoir deux applications interconnectées — l'une pour la création d'interactions multimodales (tactile, relief, gesture e audio) et l'autre pour permettre leur exploration par les étudiants — tout en maintenant cohérence, accessibilité et rigueur fonctionnelle.",
          solution: "L'intervention a impliqué de structurer tout le fonctionnement de l'écosystème, en menant des entretiens, en définissant le périmètre e en installant un cadre agile complet avec workflows et règles de criticité. Des parcours complexes, story mapping et roadmap ont été modélisés, ainsi que la création de toutes les règles d'interaction tactile et sonore. Le backlog a été rédigé intégralement en BDD/Gherkin pour garantir la précision technique. La documentation a été adaptée pour les lecteurs d'écran. Avec le départ du designer, j'ai assumé la conception des interfaces — assurant continuité et validation auprès de l'équipe technique et des chercheurs.",
          impact: [
             "Écosystème fonctionnel complet : spécifications détaillées pour éditeur desktop e app mobile.",
             "Cadre agile implémenté : workflows, DoR, story mapping et roadmap opérationnel.",
             "Backlog structuré en BDD, éliminant l'ambiguïté et réduisant le retravail.",
             "Interfaces conçues et livrées sans designer, maintenant la cohérence visuelle et fonctionnelle.",
             "Sprints plus prévisibles, avec un alignement fort entre UX, accessibilité et développement.",
             "Processus de collaboration simplifié, y compris pour les utilisateurs aveugles et les chercheurs techniques."
          ],
          tags: ["FunctionalDesign", "Accessibility", "ProductDiscovery", "UXThinking", "AgileFrameworks", "BDD", "Prototyping"]
        },
        {
          name: "CASP",
          client: "LHH",
          role: "Proxy PO",
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
          client: "CATALINA",
          role: "Product Owner",
          type: "APP MOBILE & WEB B2C",
          summary: "Évolution continue de l'application et du site de cashback de Catalina, avec un focus sur l'amélioration de l'engagement, de l'utilisabilité et de la performance des campagnes. Inclut la création d'un module de tirages au sort qui a transformé la participation des utilisateurs et élevé l'efficacité des activations.",
          challenge: "L'application Coupon Network avait une grande base d'utilisateurs, mas les actions promotionnelles avaient une faible visibilité et les tirages au sort étaient menés de façon déconnectée : les utilisateurs étaient sélectionnés sans savoir qu'ils participaient. Cela générait un gaspillage d'opportunité et des réclamations. Le défi était de créer une expérience claire, visuelle, motivante et opérationnellement efficace.",
          solution: "L'action a commencé par un diagnostic, analyse de données et entretiens. Des ateliers d'idéation et une session de co-construction de wireframes en direct ont été menés — une approche efficace pour aligner marketing, parties prenantes et tech. Le module a été conçu de bout en bout : hypothèses, benchmark, prototype, définitions fonctionnelles, critères d'éligibilité, logique de tickets et flux de participation. Le développement a été suivi jusqu'à la livraison et l'analyse d'impact.",
          impact: [
             "Nouveau module de tirages intégré à l'app et au site, avec participation explicite.",
             "Expérience gamifiée, avec critères clairs d'éligibilité (ex.: valider des coupons).",
             "Base mas qualifiée, avec des participants pleinement conscients de la campagne.",
             "Réduction du coût de conversion, avec amélioration expressive de la performance.",
             "Flux d'engagement stabilisé, réduisant ambiguïtés et réclamations.",
             "Intégration fluide avec le marketing, facilitant de nouvelles campagnes et A/B tests."
          ],
          tags: ["ProductDiscovery", "FunctionalDesign", "UXIdeation", "Prototyping", "EngagementDesign", "DataInformedDecisions", "BacklogDelivery", "MobileProduct"]
        },
        {
          name: "Tech'Assist",
          client: "VALEO",
          role: "PO / Chef de Projet",
          type: "OUTIL INTERNE / DATA",
          summary: "Redéfinition complète de l'outil mondial d'assistance technique de Valeo, responsable de soutenir les opérations dans des dizaines de pays. Le projet exigeait une conception fonctionnelle à grande échelle, une documentation technique robuste et une standardisation internationale des flux et des données.",
          challenge: "TechAssist était un outil stratégique utilisé par des milliers de techniciens, mas souffrait d'une technologie obsolète, d'une usabilité faible et d'une structure centrée ingénieur — loin des besoins réels. Valeo devait renouveler tout le système, incluant architecture fonctionnelle, contenu technique, navigation et mécanismes d'export pour différents marchés et langues.",
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
      message: "Idées préliminaire et prototypes IA en cours de reconstruction."
    },
    education: {
      title: "Formation & Certifications",
      academic: [
        {
          degree: "Développeur No-code & Automatisations IA (Agentic IA)",
          school: "No-Code StartUp",
          year: "2025 - 2026",
          desc: "Former à la création d'automatisations et d'agents IA dans un environnement no-code.",
          details: ["automatisation de workflows", "conception d'agents IA", "intégration d'API", "systèmes no-code", "prototypage rapide", "structuration de données pour l'automatisation"],
          domain: "nocodestartup.io"
        },
        {
          degree: "Consultant CRM Salesforce",
          school: "FITEC",
          year: "2020",
          desc: "Former des consultants Salesforce fonctionnels pour la configuration et le support CRM.",
          details: ["modélisation des processus de vente", "configuration des objets", "automatisation des flux", "intégration CRM", "reporting", "conseil fonctionnel"],
          domain: "fitec.fr"
        },
        {
          degree: "Spécialisation Management de l'Innovation",
          school: "HEC Paris",
          year: "2019",
          desc: "Développer les compétences pour diriger l'innovation en entreprise.",
          details: ["stratégie d'innovation", "design thinking", "création de MVP", "méthodes de prototypage", "évaluation d'opportunités", "analyse de marché"],
          domain: "hec.edu"
        },
        {
          degree: "Master en Systèmes d'Information & Management Digital",
          school: "Grenoble Ecole de Management",
          year: "2017 - 2019",
          desc: "Habiliter à gérer les systèmes d'information et les projets digitaux stratégiques.",
          details: ["stratégie digitale", "gouvernance IT", "architecture des systèmes", "gestion de projet", "prise de décision basée sur les données", "frameworks de transformation"],
          domain: "grenoble-em.com"
        },
        {
          degree: "Bachelor en Webdesign UX/UI",
          school: "Supdeweb Paris",
          year: "2016 - 2017",
          desc: "Former les professionnels UX/UI pour le web et le mobile.",
          details: ["conception d'interface", "wireframing", "user flows", "systèmes visuels", "prototypage", "principes d'utilisabilité", "responsive design"],
          domain: "supdeweb.com"
        }
      ],
      certs: [
        { 
          name: "AI Product Manager", 
          issuer: "IBM Professional Certification", 
          year: "2025", 
          desc: "Certifier les professionnels dans la gestion stratégique de produits IA.",
          details: ["stratégie produit IA", "fondamentaux du ML", "métriques d'évaluation", "gouvernance de l'IA", "considérations éthiques", "définition de roadmap"],
          domain: "ibm.com" 
        },
        { 
          name: "Professional Scrum Product Owner (PSPO)", 
          issuer: "Scrum.org", 
          year: "2020", 
          desc: "Valider la maîtrise du rôle de Product Owner dans le framework Scrum.",
          details: ["gestion du backlog", "définition de la valeur", "user stories", "planification de sprint", "alignement des parties prenantes", "métriques produit"],
          domain: "scrum.org" 
        },
        {
          name: "Administrateur Salesforce",
          issuer: "Salesforce",
          year: "2020",
          desc: "Qualifier les administrateurs pour configurer et maintenir les environnements Salesforce.",
          details: ["modèle utilisateur et sécurité", "automatisation (Flows)", "objets & champs", "tableaux de bord & rapports", "configuration de plateforme", "optimisation des processus"],
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
          items: ["Intégration LLM", "Prompt Engineering", "Workflows n8n", "Agentic AI Orchestration"]
        },
        {
          name: "Fondamentaux Produit",
          icon: Layers,
          items: ["Discovery", "Agile Delivery", "SCRUM", "Backlog Strategy", "User Stories", "BDD"]
        },
        {
          name: "Design & Technique",
          icon: PenTool,
          items: ["Figma", "Adobe XD", "Miro", "Framer", "Webflow", "Wireframing"]
        },
        {
          name: "Technique",
          icon: Code,
          items: ["HTML / CSS", "Bancos de Dados (MySQL, Supabase)", "XML / JSON", "APIs & Webhooks"]
        }
      ]
    },
    contact: {
      title: "Contactez-moi",
      text: "Si vous souhaitez me contacter ou discuter d'un projet, n'hésitez pas — je reviendrai vers vous rapidement.",
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
      description: "Construindo produtos digitais onde usabilidade, estrutura e inteligência convergem. Combino pensamento centrado no usuário, design funcional e automação via IA para criar experiências que funcionam — bela e eficientemente.",
      cta_contact: "Entrar em contato",
      cta_cv: "Baixar CV",
      trilingual: "TRILÍNGUE"
    },
    about: {
      title: "Sobre Mim",
      p1: "Com 6 anos de experiência projetando e estruturando produtos digitais, sou especialista em transformar requisitos complexos em soluções claras, usáveis e inteligentes. Meu trabalho une pensamento centrado no usuário, design funcional e práticas ágeis sólidas para criar produtos que escalam e entregam valor real.",
      p2: "Já liderei discovery, especificação e entrega em projetos de acessibilidade, plataformas multiperfil e sistemas corporativos — sempre com foco em rigor, coerência e necessidades reais. Hoje, também integro automação e IA nos fluxos de produto para acelerar equipes e ampliar capacidades. Acredito que clareza, empatia e colaboração são o que tornam grandes produtos possíveis."
    },
    services: {
      title: "O Que Eu Faço",
      items: [
        {
          id: "automation",
          title: "Eu crio automações inteligentes",
          desc: "Eu crio automações inteligentes que reduzem trabalho manual e aumentam eficiência operacional usando IA.",
          points: [
            "Orchestro agentes de IA (Agentic AI + n8n)",
            "Integro LLMs em produtos e processos",
            "Crio embeddings e arquiteturas com Vector DB",
            "Desenvolvo automações via APIs e webhooks",
            "Desenho sistemas híbridos (Humano + IA)"
          ]
        },
        {
          id: "po",
          title: "Eu estruturo produtos digitais",
          desc: "Eu transformo objetivos de negócio em produtos claros, bem definidos e prontos para serem construídos.",
          points: [
            "Estruturo backlogs e critérios sólidos",
            "Escrevo user stories e specs funcionais",
            "Aplico Behavior-Driven Development (Gherkin)",
            "Alinho necessidades e capacidades técnicas",
            "Mantenho visão e roadmap organizados"
          ]
        },
        {
          id: "pm",
          title: "Eu moldo a estratégia de produto",
          desc: "Eu defino direção, priorizo valor e ajudo equipes a tomarem decisões melhores.",
          points: [
            "Conduzo discovery e análise de oportunidades",
            "Estruturo roadmaps e KPIs mensuráveis",
            "Alinho stakeholders em contextos complexos",
            "Realizo benchmark e análise de mercado",
            "Transformo problemas em planos acionáveis"
          ]
        },
        {
          id: "delivery",
          title: "Eu lidero entrega e execução",
          desc: "Eu garanto execução contínua e previsível em ambientes ágeis.",
          points: [
            "Facilitito cerimônias SCRUM (planning, daily, reviews)",
            "Orchestro DEV, QA, UX e stakeholders",
            "Gerencio releases e fluxo de publicação",
            "Acompanho performance pós-lançamento",
            "Equilibro velocidade e qualidade técnica"
          ]
        },
        {
          id: "ux",
          title: "Eu desenho experiências",
          desc: "Eu dou forma às ideias criando experiências testáveis e centradas no usuário.",
          points: [
            "Desenvolvo wireframes e fluxos navegáveis",
            "Testo e valido hipóteses com usuários",
            "Desenho experiências acessíveis e cross-platform",
            "Uso Figma e Framer para acelerar ciclos"
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
            "Gestão do backlog, redação de histórias de usuário e especificações funcionais em coordenação com as equipes de SEO e marketing.",
            "Preparação de releases de aplicativos móveis (iOS, Android), monitoramento de performance e gestão de entrada em produção.",
            "Animação de cerimônias SCRUM, organização de demos e materiais de comunicação.",
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
            "Pilotagem de múltiplos projetos paralelos do discovery ao delivery (Web, Desktop, Mobile).",
            "Coordenação transversal de equipes DEV/QA/UX e gestão de dependências para garantir as entregas.",
            "Workshops de cocriação, benchmarks e story mapping para enquadrar o valor e alinhar stakeholders.",
            "Concepção e validação de protótipos: wireframes/mockups, testes de usuário e iterações rápidas.",
            "Levantamento, formalização e desafio de requisitos; redação de specs e user stories BDD.",
            "Framework ágil implementado: priorização por valor, sprints e demos regulares."
          ],
          tech: ["Multiplataforma", "Discovery", "BDD"]
        },
        {
          period: "Jan 2021 - Ago 2021",
          role: "Consultor Digital",
          company: "Actency",
          location: "Paris",
          description: [
            "Application Manager: Pilotagem do RUN multi-contas com priorização e acompanhamento orçamentário para assegurar continuidade de serviço.",
            "Planejamento de batches e coordenação diária com equipes de tech/design para assegurar releases de produção.",
            "Proxy PO: Intervenções de pré-venda, escopo de produto e estruturação de backlogs iniciais.",
            "Condução de story mapping, wireframing e pesquisa UX (entrevistas, insights) para alinhar necessidades produto-usuário."
          ],
          tech: ["Consultoria", "UX Research", "Pre-sales"]
        },
        {
          period: "Set 2018 - Jul 2019",
          role: "Gerente de Projeto Digital Junior / PO",
          company: "Catalina Marketing",
          location: "Boulogne-Billancourt",
          description: [
            "Manutenção evolutiva e entrega de novas funcionalidades conforme o roadmap, garantindo continuidade do serviço.",
            "Workshops de cocriação e benchmarking competitivo para identificar oportunidades de UX e priorizar melhorias de alto valor.",
            "Concepção e validação de protótipos: wireframes/mockups testados com stakeholders antes do desenvolvimento.",
            "Gestão de backlog: redação de Epics e User Stories, priorização e coordenação diária com equipes tech (França/Offshore).",
            "Garantia de Qualidade: preparação e execução de testes de não-regressão e acompanhamento de correções.",
            "Documentação e Comunicação: especificações funcionais, relatórios de sprint e demos regulares."
          ],
          tech: ["Gestão Offshore", "UX Design", "QA"]
        },
        {
          period: "Set 2016 - Ago 2018",
          role: "Gerente de Projeto Digital / PO",
          company: "Valeo",
          location: "Saint Denis",
          description: [
            "Pilotagem do redesign da Tech'Assist (plataforma de suporte técnico da Valeo) usando abordagem Design Thinking centrada no usuário.",
            "Análise de necessidades de negócio e benchmark; escopo via carta de projeto, specs funcionais e esquemas técnicos.",
            "Transformação de requisitos em backlog estruturado (Epics, Features, User Stories) com priorização e acompanhamento.",
            "Configuração de dashboards de pilotagem e performance no Google Data Studio.",
            "Otimização do processamento de incidentes para sites Valeo Service, com documentação formal de procedimentos.",
            "Design e implantação de um mecanismo de exportação documental XML para acelerar migração de XWiki para Drupal.",
            "Garantia de Qualidade: preparação/execução de testes de não-regressão, treinamento interno e evangelização de Back Office."
          ],
          tech: ["Design Thinking", "Data Studio", "Migration"]
        }
      ]
    },
    projects: {
      title: "Estudos de Caso",
      intro: "Projetos selecionados destacando visão estratégica e excelência na entrega.",
      client_label: "Cliente",
      labels: {
        challenge: "Context / Desafio",
        solution: "Solução / Intervenção",
        impact: "Impacto"
      },
      items: [
        {
          name: "DERi",
          client: "Université Paul Sabatier",
          role: "Product Owner",
          type: "P&D / Acessibilidade",
          summary: "Solução completa para criação e consumo de conteúdos educativos táteis e sonoros para estudantes cegos. O projeto exigia uma estrutura funcional robusta, regras de interação avançadas e uma estratégia ágil capaz de organizar um ecossistema inteiramente novo.",
          challenge: "Pesquisadores da Universidade Paul Sabatier buscavam modernizar o acesso ao aprendizado para pessoas com deficiência visual. A limitação do material braille, a escassez de exemplares e a falta de recursos digitais acessíveis criavam barreiras profundas. Era necessário projetar duas aplicações interconectadas — uma para criação de interações multimodais (tátil, relevo, gesto e áudio) e outra para permitir sua exploração pelos estudantes — mantendo coerência, acessibilidade e rigor funcional.",
          solution: "A intervenção envolveu estruturar todo o funcionamento do ecossistema, conduzindo entrevistas, definindo o escopo e instalando um framework ágil completo com fluxos de trabalho e regras de criticidade. Percursos complexos, story mapping e roadmap foram modelados, bem como a criação de todas as regras de interação tátil e sonora. O backlog foi redigido integralmente em BDD/Gherkin para garantir precisão técnica. A documentação foi adaptada para leitores de tela. Com a saída do designer, assumi a concepção das interfaces — garantindo continuidade e validação junto à equipe técnica e pesquisadores.",
          impact: [
             "Ecossistema funcional completo: especificações detalhadas para editor desktop e app mobile.",
             "Framework ágil implementado: fluxos, DoR, story mapping e roadmap operacional.",
             "Backlog estruturado em BDD, eliminando ambiguidade e reduzindo retrabalho.",
             "Interfaces concebidas e entregues sem designer dedicado, mantendo consistência visual e funcional.",
             "Sprints mais previsíveis, com forte alinhamento entre UX, acessibilidade e desenvolvimento.",
             "Processo de colaboração simplificado, inclusive para usuários cegos e pesquisadores técnicos."
          ],
          tags: ["FunctionalDesign", "Accessibility", "ProductDiscovery", "UXThinking", "AgileFrameworks", "BDD", "Prototyping"]
        },
        {
          name: "CASP",
          client: "LHH",
          role: "Proxy PO",
          type: "Plataforma SaaS B2B",
          summary: "Portal integrado para empregados, consultores e supervisores, criado para estruturar e centralizar todo o processo de transição profissional após demissões econômicas. O projeto exigia clareza funcional, modelagem de percursos complexos e uma organização ágil capaz de dar vida a interações críticas entre múltiplos perfis.",
          challenge: "A LHH precisava modernizar a gestão dos processos de demissão econômica, tradicionalmente realizados por telefone, e-mails e visitas. Faltava uma plataforma única que permitisse aos funcionários acessar informações, enviar documentos ou contatar consultores. O desafio incluía múltiplos perfis, letramento digital limitado e forte pressão por clareza e previsibilidade.",
          solution: "A intervenção envolveu a análise profunda do processo existente e a estruturação dos três fluxos principais (empregado, consultor, supervisor). Foram conduzidas entrevistas, mapeamento de jornadas, story mapping e definição de requisitos funcionais. O framework ágil foi instalado do zero. Com a saída inesperada do designer, todo o design funcional e workshops de concepção foram assumidos diretamente, permitindo alinhar visão técnica, regras de negócio e UX. O trabalho também incluiu a evangelização dos stakeholders com treinamentos específicos.",
          impact: [
             "Modelo funcional completo para três perfis (empregado, consultor, supervisor).",
             "Backlog claro e priorizado, permitindo previsibilidade e desenvolvimento contínuo.",
             "Interface redesenhada após saída do designer, garantindo continuidade sem perda de ritmo.",
             "Story mapping e jornadas estruturadas, permitindo decisões mais rápidas e assertivas.",
             "Stakeholders alinhados, graças ao treinamento e pedagogia aplicada.",
             "Projeto estabilizado, evitando risco de cancelamento e garantindo entrega constante."
          ],
          tags: ["FunctionalDesign", "AgileFrameworks", "ProductDiscovery", "UXThinking", "BacklogStrategy", "ServiceDesign", "ProcessMapping", "Prototyping"]
        },
        {
          name: "Coupon Network",
          client: "CATALINA",
          role: "Product Owner",
          type: "APP MOBILE & WEB B2C",
          summary: "Evolução contínua do aplicativo e site de cashback da Catalina, com foco na melhoria do engajamento, usabilidade e performance das campanhas. Inclui a criação de um módulo de sorteios que transformou a participação dos usuários e elevou a eficiência das ativações.",
          challenge: "O aplicativo Coupon Network tinha uma grande base de usuários, mas as ações promocionais tinham baixa visibilidade e os sorteios eram realizados de forma desconectada: os usuários eram selecionados sem saber que participavam. Isso gerava desperdício de oportunidade e reclamações. O desafio era criar uma experiência clara, visual, motivadora e operacionalmente eficiente.",
          solution: "A ação começou com um diagnóstico, análise de dados e entrevistas. Foram conduzidos workshops de ideação e uma sessão de co-construção de wireframes ao vivo — uma abordagem eficaz para alinhar marketing, stakeholders e tech. O módulo foi projetado de ponta a ponta: hipóteses, benchmark, protótipo, definições funcionais, critérios de elegibilidade, lógica de tickets e fluxo de participação. O desenvolvimento foi acompanhado até a entrega e análise de impacto.",
          impact: [
             "Novo módulo de sorteios integrado ao app e site, com participação explícita.",
             "Experiência gamificada, com critérios claros de elegibilidade (ex.: validar cupons).",
             "Base mas qualificada, com participantes plenamente conscientes da campanha.",
             "Redução do custo de conversão, com melhora expressiva na performance.",
             "Fluxo de engajamento estabilizado, reduzindo ambiguidades e reclamações.",
             "Integração fluida com marketing, facilitando novas campanhas e testes A/B."
          ],
          tags: ["ProductDiscovery", "FunctionalDesign", "UXIdeation", "Prototyping", "EngagementDesign", "DataInformedDecisions", "BacklogDelivery", "MobileProduct"]
        },
        {
          name: "Tech'Assist",
          client: "VALEO",
          role: "PO / Chef de Projeto",
          type: "FERRAMENTA INTERNA / DATA",
          summary: "Redefinição completa da ferramenta mundial de assistência técnica da Valeo, responsável por apoiar operações em dezenas de países. O projeto exigia uma concepção funcional em grande escala, documentação técnica robusta e padronização internacional de fluxos e dados.",
          challenge: "TechAssist era uma ferramenta estratégica usada por milhares de técnicos, mas sofria com tecnologia obsoleta, usabilidade fraca e estrutura centrada em engenharia — longe das necessidades reais. A Valeo precisava renovar todo o sistema, incluindo arquitetura funcional, conteúdo técnico, navegação e mecanismos de exportação para diferentes mercados e idiomas.",
          solution: "Foram realizados estudos de benchmark e uma análise profunda de uso para identificar falhas críticas e estruturar a nova versão. Mais de 90 páginas de especificações foram produzidas, incluindo esquemas técnicos, fluxos detalhados, regras de documentação e modelos de navigation. A gestão multi-idioma e multi-instância foi organizada. A intervenção incluiu o desenho e implementação do mecanismo de exportação XML, essencial para alimentar os mercados locais.",
          impact: [
             "Base funcional completa, substituindo a versão antiga por uma arquitetura clara e escalável.",
             "Documentação robusta (+90 páginas) para apoiar a equipe técnica e a internacionalização.",
             "Processo de exportação XML implementado e padronizado para múltiplos mercados.",
             "Backlog estruturado, com epics, features e US prontas para desenvolvimento.",
             "Melhor usabilidade e consistência, corrigindo problemas históricos.",
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
          degree: "No-code Developer & AI Automations (Agentic AI)",
          school: "No-Code StartUp",
          year: "2025 - 2026",
          desc: "Capacitar para criar automações e agentes de IA em um ambiente no-code.",
          details: ["automação de workflows", "design de agentes IA", "integração de APIs", "sistemas no-code", "prototipagem rápida", "estruturação de dados para automação"],
          domain: "nocodestartup.io"
        },
        {
          degree: "Consultor CRM Salesforce",
          school: "FITEC",
          year: "2020",
          desc: "Treinar consultores Salesforce funcionais para configuração e suporte CRM.",
          details: ["modelagem de processos de vendas", "configuração de objetos", "automação de fluxos", "integração CRM", "relatórios", "consultoria funcional"],
          domain: "fitec.fr"
        },
        {
          degree: "Especialização em Gestão da Inovação",
          school: "HEC Paris",
          year: "2019",
          desc: "Desenvolver competências para liderar a inovação corporativa.",
          details: ["estratégia de inovação", "design thinking", "criação de MVP", "métodos de prototipagem", "avaliação de oportunidades", "análise de mercado"],
          domain: "hec.edu"
        },
        {
          degree: "Mestrado em Sistemas de Informação & Gestão Digital",
          school: "Grenoble Ecole de Management",
          year: "2017 - 2019",
          desc: "Habilitar para gerir sistemas de informação e projetos digitais estratégicos.",
          details: ["estratégia digital", "governança de TI", "arquitetura de sistemas", "gestão de projetos", "tomada de decisão baseada em dados", "frameworks de transformação"],
          domain: "grenoble-em.com"
        },
        {
          degree: "Bacharelado em Webdesign UX/UI",
          school: "Supdeweb Paris",
          year: "2016 - 2017",
          desc: "Formar profissionais de UX/UI para web e mobile.",
          details: ["design de interface", "wireframing", "fluxos de usuário", "sistemas visuais", "prototipagem", "princípios de usabilidade", "design responsivo"],
          domain: "supdeweb.com"
        }
      ],
      certs: [
        { 
          name: "AI Product Manager", 
          issuer: "IBM Professional Certification", 
          year: "2025", 
          desc: "Certificação estratégica em gestão de produtos com IA.",
          details: ["estratégia de produto IA", "fundamentos de ML", "métricas de avaliação", "governança de IA", "considerações éticas", "definição de roadmap"],
          domain: "ibm.com" 
        },
        { 
          name: "Professional Scrum Product Owner (PSPO)", 
          issuer: "Scrum.org", 
          year: "2020", 
          desc: "Validar o domínio do papel de Product Owner no framework Scrum.",
          details: ["gestão de backlog", "definição de valor", "user stories", "planamento de sprint", "alinhamento de stakeholders", "métricas de produto"],
          domain: "scrum.org" 
        },
        {
          name: "Administrador Salesforce",
          issuer: "Salesforce",
          year: "2020",
          desc: "Qualificar administradores para configurar e manter ambientes Salesforce.",
          details: ["modelo de usuário e segurança", "automação (Flows)", "objetos e campos", "dashboards e relatórios", "configuração de plataforma", "otimização de processos"],
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
          items: ["Integração LLM", "Engenharia de Prompt", "n8n"]
        },
        {
          name: "Produto",
          icon: Layers,
          items: ["Discovery", "Agile", "SCRUM", "User Stories", "BDD"]
        },
        {
          name: "Design & Técnico",
          icon: PenTool,
          items: ["Figma", "Webflow", "HTML/CSS", "Bancos de Dados", "APIs"]
        }
      ]
    },
    contact: {
      title: "Vamos Conversar",
      text: "Se você quiser se conectar ou discutir um projeto, fique à vontade para entrar em contato — retornarei em breve.",
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

const ExperimentationVault: React.FC<{ t: Content['experimentations'] }> = ({ t }) => {
  return (
    <div className="relative w-full h-[400px] border border-cyber-blue/30 bg-cyber-blue/5 overflow-hidden flex flex-col items-center justify-center group/vault">
        <div className="absolute inset-0 bg-warning-stripes opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-8 bg-cyber-blue/10 border-b border-cyber-blue/30 flex items-center px-4 justify-between">
           <div className="flex items-center gap-2">
              <Terminal size={14} className="text-cyber-blue animate-pulse" />
              <span className="font-mono text-[10px] text-cyber-blue tracking-widest">VAULT_V1.0</span>
           </div>
        </div>
        <div className="absolute left-0 w-full h-[2px] bg-cyber-blue/50 shadow-[0_0_15px_#3b82f6] animate-scan-vertical pointer-events-none z-10"></div>
        <div className="z-20 text-center space-y-4 relative p-12 border border-cyber-blue/20 bg-black/80 backdrop-blur-md rounded-sm cyber-glitch-box-blue hover:border-cyber-blue/50 transition-colors duration-300">
           <div className="flex justify-center mb-4">
              <TestTube size={48} className="text-cyber-blue opacity-90" />
           </div>
           <div className="space-y-2">
             <h3 className="text-2xl font-bold font-mono tracking-widest text-white group-hover/vault:text-cyber-blue transition-colors">
               {t.subtitle} 
             </h3>
             <p className="font-mono text-sm text-gray-200 mt-4 max-w-sm mx-auto">
               {t.message}
             </p>
           </div>
        </div>
    </div>
  );
};

const ServiceCard: React.FC<{ title: string; desc: string; items: string[]; iconId: string }> = ({ title, desc, items, iconId }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const getVisualIdentity = () => {
    switch(iconId) {
      case 'automation': return { icon: <Bot size={32} className="text-cyber-magenta" />, bg: 'bg-neural-dots-magenta', accent: 'bg-cyber-magenta' };
      case 'po': return { icon: <KanbanSquare size={32} className="text-cyber-yellow" />, bg: 'bg-circuit', accent: 'bg-cyber-yellow' };
      case 'pm': return { icon: <Compass size={32} className="text-cyber-orange" />, bg: 'bg-hex', accent: 'bg-cyber-orange' };
      case 'delivery': return { icon: <Rocket size={32} className="text-cyber-blue" />, bg: 'bg-speed', accent: 'bg-cyber-blue' };
      case 'ux': return { icon: <PenTool size={32} className="text-cyber-pink" />, bg: 'bg-isometric', accent: 'bg-cyber-pink' };
      default: return { icon: <Cpu size={32} className="text-white" />, bg: '', accent: 'bg-white' };
    }
  };

  const visuals = getVisualIdentity();

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group/service relative p-8 h-full rounded-sm border border-white/5 bg-cyber-black overflow-hidden transition-all duration-300 hover:border-white/20`}
    >
      <div className={`absolute inset-0 ${visuals.bg} pointer-events-none opacity-20 transition-opacity duration-500 ${hovered ? 'opacity-60' : 'opacity-20'}`}></div>
      <div className="relative z-10 mb-6">
         <div className="p-3 bg-white/5 rounded-sm border border-white/10 w-fit">
            {visuals.icon}
         </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 min-h-[56px] flex items-center">{title}</h3>
        <p className="text-sm text-gray-200 italic mb-6 leading-relaxed font-mono border-l-2 border-gray-800 pl-3">"{desc}"</p>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
              <span className={`w-1.5 h-1.5 ${visuals.accent} rounded-full mt-1.5 shrink-0`}></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const InstitutionBadge: React.FC<{ name: string, type?: string, domain?: string }> = ({ name, type = "school", domain }) => {
  const [imgError, setImgError] = useState(false);
  let initials = name.substring(0, 2).toUpperCase();
  if (name.includes("Grenoble")) initials = "GEM";
  if (name.includes("HEC")) initials = "HEC";

  return (
    <div className="w-16 h-16 shrink-0 border border-gray-700 bg-white flex items-center justify-center relative group-hover:border-cyber-lime transition-colors duration-300 cyber-glitch-box overflow-hidden rounded-sm">
       {domain && !imgError ? (
         <img 
           src={`https://cdn.brandfetch.io/${domain}?c=${BRANDFETCH_API_KEY}`} 
           alt={name}
           className="w-12 h-12 object-contain relative z-10"
           onError={() => setImgError(true)}
         />
       ) : (
         <div className="flex flex-col items-center z-10 bg-cyber-dark w-full h-full justify-center">
           <span className="font-mono font-bold text-lg text-gray-200">{initials}</span>
         </div>
       )}
    </div>
  );
};

const ExpandableEduItem: React.FC<{ item: any, type?: string }> = ({ item, type = "school" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group/${type} border-b border-gray-800 last:border-0 pb-6 mb-6 last:mb-0`}>
       <div className="flex gap-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
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
         </div>
       </div>
       <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="pl-20 pr-4">
             <p className="text-gray-200 text-sm mb-3 italic border-l-2 border-gray-700 pl-3">{item.desc}</p>
             <div className="text-[10px] font-bold font-mono text-cyber-lime uppercase tracking-widest mb-2">KEY COMPETENCIES</div>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 mt-2">
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

const CaseStudyCard: React.FC<{ project: any, labels: any }> = ({ project, labels }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group/project relative border border-white/5 hover:border-cyber-lime/50 bg-white/[0.02] transition-all duration-300 cyber-glitch-box flex flex-col ${isExpanded ? 'bg-white/[0.04]' : ''}`}>
      <div className="p-8 pb-4">
         <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-white/5 text-xs font-mono text-gray-300 uppercase border border-white/10 rounded-sm">
              {project.type}
            </span>
            <span className="px-3 py-1 bg-cyber-lime/5 text-xs font-mono text-cyber-lime/80 border border-cyber-lime/20 rounded-sm flex items-center gap-2">
               <Building2 size={12} /> <span className="font-bold">{labels.client_label}:</span> <span className="uppercase">{project.client}</span>
            </span>
         </div>
         <h3 className="text-4xl font-bold text-white group-hover/project:text-cyber-lime transition-colors mb-2">{project.name}</h3>
         <span className="text-sm font-mono text-gray-400 block mb-4 border-b border-gray-800 pb-4">{project.role}</span>
         <p className="text-lg text-gray-200 leading-relaxed mb-6">{project.summary}</p>
         <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 text-sm font-mono text-cyber-lime uppercase tracking-widest hover:text-white transition-colors">
           {isExpanded ? 'Close Mission File' : 'Explore Mission'}
           {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
         </button>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out border-t border-white/5 bg-black/20 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 pt-6 space-y-8">
           <div className="relative pl-6 border-l-2 border-red-500/50">
             <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2"><AlertTriangle size={14} /> {labels.challenge}</h4>
             <p className="text-gray-200 text-sm">{project.challenge}</p>
           </div>
           <div className="relative pl-6 border-l-2 border-blue-500/50">
             <h4 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Lightbulb size={14} /> {labels.solution}</h4>
             <p className="text-gray-200 text-sm">{project.solution}</p>
           </div>
           <div className="relative pl-6 border-l-2 border-cyber-lime/50">
             <h4 className="text-xs font-mono text-cyber-lime uppercase tracking-widest mb-3 flex items-center gap-2"><TrendingUp size={14} /> {labels.impact}</h4>
             <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
               {project.impact.map((item: string, i: number) => (
                 <li key={i} className="text-sm text-gray-200 flex items-start gap-3">
                   <span className="w-1.5 h-1.5 bg-cyber-lime rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_#a3e635]"></span> {item}
                 </li>
               ))}
             </ul>
           </div>
           {project.tags && (
             <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-4">
               {project.tags.map((tag: string, i: number) => (
                 <span key={i} className="text-xs font-mono text-gray-500">#{tag}</span>
               ))}
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

const CyberpunkProfileImage = () => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] group">
        <div className="absolute inset-0 bg-cyber-lime/5 rounded-2xl transform rotate-3 cyber-glitch-box"></div>
        <div className="w-full h-full relative rounded-2xl overflow-hidden border border-cyber-lime/30 bg-cyber-dark z-10 transition-colors duration-300 group-hover:border-cyber-lime">
          <img src={PROFILE_PIC_URL} alt="Ismael Filho" className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500 relative z-10" />
          <div className="profile-scanline"></div>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-cyber-black border border-cyber-lime/30 p-4 z-30 flex items-center gap-3 cyber-glitch-box">
            <div className="bg-cyber-lime/10 p-2 rounded-sm"><Layers className="text-cyber-lime" size={24} /></div>
            <div>
              <div className="text-cyber-lime font-mono text-xs uppercase">Experience</div>
              <div className="text-2xl font-bold text-white">6+ Years</div>
            </div>
        </div>
    </div>
  );
};

const CyberPreloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusMessages = [
    "INITIALIZING NEURAL LINK...",
    "LOADING CORE MODULES...",
    "SYNCING DATA STREAMS...",
    "OPTIMIZING INTERFACE...",
    "FINALIZING CONNECTION..."
  ];

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const advanceProgress = () => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const jump = Math.min(100 - prev, Math.floor(Math.random() * 15) + 1);
        const next = prev + jump;
        
        // Update status message based on progress
        const newIndex = Math.min(
          statusMessages.length - 1,
          Math.floor((next / 100) * statusMessages.length)
        );
        setStatusIndex(newIndex);

        if (next >= 100) {
            setTimeout(onComplete, 260);
            return 100;
        }
        timeoutId = setTimeout(advanceProgress, 260);
        return next;
      });
    };
    timeoutId = setTimeout(advanceProgress, 260);
    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-cyber-black flex flex-col items-center justify-center font-mono">
      <div className="relative z-10 flex flex-col items-center w-80">
         <h1 className="text-4xl font-bold text-white mb-2 tracking-widest animate-glitch-flicker">LOADING...</h1>
         <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mt-8">
            <div className="h-full bg-cyber-lime shadow-[0_0_10px_#a3e635] transition-all duration-200" style={{ width: `${progress}%` }}></div>
         </div>
         <p className="mt-4 text-[10px] text-cyber-lime/70 tracking-[0.2em] uppercase animate-pulse">
           {statusMessages[statusIndex]}
         </p>
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

  if (isLoading) return <CyberPreloader onComplete={() => setIsLoading(false)} />;

  return (
    <div className="min-h-screen relative font-sans text-cyber-text bg-grid pb-20 animate-in fade-in duration-700">
      <LanguageSwitcher current={lang} setLang={setLang} />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-12 xl:px-24 pt-32 lg:pt-0 gap-12 lg:gap-20">
        <div className="flex-1 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight flex flex-col">
              <GlitchText text="ISMAEL" />
              <GlitchText text="FILHO" className="text-white" />
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
              <span className="text-lg font-mono text-cyber-lime font-bold border border-cyber-lime px-4 py-1.5 rounded-sm">{t.hero.role}</span>
              <GlitchText text={t.hero.subrole} className="text-white font-mono text-sm" />
            </div>
            <p className="max-w-2xl text-lg md:text-xl text-white leading-relaxed mb-10">{t.hero.description}</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 font-mono w-full">
              <a href="#contact" className="cyber-glitch-box px-8 py-3 bg-cyber-lime text-cyber-black font-bold uppercase hover:bg-white transition-all duration-300">{t.hero.cta_contact}</a>
              <a href={CV_FOLDER_URL} download target="_blank" rel="noreferrer" className="cyber-glitch-box px-8 py-3 border border-gray-500 text-white hover:text-cyber-lime transition-all duration-300 uppercase flex items-center gap-2"><Download size={18} /> {t.hero.cta_cv}</a>
            </div>
        </div>
        <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <CyberpunkProfileImage />
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <section id="about" className="px-6 md:px-12 xl:px-24 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm"><GlitchText text={t.nav.about} /></div>
          <div className="md:col-span-3">
            <SectionHeading>{t.about.title}</SectionHeading>
            <div className="space-y-6 text-lg text-gray-200 leading-relaxed max-w-3xl">
              <p>{t.about.p1}</p><p>{t.about.p2}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 md:px-12 xl:px-24 py-24 border-t border-white/5 bg-cyber-dark/30">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm"><GlitchText text={t.nav.services} /></div>
          <div className="md:col-span-3">
            <SectionHeading>{t.services.title}</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.items.map(item => <ServiceCard key={item.id} title={item.title} desc={item.desc} items={item.points} iconId={item.id} />)}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 md:px-12 xl:px-24 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm"><GlitchText text={t.nav.experience} /></div>
          <div className="md:col-span-3">
            <SectionHeading>{t.experience.title}</SectionHeading>
            <div className="relative border-l border-gray-800 ml-3 space-y-12">
              {t.experience.jobs.map((job, idx) => (
                <div key={idx} className="relative pl-8 group/job">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-800 rounded-full border border-gray-600 group-hover/job:bg-cyber-lime transition-colors"></div>
                  <div className="mb-1 font-mono text-xs text-cyber-lime mb-2">{job.period}</div>
                  <h3 className="text-2xl font-bold text-white group-hover/job:text-cyber-lime transition-colors"><GlitchText text={job.role} /></h3>
                  <div className="text-lg text-gray-200 mb-4">{job.company} — <span className="text-sm font-normal text-gray-400">{job.location}</span></div>
                  <ul className="space-y-2 text-gray-300">
                    {job.description.map((desc, i) => <li key={i} className="flex items-start gap-2"><span className="mt-2 w-1 h-1 bg-gray-600 rounded-full shrink-0"></span>{desc}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 md:px-12 xl:px-24 py-24 border-t border-white/5 bg-cyber-dark/30">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm"><GlitchText text={t.nav.projects} /></div>
          <div className="md:col-span-3">
            <SectionHeading>{t.projects.title}</SectionHeading>
            <div className="grid gap-6">
              {t.projects.items.map((project, idx) => <CaseStudyCard key={idx} project={project} labels={{ ...t.projects.labels, client_label: t.projects.client_label }} />)}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="px-6 md:px-12 xl:px-24 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm"><GlitchText text={t.nav.education} /></div>
          <div className="md:col-span-3">
             <SectionHeading>{t.education.title}</SectionHeading>
             <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                   <h3 className="text-xs font-mono text-cyber-lime uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <GraduationCap size={16} /> ACADEMIC
                   </h3>
                   {t.education.academic.map((edu, idx) => <ExpandableEduItem key={idx} item={edu} type="school" />)}
                </div>
                <div className="space-y-6">
                   <h3 className="text-xs font-mono text-cyber-magenta uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <Award size={16} /> CERTIFICATIONS
                   </h3>
                   {t.education.certs.map((cert, idx) => <ExpandableEduItem key={idx} item={cert} type="cert" />)}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 md:px-12 xl:px-24 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1 font-mono text-gray-400 text-sm"><GlitchText text={t.nav.contact} /></div>
          <div className="md:col-span-3">
            <SectionHeading>{t.contact.title}</SectionHeading>
            <p className="text-2xl text-white mb-12 max-w-2xl">{t.contact.text}</p>
            <div className="flex flex-wrap gap-6">
              <a href="mailto:ismaelnfilho@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-cyber-lime text-cyber-black font-bold uppercase cyber-glitch-box"><Mail size={20} />{t.contact.cta_email}</a>
              <a href="https://linkedin.com/in/ismaelnfilho/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 border border-gray-600 text-white font-bold uppercase cyber-glitch-box"><Linkedin size={20} />{t.contact.cta_linkedin}</a>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 px-8 py-4 border border-gray-600 text-white font-bold uppercase cyber-glitch-box"><Phone size={20} />{t.contact.cta_phone}</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 text-center">
         <div className="font-mono text-gray-500 text-xs tracking-widest uppercase">Ismael Filho © {new Date().getFullYear()}</div>
         <div className="font-mono text-gray-600 text-[10px] mt-4 uppercase">System Status: Online | V2.4.0</div>
      </footer>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
