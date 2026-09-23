import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { TechBadge } from "./TechBadge";
import { projects } from "../data/projects";
import type { Project } from "../types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`grid overflow-hidden rounded-2xl border border-black/8 bg-paper transition-colors hover:border-gold/40 dark:border-white/8 dark:bg-ink ${
        project.image ? "lg:grid-cols-[1fr_1.2fr]" : ""
      }`}
    >
      {project.image && (
        <div className="dark:bg-surface">
          <img
            src={project.image}
            alt={`Capture d'écran du projet ${project.name}`}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-col p-6 sm:p-8">
        <div>
          <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
          {project.date && (
            <p className="mt-1 font-mono text-xs text-text-light/50 dark:text-text-dark/50">
              {project.date}
            </p>
          )}
        </div>
        <p className="mt-3 text-text-light/75 dark:text-text-dark/75">
          {project.description}
        </p>

        <div className="mt-5">
          <p className="font-mono text-xs uppercase tracking-wide text-gold">
            Problème résolu
          </p>
          <p className="mt-1.5 text-sm text-text-light/75 dark:text-text-dark/75">
            {project.problem}
          </p>
        </div>

        {project.features.length > 0 && (
          <div className="mt-5">
            <p className="font-mono text-xs uppercase tracking-wide text-gold">
              Fonctionnalités principales
            </p>
            <ul className="mt-1.5 space-y-1.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-text-light/75 dark:text-text-dark/75"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-6 flex items-center gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-light hover:text-gold dark:text-text-dark"
              >
                <GithubIcon size={16} />
                Code source
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-light hover:text-gold dark:text-text-dark"
              >
                <ExternalLink size={16} />
                Démo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projets" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl text-gold"
        >
          Projets
        </motion.p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Réalisations
        </h2>

        <div className="mt-12 flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
