import React from "react";

export default function Blog() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* <!-- Hero Section: Featured Post --> */}
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-background-dark min-h-125 flex items-end">
          {/* <!-- Background Image --> */}
          <div className="absolute inset-0 opacity-60">
            <img
              alt="Featured background"
              className="w-full h-full object-cover"
              data-alt="Modern high-rise office building with glass facade"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmuHZt4F3DND3dqaBoI6RdrIswR16J-P0QECJ1yrm4K4MTKwujilktSNU-3jvR52KZs86k4oemaa8mY_s2br_75yyuQCTcdmCv2CpmntSgHuD5dUuf_2zLlykJ-P65j5mZLB55ZhsUqN0AZtRqT_aGwwejYsL6dRk5c9SR-a--B8hPYMuA5ztSTrslwqfOp5CpWFW37JeERcQd64YNiIZsWwVXm4QBPE3fQR88vJqqqn9LIFXGs2wbcmd765qaUCUkw-aahesVk-gg"
            />
          </div>
          {/* <!-- Gradient Overlay --> */}
          <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/40 to-transparent"></div>
          {/* <!-- Content --> */}
          <div className="relative z-10 p-8 md:p-16 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary text-background-dark text-xs font-bold uppercase tracking-wider mb-6">
              Featured Insight
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              The Architecture of Resilience: Scaling in a Volatile Economy
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed">
              Discover how the world's most adaptive enterprises are
              restructuring their digital core to withstand market turbulence
              and drive sustainable growth.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform">
                Read Full Article
              </button>
              <div className="flex items-center gap-3 text-white/80">
                <img
                  alt="Author"
                  className="w-10 h-10 rounded-full border-2 border-primary"
                  data-alt="Professional portrait of a male executive"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVcgCRLtrT8AxMAcHjpGKWDDgkBHBdoiIgNJ-yqQtXAjZQuJcdZBArpSxqQ9i-jnqaUlALF0uE35A0o7eGVG8MjLJJ-TKQOTXtawDdw1MWIE1onlIrt6c7UTVMdIFxohhmIZyxPHaSGDRQTGswpuPa4JQLfnoLSbFxSMcid8f6k44vWI4vVApVuvaM8jeHDw4BlqB7IqtbSGROVmhsgP6hV6rOH4sTHWgpcRXr15Juyj6D5KR3HvjnU6z7ZuAoo8KMqIZPn6GO1mf4"
                />
                <span className="text-sm font-medium">
                  By Dr. Julian Vane • 12 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Category Filters --> */}
      <section className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-background-dark text-white text-sm font-bold">
              All Posts
            </button>
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-slate-100 dark:bg-background-dark/30 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-background-dark transition-colors">
              Project Spotlight
            </button>
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-slate-100 dark:bg-background-dark/30 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-background-dark transition-colors">
              Scaling Strategies
            </button>
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-slate-100 dark:bg-background-dark/30 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-background-dark transition-colors">
              Digital Transformation
            </button>
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-slate-100 dark:bg-background-dark/30 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-background-dark transition-colors">
              Corporate Culture
            </button>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="text-sm font-medium">Sort by:</span>
            <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer text-slate-900 dark:text-white">
              <option>Newest First</option>
              <option>Most Popular</option>
              <option>Oldest First</option>
            </select>
          </div>
        </div>
      </section>
      {/* <!-- Blog Card Grid --> */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* <!-- Card 1 --> */}
        <article className="group flex flex-col bg-white dark:bg-background-dark/20 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-background-dark/10">
          <div className="relative h-60 overflow-hidden">
            <img
              alt="Article thumbnail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="Team of professionals collaborating in a modern office"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB65Kas-APTwwFxjVKVR1TjReOKe2zrS2yq0bt4Oh2bc5hsAqG3DmxOzayH2zbx2-12W4S8r8zZt170ClYbGnT5_thMHENo9QdD4YUe8b8pPFUBtXo8uDpeMN9NsM_zHkW4UwG548DP0PrtAE0VnvwrM8N6C1YGQvMb5-fIAcu8E7LOebYx7PpHOSsbQO9lTvO78l_TZPuTXUrMG1alhLB-6SLV60-eqIzqoCaWvf0ofQjQar2gQsNw7oB7p_1RKmM-McJcssN9SeJH"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-background-dark px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                Scaling Strategies
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wider">
              <span>Jan 24, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <h3 className="text-xl font-bold text-background-dark dark:text-white leading-snug mb-4 group-hover:text-primary transition-colors">
              Sustainable Growth Frameworks for Global Enterprises
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
              How multi-national organizations are leveraging lean methodologies
              to maintain agility while expanding into emerging markets.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold dark:text-slate-300">
                  Elena Petrov
                </span>
              </div>
              <a
                className="text-primary font-bold text-sm flex items-center gap-1 group/link"
                href="#"
              >
                Read More
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </article>
        {/* <!-- Card 2 --> */}
        <article className="group flex flex-col bg-white dark:bg-background-dark/20 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-background-dark/10">
          <div className="relative h-60 overflow-hidden">
            <img
              alt="Article thumbnail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="Digital concept of neural networks and data streams"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbB6CVDsEHOyz9ZXNmlqXLb3pZg6W2VQA7tA-msIIHNvJjj8FdkS1BSKEEAVYq88ignAaJq08_BNYYZdt4GrxVwLpXOSy_dcl1R3keyMl62p5GQf1K830CFDFu-U9viv87WJ8ILCJ7LuiVfeicOMbzjueeegcZFawJx8gWKZfJSzNrqqEVkvVm8Ll2K96geO2hzitA_YH1rrC2QY73NEffGrBfNKv7Pg-sG0pzJRNJtv4V9rsLzfDgY-UuVrN8HmYO3_wehNrlKNC3"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-background-dark px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                Digital Transformation
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wider">
              <span>Jan 21, 2024</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
            <h3 className="text-xl font-bold text-background-dark dark:text-white leading-snug mb-4 group-hover:text-primary transition-colors">
              The AI Mandate: Navigating Corporate Integration
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
              Move beyond the hype cycle. A strategic roadmap for integrating
              generative AI into existing enterprise workflows safely and
              effectively.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold dark:text-slate-300">
                  Marcus Thorne
                </span>
              </div>
              <a
                className="text-primary font-bold text-sm flex items-center gap-1 group/link"
                href="#"
              >
                Read More
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </article>
        {/* <!-- Card 3 --> */}
        <article className="group flex flex-col bg-white dark:bg-background-dark/20 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-background-dark/10">
          <div className="relative h-60 overflow-hidden">
            <img
              alt="Article thumbnail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="Modern minimalist office lobby with plants"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc3oiqnWlFYC56Yh4EVRV2suBPIcXkloAQrTIJLr_niCFB_dxogjmVSEZmSDHeOMBcCIOI4Gark-P44rrrZDDQP1Vt8-ogn0NCW5asSz9kMuE9sk4BDidsMw_thUkjU9qVdwAkmypRPNoqRWu_z6viutXJHxBoZIZ-yBc5byoEGvUJwku7o-Ee-Kfvwhd65usK1BTwJwY7FR16ptIoTc1rEvWHFOMPGbCw2JQw7BIDKoJH4hAfObzOkMkndQYbKjgDo1rrSs6oQXfE"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-background-dark px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                Corporate Culture
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wider">
              <span>Jan 18, 2024</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h3 className="text-xl font-bold text-background-dark dark:text-white leading-snug mb-4 group-hover:text-primary transition-colors">
              Building High-Trust Remote Organizations
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
              Why trust is the only currency that matters in a decentralized
              workforce and how leaders can foster it across time zones.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold dark:text-slate-300">
                  Sarah Jenkins
                </span>
              </div>
              <a
                className="text-primary font-bold text-sm flex items-center gap-1 group/link"
                href="#"
              >
                Read More
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </article>
        {/* <!-- Newsletter Signup Block (Spans 3 cols on lg) --> */}
        <div className="lg:col-span-3 my-12 py-16 px-8 rounded-2xl bg-background-dark relative overflow-hidden">
          {/* <!-- Abstract Pattern Background --> */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
            <svg
              className="h-full w-full"
              fill="currentColor"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <polygon points="50,0 100,0 100,100 0,100"></polygon>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl mx-auto">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Join the Inner Circle
              </h2>
              <p className="text-slate-400 text-lg">
                Get the latest corporate strategies, executive insights, and
                industry trends delivered directly to your inbox every Tuesday.
              </p>
            </div>
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input
                className="flex-1 bg-white/10 border-white/20 text-white rounded-lg px-4 py-4 focus:ring-primary focus:border-primary placeholder:text-slate-500"
                placeholder="Professional email address"
                type="email"
              />
              <button
                className="bg-primary text-background-dark px-8 py-4 rounded-lg font-black hover:bg-white transition-colors"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* <!-- Card 4 --> */}
        <article className="group flex flex-col bg-white dark:bg-background-dark/20 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-background-dark/10">
          <div className="relative h-60 overflow-hidden">
            <img
              alt="Article thumbnail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="Close-up of professional business analytics on a tablet"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdXfBCAjXTkBYgzM3xdWz0xMxguh76zSj40aJSZAAs791qvwIBCZWdm5Lo8WHBWzn_SZ_gVCY6ouDG4ibT-WlfhO11Vhd38EES6ji0d12uNDgSUwxZP9HI0D_e_xtZnCmUOJPKIjDMbDnxzRNo8rZPLuREKLBQi0X4OgM99OaVDyFlX7nOOo7p6Xq7LmeHrKH-L6HwuGlw-5PPm3Q-5pQ6ddjOYxU0HgdvmvGnpz17IgxlAV0aAsYWnyEaPut69AkYVoO5KxHhvrIu"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-background-dark px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                Project Spotlight
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wider">
              <span>Jan 12, 2024</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h3 className="text-xl font-bold text-background-dark dark:text-white leading-snug mb-4 group-hover:text-primary transition-colors">
              Reimagining Supply Chains: The 2024 Global Audit
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
              A deep dive into our recent partnership with Logistics Global and
              how we streamlined their last-mile delivery system using
              predictive analytics.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold dark:text-slate-300">
                  David Chen
                </span>
              </div>
              <a
                className="text-primary font-bold text-sm flex items-center gap-1 group/link"
                href="#"
              >
                Read More
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </article>
        {/* <!-- Card 5 --> */}
        <article className="group flex flex-col bg-white dark:bg-background-dark/20 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-background-dark/10">
          <div className="relative h-60 overflow-hidden">
            <img
              alt="Article thumbnail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="People shaking hands in professional setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ynka3rgLZjoUEbxSWPDGusfqRfm-_177c_EyAQF-1cgNYNOU21CTGIT9BFy8y2zWr6kHd3V9URCkdYSQeDeGF3HTHKr5HNry2fzFCoshyB9oPc_sdojdNnp68xgZTGtjQlQO0ubasnmZfT_FBWXp_4hQXV7k6_lJlSw4LqNTMHRNOXDQ_6Cc2HfhgTCNhzW9t3Nuf-vheyZ_JEv9kBnm8iYUGnK97DPYA3yZ_9lmtGw0uk1YGxik8XS6yBXHVroLwO-yDye57cdW"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-background-dark px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                Scaling Strategies
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wider">
              <span>Jan 08, 2024</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <h3 className="text-xl font-bold text-background-dark dark:text-white leading-snug mb-4 group-hover:text-primary transition-colors">
              Mergers in the Digital Age: Avoiding Cultural Friction
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
              Strategic advice on aligning IT infrastructures and corporate
              cultures during high-stakes acquisitions.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold dark:text-slate-300">
                  Rachel Wu
                </span>
              </div>
              <a
                className="text-primary font-bold text-sm flex items-center gap-1 group/link"
                href="#"
              >
                Read More
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </article>
        {/* Card 6 */}
        <article className="group flex flex-col bg-white dark:bg-background-dark/20 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-background-dark/10">
          <div className="relative h-60 overflow-hidden">
            <img
              alt="Article thumbnail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              data-alt="Clean desk with laptop and financial reports"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnSqO2MKknNFpgwabae1Od5ZYxz3h8en_vixoimUAVHASbvYzJZO4_ZzRLlQKYaeHkfHjPr6RshDxBqaZEQ2y3SXyzn9qp0Q_NDm_RXq1XbWAk5k3CrfMYF3SXJVdQadXjr1ZYqme-vrpQF3LWW1IesRTUFIG4BorE5XBOn9ytDqpzxcIXxrm7Q2DnWbEjBkmcw-dp1HoM9XY7oaoXSsY0ddWx3Eq6tx3Ruh6moaUQf_xEK_G_OGXtseM4FPrrkWq8LNgZDIxWpv3Q"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-background-dark px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                Digital Transformation
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wider">
              <span>Jan 05, 2024</span>
              <span>•</span>
              <span>9 min read</span>
            </div>
            <h3 className="text-xl font-bold text-background-dark dark:text-white leading-snug mb-4 group-hover:text-primary transition-colors">
              Legacy Systems: To Migrate or to Modernize?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
              A cost-benefit analysis of the two primary paths for aging
              enterprise software and the long-term implications of each.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold dark:text-slate-300">
                  Thomas Miller
                </span>
              </div>
              <a
                className="text-primary font-bold text-sm flex items-center gap-1 group/link"
                href="#"
              >
                Read More
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </article>
      </section>
      {/* Pagination */}
      <nav className="mt-16 flex items-center justify-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
          3
        </button>
        <span className="text-slate-400 mx-2">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
          8
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </nav>
    </main>
  );
}
