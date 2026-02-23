import Link from "next/link";

export default function Services() {
  return (
    <main className="pt-20 font-inter">
      {/* Hero Section */}
      <section
        className="hero-container relative flex flex-col md:flex-row overflow-hidden"
        data-purpose="agency-hero"
        id="hero"
      >
        {/* <!-- Mobile Header --> */}
        <div className="md:hidden flex justify-between items-center p-6 bg-white z-50">
          <div className="font-bold text-2xl text-primary">AGENCY.</div>
          <button className="p-2" data-purpose="mobile-menu-trigger">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>
        {/* <!-- BEGIN: Hero Content Area --> */}
        <main className="flex-1 relative flex flex-col md:flex-row">
          {/* <!-- Typography Side --> */}
          <div
            className="w-full md:w-1/2 flex items-center p-8 md:p-20 z-30 bg-agency-light"
            data-purpose="content-left"
          >
            <div className="max-w-xl animate-slide-up">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary text-white rounded-sm">
                Est. 2024
              </span>
              <h1 className="font-display text-6xl lg:text-8xl xl:text-9xl mb-8 leading-[0.9] text-background-dark overlap-text relative">
                Crafting <br />
                <span className="text-primary italic">Digital</span>
                <br />
                Emotions.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-md leading-relaxed">
                We bridge the gap between human intuition and digital precision
                to create brand experiences that resonate deeply.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="px-8 py-4 bg-background-dark text-white font-semibold hover:bg-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  data-purpose="cta-primary"
                  href="/about"
                >
                  View About Us
                </Link>
                <Link
                  className="px-8 py-4 border-2 border-background-dark text-background-dark font-semibold hover:bg-background-dark hover:text-white transition-all duration-300"
                  data-purpose="cta-secondary"
                  href="/contact"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Image Side --> */}
          <div
            className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden"
            data-purpose="media-right"
          >
            {/* <!-- Decorative overlapping shape --> */}
            <div className="absolute -left-12 top-1/4 w-24 h-48 bg-primary z-10 hidden md:block"></div>
            {/* <!-- Main Expressive Image --> */}
            <img
              alt="Abstract Creative Visual"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100"
              data-purpose="hero-image"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1tw0ao_3w3_eRv-rW63opxxD7ytI7vBEOBxRNBb9IK0k4o6qyhZopfTDj8uOmHBGs1HQ45Lmc_GXQhdbZjcnyUPmnjFq7kE_bzB1NggZHJtRGJ6bZf-fr3b6HWUH-klWiaHXjQaZpQ9OK-V1ovlFKP195qpiUib1EhQKoCrQDsZ8SQs7lpqSTCYKeTlEQV697CJD3GT_farmJWobc6HkktZFcXpQzXHWHRvMpAx_WBZFWJq5jDXPE6jFbtaLLcaTRLrfKjIBOgYti"
            />
            {/* <!-- Floating Label --> */}
            <div
              className="absolute bottom-12 right-12 text-white z-20 hidden lg:block"
              data-purpose="floating-caption"
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-white"></span>
                <p className="text-sm font-light tracking-widest uppercase">
                  Project: Neon Horizon (2024)
                </p>
              </div>
            </div>
            {/* <!-- Decorative Circle Overlay --> */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 border-30 border-agency-secondary rounded-full opacity-20"></div>
          </div>
        </main>
        {/* <!-- END: Hero Content Area --> */}
      </section>
      <div className="max-w-7xl pt-30 font-inter mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                Visual identity systems including logos, color palettes, and
                full brand books that ensure consistency across all touchpoints.
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
                Optimizing business models for scalability and digital
                dominance.
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
                Precision-engineered launch strategies. We plan the
                distribution, pricing, and messaging for new product entries.
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
              Download our full service catalog or schedule a discovery call
              with our leads for a custom integrated solution.
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
      </div>
    </main>
  );
}
