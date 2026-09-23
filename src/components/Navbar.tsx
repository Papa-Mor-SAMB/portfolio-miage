import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const NAV_ITEMS = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "projets", label: "Projets" },
  { id: "parcours", label: "Parcours" },
  { id: "experience", label: "Expérience" },
  { id: "interets", label: "Centres d'intérêt" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id));

  const handleNavClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-paper-soft/95 backdrop-blur-md dark:border-white/5 dark:bg-ink/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
           href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("accueil");
          }}
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
        >
          <img
            src="/photo.jpg"
            alt=""
            className="h-8 w-8 rounded-full object-cover object-[center_15%]"
          />
          Papa Mor SAMB
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`text-sm transition-colors ${
                  activeId === item.id
                    ? "text-gold"
                    : "text-text-light/70 hover:text-text-light dark:text-text-dark/70 dark:hover:text-text-dark"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={
              theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"
            }
            className="rounded-full p-2 text-text-light/70 transition-colors hover:bg-black/5 hover:text-text-light dark:text-text-dark/70 dark:hover:bg-white/5 dark:hover:text-text-dark"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu de navigation"
            className="rounded-full p-2 text-text-light/70 hover:bg-black/5 md:hidden dark:text-text-dark/70 dark:hover:bg-white/5"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-black/5 bg-paper px-6 py-4 md:hidden dark:border-white/5 dark:bg-ink">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                  activeId === item.id
                    ? "text-gold"
                    : "text-text-light/80 dark:text-text-dark/80"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
