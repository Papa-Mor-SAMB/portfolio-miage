import { motion } from "framer-motion";
import {
  Bike,
  BookOpen,
  Camera,
  Dumbbell,
  Gamepad2,
  Music,
  Plane,
  Sparkles,
  Trophy,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { interests } from "../data/interests";

const ICONS: Record<string, LucideIcon> = {
  Bike,
  BookOpen,
  Camera,
  Dumbbell,
  Gamepad2,
  Music,
  Plane,
  Trophy,
  Sparkles,
};

const ACCENTS = [
  { bg: "bg-gold/15", text: "text-gold" },
  { bg: "bg-coral/15", text: "text-coral" },
  { bg: "bg-mint/15", text: "text-mint" },
];

export function Interests() {
  return (
    <section id="interets" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl text-gold"
        >
          Centres d'intérêt
        </motion.p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          En dehors du code
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {interests.map((interest, i) => {
            const Icon = ICONS[interest.icon] ?? Sparkles;
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <motion.div
                key={interest.name + i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className="flex items-center gap-2.5 rounded-full border border-black/10 px-4 py-2.5 transition-colors hover:border-gold/40 dark:border-white/10"
              >
                <span className={`flex h-6 w-6 items-center justify-center rounded-full ${accent.bg}`}>
                  <Icon size={13} className={accent.text} />
                </span>
                <span className="text-sm text-text-light/80 dark:text-text-dark/80">
                  {interest.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
