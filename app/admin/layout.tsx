import React from "react";
import { AdminSideBar } from "../components/AdminSideBar";



export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="flex min-h-screen overflow-hidden">
      <AdminSideBar />
      {children}
      </div>
    </div>
    </>
  );
}
