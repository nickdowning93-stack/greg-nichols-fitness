const CERTIFICATIONS = [
  {
    title: "Certified Personal Trainer",
    org: "NASM",
    status: "Active",
    description:
      "Industry-leading certification in exercise science, program design, and client assessment.",
  },
  {
    title: "Corrective Exercise Specialist",
    org: "NASM",
    status: "Active",
    description:
      "Specialized in identifying and correcting movement compensations to reduce pain and improve performance.",
  },
  {
    title: "Behavioral Change Specialist",
    org: "NASM",
    status: "Active",
    description:
      "Expert in the psychology of habit formation, motivation, and sustainable lifestyle transformation.",
  },
  {
    title: "Performance Enhancement Specialist",
    org: "NASM",
    status: "In Progress",
    description:
      "Advanced training in athletic performance, speed, agility, quickness, and sport-specific programming.",
  },
] as const;

export function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-xs sm:text-sm">
            Credentials
          </p>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            NASM Certified
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted leading-relaxed">
            Backed by the National Academy of Sports Medicine — the gold standard
            in personal training education.
          </p>
        </div>

        {/* Cert cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="rounded-xl sm:rounded-2xl bg-surface-light border border-white/5 p-4 sm:p-6 hover:border-accent/20 transition-all duration-300"
            >
              {/* NASM badge */}
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-[10px] sm:text-xs">NASM</span>
                </div>
                <span
                  className={`text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                    cert.status === "Active"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  }`}
                >
                  {cert.status}
                </span>
              </div>

              <h3 className="text-sm sm:text-lg font-bold mb-1.5 sm:mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed hidden sm:block">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
