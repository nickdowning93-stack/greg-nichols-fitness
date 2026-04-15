export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center font-bold text-white text-sm">
              GN
            </div>
            <span className="font-bold text-lg tracking-tight">
              Greg Nichols
            </span>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a
              href="#certifications"
              className="hover:text-white transition-colors"
            >
              Credentials
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="https://member.myvictory.com/instructor/greg.nichols"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              MyVictory
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted">
            &copy; {currentYear} Greg Nichols Fitness
          </p>
        </div>
      </div>
    </footer>
  );
}
