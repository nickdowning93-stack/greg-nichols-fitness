export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left column - Story */}
          <div className="space-y-5 sm:space-y-6">
            <p className="text-accent font-semibold tracking-widest uppercase text-xs sm:text-sm">
              The Story
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              From Setback
              <br />
              to <span className="text-accent">Comeback</span>
            </h2>
            <div className="space-y-4 sm:space-y-5 text-muted leading-relaxed text-base sm:text-lg">
              <p>
                It started with failure. When Greg failed his firefighter physical
                exam, it shattered his idea of what it meant to be &quot;in shape.&quot;
                But that moment of defeat became the spark that changed everything.
              </p>
              <p>
                In pursuit of being victorious, Greg didn&apos;t just pass the test
                — he fell in love with the entire process of training and
                self-improvement. Seven years later, that passion has become his
                purpose: transforming the lives of everyone he works with.
              </p>
              <p>
                As a proud father, devoted fianc&eacute;, and relentless optimist,
                Greg brings an energy to every session that&apos;s impossible to
                fake. He believes that any day you wake up healthy is a day to
                improve yourself — or help someone improve theirs.
              </p>
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-2xl bg-surface-light border border-white/5 p-5 sm:p-8 space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold">What Drives Greg</h3>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex gap-3 sm:gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">Comeback Stories</p>
                    <p className="text-muted text-xs sm:text-sm mt-1">
                      Inspired by people who endure ferocious storms and come
                      out stronger on the other side.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">Cancer Survivor Fitness</p>
                    <p className="text-muted text-xs sm:text-sm mt-1">
                      Proud instructor at MyVictory, an on-demand fitness platform
                      dedicated to cancer survivors and their supporters.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">Positive Energy</p>
                    <p className="text-muted text-xs sm:text-sm mt-1">
                      Believes you can turn your entire day around with a good
                      workout and genuine encouragement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal touches */}
            <div className="rounded-2xl bg-surface-light border border-white/5 p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Off the Clock</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Boxing", "Basketball", "Hiking", "Family Time"].map(
                  (hobby) => (
                    <span
                      key={hobby}
                      className="rounded-full bg-accent/10 border border-accent/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-accent font-medium"
                    >
                      {hobby}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
