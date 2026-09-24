import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.12, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="accueil"
      className="flex items-center px-6 pt-35 pb-16 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          style={{ width: "250px", height: "250px" }}
          className="relative order-first mt-4 flex shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-gold/20 ring-4 ring-gold/10"
        >
          <img
            src="/photo.jpg"
            alt="Photo de profil"
            className="h-full w-full object-cover object-[center_20%]"
          />
        </motion.div>

        <div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Recherche d'un stage de fin d'études (6 mois)
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg text-text-light/75 dark:text-text-dark/75"
          >
            Étudiant en Master 2 MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises) à l'Universisté de Haute-Alsace de Mulhouse.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projets"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 dark:bg-gold dark:text-ink"
            >
              Voir mes projets
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="Papa-Mor-SAMB-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-black/15 px-5 py-3 text-sm font-medium transition-colors hover:border-gold hover:text-gold dark:border-white/15"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-text-light/70 hover:text-gold dark:text-text-dark/70"
            >
              <Mail size={16} />
              Me contacter
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
             href="https://github.com/Papa-Mor-SAMB"
              target="_blank"
              rel="noreferrer"
              aria-label="Profil GitHub"
              className="rounded-full p-2 text-text-light/60 transition-colors hover:bg-black/5 hover:text-text-light dark:text-text-dark/60 dark:hover:bg-white/5 dark:hover:text-text-dark"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/papamorsamb/"
              target="_blank"
              rel="noreferrer"
              aria-label="Profil LinkedIn"
              className="rounded-full p-2 text-text-light/60 transition-colors hover:bg-black/5 hover:text-text-light dark:text-text-dark/60 dark:hover:bg-white/5 dark:hover:text-text-dark"
            >
              <LinkedinIcon size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
