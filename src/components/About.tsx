import { motion } from "framer-motion";

const points = [
  "Master 2 MIAGE - développement logiciel et systèmes d'information",
  "Développement web full-stack (Java, JavaScript/TypeScript, Spring Boot, React, Node.js)",
  "Conception et manipulation de bases de données relationnelles",
  "Notions en cybersécurité et sécurité applicative",
  "Capacité à apprendre rapidement de nouvelles technologies",
  "Mobile en France entière pour un stage de 6 mois ou plus",
  "Disponible immédiatement pour un stage de fin d'études",
  "Permis B et véhicule personnel",
];

const DOT_COLORS = ["bg-gold", "bg-coral", "bg-mint"];

export function About() {
  return (
    <section id="apropos" className="relative overflow-hidden bg-paper-soft px-6 py-24 dark:bg-surface lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-mint/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl text-gold"
        >
          À propos
        </motion.p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-black/8 bg-paper p-6 dark:border-white/8 dark:bg-ink sm:p-8"
          >
            <p className="text-lg leading-relaxed text-text-light/75 dark:text-text-dark/75">
              Étudiant en Master 2 MIAGE à l'Université de Haute-Alsace de Mulhouse,
              je m'intéresse au développement logiciel, aux applications web, au
              Big Data et à la cybersécurité. Au fil de ma formation et de mes
              projets, j'ai développé des compétences en Java, JavaScript, PHP,
              SQL et développement web, ainsi qu'en analyse et visualisation de
              données. J'aime comprendre comment les systèmes fonctionnent,
              résoudre des problèmes techniques et transformer une idée en
              solution concrète — curieux, autonome et motivé, je cherche
              aujourd'hui une opportunité pour mettre ces compétences en
              pratique et continuer à progresser.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 rounded-2xl border border-black/8 bg-paper p-6 dark:border-white/8 dark:bg-ink sm:p-8"
          >
            {points.map((point, i) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-black/8 bg-paper-soft px-5 py-4 text-sm text-text-light/80 transition-colors hover:border-gold/40 dark:border-white/8 dark:bg-surface dark:text-text-dark/80"
              >
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${DOT_COLORS[i % DOT_COLORS.length]}`} />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
