import Link from "next/link";
import React from "react";

export const AdminSideBar = () => {
  return (
    <aside className="w-64 bg-background-dark flex flex-col shrink-0 border-r border-slate-200 dark:border-slate-800">
      <div className="p-6 flex items-center gap-3">
        <Link href="/" className="bg-brand-light rounded-lg size-10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">hub</span>
        </Link>
        <div>
          <Link href="/" className="text-white text-base font-bold leading-none">
            LUSO INTEGRATE
          </Link>
          <p className="text-slate-400 text-xs mt-1">Admin Management</p>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-2 mt-4">
        <Link
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          href="/admin/"
        >
          <span className="material-symbols-outlined text-xl">description</span>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <Link
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white"
          href="/admin/blog"
        >
          <span className="material-symbols-outlined text-xl">description</span>
          <span className="text-sm font-medium">Blog Posts</span>
        </Link>
        <Link
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          href="/admin/portfolio"
        >
          <span className="material-symbols-outlined text-xl">
            folder_shared
          </span>
          <span className="text-sm font-medium">Portfolio</span>
        </Link>
        <Link
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          href="/admin/clients"
        >
          <span className="material-symbols-outlined text-xl">
            branding_watermark
          </span>
          <span className="text-sm font-medium">Client Logos</span>
        </Link>
        <Link
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          href="/admin/testimonial"
        >
          <span className="material-symbols-outlined text-xl">chat_bubble</span>
          <span className="text-sm font-medium">Testimonials</span>
        </Link>
      </nav>
      <div className="p-4 mt-auto border-t border-slate-800 space-y-1">
        <a
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-xl">settings</span>
          <span className="text-sm font-medium">Settings</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-950 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-xl">logout</span>
          <span className="text-sm font-medium">Logout</span>
        </a>
      </div>
    </aside>
  );
};
