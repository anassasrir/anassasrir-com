# Nouveaux Projets & Side Projects d'Anass Asrir

Ce document compile les informations techniques, fonctionnelles, architecturales et les métriques des 4 nouveaux projets à intégrer dans le nouveau portfolio brutaliste / monochrome.

---

## 1. Projet Métier : QA-Hub (Enterprise Quality & AI Platform)

* **Emplacement local :** `C:\Users\asrir\Documents\Repo\qa-hub`
* **Nature du projet :** Framework d'automatisation QA Entreprise, Starter Kit Agentique & Dashboard de pilotage en marque blanche.
* **Positionnement :** Le fer de lance de l'expertise **Senior SDET Architect**. Déploiement d'une infrastructure d'assurance qualité logicielle complète, moderne et hautement industrialisée chez n'importe quel client en quelques minutes.

### Piliers Techniques & Fonctionnalités
* **Architecture Monorepo :** Gestion workspace avec `pnpm`.
* **Isolation Multi-Projets JSON (`projects/*.json`) :** Onboarding instantané d'un nouveau client sans toucher au code source du framework (issue trackers Jira / Linear / Azure, environnements cibles, scopes Git, providers CI).
* **Dashboard Marque Blanche (`apps/qa-dashboard`) :**
  * Développé sous **Next.js (App Router)**.
  * Personnalisation dynamique aux couleurs et logos du client.
  * Radar d'instabilité (*flakiness detector*), plan de test vivant, ingestion unifiée de rapports multi-CI (GitHub Actions, GitLab CI, Azure Pipelines, exécutions locales).
* **Moteur d'Automatisation Playwright (`packages/playwright-tests`) :**
  * Architecture industrielle Page Object Model & Component Object Model (POM / COM).
  * Gestion multi-environnements, fixtures avancées et moteur de tests visuels de non-régression.
* **Écosystème Multi-Agents IA (`.agents/`) :**
  * Orchestration de 9 agents spécialisés couvrant 100% du cycle de test :
    * `@qa-scaffolder` : Initialisation automatique de nouveaux projets.
    * `@qa-devops` : Génération à la volée des pipelines CI/CD selon le fournisseur.
    * `@qa-tester`, `@qa-healer` (auto-correction de sélecteurs / tests cassés), `@qa-validator`, `@qa-visual`, `@qa-publisher`, `@qa-workflow`.
* **Gouvernance Git :** Conventional Commits, hooks Husky et conformité de branches automatisée.

### Tags pour le Portfolio
`Next.js`, `Playwright`, `TypeScript`, `AI Agents`, `CI/CD Multi-Cloud`, `Monorepo pnpm`, `White-Label Dashboard`, `SDET Architecture`

---

## 2. Side Project 1 : JoliPas (Kids Learning App)

* **Emplacement local :** `C:\Users\asrir\Documents\Repo\jolipas-app`
* **Nature du projet :** Application web ludo-éducative pour enfants de 2 à 6 ans.
* **Positionnement :** Illustration de la double casquette **UI/UX & Ingénierie Front / Qualité**, conçue avec une approche pédagogique et visuelle soignée.

### Piliers Techniques & Fonctionnalités
* **Frontend & Architecture :**
  * **Vue 3** (Composition API) + **Vite** + **Pinia** (gestion d'état).
  * Déploiement haute performance sur **Cloudflare Pages**.
  * Base de données & sécurité : **Supabase** avec politiques Row Level Security (RLS).
* **Design System & Expérience Utilisateur :**
  * Atelier **Storybook** complet avec architecture de **Design Tokens CSS**.
  * Moteur de **thèmes saisonniers dynamiques** (Halloween, Noël, Pâques, etc.).
  * Ergonomie pensée pour la petite enfance : 4 Mondes Pédagogiques, catalogue sans scroll infini, feedback sensoriel engageant.
* **Excellence Qualité & BDD :**
  * Tests unitaires & composants : **Vitest**.
  * Tests End-to-End & BDD : **Playwright** + `playwright-bdd` (scénarios Gherkin en français).
  * Analyse statique & sécurité : **ESLint**, **Prettier**, **SonarQube / SonarCloud** (zéro vulnérabilité, haute couverture).
  * Méthodologie : Documentation complète du workflow de développement agentique IA.

### Tags pour le Portfolio
`Vue 3`, `Vite`, `Pinia`, `Storybook`, `Design System`, `Supabase`, `Playwright BDD (Gherkin)`, `Cloudflare Pages`, `EdTech`

---

## 3. Side Project 2 : Couleurs au Potager (Potager Planner 4D)

* **Emplacement local :** `C:\Users\asrir\Documents\potager\couleursaupotager`
* **Nature du projet :** Application web interactive de conception spatiale, planification agronomique et simulation 4D de potager en permaculture.
* **Positionnement :** Démonstration avancée en **calcul géométrique spatial**, rendu Canvas 2D temps réel et modélisation algorithmique complexe.

### Piliers Techniques & Fonctionnalités
* **Frontend & Core Engine :**
  * **Next.js 15 (React 19, TypeScript, App Router)**, Tailwind CSS, `shadcn/ui`.
  * **Canvas 2D Interactif :** Moteur `konva` + `react-konva` (zoom/pan infini, calques, dessin vectoriel libre de parcelles et rectangles, drag & drop fluide).
  * **Moteur Géométrique & Spatial :** `@turf/turf` (calculs de surfaces réelles en $m^2$, découpage intérieur de polygones et calcul de rangs).
  * **Gestion d'État & Historique :** `zustand` avec middleware `zundo` (gestion temps réel de l'Undo / Redo).
