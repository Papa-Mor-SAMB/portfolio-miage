export interface Interest {
  name: string;
  icon: string; // nom d'icône Lucide (voir la liste ICONS dans Interests.tsx)
}

// Remplace ou complète cette liste avec tes propres centres d'intérêt.
export const interests: Interest[] = [
  { name: "Cyclisme", icon: "Bike" },
  { name: "Musculation", icon: "Sparkles" },
  { name: "Natation", icon: "Sparkles" },
  { name: "Voyage", icon: "Sparkles" },
  { name: "Veille technologique", icon: "Sparkles" },
  { name: "Documentation sur l'avancée de l'IA", icon: "Sparkles" },
  { name: "Bricolage", icon: "Wrench" },
];
