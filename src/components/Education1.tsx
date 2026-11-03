import { motion } from "framer-motion";
import { education } from "../data/education";

export function Education() {
  return (
    <section id="parcours" className="bg-paper-soft px-6 py-24 dark:bg-surface lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl text-gold"
        >
          Parcours
        </motion.p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Formation
        </h2>

        <ol className="mt-12 border-l border-black/10 dark:border-white/10">
          {education.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-10 pl-8 last:pb-0"
            >
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
              <p className="font-mono text-xs text-text-light/60 dark:text-text-dark/60">
                {item.startDate === item.endDate ? item.startDate : `${item.startDate} — ${item.endDate}`}
              </p>
              <h3 className="mt-1 font-display text-lg font-medium">
                {item.degree}
              </h3>
              <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                {item.institution}
              </p>
              {item.description && (
                <p className="mt-2 text-sm text-text-light/70 dark:text-text-dark/70">
                  {item.description}
                </p>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
