import React from "react";

export default function TestimonialPage() {
  return (
    <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-light dark:bg-background-dark">
      {/* <!-- Top Header --> */}
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
              Testimonial
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
              placeholder="Search across testimonia...."
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
      {/* <!-- Scrollable Page Content --> */}
      <div className="flex-1 overflow-y-auto p-8">
        {/* <!-- Page Title & Actions --> */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              Manage Testimonials
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Review and moderate feedback from your clients.
            </p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">add</span>
            Add New Testimonial
          </button>
        </div>
        {/* <!-- Quick Stats --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-slate-200 dark:border-stone-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg text-blue-600">
                <span className="material-symbols-outlined">chat</span>
              </div>
              <span className="text-xs font-bold text-green-500 flex items-center">
                +4%{" "}
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Total Received
            </p>
            <h3 className="text-2xl font-black mt-1">1,284</h3>
          </div>
          <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-slate-200 dark:border-stone-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <span className="text-xs font-bold text-green-500 flex items-center">
                +2%{" "}
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Published
            </p>
            <h3 className="text-2xl font-black mt-1">1,142</h3>
          </div>
          <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-slate-200 dark:border-stone-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded-lg text-amber-600">
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400">Stable</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Hidden
            </p>
            <h3 className="text-2xl font-black mt-1">142</h3>
          </div>
          <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-slate-200 dark:border-stone-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-slate-50 dark:bg-stone-800 p-2 rounded-lg text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined">star</span>
              </div>
              <span className="text-xs font-bold text-green-500 flex items-center">
                +0.2{" "}
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Avg. Rating
            </p>
            <h3 className="text-2xl font-black mt-1">4.9</h3>
          </div>
        </div>
        {/* <!-- Main Table Section --> */}
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-slate-200 dark:border-stone-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-stone-800 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-slate-100 dark:bg-stone-800 text-slate-900 dark:text-slate-100 rounded-lg text-sm font-bold">
                All
              </button>
              <button className="px-4 py-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-stone-800 rounded-lg text-sm font-medium transition-colors">
                Published
              </button>
              <button className="px-4 py-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-stone-800 rounded-lg text-sm font-medium transition-colors">
                Hidden
              </button>
            </div>
            <div className="flex items-center gap-3">
              <select className="bg-slate-50 dark:bg-stone-800 border-none rounded-lg text-sm py-2 pl-3 pr-10 focus:ring-1 focus:ring-primary">
                <option>Most Recent</option>
                <option>Highest Rating</option>
                <option>Lowest Rating</option>
              </select>
              <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 dark:border-stone-700 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  filter_list
                </span>
                <span>Filters</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-stone-800/50 text-slate-500 dark:text-stone-400 text-xs uppercase font-bold tracking-wider">
                  <th className="px-6 py-4 w-12">
                    <input
                      className="rounded text-primary focus:ring-primary border-slate-300"
                      type="checkbox"
                    />
                  </th>
                  <th className="px-6 py-4">Client</th>
                  <th className="px-6 py-4">Rating</th>
                  <th className="px-6 py-4">Testimonial</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-stone-800">
                {/* <!-- Row 1 --> */}
                <tr className="hover:bg-slate-50 dark:hover:bg-stone-800/40 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      className="rounded text-primary focus:ring-primary border-slate-300"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
                        SJ
                      </div>
                      <div>
                        <p className="font-bold text-sm">Sarah Jenkins</p>
                        <p className="text-xs text-slate-500">
                          Global Tech Solutions
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex text-amber-400">
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs truncate">
                      "The interface is incredibly intuitive. Our team
                      productivity has soared since we implemented this..."
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 2 --> */}
                <tr className="hover:bg-slate-50 dark:hover:bg-stone-800/40 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      className="rounded text-primary focus:ring-primary border-slate-300"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="Portrait of a male client named Michael Chen"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMJkLaEsz1-6mZN4PVrth1Edj1xX7Lwfn2rIhV0QaWaipVjepxyYbuIjj7ztThzJgacDXSHfdDT6UE8yDx7-eAQSwvlE3Jz5QFR7fBcp1N0471RBP4Oz2B93rv7K-Ig-jB6CIQ9y7huh6AlG_uRBc4D1oe93Rc4WdE7F4kOEQERHlkCnL23Qk5DEvTtWvDVHdopEeyZQuL4eknnxwMCf2kDCkyycdbwStRVJubPbL8DQlpzVduRySwsVrTCdkOxIR-CfKP3iZYQoBs"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Michael Chen</p>
                        <p className="text-xs text-slate-500">
                          Creative Flow Studio
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex text-amber-400">
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs truncate">
                      "Best investment we've made this year. Customer support is
                      top-notch and always available..."
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 3 --> */}
                <tr className="hover:bg-slate-50 dark:hover:bg-stone-800/40 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      className="rounded text-primary focus:ring-primary border-slate-300"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-slate-100 dark:bg-stone-800 text-slate-400 flex items-center justify-center font-bold text-xs">
                        EL
                      </div>
                      <div>
                        <p className="font-bold text-sm">Emma Lundgren</p>
                        <p className="text-xs text-slate-500">
                          Nordic Design Co.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex text-amber-400">
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs truncate">
                      "A complete game changer for our agency. We handle double
                      the volume now with less stress."
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-500 dark:bg-stone-800 dark:text-stone-400">
                      Hidden
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 4 --> */}
                <tr className="hover:bg-slate-50 dark:hover:bg-stone-800/40 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      className="rounded text-primary focus:ring-primary border-slate-300"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="Portrait of client Johnathan Miller"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbktq6ZiZsQPeJpcLAHEZ56BNqcE-MiNaYjtz8GscpukPEI0o7yJyuizyq1lfJ7KKC_8cnI_I_6tHH7d1ePcrsM1WnAVxuAxr4LHAKYETZBcF7r6G3Ga4cF9IET3im5nWm9-5cAiRQQqBaWtZHLQ8z8KEn27cnmy-w5967zgW9BeMBkDWyUGqTyRGarXC6s92s6yMPbMEs-4LTDdSjSvl-RjI7Q3VVC4YootDGF_QCqLmR35yM7_bvDP3QLT4OLxPDW5S7Xd8jtedW"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Johnathan Miller</p>
                        <p className="text-xs text-slate-500">
                          Miller Logistics
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex text-amber-400">
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs truncate">
                      "The reporting features could be slightly more detailed,
                      but overall it's a solid tool for management."
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 5 --> */}
                <tr className="hover:bg-slate-50 dark:hover:bg-stone-800/40 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      className="rounded text-primary focus:ring-primary border-slate-300"
                      type="checkbox"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">
                        KA
                      </div>
                      <div>
                        <p className="font-bold text-sm">Kelly Anderson</p>
                        <p className="text-xs text-slate-500">
                          Bright Spark Marketing
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex text-amber-400">
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                      <span className="material-symbols-outlined fill text-[18px]">
                        star
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs truncate">
                      "Absolutely love the dark mode UI and how fast everything
                      loads. Highly recommended for any serious pro."
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- Pagination --> */}
          <div className="p-6 bg-slate-50 dark:bg-stone-800/20 border-t border-slate-100 dark:border-stone-800 flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing 1 to 5 of 1,284 results
            </p>
            <div className="flex items-center gap-2">
              <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-stone-700 text-slate-400 hover:bg-white dark:hover:bg-stone-800 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  chevron_left
                </span>
              </button>
              <button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
                1
              </button>
              <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-stone-700 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-stone-800 transition-colors text-sm">
                2
              </button>
              <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-stone-700 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-stone-800 transition-colors text-sm">
                3
              </button>
              <span className="text-slate-400 px-1">...</span>
              <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-stone-700 text-slate-400 hover:bg-white dark:hover:bg-stone-800 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
