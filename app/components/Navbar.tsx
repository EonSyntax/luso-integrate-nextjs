import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed font-inter top-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary flex items-center">
            <span className="material-symbols-outlined text-4xl font-bold">
              account_tree
            </span>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase text-primary">
            LUSO INTEGRATE
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-10">
          <Link
            className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="hidden md:block bg-primary hover:bg-primary/90 px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform active:scale-95"
            href="/pricing"
          >
            Get a Quote
          </Link>
          <button className="lg:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
