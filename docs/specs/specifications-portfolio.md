# Cahier des Charges & Spécifications — Portfolio Anass Asrir

Ce document sert de spécification technique et visuelle complète pour le développement du portfolio et blog personnel d'**Anass Asrir** (`anassasrir.com` / `anassasrir.fr`).

---

## 1. Vue d'ensemble & Objectifs

* **Nom du site :** Anass Asrir
* **Domaines cibles :** `anassasrir.com` / `anassasrir.fr`
* **Objectif (Purpose) :** Vitrine personnelle pour exposer des réalisations (développement & UI/UX design), publier des articles de veille/réflexion technique, et générer des prises de contact.
* **Public cible (Audience) :** Recruteurs, clients potentiels, pairs développeurs/designers, lecteurs du blog.
* **Identité de marque :**
  * Minimaliste, épuré, technique, moderne et rigoureux.
  * Inspiration directe : typographie brutaliste/suisse, contrastes nets, mise en page structurée en grille d'architecte.

---

## 2. Direction Artistique & Charte Graphique

### Palette de couleurs — Monochrome Radical
* **Fond principal (Background) :** Noir absolu `#000000`
* **Fond secondaire / cartes :** Gris anthracite très sombre `#0A0A0A` à `#121212`
* **Texte principal & titres :** Blanc pur `#FFFFFF`
* **Texte secondaire & méta-données :** Gris moyen `#999999` / `#777777`
* **Bordures & séparateurs :** Gris sombre `#222222` ou `#333333`
* **Boutons & accents :**
  * Bouton plein : Fond `#FFFFFF`, texte `#000000`
  * Bouton contour : Fond transparent, bordure `#FFFFFF`, texte `#FFFFFF` (inversion au hover)

### Typographie
* **Titres & Display :** `Space Grotesk` (graisses : `Bold` / `700`, `Medium` / `500`, majuscules affirmées)
* **Corps de texte & données techniques :** `Space Mono` (graisses : `Regular` / `400`)
* **Hiérarchie :**
  * Surtitres de section (ex. "SÉLECTION", "RÉFLEXIONS") : `Space Mono`, majuscules, taille petite, interlettrage étendu (`letter-spacing: 0.15em`).
  * Titres H1 / H2 : `Space Grotesk`, majuscules, impact visuel massif.
  * Liens & méta-infos : `Space Mono`, majuscules ou minuscules codées.

---

## 3. Architecture des Sections (One-Page ou Multi-Pages)

Le site est conçu comme une expérience fluide (idéalement Single-Page avec ancres ou routing dynamique pour les articles complets).

### 3.1 Header / Navigation
* **Gauche :** Logo typographique `ANASS ASRIR` (en `Space Grotesk` ou `Space Mono`, bold, tout en majuscules).
* **Droite :** Liens d'ancrage en `Space Mono` majuscule :
  * `ACCUEIL`
  * `RÉALISATIONS`
  * `BLOG`
  * Bouton d'action encadré : `CONTACT`

---

### 3.2 Hero Section (Accueil)
* **Surtitre / Tagline visuelle :** Titre massif sur 2 ou 3 lignes :
  * `CRÉATEUR DE` (en blanc)
  * `SOLUTIONS` (en gris contrasté `#888888`)
  * `DIGITALES.` (en blanc)
* **Sous-titre / Bio d'accroche :**
  > *Développeur & Designer passionné par la création d'expériences numériques minimalistes, performantes et centrées sur l'utilisateur.*
* **Bouton d'appel à l'action (CTA) :**
  * Bouton avec bordure blanche fine : `VOIR LES PROJETS →` (redirection fluide vers la section Réalisations).

---

### 3.3 Section Réalisations (Portfolio)
* **En-tête de section :**
  * Surtitre : `SÉLECTION`
  * Titre : `RÉALISATIONS.`
  * Indicateur temporel à droite : `2022 — 2026`
* **Mise en page :** Grille responsive à 3 colonnes (`grid-cols-1 md:grid-cols-3`), espacement propre.
* **Format des cartes projets :**
  * Visuel sombre ou mockup monochrome en pleine largeur avec overlay contrasté.
  * Titre du projet en `Space Grotesk` gras (ex. `NEO-BANKING APP`, `ECO-COMMERCE`, `ARCHI-DASHBOARD`).
  * Catégories / Tags en `Space Mono` discret (ex. `Fintech / Mobile Design`, `SaaS / Architecture`).
  * Bouton d'interaction intégré ou en superposition : `VOIR LE PROJET`.

---

### 3.4 Section Blog (Articles / Réflexions)
* **En-tête de section :**
  * Surtitre : `RÉFLEXIONS`
  * Titre : `LE BLOG.`
  * Lien externe à droite : `TOUS LES ARTICLES →`
* **Format de liste :** Liste verticale séparée par des lignes horizontales fines (`border-t border-[#222222]`).
* **Structure de chaque ligne d'article :**
  * Date de publication au-dessus en `Space Mono` (ex. `OCTOBRE 2026`).
  * Titre de l'article en `Space Grotesk` bold (ex. *Pourquoi le minimalisme est le futur du web*).
  * Tag de catégorie à droite avec flèche (ex. `DESIGN →`, `DEV →`, `UX →`).
  * Effet au survol : surbrillance subtile de la ligne ou translation de la flèche.

---

### 3.5 Section Contact & Footer
* **En-tête :** Titre percutant `DISCUTONS DE VOTRE PROJET.`
* **Texte d'accompagnement :**
  > *Je suis toujours ouvert à de nouvelles collaborations et projets stimulants.*
* **Liens sociaux (icônes monochromes) :**
  * GitHub
  * LinkedIn
  * X (Twitter)
  * Dribbble / Portfolio web
* **Formulaire de contact (minimaliste) :**
  * Champs soulignés (underline inputs) sans bordure latérale :
    * `NOM` (placeholder: "Entrez votre nom")
    * `EMAIL` (placeholder: "votre@email.com")
    * `MESSAGE` (placeholder: "Comment puis-je vous aider ?")
  * Bouton de soumission plein : fond blanc, texte noir, texte centré `ENVOYER LE MESSAGE`.
* **Footer (Bas de page) :**
  * Gauche : `© 2026 ANASS ASRIR`
  * Centre : `DÉVELOPPÉ AVEC PASSION`
  * Droite : Liens légaux ou signature technique.

---

## 4. Recommandations Techniques d'Implémentation

* **Stack recommandée :** Next.js (App Router) ou Astro (pour un blog ultra-rapide) couplé à Tailwind CSS.
* **Polices Google Fonts :**
  * `Space Grotesk`: poids 400, 500, 700.
  * `Space Mono`: poids 400, 700.
* **Composants clés à prévoir :**
  * Système de gestion des articles Markdown / MDX pour le blog.
  * Composant de formulaire avec validation d'adresse email.
  * Transitions CSS douces pour les effets de hover (inversion noir/blanc).