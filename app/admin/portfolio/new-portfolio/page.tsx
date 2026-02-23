import React from "react";

export default function NewPortfolioPage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* <!-- Header --> */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <nav className="flex items-center text-sm gap-2 text-slate-500 dark:text-slate-400">
            <span>Admin</span>
            <span className="material-symbols-outlined text-base">
              chevron_right
            </span>
            <span>Projects</span>
            <span className="material-symbols-outlined text-base">
              chevron_right
            </span>
            <span className="text-slate-900 dark:text-white font-semibold">
              Add New Project
            </span>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <span className="material-symbols-outlined text-slate-400 absolute left-3 top-1/2 -translate-y-1/2">
              search
            </span>
            <input
              className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl pl-10 text-sm w-64 focus:ring-2 focus:ring-primary/50"
              placeholder="Search..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Admin user profile picture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6B-rZLXjCzk7-muIXApdCElmHte6kO-Mi4BJiHSA0gq0IoZ8e0pudwYlK9eWkYh8ILGQRpDhmIe6qv2CeR5Q7jKoEDhMNKd8STNCJVz03hRwvXIp0JTQCONIS9FpEo8CqvgIyDi57L9_G0DO-c4DT6Y_5W0Q6PuYmfVB4Rh2nJzeLqSdAlHbGNgQvOg0rE1PTfo9uzF5_VfpBRM-knY7u3_RU0Ct9z5ci-mc8Adb5-SaxrLsvq98_N9Ku4Jf9gwAIjX--zZ-sIg14"
              />
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Form Content --> */}
      <div className="p-8 max-w-6xl mx-auto w-full">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Create New Project
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Fill in the details below to showcase a new piece of work.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Save as Draft
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 transition-all">
              <span className="material-symbols-outlined text-base font-bold">
                send
              </span>
              Publish Project
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Left Column: Main Form --> */}
          <div className="lg:col-span-2 space-y-6">
            {/* <!-- Basic Info --> */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Project Title
                  </label>
                  <input
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary"
                    placeholder="e.g. Modern E-commerce Ecosystem"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Project Description
                  </label>
                  <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="bg-slate-50 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex gap-4">
                      <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">
                        format_bold
                      </span>
                      <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">
                        format_italic
                      </span>
                      <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">
                        format_list_bulleted
                      </span>
                      <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">
                        link
                      </span>
                      <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">
                        image
                      </span>
                    </div>
                    <textarea
                      className="w-full bg-transparent border-none focus:ring-0 p-4"
                      placeholder="Describe the project scope and vision..."
                      rows={6}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Project Impact Section --> */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-lime">
                  emoji_events
                </span>
                Impact Metrics
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    The Challenges
                  </label>
                  <textarea
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary text-sm"
                    placeholder="What obstacles were encountered?"
                    rows={3}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    The Solutions
                  </label>
                  <textarea
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary text-sm"
                    placeholder="How did LUSO solve these issues?"
                    rows={3}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    The Results
                  </label>
                  <textarea
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary text-sm"
                    placeholder="Concrete outcomes and client benefits..."
                    rows={3}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Right Column: Meta & Media --> */}
          <div className="space-y-6">
            {/* <!-- Metadata --> */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Client Name
                  </label>
                  <input
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:ring-primary focus:border-primary"
                    placeholder="Enter client/company"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Project Category
                  </label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:ring-primary focus:border-primary">
                    <option>Creative &amp; Visual Design</option>
                    <option>Development</option>
                    <option>Branding Success Moves</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <!-- Featured Image --> */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                Featured Image
              </label>
              <div className="upload-dash rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/20 cursor-pointer group transition-all">
                <span className="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                  add_photo_alternate
                </span>
                <p className="mt-2 text-xs font-medium text-slate-500 text-center">
                  Drag and drop or{" "}
                  <span className="text-primary font-bold">browse</span>
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  JPG, PNG, WEBP (Max 5MB)
                </p>
              </div>
            </div>
            {/* <!-- Gallery --> */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Project Gallery
                </label>
                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-slate-500">
                  Optional
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Project screenshot preview 1"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVFqV_gtqCqa4k62FXgFwyN90sUbl3Si3YbZgtXDj7NhU3t3gXAMpmMoKxpW6CxdvXBNiaD0zDhM9kXmLhhFN6Rxycdts8EsPbVGnx7rkeTVJRWwEudryMUotADz3xrbFDYJdA2UVot1ogeQtggjAgUX--u9ApdARGaNLX-WMteJe923c8kFlJUh5ugINGjTXZ1hWhFqKYiroxcXnLKA7vAyLeV3MJqswSjtzsDPjz_qAF3_JdLXhRF3gPzw1x1Zv1uOHG-RdSBOQP"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white text-sm cursor-pointer">
                      delete
                    </span>
                  </div>
                </div>
                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Project screenshot preview 2"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLzDmwS8ICPjzX7G5euqeXNpA6M52-WEoaxe39_vZawMYkeB59EleeGt4g6G5LjfGotUmeadYfY8zze738mwmACu9ChJvIFXzCAA4-qxvJkaVMmoY-5Nt1Mv-1hWSXaMhioLOiL42QwvkPGDYbNWDoiVsslymYcVyBe75pm4oEcWnMvIfGtaNMJQ9Trz4B-jpuuiLdAs7Bk-xVbNNpjRiCz0c4l8Emkg-EEZWdihC2EloqptIWOARcPNJjAyhnz5Ui3Xpca9xow-Ue"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white text-sm cursor-pointer">
                      delete
                    </span>
                  </div>
                </div>
                <button className="aspect-square border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-slate-400">
                    add
                  </span>
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center italic">
                Up to 6 images for the showcase carousel
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
