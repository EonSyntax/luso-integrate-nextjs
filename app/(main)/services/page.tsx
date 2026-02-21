export default function Services() {
  return (
    <main className="max-w-7xl font-inter mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          Strategic Solutions to{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
            Scale Your Brand
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          We bridge the gap between creative excellence and business
          intelligence. Our two-pillar approach is designed for market leaders
          ready to transform and dominate.
        </p>
      </section>
      {/* Division Switcher/Quick Nav */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <a
          className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:border-primary transition-all shadow-sm"
          href="#branding"
        >
          <span className="material-symbols-outlined text-primary">brush</span>
          <span className="font-bold text-slate-800 dark:text-slate-200">
            Branding Division
          </span>
        </a>
        <a
          className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:border-primary transition-all shadow-sm"
          href="#strategy"
        >
          <span className="material-symbols-outlined text-primary">
            trending_up
          </span>
          <span className="font-bold text-slate-800 dark:text-slate-200">
            Strategy Division
          </span>
        </a>
      </div>
      {/* 1. Branding Division */}
      <section className="mb-24" id="branding">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-2 bg-primary rounded-full"></div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              01. Branding Division
            </h2>
            <p className="text-slate-500">
              Creating emotional connections through identity and experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand Strategy */}
          <div className="service-card group bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined service-icon text-4xl text-primary bg-primary/10 p-3 rounded-lg">
                explore
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Division: Branding
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">Brand Strategy</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
              Define your purpose, vision, and internal alignment to create a
              solid foundation for all future growth and market entry.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Competitive Benchmarking</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Brand Archetype &amp; Persona</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Tone of Voice Guidelines</span>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <p className="text-xs italic text-primary font-medium">
                Impact: Drives 40% higher customer loyalty.
              </p>
              <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Get Quote{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Creative Design */}
          <div className="service-card group bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined service-icon text-4xl text-primary bg-primary/10 p-3 rounded-lg">
                palette
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Division: Branding
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">Creative Design</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
              Visual identity systems including logos, color palettes, and full
              brand books that ensure consistency across all touchpoints.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Logo &amp; Visual Identity</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Corporate Stationery</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Comprehensive Brand Book</span>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <p className="text-xs italic text-primary font-medium">
                Impact: Increases brand recall by 80%.
              </p>
              <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Get Quote{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Digital Experience */}
          <div className="service-card group bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined service-icon text-4xl text-primary bg-primary/10 p-3 rounded-lg">
                devices
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Division: Branding
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">Digital Experience</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
              Designing UI/UX that converts. We create intuitive digital
              interfaces that reflect your brand’s authority and ease of use.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>User Experience (UX) Research</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>User Interface (UI) Design</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Interaction Prototypes</span>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <p className="text-xs italic text-primary font-medium">
                Impact: Boosts conversion rates by up to 200%.
              </p>
              <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Get Quote{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Content Production */}
          <div className="service-card group bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined service-icon text-4xl text-primary bg-primary/10 p-3 rounded-lg">
                movie_edit
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Division: Branding
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">Content Production</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
              Storytelling that resonates. From cinematic video production to
              high-impact copywriting and photography.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Professional Copywriting</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Commercial Photography</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Video Storytelling &amp; Reels</span>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <p className="text-xs italic text-primary font-medium">
                Impact: Increases organic engagement by 35%.
              </p>
              <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Get Quote{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 2. Strategy Development Division */}
      <section className="mb-24" id="strategy">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-2 bg-primary rounded-full"></div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              02. Strategy Development
            </h2>
            <p className="text-slate-500">
              Optimizing business models for scalability and digital dominance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Model Optimization */}
          <div className="service-card group bg-slate-900 dark:bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-primary/50 transition-all text-white">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined service-icon text-4xl text-primary bg-primary/10 p-3 rounded-lg">
                architecture
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Division: Strategy
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">
              Business Model Optimization
            </h3>
            <p className="text-slate-400 mb-6 line-clamp-3">
              Reviewing and re-engineering revenue streams and operational
              structures to maximize efficiency and profit margins.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Revenue Stream Diversification</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Cost Structure Optimization</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Scalability Roadmaps</span>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <p className="text-xs italic text-primary font-medium">
                Scaling: Prepares for 10x growth handling.
              </p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all">
                Select Package
              </button>
            </div>
          </div>
          {/* Market Positioning */}
          <div className="service-card group bg-slate-900 dark:bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-primary/50 transition-all text-white">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined service-icon text-4xl text-primary bg-primary/10 p-3 rounded-lg">
                ads_click
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Division: Strategy
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">Market Positioning</h3>
            <p className="text-slate-400 mb-6 line-clamp-3">
              Identify your "Blue Ocean." We conduct deep market research to
              find untapped niches where your brand can lead.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Niche Market Analysis</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Competitive Gap Mapping</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Unique Value Prop Definition</span>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <p className="text-xs italic text-primary font-medium">
                Scaling: Reduces marketing CAC by 15%.
              </p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all">
                Select Package
              </button>
            </div>
          </div>
          {/* Go-To-Market (GTM) */}
          <div className="service-card group bg-slate-900 dark:bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-primary/50 transition-all text-white">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined service-icon text-4xl text-primary bg-primary/10 p-3 rounded-lg">
                rocket_launch
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Division: Strategy
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">Go-To-Market (GTM)</h3>
            <p className="text-slate-400 mb-6 line-clamp-3">
              Precision-engineered launch strategies. We plan the distribution,
              pricing, and messaging for new product entries.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Multichannel Launch Plans</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Pricing Strategy &amp; Modeling</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Initial Traction Campaigns</span>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <p className="text-xs italic text-primary font-medium">
                Scaling: Accelerates ROI timeline by 3 months.
              </p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all">
                Select Package
              </button>
            </div>
          </div>
          {/* Digital Transformation */}
          <div className="service-card group bg-slate-900 dark:bg-slate-950 p-8 rounded-xl border border-slate-800 hover:border-primary/50 transition-all text-white">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined service-icon text-4xl text-primary bg-primary/10 p-3 rounded-lg">
                hub
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Division: Strategy
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">Digital Transformation</h3>
            <p className="text-slate-400 mb-6 line-clamp-3">
              Integrate cutting-edge technologies into your operations to
              automate workflows and enhance customer data intelligence.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>CRM &amp; ERP Integration</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Workflow Automation</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary text-lg">
                  check_circle
                </span>
                <span>Data Dashboarding &amp; BI</span>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <p className="text-xs italic text-primary font-medium">
                Scaling: Increases operational speed by 25%.
              </p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all">
                Select Package
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl p-12 text-center text-white bg-background-dark border border-primary/30">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Download our full service catalog or schedule a discovery call with
            our leads for a custom integrated solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
              Schedule Discovery Call
            </button>
            <button className="bg-primary border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
              Download Pricing Sheet
            </button>
          </div>
        </div>
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-125 h-125 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-100 h-100 bg-blue-400/20 rounded-full blur-3xl"></div>
      </section>
    </main>
  );
}
