export interface Project {
  id: string;
  title: string;
  category: "sdet" | "apps" | "opensource" | "community";
  categoryLabel: string;
  subtitle: string;
  year: string;
  description: string;
  impact: string;
  tags: string[];
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
    video?: string;
  };
  metrics?: { label: string; value: string };
}

export const PROJECTS: Project[] = [
  {
    id: "qa-hub",
    title: "QA-HUB",
    category: "sdet",
    categoryLabel: "SDET Architecture / AI Platform",
    subtitle: "Enterprise Quality Automation & AI Agents Ecosystem",
    year: "2026",
    description:
      "Monorepo agnostique conçu pour déployer une infrastructure d'assurance qualité logicielle complète, moderne et industrialisée en quelques minutes. Intègre un dashboard marque blanche (Next.js), un moteur Playwright POM/COM et une flotte de 9 agents IA spécialisés.",
    impact:
      "Onboarding client instantané sans toucher au core et génération autonome des pipelines CI/CD.",
    tags: ["Next.js", "Playwright", "TypeScript", "AI Agents", "Monorepo pnpm", "White-Label"],
    highlights: [
      "Isolation multi-clients par fichiers JSON de configuration",
      "Dashboard de pilotage avec radar d'instabilité (flakiness) et plan de test vivant",
      "9 agents IA (@qa-scaffolder, @qa-devops, @qa-healer, @qa-visual...)",
      "Ingestion unifiée de rapports multi-CI (GitHub Actions, GitLab, Azure Pipelines)",
    ],
    links: {
      github: "https://github.com/anassasrir/qa-hub",
    },
    metrics: { label: "Agents IA orchestrés", value: "9" },
  },
  {
    id: "couleursaupotager",
    title: "COULEURS AU POTAGER",
    category: "apps",
    categoryLabel: "AgriTech / Modélisation 4D",
    subtitle: "Canvas 2D Spatial & Planification Permacole",
    year: "2026",
    description:
      "Application web interactive de conception spatiale et planification de potager en permaculture. Offre un rendu Canvas 2D vectoriel haute performance, un moteur géométrique spatial calculant les surfaces réelles en m² et une simulation 4D de rotation pluriannuelle des cultures.",
    impact:
      "Calcul algorithmique automatique du compagnonnage végétal et visualisation 4D mois par mois.",
    tags: ["Next.js 15", "React 19", "Konva.js", "Turf.js", "Zustand", "Supabase JSONB"],
    highlights: [
      "Canvas 2D vectoriel libre avec zoom infini et manipulation fluide",
      "Moteur d'association végétale (associations bénéfiques / antagonistes)",
      "Gestion d'historique Undo / Redo temps réel avec Zustand & Zundo",
      "Slider temporel 4D pour anticiper la croissance et la rotation des cultures",
    ],
    links: {
      github: "https://github.com/anassasrir/couleursaupotager",
    },
    metrics: { label: "Précision spatiale", value: "0.01 m²" },
  },
  {
    id: "jolipas-app",
    title: "JOLIPAS (KIDS APP)",
    category: "apps",
    categoryLabel: "EdTech / Design System",
    subtitle: "Ludo-éducatif 2-6 ans & Architecture BDD Gherkin",
    year: "2026",
    description:
      "Application web ludo-éducative pour enfants de 2 à 6 ans développée en Vue 3 et Pinia. Repose sur un Design System complet sous Storybook avec moteur de thèmes saisonniers (Halloween, Noël...) et un cadre de tests BDD Gherkin en français.",
    impact:
      "Excellence qualité avec 0 vulnérabilité SonarCloud et tests d'accessibilité dès le jeune âge.",
    tags: ["Vue 3", "Vite", "Pinia", "Storybook", "Playwright BDD", "Cloudflare Pages"],
    highlights: [
      "Navigation par 4 Mondes Pédagogiques sans scroll infini",
      "Atelier Storybook autonome et architecture Design Tokens",
      "Moteur de thèmes saisonniers dynamiques",
      "Couverture complète en tests unitaires Vitest et BDD Gherkin Playwright",
    ],
    links: {
      github: "https://github.com/anassasrir/jolipas-app",
    },
    metrics: { label: "Mondes d'éveil", value: "4" },
  },
  {
    id: "equier-momes",
    title: "LES EQUIER'MÔMES",
    category: "apps",
    categoryLabel: "Portail Associatif / Citoyen",
    subtitle: "Plateforme Parents d'Élèves, Calendrier ICS & RGPD",
    year: "2026",
    description:
      "Plateforme web officielle de l'Association de Parents d'Élèves (FCPE) du groupe scolaire Equiernolles. Conçue avec Next.js 16 et Supabase EU, elle propose un calendrier scolaire dynamique synchronisable en .ics, un module d'adhésion et une stricte conformité RGPD.",
    impact:
      "Modernisation de la communication associative pour des centaines de familles et billetterie solidaire.",
    tags: ["Next.js 16", "React 19", "Tailwind v4", "Supabase EU", "Brevo", "Export ICS"],
    highlights: [
      "Calendrier interactif des événements avec flux de synchronisation ICS",
      "Intégration des flux HelloAsso et passerelle FCPE sécurisée",
      "Emails transactionnels et lettres d'information avec Brevo",
      "Hébergement 100% européen et respect rigoureux de la vie privée",
    ],
    links: {
      github: "https://github.com/anassasrir/equier-momes",
    },
    metrics: { label: "Événements gérés", value: "100%" },
  },
  {
    id: "selenium-csharp",
    title: "SELENIUM C# ARCHITECTURE",
    category: "opensource",
    categoryLabel: "Open-Source / Automation Core",
    subtitle: "Scalable Page Object Model Framework",
    year: "2023",
    description:
      "Framework d'automatisation E2E open-source hautement architecturé en C#/.NET basé sur le patron Page Object Model (POM). Développé pour servir de fondation standardisée aux suites de tests critiques en environnement grand compte.",
    impact:
      "Réduction drastique des faux-positifs et isolation complète des sélecteurs pour une maintenance simplifiée.",
    tags: ["C# / .NET", "Selenium WebDriver", "XUnit / MSTest", "POM Pattern", "Open-Source"],
    highlights: [
      "Architecture Page Object Model stricte et typée",
      "Prise en charge du multi-navigateur et exécution parallèle",
      "Rapports détaillés et capture automatique lors des échecs",
      "Base de référence adoptée dans de nombreuses formations QA",
    ],
    links: {
      github: "https://github.com/anassasrir/selenium-framework",
    },
    metrics: { label: "Architecture", value: "POM Enterprise" },
  },
  {
    id: "cypress-tests",
    title: "CYPRESS ENTERPRISE SUITE",
    category: "opensource",
    categoryLabel: "Open-Source / Automation Core",
    subtitle: "High-Speed Continuous UI & API Testing",
    year: "2023",
    description:
      "Suite d'automatisation Cypress moderne combinant tests d'interface utilisateur, validations d'API REST et contrôles visuels de non-régression, conçue pour une vélocité maximale dans les pipelines CI/CD.",
    impact:
      "Accélération des retours de test en Pull Request et intégration continue fiabilisée.",
    tags: ["Cypress", "JavaScript", "API Testing", "CI/CD Pipelines", "Visual Testing"],
    highlights: [
      "Commandes personnalisées pour une écriture fluide des scénarios",
      "Validation conjointe de l'état frontend et des réponses API",
      "Intégration directe dans GitHub Actions et Azure DevOps",
      "Gestion optimisée des artefacts de test et vidéos",
    ],
    links: {
      github: "https://github.com/anassasrir/cypress-tests",
    },
    metrics: { label: "Validation PR", value: "Automatisée" },
  },
  {
    id: "formation-sdet",
    title: "FORMATION SDET & BDD",
    category: "community",
    categoryLabel: "Mentorship / Public Training",
    subtitle: "Cours Vidéo Selenium WebDriver & Gherkin",
    year: "2023",
    description:
      "Série vidéo complète et gratuite de formation à l'automatisation de tests avec Selenium WebDriver et Cucumber/Gherkin. Destinée à former les ingénieurs QA et développeurs aux principes du Behavior-Driven Development (BDD).",
    impact:
      "Plusieurs milliers de vues et de testeurs formés aux bonnes pratiques d'architecture de tests.",
    tags: ["Selenium", "Cucumber", "Gherkin (BDD)", "YouTube", "Mentorat QA"],
    highlights: [
      "Comprendre la collaboration Product / QA grâce au langage Gherkin",
      "Mise en place d'un framework robuste pas à pas",
      "Gestion des assertions, des rapports et des jeux de données",
      "Ressources open-source et code source partagés en accès libre",
    ],
    links: {
      video:
        "https://youtube.com/playlist?list=PL4BtVtsdnzadpYqpzXNrArRKXiG1MI6nH&si=esxQyFSGFNbqq2zQ",
    },
    metrics: { label: "Accès", value: "100% Gratuit" },
  },
];