* **Backend, Données & Sécurité :**
  * **Supabase (PostgreSQL)** : Modèle vectoriel JSONB pour les plans de jardins, Row Level Security (RLS), authentification.
* **Agronomie Intelligente & Moteur 4D :**
  * **Matrice de compagnonnage végétal :** Calcul algorithmique des associations de plantes (bénéfiques, neutres, défavorables) et calcul d'espacements optimaux.
  * **Slider temporel 4D (Saisons & Rotations) :** Visualisation mois par mois (croissance dynamique des végétaux, gestion des cultures dérobées et rotation pluriannuelle des 4 familles de légumes).
* **Qualité :** Suites de tests avec **Vitest** et **Playwright**.

### Tags pour le Portfolio
`Next.js 15`, `React 19`, `Canvas 2D (Konva.js)`, `Turf.js`, `Zustand`, `Supabase (PostgreSQL JSONB)`, `Permaculture & Algorithmique`, `AgriTech`

---

## 4. Side Project 3 : Les Equier'mômes (Portail Associatif & Citoyen)

* **Emplacement local :** `C:\Users\asrir\Documents\asso-parents-eleve\equier-momes`
* **Nature du projet :** Portail web officiel et plateforme de services pour l'Association de Parents d'Élèves (APE FCPE) du groupe scolaire Equiernolles à Bétheny (51).
* **Positionnement :** Projet d'impact réel pour la communauté, alliant **UI accessible, intégration de services tiers, conformité RGPD stricte et éco-conception**.

### Piliers Techniques & Fonctionnalités
* **Stack Fullstack Moderne :**
  * **Next.js 16 (React 19, TypeScript, App Router)** avec architecture modulaire SSR / SSG.
  * **Tailwind CSS v4** et Design Tokens personnalisés respectant la charte graphique de l'école et de l'association.
  * Hébergement et déploiement continu sur **Vercel** via GitHub Actions.
* **Backend, Données & Notifications :**
  * **Supabase EU (Frankfurt 🇪🇺)** : Base PostgreSQL, Authentification, Stockage documentaire et photos, isolation RLS.
  * **Brevo (France 🇫🇷)** : Emails transactionnels, newsletters automatisées aux adhérents et messagerie du bureau.
* **Fonctionnalités Clés & Intégrations :**
  * **Calendrier d'événements interactif :** Synchronisation et export dynamique de fichiers calendrier `.ics` (Google Calendar, Apple iCal, Outlook).
  * **Gestion des adhésions & billetterie :** Intégration HelloAsso et passerelle FCPE pour les cotisations et événements (boum d'Halloween, vide-grenier, photos scolaires).
  * **Confidentialité & Accessibilité :** Respect strict du RGPD (données scolaires / mineurs, hébergement 100% européen), architecture légère et éco-responsable.
* **Qualité & CI/CD :** Pipeline automatisé avec ESLint, Prettier, **Vitest** et **Playwright**.

### Tags pour le Portfolio
`Next.js 16`, `React 19`, `Tailwind CSS v4`, `Supabase EU`, `Brevo`, `Export ICS`, `RGPD / Privacy`, `Engagement Associatif`

---

## 5. Synthèse & Grille de Sélection pour le Nouveau Portfolio

Avec l'intégration de ces nouveaux projets, le portfolio d'Anass Asrir s'enrichit d'un équilibre exceptionnel entre **Expertise SDET / Architecture QA industrielle** et **Développement Produit Fullstack / UI/UX innovant** :

| Projet | Catégorie | Stack Majeure | Rôle / Valeur Ajoutée |
| :--- | :--- | :--- | :--- |
| **QA-Hub** | *Métier / SDET Architecture* | Playwright, Next.js, TypeScript, AI Agents, CI/CD | Framework QA clé en main pour entreprises, multi-agents IA et dashboard marque blanche |
| **Couleurs au Potager** | *Side Project / AgriTech* | Next.js 15, Konva.js, Turf.js, Supabase, Zustand | Canvas 2D vectoriel, calcul spatial et simulation 4D de rotation des cultures |
| **JoliPas** | *Side Project / EdTech* | Vue 3, Pinia, Storybook, Supabase, Playwright BDD | App ludo-éducative, Design System à tokens saisonniers et tests BDD Gherkin |
| **Les Equier'mômes** | *Side Project / Associatif* | Next.js 16, Tailwind v4, Supabase EU, Brevo | Portail d'association scolaire, calendrier ICS dynamique, billetterie & RGPD |
| **Selenium C# Framework** | *Open Source / QA Core* | C# / .NET, Selenium, XUnit, POM | Framework E2E open-source scalable pour architectures d'entreprise |
| **Cypress CI Framework** | *Open Source / QA Core* | Cypress, JavaScript, API/UI, CI/CD | Framework d'automatisation haute vélocité en intégration continue |
| **Formation SDET & BDD** | *Community & Mentorship* | Selenium, Gherkin, Cucumber, YouTube | Série vidéo de vulgarisation et formation gratuite à l'architecture de test |
