export interface Project {
  id: string;
  name: string;
  date?: string; // ex. "Mai 2025 – Août 2025" ou juste "2025"
  description: string;
  problem: string;
  technologies: string[];
  features: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  image: string | null;
}

export interface Skill {
  name: string;
  icon?: string; // slug Simple Icons (cdn.simpleicons.org) — omis si aucune icône pertinente
  color?: string; // couleur hex de la marque, sans #
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  type: "stage" | "job-etudiant";
  company: string;
  role: string;
  location?: string;
  logo?: string; // chemin vers le logo dans public/logos/, ex. "/logos/wittelfood.png"
  githubUrl?: string | null; // lien vers le code, si le projet du stage est public
  startDate: string;
  endDate: string;
  missions: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
}
