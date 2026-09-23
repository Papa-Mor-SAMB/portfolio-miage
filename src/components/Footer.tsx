import { GithubIcon, GitlabIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-black/8 px-6 py-8 dark:border-white/8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-sm font-medium">Papa Mor SAMB</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Papa-Mor-SAMB"
            target="_blank"
            rel="noreferrer"
            aria-label="Profil GitHub"
            className="text-text-light/60 hover:text-gold dark:text-text-dark/60"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://gitlab.com/papemor2711"
            target="_blank"
            rel="noreferrer"
            aria-label="Profil GitLab"
            className="text-text-light/60 hover:text-gold dark:text-text-dark/60"
          >
            <GitlabIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/papamorsamb/"
            target="_blank"
            rel="noreferrer"
            aria-label="Profil LinkedIn"
            className="text-text-light/60 hover:text-gold dark:text-text-dark/60"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-text-light/50 dark:text-text-dark/50">
          © {new Date().getFullYear()} — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
