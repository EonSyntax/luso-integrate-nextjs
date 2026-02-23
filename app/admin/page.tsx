import React from "react";

export default function AdminDashboard() {
  return (
    <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
      {/* <!-- Header --> */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-primary dark:text-slate-100 tracking-tight">
            Admin Overview
          </h2>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
            <span>Luso Integrate</span>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-primary font-medium dark:text-brand-lime">
              Dashboard
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </span>
            <input
              className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-brand-lime transition-all"
              placeholder="Search across dashboard..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-primary dark:text-slate-100">
                  Tiago Silva
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Chief Administrator
                </p>
              </div>
              <div className="size-10 rounded-full bg-primary flex items-center justify-center border-2 border-brand-lime overflow-hidden">
                <img
                  alt="User Profile"
                  className="w-full h-full object-cover"
                  data-alt="Professional portrait of a male admin user"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnV9isK5K1BqHb5PqTPNQvqXJOGgGec298TfhRsMga3Nt_pqdBCgkiCd26NpsJGuq102wkY3oIWbN8BoBJo9i9n_k3XuUtY80XC8yEqumKzBl4XT_6vtz3Hol-Y5zXgiwErf2W7CsjuAoNmuVDx6YM1kqyexLPQ9lm-p7v7uPi5AsVjaC2Jt8_nY9yKWH4dYoWXanOhjw2l-l1ecScW8X2mttSc1A5lw-0ZLrV7DCfqSMPp18lITsm2wVNSvKJCvIYpcIxX-CKCC3H"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="p-8 max-w-360 mx-auto space-y-8">
        {/* <!-- Metric Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Card 1 --> */}
          <div className="bg-white dark:bg-background-dark/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="size-10 rounded-lg bg-primary/5 dark:bg-brand-lime/10 flex items-center justify-center text-primary dark:text-brand-lime">
                <span className="material-symbols-outlined">description</span>
              </div>
              <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  trending_up
                </span>{" "}
                +12%
              </span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
              Total Blog Posts
            </h3>
            <p className="text-3xl font-black text-primary dark:text-slate-100">
              124
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <a
                className="text-xs font-bold text-primary dark:text-brand-lime hover:underline"
                href="#"
              >
                Manage posts
              </a>
              <span className="text-[10px] text-slate-400 font-medium italic">
                Updated 2h ago
              </span>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="bg-white dark:bg-background-dark/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="size-10 rounded-lg bg-primary/5 dark:bg-brand-lime/10 flex items-center justify-center text-primary dark:text-brand-lime">
                <span className="material-symbols-outlined">forum</span>
              </div>
              <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  trending_up
                </span>{" "}
                +3
              </span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
              Total Testimonials
            </h3>
            <p className="text-3xl font-black text-primary dark:text-slate-100">
              45
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <a
                className="text-xs font-bold text-primary dark:text-brand-lime hover:underline"
                href="#"
              >
                Approve new
              </a>
              <span className="text-[10px] text-slate-400 font-medium italic">
                5 pending
              </span>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="bg-white dark:bg-background-dark/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="size-10 rounded-lg bg-primary/5 dark:bg-brand-lime/10 flex items-center justify-center text-primary dark:text-brand-lime">
                <span className="material-symbols-outlined">cases</span>
              </div>
              <span className="text-[12px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  keep
                </span>{" "}
                Active
              </span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
              Portfolio Projects
            </h3>
            <p className="text-3xl font-black text-primary dark:text-slate-100">
              18
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <a
                className="text-xs font-bold text-primary dark:text-brand-lime hover:underline"
                href="#"
              >
                View projects
              </a>
              <span className="text-[10px] text-slate-400 font-medium italic">
                Latest: Project X
              </span>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="bg-white dark:bg-background-dark/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="size-10 rounded-lg bg-primary/5 dark:bg-brand-lime/10 flex items-center justify-center text-primary dark:text-brand-lime">
                <span className="material-symbols-outlined">collections</span>
              </div>
              <span className="text-[12px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  add
                </span>{" "}
                New
              </span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
              Client Logos
            </h3>
            <p className="text-3xl font-black text-primary dark:text-slate-100">
              32
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <a
                className="text-xs font-bold text-primary dark:text-brand-lime hover:underline"
                href="#"
              >
                Manage vault
              </a>
              <span className="text-[10px] text-slate-400 font-medium italic">
                Max quality SVGs
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Chart and Activity Section --> */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* <!-- Engagement Growth Chart --> */}
          <div className="xl:col-span-2 bg-white dark:bg-background-dark/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-lg font-black text-primary dark:text-slate-100 tracking-tight">
                  Engagement Growth
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  Content performance over the last 30 days
                </p>
              </div>
              <div className="flex items-center gap-2">
                <select className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold py-1.5 focus:ring-brand-lime">
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
            <div className="relative h-70 w-full">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 800 280"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#bad955"
                      stopOpacity="0.3"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="#bad955"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  className="custom-chart-gradient "
                  d="M0,240 Q100,220 200,180 T400,140 T600,60 T800,40 L800,280 L0,280 Z"
                ></path>
                <path
                  d="M0,240 Q100,220 200,180 T400,140 T600,60 T800,40"
                  fill="none"
                  stroke="#bad955"
                  strokeLinecap="round"
                  strokeWidth="4"
                ></path>
                {/* <!-- Grid Lines --> */}
                <line
                  className="dark:stroke-slate-800"
                  stroke="#bad955"
                  stroke-dasharray="4"
                  stroke-width="1"
                  x1="0"
                  x2="800"
                  y1="40"
                  y2="40"
                ></line>
                <line
                  className="dark:stroke-slate-800"
                  stroke="#bad955"
                  stroke-dasharray="4"
                  stroke-width="1"
                  x1="0"
                  x2="800"
                  y1="100"
                  y2="100"
                ></line>
                <line
                  className="dark:stroke-slate-800"
                  stroke="#bad955"
                  stroke-dasharray="4"
                  stroke-width="1"
                  x1="0"
                  x2="800"
                  y1="160"
                  y2="160"
                ></line>
                <line
                  className="dark:stroke-slate-800"
                  stroke="#bad955"
                  stroke-dasharray="4"
                  stroke-width="1"
                  x1="0"
                  x2="800"
                  y1="220"
                  y2="220"
                ></line>
              </svg>
              <div className="flex justify-between mt-4 px-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Week 1
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Week 2
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Week 3
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Week 4
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Recent Activity Section --> */}
          <div className="bg-white dark:bg-background-dark/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black text-primary dark:text-slate-100 tracking-tight">
                Recent Activity
              </h3>
              <button className="text-xs font-bold text-primary dark:text-brand-lime hover:underline">
                View all
              </button>
            </div>
            <div className="space-y-6">
              {/* <!-- Activity Item 1 --> */}
              <div className="flex gap-4">
                <div className="relative">
                  <div className="size-8 rounded-full bg-primary/10 dark:bg-brand-lime/20 flex items-center justify-center text-primary dark:text-brand-lime">
                    <span className="material-symbols-outlined text-[18px]">
                      add_circle
                    </span>
                  </div>
                  <div className="absolute top-8 left-1/2 w-px h-10 bg-slate-100 dark:bg-slate-800"></div>
                </div>
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-primary dark:text-slate-100">
                      Admin
                    </span>{" "}
                    published a new blog post
                  </p>
                  <p className="text-xs font-medium text-slate-400 mt-1 italic">
                    "The Future of Web 3.0" • 14 mins ago
                  </p>
                </div>
              </div>
              {/* <!-- Activity Item 2 --> */}
              <div className="flex gap-4">
                <div className="relative">
                  <div className="size-8 rounded-full bg-primary/10 dark:bg-brand-lime/20 flex items-center justify-center text-primary dark:text-brand-lime">
                    <span className="material-symbols-outlined text-[18px]">
                      reviews
                    </span>
                  </div>
                  <div className="absolute top-8 left-1/2 w-px h-10 bg-slate-100 dark:bg-slate-800"></div>
                </div>
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-primary dark:text-slate-100">
                      Tiago Silva
                    </span>{" "}
                    approved 2 testimonials
                  </p>
                  <p className="text-xs font-medium text-slate-400 mt-1 italic">
                    Customer feedback batch • 2h ago
                  </p>
                </div>
              </div>
              {/* <!-- Activity Item 3 --> */}
              <div className="flex gap-4">
                <div className="relative">
                  <div className="size-8 rounded-full bg-primary/10 dark:bg-brand-lime/20 flex items-center justify-center text-primary dark:text-brand-lime">
                    <span className="material-symbols-outlined text-[18px]">
                      edit_square
                    </span>
                  </div>
                  <div className="absolute top-8 left-1/2 w-px h-10 bg-slate-100 dark:bg-slate-800"></div>
                </div>
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-primary dark:text-slate-100">
                      Portfolio
                    </span>{" "}
                    "Bridge X" project updated
                  </p>
                  <p className="text-xs font-medium text-slate-400 mt-1 italic">
                    New imagery uploaded • 5h ago
                  </p>
                </div>
              </div>
              {/* <!-- Activity Item 4 --> */}
              <div className="flex gap-4">
                <div className="size-8 rounded-full bg-primary/10 dark:bg-brand-lime/20 flex items-center justify-center text-primary dark:text-brand-lime">
                  <span className="material-symbols-outlined text-[18px]">
                    upload_file
                  </span>
                </div>
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-primary dark:text-slate-100">
                      System
                    </span>{" "}
                    backup completed
                  </p>
                  <p className="text-xs font-medium text-slate-400 mt-1 italic">
                    Database &amp; Storage • Yesterday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Quick Links & Actions --> */}
        <div className="bg-primary rounded-xl p-8 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-black mb-2 tracking-tight">
                Need to update content?
              </h2>
              <p className="text-brand-lime font-medium opacity-90 max-w-md">
                Jump directly to the management sections to edit your site's
                public-facing information.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-lime text-primary px-6 py-2.5 rounded-lg font-black text-sm hover:scale-105 transition-transform flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  add_circle
                </span>{" "}
                Add New Post
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded-lg font-black text-sm hover:bg-white/20 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">
                  palette
                </span>{" "}
                Site Settings
              </button>
            </div>
          </div>
          {/* <!-- Decorative patterns --> */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-10 -mb-10 blur-2xl"></div>
        </div>
      </div>
    </main>
  );
}
