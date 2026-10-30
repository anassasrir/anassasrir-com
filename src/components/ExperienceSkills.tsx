import { Bot, Cpu, GitBranch, ShieldCheck } from "lucide-react";

export function ExperienceSkills() {
  const experiences = [
    {
      period: "DEPUIS 07/2023",
      role: "Quality Assurance Manager / SDET Architect",
      company: "kodehyve",
      location: "Luxembourg / Remote",
      highlights: [
        "Définition et implémentation du process complet Software Quality (Shift-Left).",
        "Architecture et déploiement d'un framework Cypress / TypeScript E2E intégré dans le flux Pull Request.",
        "Industrialisation CI via GitHub Actions : réduction de 90% du temps de validation manuelle critique.",
        "Automatisation de la gestion de données de test API SQL / Postgres avec Postman.",
      ],
    },
    {
      period: "05/2021 — 07/2023",
      role: "Quality Assurance Lead (CI/CD Industrialization)",
      company: "Raja",
      location: "Paris, France",
      highlights: [
        "Référent auto-test sur périmètres E-commerce à haute disponibilité (tunnel de paiement).",
        "Solution complète Cypress (TypeScript) intégrée dans Azure DevOps Services (100% des livrables validés).",
        "Implémentation des tests visuels automatisés avec Percy : -15% de régressions UI en production.",
      ],
    },
    {
      period: "04/2018 — 05/2021",
      role: "Quality Assurance Engineer (Strategy & Frameworks)",
      company: "Enablon",
      location: "Paris, France",
      highlights: [
        "Pilotage de la stratégie QA transverse multi-squads et standardisation des outils (Selenium C#, Ranorex, Appium).",
        "Conception de dashboards Power BI basés sur les Q-KPIs pour éclairer les décisions stratégiques.",
        "Amélioration de 30% de la maintenabilité des suites automatisées après harmonisation.",
      ],
    },
    {
      period: "08/2016 — 03/2018",
      role: "Test Analyst",
      company: "Capgemini",
      location: "Lille, France",
      highlights: [
        "Transition d'un outil propriétaire (HP UFT) vers une solution open-source pérenne (Selenium WebDriver).",
        "Framework Java + Cucumber / Gherkin pour outiller et autonomiser les testeurs fonctionnels.",
        "Exécution parallèle multi-navigateurs sur Selenium Grid et Nightly Builds Jenkins.",
      ],
    },
  ];

  const skillPillars = [
    {
      icon: Bot,
      title: "AUTOMATION & CODE",
      items: [
        "Playwright, Cypress, Selenium WebDriver, Appium",
        "Cucumber / Gherkin (BDD), RestAssured, RestSharp",
        "TypeScript, JavaScript, C# / .NET, Java, Python",
      ],
    },
    {
      icon: GitBranch,
      title: "CI/CD, DEVOPS & CLOUD",
      items: [
        "GitHub Actions (YAML), Azure DevOps Pipelines",
        "GitLab CI, Jenkins, TeamCity, Docker",
        "AWS, GCP, Cloudflare Pages, Vercel",
      ],
    },
    {
      icon: Cpu,
      title: "ADVANCED TESTING & IA",
      items: [
        "Agents IA spécialisés (scaffolding, healing, review)",
        "Visual Testing (Percy), Performance (JMeter)",
        "Kibana, BrowserStack, Firebase, XUnit, Vitest",
      ],
    },
    {
      icon: ShieldCheck,
      title: "MÉTHODOLOGIE & DATA",
      items: [
        "Certifications : ISTQB, ScrumMaster® (CSM®)",
        "Pilotage par la donnée : Power BI, Q-KPIs, SQL / Postgres",
        "Gouvernance Shift-Left, Jira, Xray, Linear",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-7xl mx-auto border-b border-[#222222]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#777777] uppercase tracking-[0.2em] block mb-2">
            PARCOURS & SAVOIR-FAIRE
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-6xl font-bold tracking-tight uppercase text-white">
            EXPÉRIENCE & EXPERTISE.
          </h2>
        </div>
        <div className="font-[family-name:var(--font-space-mono)] text-xs text-[#888888] tracking-widest uppercase border border-[#222222] bg-[#0a0a0a] px-4 py-2 self-start md:self-auto">
          8+ ANS // SHIFT-LEFT INDUSTRIALISATION
        </div>
      </div>

      {/* Skills Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {skillPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="bg-[#0a0a0a] border border-[#222222] p-6 hover:border-[#555555] transition-colors"
            >
              <div className="w-10 h-10 border border-[#333333] bg-[#111111] flex items-center justify-center text-white mb-5">
                <Icon size={20} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold uppercase text-white tracking-tight mb-4">
                {pillar.title}
              </h3>
              <ul className="space-y-2 font-[family-name:var(--font-space-mono)] text-xs text-[#aaaaaa]">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Career Timeline */}
      <div>
        <h3 className="font-[family-name:var(--font-space-mono)] text-xs tracking-widest uppercase text-[#777777] mb-8">
          HISTORIQUE PROFESSIONNEL
        </h3>

        <div className="border-l border-[#222222] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 bg-black border border-white group-hover:bg-white transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2 font-[family-name:var(--font-space-mono)]">
                <span className="text-xs text-[#777777] uppercase tracking-wider">
                  {exp.period} // {exp.location}
                </span>
                <span className="text-xs font-bold text-white border border-[#222222] bg-[#0a0a0a] px-2 py-0.5 self-start sm:self-auto">
                  {exp.company}
                </span>
              </div>

              <h4 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold uppercase text-white mb-4">
                {exp.role}
              </h4>

              <ul className="space-y-2 font-[family-name:var(--font-space-mono)] text-xs text-[#aaaaaa] leading-relaxed max-w-3xl">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
