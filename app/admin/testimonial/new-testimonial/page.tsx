import React from "react";

export default function NewTestimonialPage() {
  return (
    <main className="flex flex-1 flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <nav className="flex items-center text-sm gap-2 text-slate-500 dark:text-slate-400">
              <span>Admin</span>
              <span className="material-symbols-outlined text-base">
                chevron_right
              </span>
              <span>Testimonials</span>
              <span className="material-symbols-outlined text-base">
                chevron_right
              </span>
              <span className="text-slate-900 dark:text-white font-semibold">
                Add New Testimonial
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

        {/* <!-- Page Header --> */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Add New Testimonial
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Create a new client success story to showcase on your marketing
            site.
          </p>
        </div>
        {/* <!-- Main Form Card --> */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <form className="p-6 sm:p-8 space-y-6">
            {/* <!-- Client Details Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Client Name
                </label>
                <input
                  className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary transition-all p-3"
                  placeholder="e.g. Sarah Jenkins"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Company Name / Role
                </label>
                <input
                  className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary transition-all p-3"
                  placeholder="e.g. CEO at TechFlow"
                  type="text"
                />
              </div>
            </div>
            {/* <!-- Rating Selector --> */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Rating
              </label>
              <div className="flex items-center gap-1 text-primary">
                <button
                  className="material-symbols-outlined hover:scale-110 transition-transform"
                  type="button"
                >
                  star
                </button>
                <button
                  className="material-symbols-outlined hover:scale-110 transition-transform"
                  type="button"
                >
                  star
                </button>
                <button
                  className="material-symbols-outlined hover:scale-110 transition-transform"
                  type="button"
                >
                  star
                </button>
                <button
                  className="material-symbols-outlined hover:scale-110 transition-transform"
                  type="button"
                >
                  star
                </button>
                <button
                  className="material-symbols-outlined hover:scale-110 transition-transform"
                  type="button"
                >
                  star_half
                </button>
                <span className="ml-2 text-sm text-slate-500 font-medium">
                  (4.5 / 5)
                </span>
              </div>
            </div>
            {/* <!-- Testimonial Content --> */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Testimonial Content
              </label>
              <textarea
                className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary transition-all p-3 resize-none"
                placeholder="Share the client's experience and results here..."
                rows={5}
              ></textarea>
            </div>
            {/* <!-- Photo Upload Area --> */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Client Photo
              </label>
              <div className="flex items-center gap-6">
                <div className="size-20 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-slate-400 text-3xl">
                    person
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-lg">
                          upload
                        </span>
                        Upload Photo
                      </button>
                      <button
                        className="text-sm text-red-500 font-medium hover:underline"
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-xs text-slate-500">
                      JPG, PNG or WEBP. Max size 2MB.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Form Actions --> */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                className="px-6 py-3 rounded-lg text-sm font-bold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                type="button"
              >
                Cancel
              </button>
              <button
                className="px-8 py-3 rounded-lg text-sm font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                type="submit"
              >
                <span className="material-symbols-outlined text-lg">save</span>
                Save Testimonial
              </button>
            </div>
          </form>
        </div>
        {/* <!-- Visual Accent Footer --> */}
        <div className="mt-12 flex justify-center opacity-20 grayscale">
          <div className="flex gap-8">
            <div className="size-12 bg-accent-gold rounded-full"></div>
            <div className="size-12 bg-background-dark rounded-full"></div>
            <div className="size-12 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
