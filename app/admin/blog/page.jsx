import React from 'react'

export default function AdminBlogPage() {
  return (
    <main className="flex-1 flex flex-col min-w-0">
        {/* <!-- Header --> */}
        <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-6 flex-1">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Manage Blogs
            </h2>
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                search
              </span>
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400"
                placeholder="Search posts, authors, or tags..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right">
                <p className="text-sm font-semibold leading-none">
                  Alex Rivera
                </p>
                <p className="text-xs text-slate-500 mt-1">Super Admin</p>
              </div>
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-800">
                <img
                  className="size-full object-cover"
                  data-alt="Professional profile picture of admin"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdLOAJ6p5PfRGXZVfGgnWXcbsHN03v8kDujO4H_FcLl3JSaE_ml79MJD1iFzJ7I_-UdqP6Z5CIpppkCGMjbUvko5Qf5sYAv3_pFX4SaBTXFFzC-2MQpHCcyhzbSyhE2ra83Ini_hqR5e1_6oIR2mQv_jx_4Uso09Vaob4uHQukbqHnwP04C4tDfniVv7xbzz7jEqCwzf4VjXtyCs5tycyHe6c7f7eF1IvornWjHiUeleRmvtyj3yNpcEQf0F8qFzWQL3RzzvIh7jQW"
                />
              </div>
            </div>
          </div>
        </header>
        {/* <!-- Main View --> */}
        <div className="p-8 space-y-8 overflow-y-auto">
          {/* <!-- Quick Stats --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">article</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
                  +4.5%
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Total Posts
                </p>
                <h3 className="text-2xl font-bold mt-1">1,284</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="size-10 bg-brand-light/20 rounded-lg flex items-center justify-center text-background-dark dark:text-brand-light">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
                  +12.8%
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Total Views
                </p>
                <h3 className="text-2xl font-bold mt-1">45.2K</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="size-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-600">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-full">
                  0%
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Recent Comments
                </p>
                <h3 className="text-2xl font-bold mt-1">892</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="size-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600">
                  <span className="material-symbols-outlined">avg_time</span>
                </div>
                <span className="text-xs font-bold text-red-600 bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded-full">
                  -2.4%
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Avg. Read Time
                </p>
                <h3 className="text-2xl font-bold mt-1">4m 32s</h3>
              </div>
            </div>
          </div>
          {/* <!-- Table Section --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Blog Post Inventory
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Showing 10 of 1,284 results
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    filter_alt
                  </span>
                  Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined text-lg">add</span>
                  Add New Post
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Post Title
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Published Date
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {/* <!-- Row 1 --> */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 max-w-xs">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                          The Future of LUSO INTEGRATE: 2024 Roadmap
                        </span>
                        <span className="text-xs text-slate-500 mt-0.5 italic">
                          Technology, Integration
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-brand-light/30 flex items-center justify-center text-[10px] font-bold text-background-dark">
                          AR
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          Alex Rivera
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 24, 2023
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            edit
                          </span>
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Row 2 --> */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 max-w-xs">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                          Why Portfolio Strategy is Essential for Growth
                        </span>
                        <span className="text-xs text-slate-500 mt-0.5 italic">
                          Finance, Strategy
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">
                          MS
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          Maria Santos
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 21, 2023
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                        Draft
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            edit
                          </span>
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Row 3 --> */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 max-w-xs">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                          Client Success: Scaling to $10M ARR
                        </span>
                        <span className="text-xs text-slate-500 mt-0.5 italic">
                          Case Study
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-brand-light/30 flex items-center justify-center text-[10px] font-bold text-background-dark">
                          AR
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          Alex Rivera
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 15, 2023
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            edit
                          </span>
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- Row 4 --> */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 max-w-xs">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                          Top 5 Integration Patterns for 2024
                        </span>
                        <span className="text-xs text-slate-500 mt-0.5 italic">
                          Development
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-brand-light/30 flex items-center justify-center text-[10px] font-bold text-background-dark">
                          AR
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          Alex Rivera
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 12, 2023
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                        Archived
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            edit
                          </span>
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                className="px-4 py-2 text-sm font-medium text-slate-500 bg-slate-50 dark:bg-slate-800 rounded-lg hover:text-slate-700 dark:hover:text-slate-200 disabled:opacity-50"
                disabled={true}
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                <button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">
                  1
                </button>
                <button className="size-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 text-sm font-medium">
                  2
                </button>
                <button className="size-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 text-sm font-medium">
                  3
                </button>
                <span className="px-2 text-slate-400">...</span>
                <button className="size-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 text-sm font-medium">
                  129
                </button>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-slate-500 bg-slate-50 dark:bg-slate-800 rounded-lg hover:text-slate-700 dark:hover:text-slate-200">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
  )
}
