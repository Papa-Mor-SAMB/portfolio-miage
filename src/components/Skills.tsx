import { motion } from "framer-motion";
import {
  Database,
  Layout,
  ShieldCheck,
  Terminal,
  Wrench,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "../data/skills";
import { TechBadge } from "./TechBadge";

const ICONS: Record<string, LucideIcon> = {
  Backend: Terminal,
  Frontend: Layout,
  "Bases de données": Database,
  Outils: Wrench,
  Data: BarChart3,
  Cybersécurité: ShieldCheck,
};

const CARD_ACCENTS = [
  "from-gold/10",
  "from-coral/10",
  "from-mint/10",
  "from-gold/10",
  "from-coral/10",
  "from-mint/10",
];

export function Skills() {
  return (
    <section id="competences" className="bg-paper-soft px-6 py-24 dark:bg-surface lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl text-gold"
        >
          Compétences
        </motion.p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Boîte à outils
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, i) => {
            const Icon = ICONS[group.category] ?? Terminal;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-2xl border border-black/8 bg-paper p-6 transition-colors hover:border-gold/40 dark:border-white/8 dark:bg-ink"
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${CARD_ACCENTS[i % CARD_ACCENTS.length]} to-transparent blur-2xl`}
                />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15">
                    <Icon size={18} className="text-gold" />
                  </span>
                  <h3 className="font-display text-base font-medium">
                    {group.category}
                  </h3>
                </div>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <TechBadge key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
