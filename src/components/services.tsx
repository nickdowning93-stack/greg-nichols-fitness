const SERVICES = [
  {
    title: "In-Home Personal Training",
    description:
      "No gym needed. Greg brings the workout to you — equipment, programming, and energy included. Train in the comfort of your own space with a fully customized plan.",
    features: [
      "Customized workout programs",
      "All equipment provided",
      "Flexible scheduling",
      "Private, comfortable environment",
      "Ideal for busy professionals & parents",
    ],
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    accent: "from-blue-500/20 to-blue-600/5",
  },
  {
    title: "In-Gym Training",
    description:
      "Take advantage of a full gym environment with Greg by your side. Every rep is guided, every set is purposeful, and every session moves you closer to your goals.",
    features: [
      "Full gym equipment access",
      "Proper form & technique coaching",
      "Progressive overload programming",
      "Strength & conditioning focus",
      "For all fitness levels",
    ],
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V6a2.25 2.25 0 0 1 2.25-2.25h1.5M3 15.75V18a2.25 2.25 0 0 0 2.25 2.25h1.5M15.75 3.75h1.5A2.25 2.25 0 0 1 21 6v2.25M15.75 20.25h1.5A2.25 2.25 0 0 0 21 18v-2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5M9 12h6" />
      </svg>
    ),
    accent: "from-indigo-500/20 to-indigo-600/5",
  },
  {
    title: "Group Sessions",
    description:
      "High-energy, community-driven workouts designed to push you further than you'd go alone. Challenging programming with the motivation of training together.",
    features: [
      "Community-driven atmosphere",
      "Scalable for all levels",
      "High-energy coaching",
      "Accountability built in",
      "Fun, motivating environment",
    ],
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    accent: "from-cyan-500/20 to-cyan-600/5",
  },
  {
    title: "MyVictory On-Demand",
    description:
      "As a featured instructor on MyVictory — the fitness streaming platform for cancer survivors — Greg leads classes you can access anytime, anywhere. 2,000+ classes rated 4.7+/5.0.",
    features: [
      "On-demand streaming classes",
      "Strength, cardio & wellness",
      "Cancer survivor-focused programming",
      "Train anytime, anywhere",
      "Rated 4.7+ / 5.0",
    ],
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
      </svg>
    ),
    accent: "from-emerald-500/20 to-emerald-600/5",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <p className="text-accent font-semibold tracking-widest uppercase text-xs sm:text-sm">
            Services
          </p>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Train Your Way
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted leading-relaxed">
            Whether you prefer the privacy of your home, the energy of a gym,
            or the community of a group — there&apos;s a path built for you.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl bg-surface border border-white/5 p-5 sm:p-8 hover:border-accent/30 active:border-accent/30 transition-all duration-300"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative">
                {/* Icon */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 sm:mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted"
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
