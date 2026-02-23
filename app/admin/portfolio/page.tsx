import React from 'react'

export default function AdminPortfolioPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
        <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Manage Portfolio
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Oversee and update your creative project inventory.
            </p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">add_circle</span>
            <span>Add New Project</span>
          </button>
        </header>
        {/* <!-- Filters & Search --> */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
          <div className="md:col-span-8 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-brand-deep/50 border border-slate-200 dark:border-brand-lime/10 rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none transition-all dark:text-white"
              placeholder="Search by project title, client or tag..."
              type="text"
            />
          </div>
          <div className="md:col-span-4 flex gap-2">
            <button className="flex-1 bg-white dark:bg-brand-deep/50 border border-slate-200 dark:border-brand-lime/10 rounded-xl px-4 py-3 flex items-center justify-between text-slate-600 dark:text-slate-300 font-medium">
              <span>All Categories</span>
              <span className="material-symbols-outlined">expand_more</span>
            </button>
            <button className="aspect-square bg-white dark:bg-brand-deep/50 border border-slate-200 dark:border-brand-lime/10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
        {/* <!-- Portfolio Inventory Table --> */}
        <div className="bg-white dark:bg-brand-deep/30 rounded-xl border border-slate-200 dark:border-brand-lime/10 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-brand-deep/60 border-bottom border-slate-200 dark:border-brand-lime/10">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-brand-lime/70">
                    Project Title
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-brand-lime/70">
                    Category
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-brand-lime/70">
                    Client Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-brand-lime/70">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-brand-lime/70 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-brand-lime/5">
                {/* <!-- Row 1 --> */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-brand-lime/5 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-12 rounded-lg bg-slate-200 dark:bg-brand-deep shrink-0 bg-cover bg-center"
                        data-alt="Eco branding project thumbnail preview"
                        style={{
                          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJSb3J0hmf4kogHqHOfthDk6rDo8hQ8A4aiiYTFxmZAixW3_pNA9SYyWgU4qftSdLnB2ei9KjZOu8xkHyaSL7BEH5Dqm23Aov0Ja37z1RfdSWQ6DTNZIwl5ocPPGfGLD61MBSqG1TDyYDPb7vZZtUnxLRvwVicpHsV-Jsi338T4nsal1zJpxz37MVcZ2ypAZW09rjNFv9zOrq_U4bMXwiU-FEBScdXbe0Rslst9pKrKL0ENjuPV_pAt_QMWvxaNlCEtNZiDioOweSK')`,
                        }}
                      ></div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">
                          Eco-Friendly Branding
                        </p>
                        <p className="text-xs text-slate-400">
                          Updated 2 days ago
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-lime/10 text-brand-lime border border-brand-lime/20">
                      Branding
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-300 font-medium">
                    GreenTerra Corp
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                      <span className="size-2 rounded-full bg-emerald-500"></span>
                      Published
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-brand-lime/10 rounded-lg text-slate-400 hover:text-brand-lime">
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500">
                        <span className="material-symbols-outlined text-xl">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 2 --> */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-brand-lime/5 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-12 rounded-lg bg-slate-200 dark:bg-brand-deep shrink-0 bg-cover bg-center"
                        data-alt="Corporate website project thumbnail preview"
                        style={{
                          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlTRyA4P1ElAHXH6TGM6MniMwN4TBr5A5o2IKRW3skQH-pH93aaEx00j-XAuxDqsTVDV66dEIc8PLN0tsbTrspsSNmBUtMGGBtqwzKr1I_j63z8qARY5mcOKqXqvnMMDJG8wnNKQ009romZkt7QzbZSFABYplajNl3kB-pICrUBBaNqUHEos4O2jkCTlxka0r-ci3fg-tMXSYCVAU4FWCeL93rQ_X6NV1n0TO4Dgu2af9r68wVbZrW9FXeW5fLHR85dAl_Ej-PBVYH')`,
                        }}
                      ></div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">
                          Corporate Website
                        </p>
                        <p className="text-xs text-slate-400">
                          Updated 5 hours ago
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Development
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-300 font-medium">
                    TechFlow Solutions
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                      In Progress
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-brand-lime/10 rounded-lg text-slate-400 hover:text-brand-lime">
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500">
                        <span className="material-symbols-outlined text-xl">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 3 --> */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-brand-lime/5 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-12 rounded-lg bg-slate-200 dark:bg-brand-deep shrink-0 bg-cover bg-center"
                        data-alt="Social media kit project thumbnail preview"
                        style={{
                          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUTRxUq7U5zcmCqtx_gvVv3Hvj0sLPdIOEBN-NoB7JKGrSK-wuD_kgv610H651os9ABY65WG1wAIyXTfkACZFAKzN7E3Bl-E8UnLCzRw91jg8V_n0T6gpXRIORA6WOcGo65ysZMxZqMSnRpDBGY7sf7u0f9TrwvlwAEuDiazmV40fwyJu54HsLj__dxCC50_-HPRw61mX1RQS-db3x4MVhDxyiwmJK4lK5ueo1ztqEIxUzx5ZJPSiaAHnInLWXL-ChBLr25xRqHl5h')`,
                        }}
                      ></div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">
                          Social Media Kit
                        </p>
                        <p className="text-xs text-slate-400">
                          Updated yesterday
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Creative
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-300 font-medium">
                    Luna Coffee
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                      <span className="size-2 rounded-full bg-slate-400"></span>
                      Hidden
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-brand-lime/10 rounded-lg text-slate-400 hover:text-brand-lime">
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500">
                        <span className="material-symbols-outlined text-xl">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 4 --> */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-brand-lime/5 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-12 rounded-lg bg-slate-200 dark:bg-brand-deep shrink-0 bg-cover bg-center"
                        data-alt="Mobile app UI project thumbnail preview"
                        style={{
                          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGO12Sf1afSIYR0UbJqTorDdncmiY-amF4xm910yT5WT7OozplVDcJvnsxVZCyIOND3hy6A26zkHAJk4t9zQ6AfXVh6aFz24TMatJqQ_KfHO2zvr7AgVi8oV-ciPZghY6jTeilRGSFVRhZu9H21W403yTQl8O_6SbF3586EskWw_ir1T2I2wp7b5f7KSjsUjtP2AH8yF0AlqMs7KQ2VIEMns-zzVZFqcCnz28skfnoT4LQL6QTYdWDm1B9pxiUFf1C2_Ze6m2XcDcA')`,
                        }}
                      ></div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">
                          SwiftPay App UI
                        </p>
                        <p className="text-xs text-slate-400">
                          Updated 1 week ago
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Development
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-600 dark:text-slate-300 font-medium">
                    SwiftPay
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                      <span className="size-2 rounded-full bg-emerald-500"></span>
                      Published
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-brand-lime/10 rounded-lg text-slate-400 hover:text-brand-lime">
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500">
                        <span className="material-symbols-outlined text-xl">
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
          <div className="px-6 py-4 bg-slate-50 dark:bg-brand-deep/60 border-t border-slate-200 dark:border-brand-lime/10 flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                1
              </span>{" "}
              to{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                4
              </span>{" "}
              of{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                24
              </span>{" "}
              projects
            </p>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-lg border border-slate-200 dark:border-brand-lime/10 text-slate-400 hover:bg-white dark:hover:bg-brand-lime/10 disabled:opacity-50"
                disabled
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="px-3 py-1 rounded-lg bg-brand-lime text-brand-deep font-bold text-sm">
                1
              </button>
              <button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-brand-lime/10 text-slate-600 dark:text-slate-300 text-sm">
                2
              </button>
              <button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-brand-lime/10 text-slate-600 dark:text-slate-300 text-sm">
                3
              </button>
              <button className="p-2 rounded-lg border border-slate-200 dark:border-brand-lime/10 text-slate-400 hover:bg-white dark:hover:bg-brand-lime/10">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Summary Statistics (Bonus Section) --> */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-brand-deep/30 p-6 rounded-xl border border-slate-200 dark:border-brand-lime/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Total Projects
            </p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                24
              </h3>
              <span className="text-emerald-500 text-sm font-bold flex items-center">
                +4 this month
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-brand-deep/30 p-6 rounded-xl border border-slate-200 dark:border-brand-lime/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Active Clients
            </p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                18
              </h3>
              <span className="text-emerald-500 text-sm font-bold flex items-center">
                +2 this month
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-brand-deep/30 p-6 rounded-xl border border-slate-200 dark:border-brand-lime/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Completion Rate
            </p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                92%
              </h3>
              <span className="text-emerald-500 text-sm font-bold flex items-center">
                Excellent
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-brand-deep/30 p-6 rounded-xl border border-slate-200 dark:border-brand-lime/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Avg. Project Value
            </p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">
                $4.2k
              </h3>
              <span className="text-slate-400 text-sm font-bold">Stable</span>
            </div>
          </div>
        </div>
      </main>
  )
}
