import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-12 md:pt-16 font-manrope flex items-center hero-gradient">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/mec.webm" type="video/webm" />
        </video>
        {/* Dark overlay to reduce video potency */}
        <div className="absolute inset-0 bg-background-dark/70 z-5"></div>
        <div className="absolute inset-0 bg-background-dark/20 z-5"></div>
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden pointer-events-none">
          <svg
            className="absolute -top-24 -right-24 w-1/2 h-full text-primary"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <circle cx="100" cy="0" fillOpacity="0.1" r="80"></circle>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-white dark:text-primary font-bold text-xs tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Strategy &amp; Engineering
            </div>
            <h1 className="text-5xl md:text-7xl font-800 leading-[1.1] tracking-tight text-white dark:text-white">
              Elevating Brands. <br />
              <span className="text-primary italic">Engineering</span> Growth.
            </h1>
            <p className="text-lg md:text-xl text-primary dark:text-slate-400 max-w-lg leading-relaxed font-medium">
              Strategic Branding &amp; Engineering Solutions designed to scale
              your business. We bridge the gap between creative vision and
              technical excellence with Nigerian insights and UK standards.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/services" className="bg-primary text-background-dark px-8 py-4 rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-2">
                Explore Services
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link href="/pricing" className="border-2 border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl font-bold text-white hover:text-surface-dark dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-700"></div>
            <div className="relative hidden md:block bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden aspect-square shadow-2xl">
              <img
                alt="Professional team collaborating in a modern office space"
                className="w-full h-full object-cover"
                data-alt="A professional team working together in a sleek modern tech office"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARsJa-qJVT8A_8wp9zc6G7FXJo7zH5h1-z4_CZ_bkKghCOz7z5ola9Az6d_kw2WRdP0iRTP2N7D4wI0e8vVhm42J90uCBHHjA9VQm4ITaM_U-4OXLwkqdMAEIvgjvAbtLojd_rxx9od7NDe3346gNL_0A4qcPy_jwyQcLqe6Qi1HZOvGKXiK0W-CCx3_JAlC7zlsTVQ9Epur3NA5Xy9AptsP0wbbxger7o_2fQ65dbJOyjdRxYR1IOaAmPWNkei02NRiwy1gZp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling About Section */}
      <section
        className="py-24 bg-background-dark font-inter dark:bg-background-dark"
        id="about"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700"
                  data-alt="Modern collaborative business meeting in a minimalist office space"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4JfNRTmapTX1mgvpQ4Xe04FBuh2xQaY2H_iadqIz6TUyXh6Ny_BwNZHqSAaZqvJpWs-RBub1ptWxd7cj61r8kkMNMQMIv5RFOUYXNjvaOpiPkLRfJwvWOSCOt3K-i4dVUFC2XMK14iVMXUdrLDYYeMiXpEpS_CkfP99OasNDdNNgM1DmskO04QUF0rhhJXegyzyFxJPP5EiuGOP_GHE-kwjpxkiENqtWYxlkqID2y_MVripSaxFDY1RFO3Rch9u1Zvp8ZFCk8vy43"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-black text-white">10+</p>
                <p className="text-white/80 text-sm font-bold uppercase tracking-wider">
                  Years of Strategy
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-sm">
                Our Philosophy
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white dark:text-white leading-tight">
                Beyond Aesthetics: Innovation &amp; Transformation
              </h2>
              <p className="text-lg text-slate-400 dark:text-slate-400 leading-relaxed">
                At LUSO INTEGRATE, we believe a brand is more than just a
                logo—it's a strategic engine. We don't just build visual
                identities; we engineer business systems that scale. Our
                approach combines data-driven logic with world-className
                creative intuition.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    bolt
                  </span>
                  <div>
                    <h4 className="font-bold text-white dark:text-white mb-1">
                      Growth First
                    </h4>
                    <p className="text-sm text-slate-500">
                      Every creative decision is mapped to a tangible business
                      outcome.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    biotech
                  </span>
                  <div>
                    <h4 className="font-bold text-white dark:text-white mb-1">
                      Tech Infused
                    </h4>
                    <p className="text-sm text-slate-500">
                      Leveraging cutting-edge tools to automate and optimize
                      your brand.
                    </p>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Learn about our process
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background-light text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="space-y-2 border-4 rounded-2xl pb-4 bg-background-dark border-background-dark pt-4">
              <div className="text-4xl md:text-5xl font-800 text-primary">
                150+
              </div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                Brands Transformed
              </div>
            </div>
            <div className="space-y-2 border-4 rounded-2xl pb-4 bg-background-dark border-background-dark pt-4">
              <div className="text-4xl md:text-5xl font-800 text-primary">
                320+
              </div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                Projects Delivered
              </div>
            </div>
            <div className="space-y-2 border-4 rounded-2xl pb-4 bg-background-dark border-background-dark pt-4">
              <div className="text-4xl md:text-5xl font-800 text-primary">
                12+
              </div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                Global Awards
              </div>
            </div>
            <div className="space-y-2 border-4 rounded-2xl pb-4 bg-background-dark border-background-dark pt-4">
              <div className="text-4xl md:text-5xl font-800 text-primary">
                99%
              </div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section
        className="py-24 bg-background-dark font-inter dark:bg-slate-900/50"
        id="services"
      >
        <div className="max-w-4xl mx-auto px-6 text-center mb-12">
          <h2 className="text-sm font-bold font-manrope text-primary tracking-widest uppercase mb-4">
            Core Expertise
          </h2>
          <h3 className="text-3xl font-manrope md:text-4xl font-800 text-white dark:text-white">
            Comprehensive Solutions Designed for Sustainable Market Dominance.
          </h3>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {/* Branding Division */}
          <div className="group p-10 bg-slate-900/50 dark:bg-surface-dark rounded-3xl border-t-4 border-primary shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">
                  palette
                </span>
              </div>
              <span className="text-primary font-black text-sm uppercase tracking-widest">
                Division 01
              </span>
            </div>
            <h3 className="text-3xl font-black mb-6 text-white dark:text-white">
              Branding Development
            </h3>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Crafting immersive brand experiences that resonate deeply with
              your audience and command premium positioning.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Visual Identity</h4>
                <p className="text-xs text-slate-400">
                  Logos, Typography, UI/UX
                </p>
              </div>
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Creative Direction</h4>
                <p className="text-xs text-slate-400">
                  Conceptual Art, Styling
                </p>
              </div>
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Digital Presence</h4>
                <p className="text-xs text-slate-400">
                  Web &amp; Mobile Ecosystems
                </p>
              </div>
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Content Strategy</h4>
                <p className="text-xs text-slate-400">
                  Narrative &amp; Asset Dev
                </p>
              </div>
            </div>
          </div>
          
          {/* Strategy Division */}
          <div className="group p-10 bg-slate-900/50 dark:bg-surface-dark rounded-3xl border-t-4 border-primary shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">
                  insights
                </span>
              </div>
              <span className="text-primary font-black text-sm uppercase tracking-widest">
                Division 02
              </span>
            </div>
            <h3 className="text-3xl font-black mb-6 text-white dark:text-white">
              Business Strategy
            </h3>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Engineering high-performance business models and market roadmaps
              based on hard data and competitive intelligence.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Business Model</h4>
                <p className="text-xs text-slate-400">
                  Optimization &amp; Revenue
                </p>
              </div>
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Positioning</h4>
                <p className="text-xs text-slate-400">
                  Competitive Edge &amp; USP
                </p>
              </div>
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">GTM Strategy</h4>
                <p className="text-xs text-slate-400">Market Launch Systems</p>
              </div>
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Strategic Planning</h4>
                <p className="text-xs text-slate-400">
                  Scalability &amp; Roadmaps
                </p>
              </div>
            </div>
          </div>

          {/* Innovation Division */}
          <div className="group p-10 bg-slate-900/50 dark:bg-surface-dark rounded-3xl border-t-4 border-primary shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl">
                  palette
                </span>
              </div>
              <span className="text-primary font-black text-sm uppercase tracking-widest">
                Division 03
              </span>
            </div>
            <h3 className="text-3xl font-black mb-6 text-white dark:text-white">
              Innovation
            </h3>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Crafting immersive brand experiences that resonate deeply with
              your audience and command premium positioning.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Visual Identity</h4>
                <p className="text-xs text-slate-400">
                  Logos, Typography, UI/UX
                </p>
              </div>
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Creative Direction</h4>
                <p className="text-xs text-slate-400">
                  Conceptual Art, Styling
                </p>
              </div>
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Digital Presence</h4>
                <p className="text-xs text-slate-400">
                  Web &amp; Mobile Ecosystems
                </p>
              </div>
              <div className="p-4 bg-background-dark dark:bg-background-dark/50 rounded-xl border-t-4 border-primary dark:border-primary group-hover:shadow-lg transition-all">
                <h4 className="font-bold text-sm mb-1">Content Strategy</h4>
                <p className="text-xs text-slate-400">
                  Narrative &amp; Asset Dev
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Carousel */}
      <div className="py-12 bg-background-light dark:bg-background-dark overflow-hidden border-y border-slate-100 dark:border-white/5">
        <div className="animate-marquee gap-20">
          {/* Logos (repeated for loop) */}
          <div className="w-60 h-16 flex items-center justify-center font-bold text-2xl text-slate-400">
            NEXUS GLOBAL
          </div>
          <div className="w-60 h-16 flex items-center justify-center font-bold text-2xl text-slate-400">
            VANTAGE
          </div>
          <div className="w-60 h-16 flex items-center justify-center font-bold text-2xl text-slate-400">
            ALTOS VENTURE
          </div>
          <div className="w-60 h-16 flex items-center justify-center font-bold text-2xl text-slate-400">
            PRIMO TECH
          </div>
          <div className="w-60 h-16 flex items-center justify-center font-bold text-2xl text-slate-400">
            ORION SYSTEM
          </div>
          {/* Repeat */}
          <div className="w-60 h-16 flex items-center justify-center font-bold text-2xl text-slate-400">
            NEXUS GLOBAL
          </div>
          <div className="w-60 h-16 flex items-center justify-center font-bold text-2xl text-slate-400">
            VANTAGE
          </div>
          <div className="w-60 h-16 flex items-center justify-center font-bold text-2xl text-slate-400">
            ALTOS VENTURES
          </div>
          <div className="w-60 h-16 flex items-center justify-center font-bold text-2xl text-slate-400">
            PRIMO TECH
          </div>
          <div className="w-60 h-16 flex items-center justify-center font-bold text-2xl text-slate-400">
            ORION SYSTEMS
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section
        className="py-24 bg-background-dark dark:bg-background-dark"
        id="portfolio"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-sm font-bold font-manrope text-primary tracking-widest uppercase">
                Selected Works
              </h2>
              <h3 className="text-4xl font-800 font-manrope text-white dark:text-white">
                Selected Success Stories.
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-bold">
                All
              </button>
              <button className="px-6 py-2 rounded-full bg-white dark:bg-surface-dark text-slate-500 text-sm font-bold border border-slate-200 dark:border-white/5 hover:border-primary transition-all">
                Creative
              </button>
              <button className="px-6 py-2 rounded-full bg-white dark:bg-surface-dark text-slate-500 text-sm font-bold border border-slate-200 dark:border-white/5 hover:border-primary transition-all">
                Development
              </button>
              <button className="px-6 py-2 rounded-full bg-white dark:bg-surface-dark text-slate-500 text-sm font-bold border border-slate-200 dark:border-white/5 hover:border-primary transition-all">
                Branding
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-4/5 rounded-2xl overflow-hidden mb-6 bg-slate-200 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  data-alt="Abstract modern branding concept with clean typography"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3b2VLjVgiueyTishAcZs1hs8RCBDnLeFRf4_NFZUmSV9TJl6HFjLWDWnQwyB7HLBn3lY9KWyoGoaxf-_8BfmeWpgrEIetShDvMt84T7Z5g_TCfQ8bdvkIP-yLpZeTMk47lGygC7MSzsGjVrSrbm2iXwQu6Xdv3st-P7GjMYVrkug02gxTbjoH3FZGW0ckOlvDrH7zZBHm9TsOByZFuihR5KSHzzK7xTjWCRDzllNSKPxavJ8NfzFC6F0sBuEGBtcBWwhtB_kdzkfM"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                  </span>
                </div>
              </div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Branding &amp; Strategy
              </div>
              <h4 className="text-2xl font-black text-white dark:text-white">
                NeoBank Identity
              </h4>
            </div>
            {/* Portfolio Item 2  */}
            <div className="group cursor-pointer">
              <div className="aspect-4/5 rounded-2xl overflow-hidden mb-6 bg-slate-200 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  data-alt="Digital product design interface showcased on a laptop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDQetqkYNb66tNSpZj2e-AyqBWje1mfeys2Joa7uHrwUnrlQF_LbVVzuyf9zJWMeM9_zhx1CWBizgjUtjCqa26OpGNKJKLVtfbvunpmtLUqV1tXcC1zxouYspOlaC2N8OMpqN1gDHVwREPXIIHGzZ2hFGcGigQ8IfDo_Gi1oWO3pl6lU2kAXGE_wCdbo7zDVzus-F-Sb00Xm4ptbdVj9sytrTIzA-7xiZHjh04dc78HJghdXODK0HKcMPYa3Cnb32LRO4zjYWirs4j"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                  </span>
                </div>
              </div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Digital Transformation
              </div>
              <h4 className="text-2xl font-black text-white dark:text-white">
                Luxe Commerce Ecosystem
              </h4>
            </div>
            {/* Portfolio Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-4/5 rounded-2xl overflow-hidden mb-6 bg-slate-200 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  data-alt="Creative directional photography for a premium brand"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz2bo2mNoDdZM85lj06GtRrtrfRZ-6Z8Nl1EcVCXBrUoJCGy9xJryfMVh3TV7K9cXK3pzaQ-qnFfrSyfYkugdvp-hC06foGQueFaT6HlC9t7JB1iy9ORj75vFVlEFi8OEQGAy17UuIbLdS8o-Y4P3UFJumrQbY2y5j98mxQOKkzSg7L6oRsMLwEKmIVJSsGovBrB9sUWZU3PXXIjLFn3S-DjUh1wiwlujIBOJkVOr6Ui2mSmpT-Lx0Yx-YIlfd4eiC43eiMOitXfkd"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                  </span>
                </div>
              </div>
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Market Positioning
              </div>
              <h4 className="text-2xl font-black text-white dark:text-white">
                Solaris Growth Roadmap
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 font-inter dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold font-manrope text-primary tracking-widest uppercase">
              Testimonials
            </h2>
            <h3 className="text-4xl md:text-5xl font-800 text-white font-manrope mb-4">
              What Partners Say.
            </h3>

            <span className="material-symbols-outlined text-6xl text-primary mb-8">
              format_quote
            </span>
            <div className="space-y-12">
              <p className="text-3xl md:text-4xl font-medium text-white dark:text-slate-200 leading-snug italic">
                "LUSO INTEGRATE didn't just give us a new look; they
                re-engineered how we think about our customers. Our revenue
                doubled within 18 months of implementing their strategic
                roadmap."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Professional portrait of a corporate executive"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGEUkLiW9MmqeM_mZetyGZDiKHWvz6x7nJt20gIoMWLQ9BQ71vbvUD_PgOPVPgdDB1oeFQrht5Vd69DsIfTpoT29dtpohs4jJai6coOgdCVSyIANjXyLBJGnRQe9tSN9RQqJVboqJI65FK5qpoaYVvcb_71uHTdjztW_cuEHcleBIrvRkXPPfXoU8ehf37W_jBjhYbq52z-RXvT0hVXBymgbrvuJpVOmgZlCwjs2CBkoyqO3_nmf7qvGlzePAauM9gAGZDRnajvFPW"
                  />
                </div>
                <div className="text-left">
                  <h5 className="font-bold text-primary dark:text-white">
                    David Oladipo
                  </h5>
                  <p className="text-sm text-white dark:text-primary">
                    CEO, Nexus Global Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="bg-primary p-12 md:p-20 rounded-3xl text-background-dark shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path
                d="M0 100 C 20 0 50 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              ></path>
            </svg>
          </div>
          <h3 className="text-4xl md:text-6xl font-800 mb-6 tracking-tight">
            Ready to integrate <br /> visionary growth?
          </h3>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            Whether you are starting from scratch or looking to scale a global
            operation, our team is ready to engineer your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-background-dark text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
