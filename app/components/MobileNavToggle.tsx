"use client";

import { useRef } from "react";

export const MobileNavToggle = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openMenu = () => {
    dialogRef.current?.showModal();
  };

  const closeMenu = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="lg:hidden text-slate-300 hover:text-primary transition-colors"
        onClick={openMenu}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Navigation Dialog */}
      <dialog
        ref={dialogRef}
        className="font-manrope antialiased backdrop:bg-black/50 inset-0 w-full h-full max-w-none max-h-screen p-0 m-0 bg-patternnav text-white rounded-none open:flex open:flex-col"
      >
        {/* Header with Close Button */}
        <header className="flex items-center justify-between p-6 z-10 border-b border-white/10">
          <div className="flex items-center space-x-2" data-purpose="branding">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
              <span className="text-background-dark font-extrabold text-sm">
                LI
              </span>
            </div>
            <span className="text-lg font-extrabold tracking-tighter uppercase">
              Luso <span className="text-primary">Integrate</span>
            </span>
          </div>
          <button
            aria-label="Close Menu"
            className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            onClick={closeMenu}
          >
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </header>

        {/* Main Navigation Links */}
        <nav
          className="grow flex flex-col justify-center px-10 py-8 space-y-8 z-10"
          data-purpose="primary-navigation"
        >
          <a
            href="/"
            className="group flex flex-col hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <span className="text-primary font-bold uppercase text-sm">01</span>
            <span className="text-5xl font-extrabold tracking-tight">Home</span>
          </a>
          <a
            href="/about"
            className="group flex flex-col hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <span className="text-primary font-bold uppercase text-sm">02</span>
            <span className="text-5xl font-extrabold tracking-tight">
              About
            </span>
          </a>
          <a
            href="/services"
            className="group flex flex-col hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <span className="text-primary font-bold uppercase text-sm">03</span>
            <span className="text-5xl font-extrabold tracking-tight">
              Services
            </span>
          </a>
          <a
            href="/blog"
            className="group flex flex-col hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <span className="text-primary font-bold uppercase text-sm">04</span>
            <span className="text-5xl font-extrabold tracking-tight">Blog</span>
          </a>
          <a
            href="/pricing"
            className="group flex flex-col hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <span className="text-primary font-bold uppercase text-sm">05</span>
            <span className="text-5xl font-extrabold tracking-tight">
              Pricing
            </span>
          </a>
          <a
            href="/contact"
            className="group flex flex-col hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <span className="text-primary font-bold uppercase text-sm">06</span>
            <span className="text-5xl font-extrabold tracking-tight">
              Contact
            </span>
          </a>
        </nav>

        {/* Footer Section */}
        <footer
          className="p-10 space-y-10 z-10 border-t border-white/10"
          data-purpose="secondary-navigation"
        >
          <section
            className="grid grid-cols-1 gap-4"
            data-purpose="quick-contact"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-bold">
              Quick Contact
            </p>
            <div className="space-y-1">
              <a
                className="block text-lg font-medium opacity-80 hover:opacity-100 transition-opacity"
                href="mailto:hello@lusointegrate.com"
              >
                hello@lusointegrate.com
              </a>
              <a
                className="block text-lg font-medium opacity-80 hover:opacity-100 transition-opacity"
                href="tel:+1234567890"
              >
                +1 (234) 567 890
              </a>
            </div>
          </section>
          <section
            className="flex flex-col space-y-8"
            data-purpose="social-and-cta"
          >
            <div className="flex items-center space-x-6">
              <a
                aria-label="LinkedIn"
                className="text-primary hover:text-white transition-colors"
                href="#"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                aria-label="X (Twitter)"
                className="text-primary hover:text-white transition-colors"
                href="#"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                className="text-primary hover:text-white transition-colors"
                href="#"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <div className="pt-4">
              <button
                className="w-full py-5 bg-primary text-background-dark font-extrabold text-lg rounded-lg hover:brightness-105 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
                data-purpose="cta-button"
              >
                Get a Quote
              </button>
            </div>
          </section>
        </footer>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -right-10 w-40 h-px bg-primary/20 rotate-45" />
        <div className="absolute bottom-1/3 -left-10 w-60 h-px bg-primary/10 -rotate-12" />
      </dialog>
    </>
  );
};
