export interface Article {
  id: string;
  date: string;
  category: string;
  title: string;
  readingTime: string;
  excerpt: string;
  content: string[];
}

export const ARTICLES: Article[] = [
  {
    id: "shift-left-ai-agents",
    date: "OCTOBRE 2026",
    category: "QA ARCHITECTURE",
    title: "Shift-Left & Écosystème Multi-Agents : L'Avenir du Software Testing",
    readingTime: "5 min de lecture",
    excerpt:
      "Comment l'orchestration d'agents IA spécialisés transforme le rôle du SDET : de l'écriture manuelle de scripts à l'architecture de systèmes auto-réparateurs.",
    content: [
      "Le paradigme Shift-Left a longtemps souffert d'un goulet d'étranglement : la maintenance continue des suites de tests automatisés face à l'accélération des cycles de livraison. Dans un monde où les fonctionnalités sont poussées quotidiennement en production, un framework classique devient rapidement un centre de coût s'il n'est pas conçu pour s'adapter.",
      "Avec l'émergence des agents IA d'ingénierie (comme l'architecture que nous déployons dans QA-Hub), le paradigme change radicalement. Un agent comme @qa-scaffolder initialise le squelette complet d'une suite de tests en analysant les schémas d'API et les maquettes. Plus loin encore, un agent @qa-healer analyse les échecs de pipelines CI/CD, identifie les sélecteurs DOM modifiés et propose automatiquement une Pull Request corrective.",
      "Le rôle de l'Architecte SDET n'est plus de coder des Page Objects en boucle, mais d'orchestrer la gouvernance de ces agents, de définir des Q-KPIs stricts et de garantir que la barrière de qualité bloque 100% des anomalies avant la mise en production.",
    ],
  },
  {
    id: "canvas-2d-permaculture",
    date: "SEPTEMBRE 2026",
    category: "DEV & ALGORITHMES",
    title:
      "Modélisation Spatiale 4D : Concevoir un Planificateur de Potager avec Next.js & Konva",
    readingTime: "7 min de lecture",
    excerpt:
      "Retour d'expérience sur les défis mathématiques et graphiques de 'Couleurs au Potager' : calculs de polygones Turf.js, rendu vectoriel haute cadence et simulation temporelle.",
    content: [
      "Développer une application de modélisation de potager en permaculture semble simple en surface, mais soulève rapidement des défis algorithmiques passionnants : comment représenter fidèlement des parcelles aux formes arbitraires, calculer leurs surfaces réelles en mètres carrés, et générer automatiquement des rangs de plantation optimisés ?",
      "Pour résoudre cela dans 'Couleurs au Potager', nous avons combiné React Konva pour le rendu 2D accéléré par GPU et Turf.js pour les calculs de géométrie spatiale. Chaque parcelle est modélisée par un polygone vectoriel stocké en JSONB dans PostgreSQL via Supabase.",
      "La véritable valeur ajoutée réside dans le moteur 4D : un slider temporel qui permet au jardinier de naviguer dans le temps de janvier à décembre. L'algorithme calcule les coefficients de croissance, vérifie les matrices d'antagonisme végétal (compagnonnage) et planifie automatiquement la rotation des cultures sur 4 ans pour préserver les sols.",
    ],
  },
  {
    id: "minimalisme-suisse-web",
    date: "AOÛT 2026",
    category: "DESIGN & BRUTALISME",
    title: "Pourquoi le Minimalisme Suisse et le Brutalisme Dominent le Web Technique",
    readingTime: "4 min de lecture",
    excerpt:
      "Loin des effets de mode et des interfaces surchargées, l'approche monochrome radicale remet la typographie, la hiérarchie et la lisibilité au centre absolu.",
    content: [
      "Le design web traverse une saturation visuelle : gradients omniprésents, animations superflues et surcharge cognitive. À contre-courant, le style international suisse et le brutalisme digital réaffirment un principe fondamental : la forme suit la fonction.",
      "En adoptant une palette monochrome radicale — noir absolu (#000000), anthracite (#0A0A0A), blanc pur (#FFFFFF) et gris neutres — on élimine toute distraction superflue. Chaque contraste devient intentionnel. Les polices Space Grotesk pour les titres d'impact et Space Mono pour les données techniques créent une esthétique d'ingénierie rigoureuse.",
      "Pour un portfolio d'architecte logiciel, ce parti pris esthétique communique immédiatement la précision, la maîtrise technique et la clarté d'esprit requises pour concevoir des systèmes critiques.",
    ],
  },
  {
    id: "playwright-bdd-francais",
    date: "JUILLET 2026",
    category: "AGILE & BDD",
    title: "Playwright BDD en Français : Réconcilier Équipes Produit et QA",
    readingTime: "6 min de lecture",
    excerpt:
      "Implémenter le Behavior-Driven Development avec Playwright pour faire de la spécification un livrable vivant et compréhensible par tous les acteurs.",
    content: [
      "L'un des défis récurrents en entreprise est le fossé linguistique entre les Product Owners (qui rédigent les critères d'acceptation) et les développeurs QA (qui écrivent les assertions techniques). Le BDD (Behavior-Driven Development) avec la syntaxe Gherkin ('Étant donné que', 'Quand', 'Alors') comble précisément cet écart.",
      "Dans le projet ludo-éducatif JoliPas, nous avons mis en place Playwright couplé à playwright-bdd en français. Résultat : chaque User Story devient directement un scénario exécutable. Les fonctionnalités comme la sélection de monde, la navigation tactile et les thèmes saisonniers sont validées dans une langue partagée.",
      "Ce cadre garantit que la suite de tests n'est pas une boîte noire technique, mais une spécification vivante, toujours synchronisée avec la vision produit.",
    ],
  },
];
