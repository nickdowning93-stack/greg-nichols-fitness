"use client";

import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold tracking-widest uppercase text-sm">
                Get Started
              </p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
                Ready to Begin
                <br />
                Your <span className="text-accent">Victory</span>?
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Take the first step. Reach out for a free consultation and
                let&apos;s build a plan that fits your life, your goals, and your
                schedule.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-surface-light border border-white/5 p-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <p className="text-white font-medium">greg@gregnichols.fit</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-surface-light border border-white/5 p-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">Area</p>
                  <p className="text-white font-medium">Norwalk, CT & Surrounding</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-surface-light border border-white/5 p-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">Online</p>
                  <a
                    href="https://member.myvictory.com/instructor/greg.nichols"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium hover:underline"
                  >
                    MyVictory On-Demand Classes
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="rounded-2xl bg-surface-light border border-white/5 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted">
                  Greg will get back to you within 24 hours. Your victory is
                  about to begin.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6">
                  Book a Free Consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-muted mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full rounded-xl bg-background border border-white/10 px-4 py-3 text-white placeholder-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-muted mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full rounded-xl bg-background border border-white/10 px-4 py-3 text-white placeholder-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl bg-background border border-white/10 px-4 py-3 text-white placeholder-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-muted mb-2"
                    >
                      Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl bg-background border border-white/10 px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="in-home">In-Home Personal Training</option>
                      <option value="in-gym">In-Gym Training</option>
                      <option value="group">Group Sessions</option>
                      <option value="online">Online / MyVictory</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-muted mb-2"
                    >
                      Tell Me About Your Goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-xl bg-background border border-white/10 px-4 py-3 text-white placeholder-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                      placeholder="What are you looking to achieve?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-accent px-6 py-4 text-base font-semibold text-white hover:bg-accent-dark transition-colors duration-200 shadow-lg shadow-accent/20"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-muted text-center">
                    Free consultation. No commitment. Let&apos;s just talk.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
