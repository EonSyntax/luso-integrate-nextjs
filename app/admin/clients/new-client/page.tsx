import Link from "next/link";
import React from "react";

export default function NewClientPage() {
  return (
    <main className="flex-1">
      {/* <!-- Header Bar --> */}
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link className="hover:text-primary transition-colors" href="/admin/clients">
            Clients
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-slate-900 dark:text-slate-100 font-medium">
            Add New Logo
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary"
              placeholder="Search..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-brand-forest overflow-hidden flex items-center justify-center border-2 border-slate-200 dark:border-slate-700">
              <img
                alt="User Profile"
                className="w-full h-full object-cover"
                data-alt="Professional user profile avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZKfgoP1h2k3-aoEjIc2Lg4SDxb6zivQmhCfRyXzwMXYUJLBtPqBXhFeVDtncRhOyyY62pIju1I1Efws8TNnTzSNfTL-YhpvKdeXUS7gD1ZiPHvUYbq1JMHng_95_hYAnbBQK4I4__QVNo__km679wNl2cEutthez4bf_xa7pT2hY0Ex_QQPdKx-J1fu_t87XMEk3SghzRjjmjDpHn4AuwvfD9Pl1XWLRPksrlvu2nti9Q0OEf4qGoPpJ0e-o61nnhmWdLYolxM0qc"
              />
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Page Body --> */}
      <div className="p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-brand-forest dark:text-white tracking-tight">
            Add New Client Logo
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Upload and manage client branding assets for the dashboard. Ensure
            assets follow brand guidelines.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <form className="p-8 space-y-6">
            {/* <!-- Basic Info Section --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="client-name"
                >
                  Client Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  id="client-name"
                  placeholder="Enter client company name"
                  required
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  htmlFor="website-url"
                >
                  Website URL{" "}
                  <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  id="website-url"
                  placeholder="https://example.com"
                  type="url"
                />
              </div>
            </div>
            {/* <!-- Logo Upload Section --> */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Client Logo
              </label>
              <div className="relative group border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-brand-lime dark:hover:border-brand-lime rounded-xl p-12 flex flex-col items-center justify-center transition-all bg-slate-50/50 dark:bg-slate-800/50">
                <input
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  id="logo-upload"
                  type="file"
                />
                <div className="w-16 h-16 bg-brand-lime/20 text-brand-lime rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">
                    cloud_upload
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-slate-900 dark:text-slate-100 font-semibold text-lg">
                    Click or drag and drop logo
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    SVG or high-resolution PNG supported
                  </p>
                </div>
              </div>
              {/* <!-- Upload Requirements --> */}
              <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-lg p-4 flex gap-4 mt-4">
                <span className="material-symbols-outlined text-primary">
                  info
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    Preferred Asset Requirements:
                  </p>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 grid grid-cols-2 gap-x-4 gap-y-1 list-disc list-inside">
                    <li>Formats: SVG, PNG (Transparent)</li>
                    <li>Minimum size: 400x400px</li>
                    <li>Maximum file size: 5MB</li>
                    <li>Aspect ratio: 1:1 or 4:3</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Action Buttons --> */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-4">
              <button
                className="px-6 py-3 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                type="button"
              >
                Cancel
              </button>
              <button
                className="px-8 py-3 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
                type="submit"
              >
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
                Save Logo
              </button>
            </div>
          </form>
        </div>
        {/* <!-- Footer Info --> */}
        <div className="mt-8 flex items-center justify-center gap-8 text-slate-400 dark:text-slate-500">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              verified_user
            </span>
            <span className="text-xs">Secure Upload</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              visibility
            </span>
            <span className="text-xs">Dashboard Preview</span>
          </div>
        </div>
      </div>
    </main>
  );
}
