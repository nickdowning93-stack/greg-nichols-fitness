export function Philosophy() {
  return (
    <section id="philosophy" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
        {/* Quote icon */}
        <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 sm:mb-10">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-accent"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
          </svg>
        </div>

        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          Life is a journey, enjoy the ride as much as you intend to enjoy
          the destination.
        </blockquote>

        <p className="mt-6 sm:mt-8 text-muted text-base sm:text-lg">— Gregory N., Jr.</p>

        {/* Divider */}
        <div className="w-16 sm:w-20 h-0.5 bg-accent/30 mx-auto my-8 sm:my-12" />

        {/* Philosophy text */}
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg text-muted leading-relaxed">
          <p>
            Greg&apos;s philosophy is simple: we can not only be well, but we can
            be <span className="text-white font-semibold">better than before</span>{" "}
            because of the storms we&apos;ve endured.
          </p>
          <p>
            Upon finishing any session with Greg, you should feel{" "}
            <span className="text-accent font-semibold">stronger</span>,{" "}
            <span className="text-accent font-semibold">accomplished</span>,{" "}
            <span className="text-accent font-semibold">grateful</span>, and{" "}
            <span className="text-accent font-semibold">
              ready to live your life to the fullest
            </span>
            .
          </p>
        </div>

        {/* Daily inspiration */}
        <div className="mt-10 sm:mt-16 rounded-2xl bg-surface border border-white/5 p-5 sm:p-8 max-w-xl mx-auto">
          <p className="text-white text-base sm:text-lg font-medium italic leading-relaxed">
            &quot;Our days alive are filled with infinite possibilities, so any
            day I awake healthy, I try to improve myself or help someone
            improve theirs.&quot;
          </p>
          <p className="mt-3 sm:mt-4 text-muted text-xs sm:text-sm">— Greg Nichols</p>
        </div>
      </div>
    </section>
  );
}
