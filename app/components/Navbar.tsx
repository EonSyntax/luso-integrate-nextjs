import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="cursor-pointer bg-primary hover:bg-primary/90 px-4 py-2 rounded-full font-bold transition-all transform active:scale-95 shadow-lg shadow-primary/20">
          <span className="text-2xl font-black text-white tracking-tight">
            LUSO <span className="text-background-dark">INTEGRATE</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 bg-background-dark/15 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
          <Link
            className="text-sm font-medium uppercase text-white dark:text-slate-300 hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium uppercase text-white dark:text-slate-300 hover:text-primary transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm uppercase font-medium text-white dark:text-slate-300 hover:text-primary transition-colors"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm uppercase font-medium text-white dark:text-slate-300 hover:text-primary transition-colors"
            href="/blog"
          >
            Blog
          </Link>
          <Link className="text-sm uppercase font-medium text-primary" href="/contact">
            Contact
          </Link>
        </nav>
        <div>
        <Link href="/pricing" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform active:scale-95 shadow-lg shadow-primary/20">
          Get a Quote
        </Link>
        <ThemeSwitcher />
        </div>
      </header>
    </>
  );
};
