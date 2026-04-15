export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background pb-20 sm:pb-0">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-accent flex items-center justify-center font-bold text-white text-xs sm:text-sm">
              GN
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight">
              Greg Nichols
            </span>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted">
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
          <p className="text-xs sm:text-sm text-muted">
            &copy; {currentYear} Greg Nichols Fitness
          </p>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-40 bg-background/95 backdrop-blur-lg border-t border-white/10 px-5 py-3 safe-area-bottom">
        <a
          href="#contact"
          className="block w-full rounded-full bg-accent py-3 text-sm font-semibold text-white text-center active:scale-[0.98] transition-transform shadow-lg shadow-accent/20"
        >
          Book a Free Session
        </a>
      </div>
    </footer>
  );
}
