import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm">
                NASM Certified Personal Trainer
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                Your Victory
                <br />
                <span className="text-accent">Starts Here.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
                Personalized training that transforms your body, your mindset,
                and your life. In-home, in-gym, or online — let&apos;s build
                something extraordinary together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-dark transition-all duration-200 text-center shadow-lg shadow-accent/20 hover:shadow-accent/40"
              >
                Start Your Transformation
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition-all duration-200 text-center"
              >
                My Story
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-4">
              <div>
                <p className="text-3xl font-bold text-accent">7+</p>
                <p className="text-sm text-muted mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">4</p>
                <p className="text-sm text-muted mt-1">NASM Certifications</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">2K+</p>
                <p className="text-sm text-muted mt-1">Classes Taught</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
              <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] rounded-2xl overflow-hidden border border-white/10 animate-pulse-glow">
                <Image
                  src="/images/greg-headshot.png"
                  alt="Greg Nichols - Personal Trainer & Fitness Coach"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
