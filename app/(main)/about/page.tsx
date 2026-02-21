import React from "react";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
          <div className="absolute top-0 right-0 w-125 h-125 bg-primary rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-125 h-125 bg-primary rounded-full blur-[120px] -ml-64 -mb-64"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/20 text-slate-900 dark:text-primary rounded-full">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Innovation, Strategy, <span className="text-primary">Growth.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            Empowering businesses with forward-thinking solutions and strategic
            excellence for sustainable, long-term global impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
              View Our Work{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pillars Section (Mission, Vision, Values) */}
      <section className="py-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors group">
              <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-slate-900">
                  target
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To integrate innovative strategies that drive meaningful impact
                for our clients, fostering an ecosystem of sustainable
                development and technological advancement.
              </p>
            </div>
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors group">
              <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-slate-900">
                  visibility
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Becoming the global benchmark for strategic business
                transformation, where every partnership results in a legacy of
                excellence and measurable progress.
              </p>
            </div>
            {/* Values */}
            <div className="p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors group">
              <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-slate-900">
                  verified_user
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Core Values</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Integrity, Excellence, and Collaborative Innovation form the
                bedrock of our operations, ensuring we deliver value that
                transcends basic metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Storytelling */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Professional team collaborating in a modern office"
                  className="w-full h-full object-cover"
                  data-alt="Professional team collaborating in a modern office"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVPSptQbAEyYe9KXmKcjIQdBEPSb1HtGtHcyZCCO0gm1fttCb-AH9hlWl0ahZlUxkEtABEM2PKvDmziv1COHctFW72_ccgNbDgm7EhtcefFW1jLf2GS0_2GxVqSj-Ic8LxwLSoe8bxbu1v10l3fQHfJ8RZdAOJM4TKUzS3JSz91ZVRYOxq6NU6o6dipEy6wCiM2jkeYykpmdq17NLBzZxmzqlviqBSHepVzPMjS4JMW9VKCOBiNYla12OfXecVVTt9XvuEHRK4"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-black text-slate-900">12+</p>
                <p className="text-sm font-bold text-slate-800 uppercase tracking-widest">
                  Years of Strategy
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">The Story of LUSO</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                Founded on the principle that strategy should be more than just
                a document, LUSO INTEGRATE was born from a desire to bridge the
                gap between high-level innovation and ground-level execution.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                We don't just consult; we integrate. Our methodology combines
                deep industry expertise with a storytelling approach to build
                brands that resonance and scale in a crowded digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary font-bold">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold">Tailored Strategies</h4>
                    <p className="text-sm text-slate-500">
                      Custom solutions for unique challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary font-bold">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold">Expert Leadership</h4>
                    <p className="text-sm text-slate-500">
                      Decades of collective experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Growth Timeline */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Growth &amp; Process
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From inception to market leadership, our path has been defined by
              rigorous analysis and strategic breakthroughs.
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-800 hidden lg:block"></div>
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:text-right">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Phase 01: Discovery
                  </h3>
                  <p className="text-slate-400">
                    In-depth market analysis and internal audit to identify
                    untapped opportunities and core strengths.
                  </p>
                </div>
                <div className="size-10 rounded-full bg-primary flex items-center justify-center z-10 text-slate-900 font-bold shrink-0 shadow-[0_0_20px_rgba(186,216,85,0.4)]">
                  1
                </div>
                <div className="lg:w-1/2"></div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Phase 02: Synthesis
                  </h3>
                  <p className="text-slate-400">
                    Merging data insights with creative vision to develop a
                    cohesive roadmap for integration.
                  </p>
                </div>
                <div className="size-10 rounded-full bg-primary flex items-center justify-center z-10 text-slate-900 font-bold shrink-0 shadow-[0_0_20px_rgba(186,216,85,0.4)]">
                  2
                </div>
                <div className="lg:w-1/2 lg:text-right"></div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:text-right">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Phase 03: Deployment
                  </h3>
                  <p className="text-slate-400">
                    Active implementation across organizational touchpoints,
                    ensuring seamless transition and adoption.
                  </p>
                </div>
                <div className="size-10 rounded-full bg-primary flex items-center justify-center z-10 text-slate-900 font-bold shrink-0 shadow-[0_0_20px_rgba(186,216,85,0.4)]">
                  3
                </div>
                <div className="lg:w-1/2"></div>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Phase 04: Scale
                  </h3>
                  <p className="text-slate-400">
                    Continuous optimization and data-driven scaling to solidify
                    market dominance and reach.
                  </p>
                </div>
                <div className="size-10 rounded-full bg-primary flex items-center justify-center z-10 text-slate-900 font-bold shrink-0 shadow-[0_0_20px_rgba(186,216,85,0.4)]">
                  4
                </div>
                <div className="lg:w-1/2 lg:text-right"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-primary rounded-4xl p-12 lg:p-20 shadow-2xl shadow-primary/40 relative overflow-hidden text-[#0f332f]">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <span className="material-symbols-outlined text-[10rem]">
              auto_graph
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black mb-8 relative z-10 leading-tight text-[#0f332f]">
            Ready to Scale Your Vision?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto relative z-10 text-[#0f332f]/80">
            Join our network of industry leaders and transform your strategic
            approach today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="font-black px-10 py-4 rounded-xl hover:scale-105 transition-all shadow-xl bg-background-dark text-white">
              Contact Our Experts
            </button>
            <button className="bg-primary-dark/20 text-white border border-white/30 font-black px-10 py-4 rounded-xl transition-all hover:bg-[#0f332f]/10">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
