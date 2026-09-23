import { motion } from "framer-motion";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { certifications } from "../data/certifications";
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

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-black/8 bg-paper p-5 dark:border-white/8 dark:bg-ink sm:p-6"
          >
            <div className="flex items-center gap-2.5">
              <GraduationCap size={20} className="text-gold" />
              <h3 className="font-display text-lg font-medium">Formation</h3>
            </div>

            <div className="mt-6 flex flex-col gap-6">
              {education.map((item) => (
                <div key={item.id}>
                  <p className="font-display text-base font-semibold">
                    {item.startDate === item.endDate ? item.startDate : `${item.startDate} - ${item.endDate}`}
                  </p>
                  <p className="mt-1 font-medium">{item.degree}</p>
                  <p className="text-sm text-text-light/60 dark:text-text-dark/60">
                    {item.institution}
                  </p>
                  {item.description && (
                    <p className="mt-1 text-sm text-text-light/60 dark:text-text-dark/60">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {certifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-black/8 bg-paper p-5 dark:border-white/8 dark:bg-ink sm:p-6"
            >
              <div className="flex items-center gap-2.5">
                <Award size={20} className="text-gold" />
                <h3 className="font-display text-lg font-medium">Certifications</h3>
              </div>

              <div className="mt-6 flex flex-col gap-5">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <p className="font-medium">{cert.name}</p>
                    {cert.issuer && (
                      <p className="text-sm text-text-light/60 dark:text-text-dark/60">
                        {cert.issuer}
                      </p>
                    )}
                    <p className="mt-0.5 font-mono text-xs text-text-light/50 dark:text-text-dark/50">
                      {cert.date}
                    </p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-text-light hover:text-gold dark:text-text-dark"
                      >
                        Voir le certificat
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
