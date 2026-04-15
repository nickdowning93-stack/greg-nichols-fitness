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
    <section id="certifications" className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm">
            Credentials
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
            NASM Certified
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Backed by the National Academy of Sports Medicine — the gold standard
            in personal training education.
          </p>
        </div>

        {/* Cert cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="rounded-2xl bg-surface-light border border-white/5 p-6 hover:border-accent/20 transition-all duration-300"
            >
              {/* NASM badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-xs">NASM</span>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    cert.status === "Active"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  }`}
                >
                  {cert.status}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
