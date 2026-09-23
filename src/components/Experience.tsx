import { motion } from "framer-motion";
import { Briefcase, Clock3, MapPin } from "lucide-react";
import { experiences } from "../data/experience";
import type { ExperienceItem } from "../types";
import { GithubIcon } from "./icons";
import { TechBadge } from "./TechBadge";

function CompanyLogo({ company, logo }: { company: string; logo?: string }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={`Logo ${company}`}
        className="h-11 w-11 shrink-0 rounded-xl border border-black/8 object-contain p-1.5 dark:border-white/8"
      />
    );
  }
  const initials = company
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 font-display text-sm font-semibold text-gold">
      {initials}
    </div>
  );
}

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-black/8 p-6 transition-colors hover:border-gold/40 dark:border-white/8"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <CompanyLogo company={exp.company} logo={exp.logo} />
          <div>
            <h4 className="font-display text-lg font-medium">
              {exp.role} — {exp.company}
            </h4>
            {exp.location && (
              <p className="mt-1 flex items-center gap-1.5 text-sm text-text-light/60 dark:text-text-dark/60">
                <MapPin size={14} className="text-gold" />
                {exp.location}
              </p>
            )}
          </div>
        </div>
        <span className="font-mono text-xs text-text-light/60 dark:text-text-dark/60">
          {exp.startDate} — {exp.endDate}
        </span>
      </div>
      {exp.missions.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {exp.missions.map((mission) => (
            <li
              key={mission}
              className="flex items-start gap-2 text-sm text-text-light/75 dark:text-text-dark/75"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {mission}
            </li>
          ))}
        </ul>
      )}
      {exp.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      )}
      {exp.githubUrl && (
        <div className="mt-4">
          <a
            href={exp.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-light hover:text-gold dark:text-text-dark"
          >
            <GithubIcon size={16} />
            Code source
          </a>
        </div>
      )}
    </motion.div>
  );
}

function ExperienceGroup({
  title,
  icon: Icon,
  items,
  delayOffset,
  accent,
}: {
  title: string;
  icon: typeof Briefcase;
  items: ExperienceItem[];
  delayOffset: number;
  accent: "gold" | "mint";
}) {
  if (items.length === 0) return null;
  const bgClass = accent === "gold" ? "bg-gold/15" : "bg-mint/15";
  const textClass = accent === "gold" ? "text-gold" : "text-mint";
  const borderClass = accent === "gold" ? "border-gold/15" : "border-mint/15";
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45 }}
        className="flex items-center gap-2.5"
      >
        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${bgClass}`}>
          <Icon size={16} className={textClass} />
        </span>
        <h3 className="font-mono text-sm uppercase tracking-wide text-text-light/60 dark:text-text-dark/60">
          {title}
        </h3>
      </motion.div>
      <div className={`mt-5 flex flex-col gap-6 border-l-2 ${borderClass} pl-6`}>
        {items.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i + delayOffset} />
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  const stages = experiences.filter((exp) => exp.type === "stage");
  const jobsEtudiants = experiences.filter((exp) => exp.type === "job-etudiant");

  return (
    <section id="experience" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl text-gold"
        >
          Expérience
        </motion.p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Stages &amp; expériences professionnelles
        </h2>

        {experiences.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-black/15 px-6 py-10 dark:border-white/15"
          >
            <Briefcase size={22} className="text-gold" />
            <p className="text-text-light/75 dark:text-text-dark/75">
              Cette section accueillera mes stages et expériences
              professionnelles à mesure qu'ils se confirment.
            </p>
          </motion.div>
        ) : (
          <div className="mt-12 flex flex-col gap-14">
            <ExperienceGroup title="Stages" icon={Briefcase} items={stages} delayOffset={0} accent="gold" />
            <ExperienceGroup
              title="Jobs étudiants"
              icon={Clock3}
              items={jobsEtudiants}
              delayOffset={stages.length}
              accent="mint"
            />
          </div>
        )}
      </div>
    </section>
  );
}
