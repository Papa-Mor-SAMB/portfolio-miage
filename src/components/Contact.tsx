import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { GithubIcon, GitlabIcon, LinkedinIcon } from "./icons";
import { useState, type FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Le nom est requis.";
  if (!values.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Format d'email invalide.";
  }
  if (!values.message.trim()) {
    errors.message = "Le message est requis.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Le message doit contenir au moins 10 caractères.";
  }
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error" | "sending">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setStatus("sending");
      try {
        const response = await fetch("https://formspree.io/f/xvkgrzgg", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          setStatus("sent");
          setValues({ name: "", email: "", message: "" });
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-paper-soft px-6 py-24 dark:bg-surface lg:px-8">
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-coral/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-2xl text-gold">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Discutons de votre besoin
          </h2>
          <p className="mt-4 max-w-md text-text-light/75 dark:text-text-dark/75">
            Ouvert aux opportunités de stage de fin d'études en développement
            logiciel, full-stack, big data ou cybersécurité. N'hésitez pas à me
            contacter pour plus d'informations❤️.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="mailto:ton.email@exemple.com"
              className="inline-flex w-fit items-center gap-3 text-text-light hover:text-gold dark:text-text-dark"
            >
              <Mail size={18} />
              papemor2711@gmail.com
            </a>
            <a
              href="tel:+33758343760"
              className="inline-flex w-fit items-center gap-3 text-text-light hover:text-gold dark:text-text-dark"
            >
              <Phone size={18} />
              +33 7 58 34 37 60
            </a>
            <a
              href="https://www.linkedin.com/in/papamorsamb/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 text-text-light hover:text-gold dark:text-text-dark"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Papa-Mor-SAMB"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 text-text-light hover:text-gold dark:text-text-dark"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <a
              href="https://gitlab.com/papemor2711"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 text-text-light hover:text-gold dark:text-text-dark"
            >
              <GitlabIcon size={18} />
              GitLab
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-4 rounded-2xl border border-black/8 bg-paper p-6 dark:border-white/8 dark:bg-ink sm:p-8"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Nom
            </label>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="mt-1.5 w-full rounded-lg border border-black/15 bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-gold dark:border-white/15"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="mt-1.5 w-full rounded-lg border border-black/15 bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-gold dark:border-white/15"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={values.message}
              onChange={(e) => setValues({ ...values, message: e.target.value })}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="mt-1.5 w-full resize-none rounded-lg border border-black/15 bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-gold dark:border-white/15"
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 dark:bg-gold dark:text-ink"
          >
            <Send size={16} />
            Envoyer le message
          </button>

          {status === "sending" && (
  <p role="status" className="text-sm text-text-light/60 dark:text-text-dark/60">
    Envoi en cours...
  </p>
    )}
    {status === "sent" && (
      <p role="status" className="text-sm text-gold">
        Merci, votre message a bien été envoyé !
      </p>
    )}
    {status === "error" && (
      <p role="alert" className="text-sm text-red-500">
        Une erreur est survenue. Réessaie ou écris-moi directement par email.
      </p>
    )}
        </motion.form>
      </div>
    </section>
  );
}
