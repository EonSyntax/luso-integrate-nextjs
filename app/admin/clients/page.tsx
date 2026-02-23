import Link from "next/link";
import React from "react";

export default function AdminClientLogo() {
  return (
    <main className="flex-1">
      {/* <!-- Header Section --> */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/admin" className="text-background-dark hover:text-primary">Admin</Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-primary dark:text-primary">Manage Logos</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="Search by client name..."
                type="text"
              />
            </div>
            <Link href="/admin/clients/new-client" className="bg-primary hover:bg-primary/90 text-background-dark font-bold text-sm px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow-sm">
              <span className="material-symbols-outlined text-lg">
                add_circle
              </span>
              Add New Logo
            </Link>
          </div>
        </div>
      </header>
      {/* <!-- Page Title & Subtext --> */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-background-dark dark:text-white tracking-tight">
            Manage Client Logos
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
            Maintain and organize the visual directory of your client
            partnerships. Changes made here will reflect instantly on the public
            website's partner showcase.
          </p>
        </div>
        {/* <!-- Tabs/Filters --> */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto scrollbar-hide">
          <button className="px-6 py-4 text-sm font-bold text-background-dark border-b-2 border-primary whitespace-nowrap">
            All Active Logos (24)
          </button>
          <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-background-dark transition-colors whitespace-nowrap">
            Recently Added
          </button>
          <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-background-dark transition-colors whitespace-nowrap">
            By Industry
          </button>
          <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-background-dark transition-colors whitespace-nowrap">
            Archived
          </button>
        </div>
        {/* <!-- Logo Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* <!-- Card 1 --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-40 flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
              <img
                alt="Client Logo"
                className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Corporate minimalist logo for Global Logistics Corp"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOi5ZTyH2A6EDUowxEUrpJjF8D_mSXPAvcrTKna5peGR8-s4954dXs3r5X1c8EQOP-RCCn6Pf4YTuAyC45g5CP5dd-LLPR3d0_FT9a9CCKPzQ-588Rjos4-mwjVmlotzuYqY7kADA7SyFsLWlh7_RYgp7PYiEQjAUWq-5gyyXW17GjMPsxQq-rDdSNsLK71-S-bXioHIS4LfgFqt58y03-adj_fClEew24sju_qUuxdSS8kwthUds4XwR2DKbX2grE1NRgyuR631qN"
              />
              <div className="absolute inset-0 bg-background-dark/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                <button className="size-10 bg-primary text-background-dark rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    edit
                  </span>
                </button>
                <button className="size-10 bg-white text-rose-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    delete
                  </span>
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-background-dark dark:text-white font-bold text-base truncate">
                Global Logistics Corp
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Added Oct 12, 2023
                </span>
                <span className="px-2 py-0.5 bg-primary/10 text-background-dark text-[10px] font-bold rounded uppercase">
                  Logistics
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-40 flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
              <img
                alt="Client Logo"
                className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Modern tech logo for Nexa Solutions"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_gKOEeaadvvBb4DuP_PXWus-A5bc80oatTBoBVrW7PF6WzyRxf03cVKcFqqrl73WnmZ4zafRcv7G6AJRkWRrmGcVD8naXPg-gFyZzWD0dWBMDVc0BWk3HIGp8hqtrtY-_4_MhyaHFAmxUaEN1z6qQdm6VgqmJo3CDJobKqYWiMdUMGxdy712-pjmC_CFpJEnYeOHK-0K2Bvz2QA8Hiytsuf4hh-8gXGz4fEApZcX2CIalsEMydLTDDIKfocs8AhqcsyZreYiwEQTD"
              />
              <div className="absolute inset-0 bg-background-dark/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                <button className="size-10 bg-primary text-background-dark rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    edit
                  </span>
                </button>
                <button className="size-10 bg-white text-rose-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    delete
                  </span>
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-background-dark dark:text-white font-bold text-base truncate">
                Nexa Solutions
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Added Sep 28, 2023
                </span>
                <span className="px-2 py-0.5 bg-primary/10 text-background-dark text-[10px] font-bold rounded uppercase">
                  Software
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-40 flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
              <img
                alt="Client Logo"
                className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Healthcare company logo for VitalMed"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRU3KkOxG9h5A7Cz6LjDJodVSWufVufbQtDP0wWxEBwqiC9reyMZ59L6S8N2nfWUTeQhieEZHXGf-AaaTR1kmc_UztFvv4AtYCkk_VYkuJErFDBa_KPOq_88_tGdN00C-VWG-cNhQPEXbxpKqZvXcrSuaro010oisCe7f2nLg9qC0AlbQkkD4CNFDTr7bxeLRSSfI_8iOTTTr3CwsOCgMhb38oyxyr6oM3-QW6Cq1Ft9DZFyeX9BkfZyXH0dp-jf79aBtbd9U6puUM"
              />
              <div className="absolute inset-0 bg-background-dark/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                <button className="size-10 bg-primary text-background-dark rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    edit
                  </span>
                </button>
                <button className="size-10 bg-white text-rose-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    delete
                  </span>
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-background-dark dark:text-white font-bold text-base truncate">
                VitalMed Systems
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Added Aug 15, 2023
                </span>
                <span className="px-2 py-0.5 bg-primary/10 text-background-dark text-[10px] font-bold rounded uppercase">
                  Healthcare
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-40 flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
              <img
                alt="Client Logo"
                className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Industrial logo for SteelCraft Industries"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoj5cQXALtshpZBtLs6AYokwAjXXRmnMV3GNLuL_PzU0tOsDLWHdP3QkA7jXC2HLkh5AB2cmZixM_PhirKsN0_ND_GnvykrrBDIaIJV2PIQ6czt0q-AvwIlYaUcEmGiDwPzCR0dhmYAnXY0vehztD-L3H7l_bUvCz-DxLo27zwm2HXitu-MQcSjSjIcZDFED5WYPlPuqQnYn5Og2foboprsQKSZTT9Gr06QiuCtPmCWxXifSXx60WLqcJxxblSzgLmiiGtyOfu0cI9"
              />
              <div className="absolute inset-0 bg-background-dark/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                <button className="size-10 bg-primary text-background-dark rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    edit
                  </span>
                </button>
                <button className="size-10 bg-white text-rose-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    delete
                  </span>
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-background-dark dark:text-white font-bold text-base truncate">
                SteelCraft Industries
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Added Jul 04, 2023
                </span>
                <span className="px-2 py-0.5 bg-primary/10 text-background-dark text-[10px] font-bold rounded uppercase">
                  Manufacturing
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Card 5 (Different aspect ratio simulation) --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-40 flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
              <img
                alt="Client Logo"
                className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Square brand logo for Urban Green"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEK6pE1Yxa-Lekhtw5QhRfdyZSEjeM10Mug3ncMEzPlXnddFRZfRJfkvGBguXuunjf6mbhBeBEHTOH0IrTAzU2LAfpgraJKoo798p0fCKdTatOa9ZHFqONUWL6XzYu16s1t4thTa-2OshfM5YrNlCxCRIjLV8-Z6x_a2oegKM8roNmS-OYk20K2nV45MmzKPdiYA9TnJNIexStN4F0hvkVCPwUygeRLcpbWiuNEPsUXt4_P664xOcyiux8Ssovtu9G-HERZ3ugYcP2"
              />
              <div className="absolute inset-0 bg-background-dark/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                <button className="size-10 bg-primary text-background-dark rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    edit
                  </span>
                </button>
                <button className="size-10 bg-white text-rose-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    delete
                  </span>
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-background-dark dark:text-white font-bold text-base truncate">
                Urban Green Initiatives
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Added Jun 22, 2023
                </span>
                <span className="px-2 py-0.5 bg-primary/10 text-background-dark text-[10px] font-bold rounded uppercase">
                  NGO
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Add New Placeholder --> */}
          <Link href="/admin/clients/new-client" className="bg-slate-50 dark:bg-slate-800/20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl h-full min-h-55 flex flex-col items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all group">
            <span className="material-symbols-outlined text-4xl mb-2 group-hover:scale-110 transition-transform">
              add_circle
            </span>
            <span className="text-sm font-bold">Add New Logo</span>
          </Link>
        </div>
        {/* <!-- Footer Info --> */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-medium">
            Showing 5 of 24 active partner logos
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-background-dark text-white rounded-lg text-xs font-bold hover:bg-background-dark/90 transition-colors">
              Next Page
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Notification Toast (Static Example) --> */}
      <div className="fixed bottom-8 right-8 flex items-center gap-3 bg-background-dark text-white px-6 py-4 rounded-xl shadow-2xl border-l-4 border-primary animate-bounce-short">
        <span className="material-symbols-outlined text-primary">
          check_circle
        </span>
        <div className="flex flex-col">
          <p className="text-sm font-bold leading-none">Changes Saved</p>
          <p className="text-[10px] text-white/60 mt-1">
            Client logo library updated successfully.
          </p>
        </div>
        <button className="ml-4 text-white/40 hover:text-white">
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      </div>
    </main>
  );
}
