# Portfolio — Développeur Full-Stack & Cybersécurité

Portfolio professionnel construit avec React, TypeScript, Vite, Tailwind CSS et Framer Motion.

## Installation

```bash
npm install
npm run dev
```

Le site est alors accessible sur http://localhost:5173

## Build de production

```bash
npm run build
npm run preview
```

## À personnaliser avant publication

Cherche les commentaires `// À compléter` dans le code, notamment :

- `src/components/Hero.tsx` : lien du CV (`/cv.pdf` à placer dans `public/`), liens GitHub/LinkedIn
- `src/components/Footer.tsx` et `src/components/Contact.tsx` : email, GitHub, LinkedIn
- `src/data/projects.ts` : lien GitHub et capture d'écran de WittelFood, détails du projet PHP/MySQL
- `src/data/education.ts` : nom de l'université et dates exactes
- `src/data/experience.ts` : à remplir dès qu'un stage est confirmé (voir l'exemple commenté)
- `src/components/Contact.tsx` : brancher un vrai service d'envoi d'email (Formspree, EmailJS, ou une API) — le formulaire valide actuellement côté client mais n'envoie rien

## Structure

```
src/
  types/        interfaces TypeScript partagées
  data/         contenu (projets, compétences, expériences, formation) séparé des composants
  hooks/        useTheme (mode clair/sombre), useScrollSpy (navigation active)
  components/   un composant par section
```

## Ajouter un projet

Dupliquer un objet dans `src/data/projects.ts` en respectant l'interface `Project` (voir `src/types/index.ts`).

## Ajouter une expérience

Dupliquer l'exemple commenté dans `src/data/experience.ts`.
