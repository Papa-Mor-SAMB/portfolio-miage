import { motion } from "framer-motion";
import { TECH_ICONS } from "../data/techIcons";

interface TechBadgeProps {
  name: string;
  icon?: string;
  color?: string;
}

// Palette de repli pour les entrées sans logo officiel (concepts, méthodologies...)
// — reprend les 3 couleurs d'accent du site, choisie de façon stable selon le nom.
const FALLBACK_COLORS = ["D4A544", "C96A4B", "6E9B8B"];

function fallbackColorFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return FALLBACK_COLORS[hash % FALLBACK_COLORS.length];
}

export function TechBadge({ name, icon, color }: TechBadgeProps) {
  const known = TECH_ICONS[name];
  const finalIcon = icon ?? known?.slug;
  const finalColor = color ?? known?.color ?? fallbackColorFor(name);

  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs"
      style={{
        borderColor: `#${finalColor}26`,
        backgroundColor: `#${finalColor}0D`,
        color: `#${finalColor}`,
      }}
    >
      {finalIcon && (
        <img
          src={`https://cdn.simpleicons.org/${finalIcon}/${finalColor}`}
          alt=""
          className="h-3.5 w-3.5"
          loading="lazy"
        />
      )}
      <span>{name}</span>
    </motion.span>
  );
}
