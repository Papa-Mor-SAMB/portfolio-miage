import type { SkillCategory } from "../types";

// Compétences classées par catégorie. N'ajoute ici que des compétences réellement maîtrisées.
// "icon" est le slug Simple Icons (https://simpleicons.org) ; laisse-le vide si la techno n'y figure pas.
export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: "openjdk", color: "437291" },
      { name: "Spring", icon: "spring", color: "6DB33F" },
      { name: "PHP", icon: "php", color: "777BB4" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Python", icon: "python", color: "3776AB" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
      { name: "TypeScript", icon: "typescript", color: "3178C6" },
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Angular", icon: "angular", color: "DD0031" },
      { name: "HTML", icon: "html5", color: "E34F26" },
      { name: "CSS", icon: "css3", color: "1572B6" },
      { name: "Vite", icon: "vite", color: "646CFF" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "Framer Motion", icon: "framer", color: "0055FF" },
    ],
  },
  {
    category: "Bases de données",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "SQL Server", icon: "microsoftsqlserver", color: "CC2927" },
    ],
  },
  {
    category: "Outils",
    skills: [
      { name: "Git", icon: "git", color: "F05032" },
      { name: "GitLab CI", icon: "gitlab", color: "FC6D26" },
      { name: "GitHub", icon: "github", color: "888888" },
      { name: "Docker", icon: "docker", color: "2496ED" },
      { name: "Maven", icon: "apachemaven", color: "C71A36" },
      { name: "IntelliJ IDEA", icon: "intellijidea", color: "000000" },
      { name: "VS Code", icon: "visualstudiocode", color: "007ACC" },
      { name: "Vercel", icon: "vercel", color: "888888" },
      { name: "npm", icon: "npm", color: "CB3837" },
    ],
  },
  {
    category: "Data",
    skills: [
      { name: "Power BI", icon: "powerbi", color: "F2C811" },
      { name: "Tableau", icon: "tableau", color: "E97627" },
      { name: "Talend", icon: "talend", color: "1E3A5F" },
      { name: "R", icon: "r", color: "276DC3" },
    ],
  },
  {
    category: "Cybersécurité",
    skills: [
      { name: "Gestion des risques" },
      { name: "Sécurité applicative" },
      { name: "Notions de cybersécurité" },
    ],
  },
];
