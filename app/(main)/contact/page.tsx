export default function Contact() {
  return (
    <main className="grow max-w-7xl font-manrope mx-auto px-6 py-12 md:py-20 w-full">
      {/* Hero Section Title */}
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
          Let's build something <span className="text-primary">great</span>{" "}
          together.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
          Ready to take your business to the next level? Our global team is here
          to help you integrate, innovate, and scale.
        </p>
      </div>
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900/50 p-8 md:p-10 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input
                  className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Work Email
                </label>
                <input
                  className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400"
                  placeholder="john@company.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Company
              </label>
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400"
                placeholder="Luso Integrate Ltd"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-4 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 resize-none"
                placeholder="Tell us about your project requirements..."
                rows="5"
              ></textarea>
            </div>
            <button
              className="w-full bg-primary hover:bg-primary/90 text-background-dark font-black py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-lg"
              type="submit"
            >
              Send Message
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
        {/* Right Column: Office Details */}
        <div className="lg:col-span-5 space-y-10">
          {/* Offices */}
          <div className="space-y-8">
            {/* Nigeria Office */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">
                  location_on
                </span>
                <h3 className="text-xl font-extrabold uppercase tracking-wider">
                  Nigeria Office
                </h3>
              </div>
              <div className="pl-12 space-y-2">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  12A Admiralty Way, Lekki Phase 1,
                  <br />
                  Lagos State, Nigeria
                </p>
                <a
                  className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-semibold hover:text-primary transition-colors"
                  href="tel:+2348000000000"
                >
                  <span className="material-symbols-outlined text-sm">
                    call
                  </span>
                  +234 800 000 0000
                </a>
              </div>
            </div>
            {/* UK Office */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">
                  location_on
                </span>
                <h3 className="text-xl font-extrabold uppercase tracking-wider">
                  UK Office
                </h3>
              </div>
              <div className="pl-12 space-y-2">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  45 Canary Wharf, Business District,
                  <br />
                  London, E14 5AB, United Kingdom
                </p>
                <a
                  className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-semibold hover:text-primary transition-colors"
                  href="tel:+442000000000"
                >
                  <span className="material-symbols-outlined text-sm">
                    call
                  </span>
                  +44 20 0000 0000
                </a>
              </div>
            </div>
            {/* Official Email */}
            <div className="group border-t border-slate-200 dark:border-slate-800 pt-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">
                  mail
                </span>
                <h3 className="text-xl font-extrabold uppercase tracking-wider">
                  Direct Contact
                </h3>
              </div>
              <div className="pl-12">
                <a
                  className="text-lg font-bold text-slate-900 dark:text-slate-100 hover:text-primary underline decoration-primary decoration-2 underline-offset-4 transition-all"
                  href="mailto:hello@lusointegrate.com"
                >
                  hello@lusointegrate.com
                </a>
              </div>
            </div>
          </div>
          {/* Social Links */}
          <div className="pt-4">
            <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">
              Connect with us
            </p>
            <div className="flex gap-4">
              <a
                className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-dark transition-all"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-dark transition-all"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
              <a
                className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-dark transition-all"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a
                className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-dark transition-all"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="mt-20 rounded-2xl overflow-hidden h-100 border border-slate-100 dark:border-slate-800 shadow-lg relative group">
        <div
          className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse hidden"
          id="map-skeleton"
        ></div>
        <img
          alt="Global world map showing office locations in Nigeria and UK"
          className="w-full h-full object-cover"
          data-alt="Clean abstract map graphic with locations highlighted"
          data-location="Global Office Network"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA77ESa7Qbu0HNFwcVqMkHDPoMllMyx3myqQhmqodE6F-o7PkJD8czIXDDyxhX05mAAfOg7g2VdN0eC0ye3UibIsSnyjihHwcASt-sYiqiVY--cbCY3L8HzVWHhaFKpeGMU4LqFAS9FpXpzfxJldt9b7sBQ7DOHEUzM2QBQ1nl_dW7EKAiUAF-py9UyYuSJ2RcBRBE2ugM350rIPvnXyGkTKzlgUipVJHaHI8THVuqrPhXoXhgGequJVDaFDr0CkKGYkC9H0dNs"
        />
        {/* Stylized Overlays */}
        <div className="absolute top-[65%] left-[50%] -translate-y-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/30 rounded-full animate-ping"></div>
            <div className="w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-slate-900 shadow-xl relative z-10"></div>
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 px-3 py-1 rounded shadow-lg text-xs font-bold whitespace-nowrap">
              Nigeria HQ
            </div>
          </div>
        </div>
        <div className="absolute top-[12%] left-[47%] -translate-y-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/30 rounded-full animate-ping"></div>
            <div className="w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-slate-900 shadow-xl relative z-10"></div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 px-3 py-1 rounded shadow-lg text-xs font-bold whitespace-nowrap">
              UK HQ
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
