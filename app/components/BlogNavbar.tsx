import Link from "next/link";
import React from "react";

export const BlogNavbar = () => {
  return (
    <header className="fixed top-0 z-50 font-inter w-full bg-white/80 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-background-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl font-bold">
              account_tree
            </span>
            <span className="text-background-dark dark:text-white text-xl font-black tracking-tight">
              LUSO <span className="text-primary">INTEGRATE</span>
            </span>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              href="/"
            >
              Home
            </a>
            <a
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              href="#"
            >
              Solutions
            </a>
            <a
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              href="#"
            >
              Case Studies
            </a>
            <a className="text-sm font-semibold text-primary" href="#">
              Insights
            </a>
            <Link
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              href="/about"
            >
              About Us
            </Link>
          </nav>
          {/* Search & CTA */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="hidden sm:flex bg-background-dark dark:bg-brand-accent dark:text-background-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-sm">
              Contact Us
            </button>
            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-brand-lime overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Small profile portrait of a professional man"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvNg4-x2yXwnUXH2CPkg3orv_dnUUZuPKNENtpIXKauxXWWnGMmiWefRaKY2OpueTHq1gVCkJMdw-bLLuI0UY76zICwVoLx-nbS16235QTj5Reyvxzu8FUIjEeyc9jxMfVLySQhYliRxuLR5C2k7PoIxKTwJ7OqEtLkjRqUQv5sBaIqa3IA3aAweNo-v-eXyhaW5SUFaeRmm-SouwQfjDD1apdCNHH8UB6uI5pKn-N06pOMbXRWun6u8jdb3oYEkY7fd7scH3lCYhX"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
