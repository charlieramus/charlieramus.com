type ContactLink = {
  label: string;
  href: string;
  display: string;
};

const links: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:charlie.ramus12@gmail.com",
    display: "charlie.ramus12@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/charlie-ramus-776366398/",
    display: "charlie-ramus",
  },
  {
    label: "GitHub",
    href: "https://github.com/charlieramus",
    display: "charlieramus",
  },
  {
    label: "Photography",
    href: "https://www.instagram.com/chahramii/",
    display: "@chahramii",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-medium tracking-widest uppercase text-muted mb-8">
          Contact
        </h2>
        <p className="text-base text-foreground leading-relaxed mb-8 max-w-md">
          Reach out about research opportunities, internships, or collaboration.
          Cold emails welcome.
        </p>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.label} className="flex items-center gap-6">
              <span className="text-xs text-muted w-20 shrink-0">
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                {link.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
