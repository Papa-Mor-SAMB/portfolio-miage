import type { Project } from "../types";

export const projects: Project[] = [
    {
    id: "app-rh-recrutement-onboarding",
    name: "Application RH – Recrutement et Onboarding",
    date: "Oct. 2025 – Jan. 2026",
    description:
      "Application Java Spring Boot pour la gestion du recrutement et de l'onboarding, réalisée dans le cadre d'un projet académique à l'Université Haute-Alsace.",
    problem:
      "Centraliser la gestion des offres et candidatures avec des rôles utilisateurs distincts (admin, RH, candidat) et un accès sécurisé.",
    technologies: ["Java", "Spring Boot", "Spring Security"],
    features: [
      "CRUD offres/candidatures",
      "Rôles utilisateur (admin, RH, candidat)",
      "Authentification et sécurité avec Spring Security",
    ],
    githubUrl: null, // À compléter si le repo est disponible
    demoUrl: null,
    image: null,
  },
  {
  id: "filtre-dns-securite",
  name: "Filtre DNS de sécurité",
  date: "2026",
  description:
    "Système de filtrage et de suivi des requêtes DNS, dans l'esprit d'un outil comme Pi-Hole, développé dans le cadre du cours \"Mise en œuvre de la sécurité informatique\".",
  problem:
    "Aller plus loin qu'un firewall réseau classique en filtrant au niveau du nom de domaine plutôt que des seules adresses IP, avec suivi et statistiques des requêtes DNS.",
  technologies: ["DNS", "Bind / Unbound", "Sécurité applicative"],
  features: [
    "Gestion et import de blacklists de domaines",
    "Ajout d'exceptions à une blacklist existante",
    "Édition de blacklists locales personnalisées",
    "Journalisation des requêtes filtrées",
    "Statistiques d'utilisation",
    "Page d'administration pour piloter blacklists, journaux et statistiques",
    "Page anonyme de statistiques globales",
  ],
  githubUrl: "https://gitlab.com/papemor2711/projet_blacklist_dns",
  demoUrl: null,
  image: null,
},
  {
    id: "api-restful-echange-electricite",
    name: "API RESTful – Échange d'électricité",
    date: "2025",
    description:
      "Conception et développement d'un site web pour l'échange d'électricité, avec une API RESTful et une interface utilisateur en Tailwind.",
    problem:
      "Créer une plateforme permettant l'échange d'électricité entre utilisateurs, avec une interface claire et un suivi collaboratif du développement.",
    technologies: ["Tailwind CSS", "REST"],
    features: [
      "CRUD complet",
      "Système d'authentification et de gestion des rôles",
      "Interface claire, fluide et orientée utilisateur avec Tailwind",
      "Documentation du projet avec GitHub Wiki et suivi des tâches (issues)",
    ],
    githubUrl: "https://github.com/SASdiop22/spring-angular-app", 
    demoUrl: null,
    image: null, 
  },
  {
    id: "base-donnees-vacataires",
    name: "Mise en place d'une base de données",
    date: "2022",
    description:
      "Création d'une base de données pour la gestion des vacataires de la Faculté des Sciences et Techniques de l'UHA de Mulhouse, sur Access et VBA Access.",
    problem:
      "Permettre à la faculté de gérer efficacement les données liées à ses enseignants vacataires.",
    technologies: ["Access", "VBA"],
    features: [],
    githubUrl: null,
    demoUrl: null,
    image: null,
  },
  {
    id: "reseau-tramway-cpp",
    name: "Gestion d'un réseau de tramway",
    date: "2022",
    description:
      "Programmation en C++ d'une application permettant de gérer un réseau de tramway.",
    problem:
      "Modéliser et simuler le fonctionnement d'un réseau de tramway : déplacement des trames, horaires de passage, distances entre arrêts, etc.",
    technologies: ["C++", "Programmation Orientée Objet"],
    features: [
      "Gestion du déplacement des trames",
      "Gestion des horaires de passage",
      "Calcul des distances nécessaires entre deux arrêts",
    ],
    githubUrl: null,
    demoUrl: null,
    image: null,
  },
  
  {
    id: "reporting-data-visualization-covid",
    name: "Reporting & data visualization – Covid-19",
    date : "2021",
    description:
      "Projet de reporting sur Tableau Desktop portant sur l'étude des données statistiques du Covid-19.",
    problem:
      "Analyser et présenter de façon visuelle les données statistiques liées au Covid-19 pour en faciliter l'interprétation.",
    technologies: ["Power BI", "Tableau", "Talend", "R"],
    features: [
      "Analyse et épuration des données",
      "Création de tableaux de bord interactifs",
      "Utilisation de filtres et de paramètres pour l'exploration des données",
      "Mise en place de visualisations adaptées aux différents types de données",
      "Interprétation des résultats",
      "Élaboration de rapports",
    ],
    githubUrl: null,
    demoUrl: null,
    image: null,
  },
];
